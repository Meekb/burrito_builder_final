import React, { Component } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      error: ''
    }
  }

  componentDidMount() {
    getOrders()
    .then(
      (orderData) => {
        this.setState(orderData)
      }
    )
    .catch(err => this.setState({error: err.message}));
  }

  submitOrder = (newOrder) => {
    this.setState([...this.state.orders, newOrder])
  }

  postOrder = async (newOrder) => {
    const postInfo = {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        id: newOrder.id,
        name: newOrder.name, 
        ingredients: newOrder.ingredients
      })
    }
    await fetch('http://localhost:3001/api/v1/orders', postInfo)
    .then(response => response.json)
    .then(this.setState({ orders: [...this.state.orders, newOrder] }))
    .catch(err => this.setState({ error: err.message})) 
  }



  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm submitOrder={this.submitOrder} postOrder={this.postOrder}/>
        </header>
        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
