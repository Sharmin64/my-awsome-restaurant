import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {
  

  return (
    <div>
   <Header></Header>
      <Outlet></Outlet>
      {/* Footer */}
    </div>
  )
}

export default App
