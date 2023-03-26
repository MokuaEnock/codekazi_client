import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
