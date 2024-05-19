import { useRouter } from "next/router";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { getVideoCommentsQuery } from "@/lib/api/api";
import { CommentSection } from "@/components/base/CommentSection";
import { VideoFrame } from "@/components/base/VideoFrame";

export default async function VideoDetailPage({ params }: { params: { videoId: string } }) {
  const videosQueryClient = await getVideoCommentsQuery(params.videoId)
  console.log({ videosQueryClient })

  return (
    // <HydrationBoundary state={dehydrate(videosQueryClient)}>
    <div className='flex flex-col h-screen'>
      {/* Video Player */}
      <VideoFrame videoId={params.videoId} />

      {/* Comments Section */}
      <CommentSection />
      {/* </HydrationBoundary> */}
    </div>
  );
};
