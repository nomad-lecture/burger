import React, { useState } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummery from "../../components/OrderSummery";

const BurgerPage = (props) => {
  const [confirmOrder, setConfirmOrder] = useState(false);

  const continueOrder = () => {
    props.history.push("/shipping");
  };

  const showConfirmModal = () => {
    setConfirmOrder(true);
  };

  const closeConfirmModal = () => {
    setConfirmOrder(false);
  };

  return (
    <div>
      <Modal closeConfirmModal={closeConfirmModal} show={confirmOrder}>
        <OrderSummery onCancel={closeConfirmModal} onContinue={continueOrder} />
      </Modal>

      <Burger />

      <BuildControls showConfirmModal={showConfirmModal} />
    </div>
  );
};

export default BurgerPage;
