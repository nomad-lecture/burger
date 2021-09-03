import React, { Component } from "react";
import { connect } from "react-redux";
// import css from "./style.module.css";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import * as actions from "../../redux/actions/orderAction";

class OrderPage extends Component {
  componentDidMount() {
    this.props.loadOrders();
    // this.setState({ loading: true });

    // axios
    //   .get("orders.json")
    //   .then((response) => {
    //     this.setState({ orders: Object.entries(response.data).reverse() });
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    //     this.setState({ loading: false });
    //   });
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          this.props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.orderReducer.loading,
    orders: state.orderReducer.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: () => dispatch(actions.loadOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
