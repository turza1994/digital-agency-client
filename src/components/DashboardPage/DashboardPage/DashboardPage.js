import React, { useContext, useEffect, useState } from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Orders from '../Orders/Orders'
import Sidebar from '../Sidebar/Sidebar'
import WriteReview from '../WriteReview/WriteReview'
import { UserContext } from '../../../App'
import AllOrders from '../AllOrders/AllOrders'
import AddService from '../AddService/AddService'
import MakeAdmin from '../MakeAdmin/MakeAdmin'
import ManageServices from '../ManageServices/ManageServices'

const DashboardPage = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    fetch('https://digital-agency-server.onrender.com/isAdmin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data))
  }, [isAdmin])

  return (
    <HashRouter>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-3'>
            <Sidebar isAdmin={isAdmin} />
          </div>

          <div className='col-sm-9'>
            {isAdmin ? (
              <div>
                <Route exact path='/'>
                  <AllOrders />
                </Route>
                <Route path='/all-orders'>
                  <AllOrders />
                </Route>
                <Route path='/add-service'>
                  <AddService />
                </Route>
                <Route path='/make-admin'>
                  <MakeAdmin />
                </Route>
                <Route path='/manage-services'>
                  <ManageServices />
                </Route>
              </div>
            ) : (
              <div>
                <Route exact path='/'>
                  <Orders />
                </Route>
                <Route path='/orders'>
                  <Orders />
                </Route>
                <Route path='/write-review'>
                  <WriteReview />
                </Route>
              </div>
            )}
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

export default DashboardPage
