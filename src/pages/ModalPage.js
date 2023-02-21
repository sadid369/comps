import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Incididunt consectetur do aute dolore sit proident. Voluptate dolore
        excepteur esse minim. Mollit qui ex deserunt ea in est qui ipsum eu
        adipisicing culpa excepteur id. Elit magna sit occaecat ipsum ex laborum
        est ipsum ut ex aliquip quis veniam. Est enim duis Lorem et magna
        officia eu ea consectetur proident excepteur veniam aliquip enim.
      </p>
      <p>
        Incididunt consectetur do aute dolore sit proident. Voluptate dolore
        excepteur esse minim. Mollit qui ex deserunt ea in est qui ipsum eu
        adipisicing culpa excepteur id. Elit magna sit occaecat ipsum ex laborum
        est ipsum ut ex aliquip quis veniam. Est enim duis Lorem et magna
        officia eu ea consectetur proident excepteur veniam aliquip enim.
      </p>
      <p>
        Incididunt consectetur do aute dolore sit proident. Voluptate dolore
        excepteur esse minim. Mollit qui ex deserunt ea in est qui ipsum eu
        adipisicing culpa excepteur id. Elit magna sit occaecat ipsum ex laborum
        est ipsum ut ex aliquip quis veniam. Est enim duis Lorem et magna
        officia eu ea consectetur proident excepteur veniam aliquip enim.
      </p>
      <p>
        Incididunt consectetur do aute dolore sit proident. Voluptate dolore
        excepteur esse minim. Mollit qui ex deserunt ea in est qui ipsum eu
        adipisicing culpa excepteur id. Elit magna sit occaecat ipsum ex laborum
        est ipsum ut ex aliquip quis veniam. Est enim duis Lorem et magna
        officia eu ea consectetur proident excepteur veniam aliquip enim.
      </p>
      <p>
        Incididunt consectetur do aute dolore sit proident. Voluptate dolore
        excepteur esse minim. Mollit qui ex deserunt ea in est qui ipsum eu
        adipisicing culpa excepteur id. Elit magna sit occaecat ipsum ex laborum
        est ipsum ut ex aliquip quis veniam. Est enim duis Lorem et magna
        officia eu ea consectetur proident excepteur veniam aliquip enim.
      </p>
      <p>
        Incididunt consectetur do aute dolore sit proident. Voluptate dolore
        excepteur esse minim. Mollit qui ex deserunt ea in est qui ipsum eu
        adipisicing culpa excepteur id. Elit magna sit occaecat ipsum ex laborum
        est ipsum ut ex aliquip quis veniam. Est enim duis Lorem et magna
        officia eu ea consectetur proident excepteur veniam aliquip enim.
      </p>
      <p>
        Incididunt consectetur do aute dolore sit proident. Voluptate dolore
        excepteur esse minim. Mollit qui ex deserunt ea in est qui ipsum eu
        adipisicing culpa excepteur id. Elit magna sit occaecat ipsum ex laborum
        est ipsum ut ex aliquip quis veniam. Est enim duis Lorem et magna
        officia eu ea consectetur proident excepteur veniam aliquip enim.
      </p>
      <p>
        Incididunt consectetur do aute dolore sit proident. Voluptate dolore
        excepteur esse minim. Mollit qui ex deserunt ea in est qui ipsum eu
        adipisicing culpa excepteur id. Elit magna sit occaecat ipsum ex laborum
        est ipsum ut ex aliquip quis veniam. Est enim duis Lorem et magna
        officia eu ea consectetur proident excepteur veniam aliquip enim.
      </p>
      <p>
        Incididunt consectetur do aute dolore sit proident. Voluptate dolore
        excepteur esse minim. Mollit qui ex deserunt ea in est qui ipsum eu
        adipisicing culpa excepteur id. Elit magna sit occaecat ipsum ex laborum
        est ipsum ut ex aliquip quis veniam. Est enim duis Lorem et magna
        officia eu ea consectetur proident excepteur veniam aliquip enim.
      </p>
      <p>
        Incididunt consectetur do aute dolore sit proident. Voluptate dolore
        excepteur esse minim. Mollit qui ex deserunt ea in est qui ipsum eu
        adipisicing culpa excepteur id. Elit magna sit occaecat ipsum ex laborum
        est ipsum ut ex aliquip quis veniam. Est enim duis Lorem et magna
        officia eu ea consectetur proident excepteur veniam aliquip enim.
      </p>
      <p>
        Incididunt consectetur do aute dolore sit proident. Voluptate dolore
        excepteur esse minim. Mollit qui ex deserunt ea in est qui ipsum eu
        adipisicing culpa excepteur id. Elit magna sit occaecat ipsum ex laborum
        est ipsum ut ex aliquip quis veniam. Est enim duis Lorem et magna
        officia eu ea consectetur proident excepteur veniam aliquip enim.
      </p>
      <p>
        Incididunt consectetur do aute dolore sit proident. Voluptate dolore
        excepteur esse minim. Mollit qui ex deserunt ea in est qui ipsum eu
        adipisicing culpa excepteur id. Elit magna sit occaecat ipsum ex laborum
        est ipsum ut ex aliquip quis veniam. Est enim duis Lorem et magna
        officia eu ea consectetur proident excepteur veniam aliquip enim.
      </p>
    </div>
  );
}

export default ModalPage;
