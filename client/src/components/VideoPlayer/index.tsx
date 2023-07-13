import {
  StyledPlayButton,
  StyledPlayContainer,
  StyledPlayIcon,
  StyledPreviewImage,
  StyledTitle,
  StyledVideo,
  StyledVideoPlayer,
} from "./styles";

import { StaticImageData } from "next/image";
import React, { FC, memo, useRef, useState } from "react";

export interface VideoPlayerProps {
  className?: string;
  style?: React.CSSProperties;

  src: string;
  titleThumbnail: string;
  previewImage: string | StaticImageData;
  size?: "medium" | "large";
}

const _VideoPlayer: FC<VideoPlayerProps> = (props) => {
  const {
    src,
    size = "large",
    previewImage,
    titleThumbnail,
    ...restProps
  } = props;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isVisiblePreview, setVisiblePreview] = useState<boolean>(true);

  const playHandler = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      setVisiblePreview(false);
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <StyledVideoPlayer {...restProps}>
      <StyledPreviewImage
        src={previewImage}
        alt="video player preview image"
        onClick={playHandler}
        $isVisiblePreview={!isVisiblePreview}
      />
      <StyledPlayButton
        onClick={playHandler}
        $isVisible={!isPlaying}
        $size={size}
      >
        <StyledPlayContainer $size={size}>
          <StyledPlayIcon $size={size} />
        </StyledPlayContainer>
        <StyledTitle $size={size}>{titleThumbnail}</StyledTitle>
      </StyledPlayButton>

      <StyledVideo ref={videoRef} controls={isPlaying} onPause={handlePause}>
        <source src={src} type="video/mp4" />
      </StyledVideo>
    </StyledVideoPlayer>
  );
};

export const VideoPlayer = memo(_VideoPlayer);
