const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
} 


const postOrder = async (newOrder) => {

  const postInfo = {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
      id: newOrder.id,
      name: newOrder.name, 
      ingredients: newOrder.ingredients
    })
  }
  fetch('http://localhost:3001/api/v1/orders', postInfo)
    // .then(async response => {
    //   const dataIsJson = response.headers.get('content-type')?.includes('application/json');
    //   const data = dataIsJson && await response.json();
    //   if(!response.ok) {
    //     const error = (data && data.message) || response.status;
    //     return Promise.reject(error);
    //   )
    }
  
  

export { getOrders, postOrder };

