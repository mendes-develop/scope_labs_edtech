import { useQuery, QueryClient, useMutation, MutateOptions } from "@tanstack/react-query"
import { createComment, createVideo, getVideoComment, getVideos } from "./axios"

const queryClient = new QueryClient()

const videosQueryObj = {
  queryKey: ['videos'],
  queryFn: getVideos,
} as const

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
    queryKey: ['videos-comments', videoId],
    queryFn: () => getVideoComment(videoId),
  })
}

// export const useCreateVideoMutation = () => {
//   return useMutation({
//     mutationFn: createVideo,
//     // onError,
//     // onSuccess
//   })
// }

// export const useCreateCommentMutation = () => {
//   return useMutation({
//     mutationFn: createComment,
//     // onError,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['/videos/comments'] })
//     }
//   })
// }


