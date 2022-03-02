import * as React from 'react';
import Drawer from '@mui/material/Drawer';

type Props = {
  isOpen: boolean,
  setIsOpen: () => void
  children: React.ReactNode
}

export const DrawerContent = ({ isOpen, setIsOpen, children }: Props) => {

  return (
    <Drawer
      anchor={"right"}
      open={isOpen}
      onClose={() => setIsOpen()}
    >
      {children}
    </Drawer>
  );
}
