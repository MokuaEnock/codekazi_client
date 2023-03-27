import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import HomePage from "./pages/HomePage/homepage";
import Jobs from "./pages/JobFormPage/jobformpage";
import Detail from "./pages/JoblDetailsPage/jobdetailspage";
import PostPage from "./pages/JobPostPage/JobPostPage";
import Update from "./pages/JobUpdate/update";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/jobs/:id" element={<Detail />} />
        <Route path="/jobs/:id/update" element={<Update />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
