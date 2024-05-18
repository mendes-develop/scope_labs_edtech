import { useQuery, QueryClient } from "@tanstack/react-query"
import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://take-home-assessment-423502.uc.r.appspot.com/api",
})

const queryClient = new QueryClient()

const getVideos = () => {
  const user_id = "alex_mendes_barreto"
  return axiosInstance.get(`/videos?user_id=${user_id}`)
}
export const getVideoComment = async (videoId: string) => {
  const user_id = "alex_mendes_barreto"
  return await axiosInstance.get(`/videos/comments/?video_id=${videoId}`)
}

const videosQueryObj = {
  queryKey: ['videos'],
  queryFn: getVideos,
} as const

// const videoCommentsObj = {
//   queryKey: ['videos-comments'],
//   queryFn: getVideoComment,
// } as const

export const getVideosQuery = async () => {
  return await queryClient.prefetchQuery(videosQueryObj)
}

export const getVideoCommentsQuery = async (videoId: string) => {
  return await queryClient.prefetchQuery({
    queryKey: [`video-comments`, videoId],
    queryFn: () => getVideoComment(videoId),
  })
}

export const useGetVideosQuery = () => {
  return useQuery(videosQueryObj)
}

export const useGetVideoCommentsQuery = (videoId: string) => {
  return useQuery({
    queryKey: ['videos-comments'],
    queryFn: () => getVideoComment(videoId),
  })
}


