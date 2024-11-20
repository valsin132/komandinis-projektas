import BookingDateTime from "@/components/booking/BookingDateTime";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";

const Business = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <button onClick={openSidebar}>open sidebar</button>
      <Sidebar isOpen={isOpen} onClose={closeSidebar}>
        <BookingDateTime />
      </Sidebar>
    </>
  );
};

export default Business;
