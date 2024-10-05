import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentPage from "./Pages/PaymentPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentPage /> } />
      </Routes>
    </BrowserRouter>
  )
}