import Inputs from "../../components/Inputs";
import "./Colours.css"
function Colours () {
  return (
    <div>
      <h2 className="sidebar-title colour-title">colors</h2>
      <div>
        <Inputs/>
        <Inputs/>
        <Inputs/>
        <Inputs/>
        <Inputs/>
      </div>
    </div>
  )
}

export default Colours;