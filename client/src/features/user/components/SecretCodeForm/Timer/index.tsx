import React, { FC, useEffect, useState } from "react";

import { Button } from "@packages/uiKit";
import { formatTime } from "@utils/timeFormat";
import {
  StyledClockIcon,
  StyledContainer,
  StyledTimeLeft,
  StyledTimer,
} from "./styles";

export interface TimerProps {
  className?: string;
  style?: React.CSSProperties;

  initTime: number;
}

export const Timer: FC<TimerProps> = (props) => {
  const { initTime = 120, ...restProps } = props;

  const [timeRemaining, setTimeRemaining] = useState(initTime); // 2 minutes in seconds

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const startTimer = () => {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    };

    if (timeRemaining > 0) {
      startTimer();
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timeRemaining]);

  const handleRestart = () => {
    setTimeRemaining(initTime); // Reset the timer to 2 minutes
  };

  return (
    <StyledTimer {...restProps}>
      {timeRemaining === 0 ? (
        <Button onClick={handleRestart} size="small" variant="outlined">
          Отправить код
        </Button>
      ) : (
        <StyledContainer>
          <StyledClockIcon />
          <StyledTimeLeft>{formatTime(timeRemaining)}</StyledTimeLeft>
        </StyledContainer>
      )}
    </StyledTimer>
  );
};
