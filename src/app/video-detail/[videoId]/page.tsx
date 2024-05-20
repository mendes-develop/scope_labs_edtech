import { useRouter } from "next/router";
import { getVideoCommentsQuery } from "@/lib/api/api";
import { CommentSection } from "@/components/base/CommentSection";
import { VideoFrame, VideoFrameProps } from "@/components/base/VideoFrame";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/provider";
import { getVideoComment } from "@/lib/api/axios";

type VideoDetailPageProps = {
  params: { videoId: string }
  searchParams: VideoFrameProps
}

export default async function VideoDetailPage({ params, searchParams }: VideoDetailPageProps) {

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <div className='flex flex-1 flex-col h-full'>
      <VideoFrame {...searchParams} />
      <CommentSection />
    </div>
    // </HydrationBoundary>
  );
};
