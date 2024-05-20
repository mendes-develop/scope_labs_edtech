import { useQuery } from "@tanstack/react-query"
import { getVideoComment, getVideos } from "./axios"
import { getQueryClient } from "@/provider"

const queryClient = getQueryClient()

export const getVideosQuery = () => {
  return queryClient.prefetchQuery({
    queryKey: ['videos'],
    queryFn: getVideos,
  })
}

export const getVideoCommentsQuery = async (videoId: string) => {
  return await queryClient.prefetchQuery({
    queryKey: [`video-comments`, videoId],
    queryFn: () => getVideoComment(videoId),
  })
}

export const useGetVideosQuery = (userId?: string | null) => {
  return useQuery({
    queryKey: ['videos'],
    queryFn: getVideos,
    enabled: !!userId,
  })
}

export const useGetVideoCommentsQuery = (videoId: string) => {
  return useQuery({
    queryKey: ['videos-comments', videoId],
    queryFn: () => getVideoComment(videoId),
    enabled: !!videoId,
  })
}


