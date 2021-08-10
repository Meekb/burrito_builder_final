import React, { Component } from 'react';
import './App.css';
import {getOrders, posrtOrder, postOrder} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: [],
    }
  }

  componentDidMount() {
    
    getOrders()
    .then(
      (orderData) => {
        this.setState(orderData)
      }
    )
    .catch(err => console.error('Error fetching:', err));
  }

  submitOrder = (newOrder) => {
    this.setState([...this.state.orders, newOrder])
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm submitOrder={this.submitOrder}/>
        </header>
        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
