'use client'
import { useGetVideosQuery } from "@/lib/api/api";
import { trimString, parseCookieString } from "@/utils";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import ReactPlayer from "react-player";
import { usePopoverState } from "../NavBar/Auth/hooks";
import { useSheetState } from "../CreateVideoSheet/hooks";
import { Button } from "@/components/ui/button";

export type VideoListProps = {
  title: string;
  description: string;
  url: string;
  id: string;
  num_comments: number;
}

const VideoListComponent: React.FC<VideoListProps> = ({ title, description, url, id, num_comments }) => {
  return (
    <Link href={`/video-detail/${id}?title=${title}&description=${description}&url=${url}`} passHref>
      <div className='bg-white rounded-lg p-2 border flex flex-col gap-1 h-48'>
        <ReactPlayer light url={url} width={"100%"} height={"100%"} style={{ borderRadius: '10px' }} />
        <p className='font-bold'>{trimString(title, 45)}</p>
        <p className='text-gray-700'>{trimString(description, 60)}</p>
        <p className='text-xs py-1'>
          {`${num_comments} comment${num_comments > 1 ? "s" : ""}`}
        </p>
      </div>
    </Link>
  );
};

export const VideoList = ({ userId }: {
  userId?: string;
}) => {
  const { data, isLoading } = useGetVideosQuery(userId);

  return (
    <>{!userId ? <SigninText />
      : !data?.data?.videos.length && !isLoading ?
        <AddVideoText />
        :
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full'>
          {data?.data.videos.map((video: any) => (
            <VideoListComponent
              key={video.id}
              description={video.description}
              title={video.title}
              url={video.video_url}
              id={video.id}
              num_comments={video.num_comments}
            />
          ))}
        </div>
    }</>
  );
};

const AddVideoText = () => {
  const { openSheet } = useSheetState()

  return (
    <div className="text-center h-64 content-end">
      <Button
        variant={"outline"}
        onClick={openSheet}
        className="text-lg text-primary"
      >
        {"Press '+' to start adding videos"}
      </Button>
    </div>
  )
}

const SigninText = () => {
  const { openPopover } = usePopoverState()

  return (
    <div className="text-center h-64 content-end">
      <Button
        variant={"outline"}
        onClick={openPopover}
        className="text-lg text-primary">
        Sign in to start creating videos
      </Button>
    </div>
  )
}
