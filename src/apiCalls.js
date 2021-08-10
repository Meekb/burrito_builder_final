const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
} 


const postOrder = (newOrder) => {

  const postInfo = {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
      id: newOrder.id,
      name: newOrder.name, 
      ingredients: newOrder.ingredients
    })
  }
  console.log(postInfo)
  fetch('http://localhost:3001/api/v1/orders', postInfo)
    .then(response => {
      console.log(response)
    })

}







export { getOrders, postOrder };

