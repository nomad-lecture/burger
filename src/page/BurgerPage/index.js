import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummery from "../../components/OrderSummery";

import Spinner from "../../components/General/Spinner";

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

class BurgerPage extends Component {
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
    lastCustomerName: "N/A",
    loading: false,
  };

  componentDidMount = () => {};

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

  continueOrder = () => {
    const params = [];

    for (let ingredient in this.state.ingredients) {
      params.push(ingredient + "=" + this.state.ingredients[ingredient]);
    }

    params.push("totalPrice=" + this.state.totalPrice);

    this.props.history.push({
      pathname: "/shipping",
      search: params.join("&"),
    });

    this.closeConfirmModal();
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    console.log("hey", this.props);

    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummery
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
              ingredients={this.state.ingredients}
              ingredientsNames={INGERIENT_NAMES}
              totalPrice={this.state.totalPrice}
            />
          )}
        </Modal>
        {this.state.loading && <Spinner />}
        <Burger
          ingredients={this.state.ingredients}
          choose={this.props.choose}
        />
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

const a = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
  };
};

const b = (dispatch) => {
  return {
    addIngredient: (ingredientName) => dispatch({ type: "ADD_INGREDIENT" }),
    removeIngredient: (ingredientName) =>
      dispatch({ type: "REMOVE_INGREDIENT" }),
  };
};

export default connect(a, b)(BurgerPage);
