import "./App.css"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Works from "./pages/Works"
import Skills from "./pages/Skills"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
