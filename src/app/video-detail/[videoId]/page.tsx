import { useRouter } from "next/router";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { getVideoCommentsQuery } from "@/lib/api";
import { CommentSection } from "@/components/base/CommentSection/CommentSection";

export default async function VideoDetailPage({ params }: { params: { videoId: string } }) {
  console.log({
    params
  })

  const videosQueryClient = await getVideoCommentsQuery(params.videoId)

  console.log({
    videosQueryClient
  })

  return (
    // <HydrationBoundary state={dehydrate(videosQueryClient)}>

    <div className='flex flex-col h-screen'>

      {/* Video Player */}
      <div className='w-full h-3/5 bg-black'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HCOQmKTFzYY?si=Mdq2IYvBQ3wEr3AY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      {/* Comments Section */}
      <CommentSection />
      {/* </HydrationBoundary> */}
    </div>
  );
};
