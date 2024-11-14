import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import Main from "./components/Main";
import User from "./components/User";

function App(){
  const myName = "Hudkjk";
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
      <Greet/>
      <p>my name is {myName}</p>
      <p>my friends List: {["Alex", " Naresh", " paras"]}</p>
      <p>2+2 = {2+2}</p>
      <User name = "Bibek Upreti"/>
    </div>
  )
}
export default App;