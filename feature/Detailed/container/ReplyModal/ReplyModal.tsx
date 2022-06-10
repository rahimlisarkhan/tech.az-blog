import Drawer from "shared/components/Drawer";
import NavbarMobile from "shared/components/NavbarMobile";
import { ReplyContent } from "../ReplyContent";

export const ReplyModal = ({ isOpen, onOpenClose }) => {
  return (
    <Drawer isOpen={isOpen} setIsOpen={onOpenClose}>
      <ReplyContent closeMenu={onOpenClose} />
    </Drawer>
  );
};
