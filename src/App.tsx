import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Layout />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
