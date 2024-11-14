import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
function App(){
  const [selectedCategory, setSelectedCategory] = useState(null)

//inputFilter
const [query, setQuery] = useState("")

const handleInputChange= event => {
  setQuery(event.target.value)
}

const filteredItems = products.filter((product) => product.title.toLocaleLowercase().indexOf(query.toLocaleLowerCase() !== -1));

//.........RadioFilter......
const handleChange = event => {
  setSelectedCategory(event.target.value)
}

return (
    <div>
      <Sidebar/>
      <Navigation/>
      <Recommended/>
      <Products/>
    </div>
  )
}

export default App;
