/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState, useEffect, useRef} from 'react';

type VideoPlayerProps = {
  isPlaying: boolean;
  muted: boolean;
  src: string;
  poster: string;
  width: number;
  height: number;
}

function VideoPlayer({isPlaying, muted, src, poster, width, height}: VideoPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(muted);
  const [isActive, setIsActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [src]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video src={src} ref={videoRef} poster={poster} width={width} height={height} muted />
  );
}

export default VideoPlayer;
