import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../App'
import OrderCard from '../OrderCard/OrderCard'

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(
      `https://digital-agency-server.onrender.com/orders/${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data))
  }, [])

  return (
    <div>
      <h2>Your Orders</h2>
      <div className='container mt-5'>
        <div className='row'>
          {orders.map((od) => (
            <OrderCard key={od._id} order={od} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders
