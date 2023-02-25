import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const ManageServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('https://digital-agency-server.onrender.com/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [services])

  const handleDeleteButton = (id) => {
    fetch(`https://digital-agency-server.onrender.com/deleteService/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <div>
      <h2>Manage Services</h2>
      <table className='w-100 mt-5'>
        <tr>
          <th>Name</th>
          <th>Details</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {services.map((cv) => (
          <tr key={cv._id}>
            <td>{cv.name}</td>
            <td>{cv.details}</td>
            <td>{cv.price}</td>
            <td>
              <button className='btn btn-success'>
                <FontAwesomeIcon
                  className='icon me-1 text-light'
                  icon={faEdit}
                />
              </button>

              <button
                onClick={() => handleDeleteButton(cv._id)}
                className='btn btn-danger'
              >
                <FontAwesomeIcon
                  className='icon me-1 text-light'
                  icon={faTrash}
                />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default ManageServices
