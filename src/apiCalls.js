const getOrders = async () => {
  const response = await fetch('http://localhost:3001/api/v1/orders')
  return await response.json()
} 

  

export { getOrders };

