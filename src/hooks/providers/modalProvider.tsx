import { createContext, type ReactNode } from "react";
import { useDisclosure } from "../useDisclosure";

const ModalContext = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const {
    isOpen: isQuoteModalOpen,
    open: openQuoteModal,
    close: closeQuoteModal,
    toggle: toggleQuoteModal,
  } = useDisclosure();

  return (
    <ModalContext
      value={{
        isOpen: isQuoteModalOpen,
        open: openQuoteModal,
        close: closeQuoteModal,
        toggle: toggleQuoteModal,
      }}
    >
      {children}
    </ModalContext>
  );
};

export { ModalContext, ModalProvider };
