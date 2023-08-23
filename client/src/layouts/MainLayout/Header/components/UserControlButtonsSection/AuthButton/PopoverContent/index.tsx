import { profileNavigationList } from "@features/profile/constants";
import { paths } from "@features/routering/paths";
import { useAppDispatch, useAppSelector } from "@features/store";
import { logout } from "@features/user";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { useRouter } from "next/router";
import { FC, memo, useCallback } from "react";
import {
  BottomContentContainer,
  CustomButton,
  MiddleContentContainer,
  StyledCloseIcon,
  StyledPopoverContent,
  StyledTitle,
  TopContentContainer,
} from "./styles";

interface PopoverContentProps {
  className?: string;
  style?: React.CSSProperties;

  onClose: () => void;
}

export const _PopoverContent: FC<PopoverContentProps> = (props) => {
  const { onClose, ...restProps } = props;

  const dispatch = useAppDispatch();
  const authUserInStore = useAppSelector((state) => state.auth.user);
  const router = useRouter();

  const logoutClickHandler = useCallback(async () => {
    try {
      await dispatch(logout()).unwrap();
      router.push(paths.root());
    } catch (e) {
      if ((e as FetchBaseQueryError).status === 401) {
        throw new Error("Error while logout");
      }
    }
  }, [dispatch, router]);

  const navigateHandler = useCallback(
    (href: string) => {
      router.push(href);
    },
    [router]
  );

  return (
    <StyledPopoverContent>
      <TopContentContainer>
        <StyledTitle>{authUserInStore && authUserInStore.username}</StyledTitle>
        <StyledCloseIcon onClick={onClose} size={20} />
      </TopContentContainer>
      <MiddleContentContainer>
        {profileNavigationList.map((item, index) => {
          return (
            <CustomButton
              key={index}
              onClick={() => {
                navigateHandler(item.link);
              }}
            >
              {item.label}
            </CustomButton>
          );
        })}
      </MiddleContentContainer>
      <BottomContentContainer>
        <CustomButton onClick={logoutClickHandler}>Выйти</CustomButton>
      </BottomContentContainer>
    </StyledPopoverContent>
  );
};

export const PopoverContent = memo(_PopoverContent);
