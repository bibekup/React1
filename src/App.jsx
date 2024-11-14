import Buttons from "./components/Buttons";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Category from "./Sidebar/Category/Category";
import Colours from "./Sidebar/Colors/Colours";
import Price from "./Sidebar/Price/Price";

function App(){
  return (
    <div>
      <Navigation/>
      <Products/>
      <Recommended/>
      <Category/>
      <Colours/>
      <Price/>
    </div>
  )
}
export default App;
