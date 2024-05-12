import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SignUp from './components/signup.component'
function App() {
  return (
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner" >
              <SignUp />
          </div>
        </div>
      </div>
  )
}
export default App