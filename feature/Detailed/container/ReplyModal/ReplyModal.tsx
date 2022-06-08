import Drawer from "shared/components/Drawer";
import NavbarMobile from "shared/components/NavbarMobile";

export const ReplyModal = ({ isOpen, onOpenClose }) => {
  return (
    <Drawer isOpen={isOpen} setIsOpen={onOpenClose}>
      <NavbarMobile closeMenu={onOpenClose} />
    </Drawer>
  );
};
