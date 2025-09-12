import Greet from "./Create_Components/Greet";
import Header from "./Getting_Comfortable_with_componets/Header";
import Main from "./Getting_Comfortable_with_componets/MainCont";
import Footer from "./Getting_Comfortable_with_componets/Footer";
import JSXRules from "./JSX_Rules/JSXRules";
import Add from "./Adding_JS/Add";
import MoreFun from "./Adding_JS/MoreFun";
const App = () => { 
  return (
    <>
      {/* <h1> Hello world !</h1> */}
      {/* <Greet/> */}
      
      <Header/>
      <Main/>
      <JSXRules/>
      <Add/>
      <MoreFun/>
      <Footer/>
    </>
  )
}

export default App;