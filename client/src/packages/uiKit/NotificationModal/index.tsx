import {
  StyledAdditionContainer,
  StyledDescription,
  StyledImage,
  StyledLeftContent,
  StyledModalNotificationContainer,
} from "./styles";

import StarImageBackGround from "@assets/svgs/starImageWithBackground.svg?url";
import { Modal, ModalProps } from "@packages/uiKit";

import { FC, memo, ReactNode } from "react";

export interface NotificationModalProps extends ModalProps {
  description: string;

  addition?: ReactNode;
}

const _NotificationModal: FC<NotificationModalProps> = (props) => {
  const { title, addition, description, onClose, ...restProps } = props;

  return (
    <Modal
      title={title}
      width={560}
      onClose={onClose}
      isStretched={false}
      {...restProps}
    >
      <StyledModalNotificationContainer>
        <StyledLeftContent>
          <StyledDescription>{description}</StyledDescription>
          <StyledAdditionContainer>{addition}</StyledAdditionContainer>
        </StyledLeftContent>
        <StyledImage src={StarImageBackGround} alt="notification modal image" />
      </StyledModalNotificationContainer>
    </Modal>
  );
};

export const NotificationModal = memo(_NotificationModal);
