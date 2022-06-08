import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import { Content } from "./Modal.styled";
import { IconButtonStyled } from "./Modal.styled";
import CloseIcon from "@mui/icons-material/Close";

export const TechModal = ({ isOpen, close, children }: any) => {
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
      <Content>
        {children}
        <IconButtonStyled onClick={close}>
          <CloseIcon />
        </IconButtonStyled>
      </Content>
    </Modal>
  );
};
