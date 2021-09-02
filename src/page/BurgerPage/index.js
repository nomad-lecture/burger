import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummery from "../../components/OrderSummery";

import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/burgerAction";

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
    purchasing: false,
    confirmOrder: false,
    loading: false,
  };

  componentDidMount = () => {};

  addEvent = (type) => {
    const newIngredients = { ...this.props.ingredients };
    newIngredients[type]++;

    const newPrice = this.props.totalPrice + INGERIENT_PRICES[type];

    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice,
      purchasing: true,
    });
  };

  deleteEvent = (type) => {
    const newIngredients = { ...this.props.ingredients };
    let count = newIngredients[type] - 1;
    if (count <= 0) {
      count = 0;
    }
    newIngredients[type] = count;

    const newPrice = this.props.totalPrice - INGERIENT_PRICES[type];
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

    for (let ingredient in this.props.ingredients) {
      params.push(ingredient + "=" + this.props.ingredients[ingredient]);
    }

    params.push("totalPrice=" + this.props.totalPrice);

    this.props.history.push({
      pathname: "/shipping",
      search: params.join("&"),
    });

    this.closeConfirmModal();
  };

  render() {
    const disabledIngredients = { ...this.props.ingredients };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

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
              ingredients={this.props.ingredients}
              ingredientsNames={INGERIENT_NAMES}
              totalPrice={this.props.totalPrice}
            />
          )}
        </Modal>
        {this.state.loading && <Spinner />}
        <Burger ingredients={this.props.ingredients} />
        <BuildControls
          ingredientsNames={INGERIENT_NAMES}
          price={this.props.totalPrice}
          disabledIngredients={disabledIngredients}
          addEvent={this.props.addIngredient}
          deleteEvent={this.props.removeIngredient}
          disabledOrder={!this.state.purchasing}
          showConfirmModal={this.showConfirmModal}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ingredient) => dispatch(actions.addIngredient(ingredient)),
    removeIngredient: (ingredient) =>
      dispatch(actions.removeIngredient(ingredient)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerPage);
