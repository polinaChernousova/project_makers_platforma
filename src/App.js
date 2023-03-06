import ProductContext from "./components/context/ProductContext";
import Header from "./components/Navbar/Header";
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
