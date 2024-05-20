'use client'
import React from 'react';
import ReactPlayer from 'react-player'
import { VideoListProps } from '../VideoListComponent';

export type VideoFrameProps = Omit<VideoListProps, "num_comments" | "id">

export const VideoFrame: React.FC<VideoFrameProps> = ({
  title, description, url }) => {

  return (
    <>
      <div className='w-full h-3/6 px-2 py-2 rounded-sm'>
        <ReactPlayer width={"100%"} height={"100%"} controls url={url} />
      </div>
      <div className='px-4'>
        <h1 className="text-lg font-bold">
          {title}
        </h1>
        <p className="text-sm">
          {description}
        </p>
      </div>
    </>
  )
};
