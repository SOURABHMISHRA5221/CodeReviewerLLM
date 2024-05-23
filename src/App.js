import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Errors from "./pages/Errors";
import Code from "./pages/Code";
import Chat from "./pages/Chat";
import NoPage from "./pages/NoPage";
import MyForm from "./form.js"

export default function App() {
  return (
    <div className="content">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/code" element={<Code />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/errors" element={<Errors />} />
          <Route path="*" element={<MyForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}