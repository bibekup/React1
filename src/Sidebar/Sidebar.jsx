import Category from "./Category/Category";
import Colours from "./Colors/Colours";
import Price from "./Price/Price";
import "./Sidebar.css"
function Sidebar () {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category/>
      <Price/>
      <Colours/>
    </section>
  )
}

export default Sidebar;