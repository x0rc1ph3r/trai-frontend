import { Routes, Route } from "react-router-dom";
import SolanaWallet from "./solana/wallet"
import Home from "./pages/home/Home";
import Admin from "./components/Admin";
import "./style.css";

const App = () => {
  return (
    <SolanaWallet>
      <Routes>
        <Route path="/hcksbcowk" element={<Admin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </SolanaWallet>
  );
};

export default App;
