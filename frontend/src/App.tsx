import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Matches from "./pages/Matches"
import MatchDetailPage from "./pages/MatchDetailPage"
import FinalHomePage from "./pages/FinalHomePage"
import CreateMatches from "./pages/CreateMatches"
import AddPlayers from "./pages/AddPlayers"
import TossPage from "./pages/TossPage"


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
        <Route path="/finalhome" element={<FinalHomePage/>} />
        <Route path="/creatematch" element={<CreateMatches/>} />
        <Route path="/addplayers" element={<AddPlayers/>} />
        <Route path="/toss" element={<TossPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
