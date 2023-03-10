import Header from "./components/Navbar/Header";
import ProductContext from "./context/ProductContext";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <>
      <ProductContext>
        <Header />
        <MyRoutes />
      </ProductContext>
    </>
  );
}

export default App;
