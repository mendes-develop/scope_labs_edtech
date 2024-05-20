'use client'
import { useGetVideosQuery } from "@/lib/api/api";
import Link from "next/link";

interface VideoListProps {
  title: string;
  description: string;
  url: string;
  id: string
}

const VideoListComponent: React.FC<VideoListProps> = ({ title, description, url, id }) => {
  return (
    <Link href={`/video-detail/${id}?title=${title}&description${description}&url=${url}`} passHref>
      <div className='bg-white rounded-lg shadow-md p-4'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p className='text-gray-700 mb-4'>{description}</p>
        <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/HCOQmKTFzYY?si=882cdBshGaR8b9f-"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <p className='text-blue-500 hover:text-blue-700 pt-2'>
          Watch Video
        </p>
      </div>
    </Link>
  );
};

export const VideoList = () => {
  const { data } = useGetVideosQuery();

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full'>
      {data?.data.videos.map((video: any) => (
        <VideoListComponent
          key={video.id}
          description={video.description}
          title={video.title}
          url={video.video_url}
          id={video.id}
        />
      ))}
    </div>
  );
};
