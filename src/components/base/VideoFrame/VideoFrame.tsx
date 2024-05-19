import React from 'react';
// import YouTube from 'react-youtube';

interface VideoFrameProps {
  videoId: string;
}

export const VideoFrame: React.FC<VideoFrameProps> = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  // return <YouTube videoId={videoId} opts={opts} />;
  return (
    <div className='w-full h-3/5 bg-black'>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HCOQmKTFzYY?si=Mdq2IYvBQ3wEr3AY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
};
