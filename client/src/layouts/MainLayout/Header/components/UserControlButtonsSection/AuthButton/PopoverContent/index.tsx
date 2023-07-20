import { useAppDispatch, useAppSelector } from "@features/store";
import { logout } from "@features/user";
import { Button } from "@packages/uiKit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { FC, memo, useCallback } from "react";
import { StyledPopoverContent, StyledTitle } from "./styles";

interface PopoverContentProps {
  className?: string;
  style?: React.CSSProperties;
}

export const _PopoverContent: FC<PopoverContentProps> = (props) => {
  const { ...restProps } = props;

  const dispatch = useAppDispatch();
  const authUserInStore = useAppSelector((state) => state.auth.user);

  const logoutClickHandler = useCallback(async () => {
    try {
      await dispatch(logout()).unwrap();
    } catch (e) {
      if ((e as FetchBaseQueryError).status === 401) {
        throw new Error("Error while logout");
      }
    }
  }, [dispatch]);

  return (
    <StyledPopoverContent>
      <StyledTitle>{authUserInStore && authUserInStore.username}</StyledTitle>
      <Button variant="secondary" size="medium" onClick={logoutClickHandler}>
        Выйти
      </Button>
    </StyledPopoverContent>
  );
};

export const PopoverContent = memo(_PopoverContent);
