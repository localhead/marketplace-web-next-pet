import { StyledYouTubePlayer } from './styles';

import React, { FC, memo } from 'react';

export interface YouTubePlayerProps {
  className?: string;
  style?: React.CSSProperties;
  src: string;
  title?: string;
}

const _YouTubePlayer: FC<YouTubePlayerProps> = (props) => {
  const { src, ...restProps } = props;

  return (
    <StyledYouTubePlayer
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      title="YouTube Player"
      {...restProps}
    />
  );
};

export const YouTubePlayer = memo(_YouTubePlayer);
