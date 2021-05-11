import './App.css';
import Header from './Components/Header';
import Accessories from './assets/Desktop-Accessories.jpg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanel from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import Item from './Components/Item';

function App() {
  return (
    <div className="app">
     <Header />
     <div className="app__itemsContainer" >
        <Item
          title="Model S"
          desc="Order Online for Touchless Delivery"
          image={ModelS}
          twoButtons={true}
          first={true}
          leftBtnTxt='CUSTOM ORDER'
          rightBtnTxt='EXISTING INVENTORY'
        />

        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          image={ModelY}
          twoButtons={true}
          first={false}
          leftBtnTxt='CUSTOM ORDER'
          rightBtnTxt='EXISTING INVENTORY'
        />

        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          image={Model3}
          first={false}
          twoButtons={true}
          leftBtnTxt='CUSTOM ORDER'
          rightBtnTxt='EXISTING INVENTORY'
        />

        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          image={ModelX}
          first={false}
          twoButtons={true}
          leftBtnTxt='CUSTOM ORDER'
          rightBtnTxt='EXISTING INVENTORY'
        />

        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          image={SolarPanel}
          first={false}
          twoButtons={true}
          leftBtnTxt='CUSTOM ORDER'
          rightBtnTxt='LEARN MORE'
        />

        <Item
          title="Accessories"
          desc=""
          image={Accessories}
          first={false}
          twoButtons={false}
          leftBtnTxt='SHOP NOW'
          rightBtnTxt=''
        />

        <Item
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roofs Plus Solar Panels"
          image={SolarRoof}
          first={false}
          twoButtons='true'
          leftBtnTxt='CUSTOM ORDER'
          rightBtnTxt='LEARN MORE'
        />
     </div>
    </div>
  );
}

export default App;


// {
//   items.map((item,id )=>(
//       <Item
//      title={item.title}
//      desc={item.desc}
//      first = {item.first}
//      image={item.image}
//      twoButtons={item.twoButtons}
//      leftBtnTxt={item.leftBtnTxt}
//      rightBtnTxt={item.rightBtnTxt}
//     />
    
//   ))
// }