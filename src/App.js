import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const pageSize = 12
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/"
            element={<News key='General' pageSize={pageSize} country='in' category='General' />}
          />
          <Route exact path="/General"
            element={<News key='General' pageSize={pageSize} country='in' category='General' />}
          />

          <Route exact path="/Business"
            element={<News key='Business' pageSize={pageSize} country='in' category='Business' />}
          />

          <Route exact path="/Entertainment"
            element={<News key='Entertainment' pageSize={pageSize} country='in' category='Entertainment' />}
          />

          <Route exact path="/Science"
            element={<News key='Science' pageSize={pageSize} country='in' category='Science' />}
          />

          <Route exact path="/Health"
            element={<News key='Health' pageSize={pageSize} country='in' category='Health' />}
          />

          <Route exact path="/Sports"
            element={<News key='Sports' pageSize={pageSize} country='in' category='Sports' />}
          />

          <Route exact path="/Technology"
            element={<News key='Technology' pageSize={pageSize} country='in' category='Technology' />}
          />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App