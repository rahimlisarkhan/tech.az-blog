import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "../IconButton";
import { Content, IconContent } from "./Modal.styled";
import { isAppMode } from "shared/utils/isAppMode";

export const TechModal = ({
  isOpen,
  close,
  children,
  isContent,
  contentWidth,
  contentHeight,
  isMode,
  isShowClose,
}: any) => {
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={isOpen}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <>
        {isContent ? (
          <Content
            width={contentWidth}
            height={contentHeight}
            mode={isAppMode(isMode)}
          >
            {children}
          </Content>
        ) : (
          <div>{children}</div>
        )}
        {isShowClose && (
          <IconContent>
            <IconButton color="whiteGray" size="30" onClick={close}>
              <CloseIcon />
            </IconButton>
          </IconContent>
        )}
      </>
    </Modal>
  );
};
