import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Matches from "./pages/Matches"
import MatchDetailPage from "./pages/MatchDetailPage"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/matches" element={<Matches/>} />
        <Route path="/match/:id" element={<MatchDetailPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
