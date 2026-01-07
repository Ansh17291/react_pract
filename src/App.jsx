import Greet from "./2_Create_Components/Greet";
import Header from "./3_Getting_Comfortable_with_componets/Header";
import Main from "./3_Getting_Comfortable_with_componets/MainCont";
import Footer from "./3_Getting_Comfortable_with_componets/Footer";
import JSXRules from "./1_JSX_Rules/JSXRules";
import Add from "./4_Adding_JS/Add";
import MoreFun from "./4_Adding_JS/MoreFun";
import UserChild from "./5_Props/UserChild";
import NewChild from "./5_Props/NewChild";
import Cart from "./6_Conditional_Rendering/Cart";
import Button_click from "./7_EventHandling/Button_click";
import Copy from "./7_EventHandling/Copy";
import Hook_useState from "./8_Hooks/hook_useState";
import ChildComponent from "./8_Hooks/ChildComponent";
const App = () => { 
  return (
    <>
      {/* <h1> Hello world !</h1> */}
      {/* <Greet/> */}
      
      <Header/>
      <Main/>
      {/* <JSXRules/>
      <Add/>
      <MoreFun/>
      <UserChild name="Ansh" place="India" hobbies={['reading , coding , sleeping ']}/>
      <NewChild >
        <h1>Card 1 </h1>
        <p> content for card 1 </p>
      </NewChild>
      <NewChild >
        <h1>Card 2 </h1>
        <p> content for card 2 </p>
      </NewChild>
      <NewChild >
        <h1>Card 3 </h1>
        <p> content for card 3 </p>
      </NewChild>

      <Cart />

      <Button_click />
      <Copy></Copy> */}

      <Hook_useState/>

      <Footer/>
    </>
  )
}

export default App;