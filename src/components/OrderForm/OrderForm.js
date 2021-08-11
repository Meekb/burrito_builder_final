import React, { Component } from 'react';


class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: '',
      ingredients: [],
    };
  }

  handleNameChange = (e) => {
    e.preventDefault()
    this.setState({ name: e.target.value })
  }

  handleIngredientChange = (e) => {
    e.preventDefault()
    const newIngredient = e.target.value
    this.setState({ingredients: [...this.state.ingredients, newIngredient]})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now()
    const newOrder = {id: id, name: this.state.name, ingredients: this.state.ingredients}
    const postFormat = {id: id, name: this.state.name, ingredients: this.state.ingredients}
    this.props.submitOrder(newOrder)
    this.props.postOrder(postFormat)
    this.clearInputs();
    };

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  };

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button className={ingredient} key={ingredient} name={ingredient} value={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        { (!this.state.name || this.state.ingredients.length < 1) ?
        <button className='submit' disabled={true} onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button> : 
        <button className='submit' disabled={false} onClick={e => this.handleSubmit(e)}>
        Submit Order
        </button> 
        }
      </form>
    )
  }
}

export default OrderForm;
