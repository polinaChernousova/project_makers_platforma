import Header from "./components/Navbar/Header";
import AuthContext from "./context/AuthContext";
import CartContext from "./context/CartContext";
import ProductContext from "./context/ProductContext";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <>
      <CartContext>
        <AuthContext>
          <ProductContext>
            <Header />
            <MyRoutes />
          </ProductContext>
        </AuthContext>
      </CartContext>
    </>
  );
}

export default App;
