import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomRouter from "./components/CustomRouter";
import Home from "./components/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/queryroute" element={<CustomRouter />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
