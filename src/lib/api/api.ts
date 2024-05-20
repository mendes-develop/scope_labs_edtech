import { useQuery, QueryClient, useMutation, MutateOptions } from "@tanstack/react-query"
import { createComment, createVideo, getVideoComment, getVideos } from "./axios"
import { getCookieUserId } from "@/cookies/cookies"
import { cookies } from "next/headers"

const queryClient = new QueryClient()

export const getVideosQuery = () => {
  return queryClient.prefetchQuery({
    queryKey: ['videos'],
    queryFn: getVideos,
  })
}

export const getVideoCommentsQuery = (videoId: string) => {
  return queryClient.prefetchQuery({
    queryKey: [`video-comments`, videoId],
    queryFn: () => getVideoComment(videoId),
  })
}

export const useGetVideosQuery = () => {
  // const appCookies =  getCookieUserId()
  return useQuery({
    queryKey: ['videos'],
    queryFn: getVideos,
  })
}

export const useGetVideoCommentsQuery = (videoId: string) => {
  return useQuery({
    queryKey: ['videos-comments', videoId],
    queryFn: () => getVideoComment(videoId),
    enabled: !!videoId,
  })
}


