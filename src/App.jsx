import Greet from "./2_Create_Components/Greet";
import Header from "./3_Getting_Comfortable_with_componets/Header";
import Main from "./3_Getting_Comfortable_with_componets/MainCont";
import Footer from "./3_Getting_Comfortable_with_componets/Footer";
import JSXRules from "./1_JSX_Rules/JSXRules";
import Add from "./4_Adding_JS/Add";
import MoreFun from "./4_Adding_JS/MoreFun";
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