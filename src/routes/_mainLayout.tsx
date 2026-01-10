import DropDownMenu from "@/components/container/nav/dropDownNav";
import TopNav from "@/components/container/nav/topNav";
import Footer from "@/components/landingPage/footer";
import { useContext, useState } from "react";
import QuoteModal from "@/components/landingPage/quoteModal";
import { ModalContext } from "@/hooks/providers/modalProvider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setOpenMenu] = useState(false);
  const {
    isOpen: isQuoteModalOpen,
    close: closeQuoteModal,
    toggle: toggleQuoteModal,
    open: openQuoteModal,
  } = useContext(ModalContext);

  const handleMenu = () => {
    setOpenMenu(true);
    console.log("first");
  };

  const handleClose = () => {
    setOpenMenu(false);
    console.log("first");
  };

  return (
    <div>
      {isMenuOpen && <DropDownMenu handleClose={handleClose} />}

      <QuoteModal
        isOpen={isQuoteModalOpen}
        close={closeQuoteModal}
        toggle={toggleQuoteModal}
        open={openQuoteModal}
      />

      <TopNav handleMenu={handleMenu} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
