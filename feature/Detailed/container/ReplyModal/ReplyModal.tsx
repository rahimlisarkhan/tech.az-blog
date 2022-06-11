import Drawer from "ui/Drawer";
import { ReplyContent } from "../ReplyContent";

export const ReplyModal = ({ isOpen, onOpenClose }) => {
  return (
    <Drawer isOpen={isOpen} setIsOpen={onOpenClose}>
      <ReplyContent closeMenu={onOpenClose} />
    </Drawer>
  );
};
