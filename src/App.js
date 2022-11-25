import { Fragment, useState } from "react";
import "./App.css";
import Layout from "./components/Main/Layout";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Main/Sidebar";
function App() {
  const [sidebar, setSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [badge, setbadge] = useState(false);
  const [cart, setCart] = useState([]);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className='App'>
      <Navbar
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
        handleSidebar={handleSidebar}
      />
      <Layout
        showCart={showCart}
        cart={cart}
        setCart={setCart}
      />
      <Fragment>{sidebar && <Sidebar setSidebar={setSidebar} />}</Fragment>
    </div>
  );
}
export default App;
