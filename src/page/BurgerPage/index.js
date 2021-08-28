import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummery from "../../components/OrderSummery";

const INGERIENT_PRICES = {
  salad: 150,
  cheese: 250,
  bacon: 800,
  meat: 1500,
};
const INGERIENT_NAMES = {
  bacon: "Bacon",
  cheese: "Cheese",
  meat: "Meat",
  salad: "Salad",
};

export default class BurgerPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasing: false,
    confirmOrder: false,
  };

  addEvent = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;

    const newPrice = this.state.totalPrice + INGERIENT_PRICES[type];

    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice,
      purchasing: true,
    });
  };

  deleteEvent = (type) => {
    const newIngredients = { ...this.state.ingredients };
    let count = newIngredients[type] - 1;
    if (count <= 0) {
      count = 0;
    }
    newIngredients[type] = count;

    const newPrice = this.state.totalPrice - INGERIENT_PRICES[type];
    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice,
      purchasing: newPrice > 0,
    });
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          <OrderSummery
            ingredients={this.state.ingredients}
            ingredientsNames={INGERIENT_NAMES}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsNames={INGERIENT_NAMES}
          price={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          addEvent={this.addEvent}
          deleteEvent={this.deleteEvent}
          disabledOrder={!this.state.purchasing}
          showConfirmModal={this.showConfirmModal}
        />
      </div>
    );
  }
}
