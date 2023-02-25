import React, { useEffect, useState } from 'react'
import Dropdown from 'react-dropdown'

const AllOrders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(`https://digital-agency-server.onrender.com/allOrders`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
  }, [])

  const options = [
    { value: 'Pending', label: 'Pending' },
    { value: 'On Going', label: 'On Going' },
    { value: 'Done', label: 'Done' },
  ]

  const change = (e, id) => {
    fetch(`https://digital-agency-server.onrender.com/update/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: e.value }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert('Status updated successfully.')
        }
      })
  }

  return (
    <div>
      <h2>All Orders</h2>
      <table className='w-100 mx-auto mt-5'>
        <tr>
          <th>Service Name</th>
          <th>Price</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
        {orders.map((cv) => (
          <tr key={cv._id}>
            <td>{cv.name}</td>
            <td>{cv.price}</td>
            <td>{cv.userEmail}</td>
            {/* <td>{cv.status}</td> */}
            <Dropdown
              options={options}
              onChange={(e) => {
                change(e, `${cv._id}`)
              }}
              value={cv.status} /* placeholder="Select an option" */
            />
          </tr>
        ))}
      </table>
    </div>
  )
}

export default AllOrders
