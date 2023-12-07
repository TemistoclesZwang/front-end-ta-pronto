import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { MyRouter } from "./routes";
import {
  faCartShopping,
  faRectangleList,
  faSignOut,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { BtnNavBar } from "./components/BtnNavBar";
import { useAuth } from "./context/AuthContext";
import { OrderListContextProvider } from "./context/OrderListContext";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <OrderListContextProvider>
      <BrowserRouter>
        {isLoggedIn && (
            <nav className="navbar">
              <ul className="links">
                <div className="left">
                  <BtnNavBar
                    to="/pedidos/false"
                    icon={faUtensils}
                    text="Pedidos"
                  />
                  <BtnNavBar
                    to="/cardapio"
                    icon={faRectangleList}
                    text="Cardápio"
                  />
                  <BtnNavBar
                    to="/pagamento"
                    icon={faCartShopping}
                    text="Pagamento"
                  />
                </div>
                <div className="right">
                  <BtnNavBar
                    to="/"
                    icon={faSignOut}
                    text="Sair"
                  />
                </div>
              </ul>
            </nav>
        )}
        {MyRouter}
      </BrowserRouter>
    </OrderListContextProvider>
  );
}

export default App;
