import React from 'react'
import Navbar from './components/Navbar'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import AddStudent from './components/AddStudent'
import StudentDetails from './components/StudentDetails'
import EditStudent from './components/EditStudent'

function App () {
  return (
    <BrowserRouter>
      <div>
        {/*Navbar อยู่บนสุด ไม่ต้องไป Switch กับคนอื่น */}
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/new'>
            <AddStudent />
          </Route>

          {/* <Route path="/students/:id"> ID คือ param ที่จะส่งเข้ามา */}
          <Route path='/students/:id'>
            <StudentDetails />
          </Route>

          <Route path='/editstudent/:id'>
            <EditStudent />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
