// rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenerateOrders from "./pages/generateOrders";
import ProcessOrder from "./pages/processOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GenerateOrders />} />
          <Route path="/lista" element={<ProcessOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
