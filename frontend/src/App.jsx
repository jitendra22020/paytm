import Dashboard from "./pages/Dashboard"
import Sendmoney from "./pages/Sendmoney"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
   <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/Sendmoney" element={<Sendmoney/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
