import axios from "axios"
import { randomNameSlug } from "../faker"
import { getCookieUserId } from "@/cookies/cookies"

type CreateVideoInput = {
  title: string
  description: string
  video_url: string
}

type CreateCommentInput = {
  video_id: string
  content: string
}

const axiosInstance = axios.create({
  baseURL: "https://take-home-assessment-423502.uc.r.appspot.com/api",
})

export const getVideos = async () => {
  const user_id = await getCookieUserId()
  return axiosInstance.get(`/videos?user_id=${user_id?.value}`)
}
export const getVideoComment = async (videoId: string) => {
  return await axiosInstance.get(`/videos/comments/?video_id=${videoId}`)
}

export const createVideo = async (data: CreateVideoInput) => {
  const user_id = await getCookieUserId()
  return await axiosInstance.post(
    `/videos`,
    { ...data, user_id: user_id?.value },
  )
}

export const createComment = (data: CreateCommentInput) => {
  const user_id = randomNameSlug()
  return axiosInstance.post(
    `/videos/comments`,
    { ...data, user_id },
  )
}