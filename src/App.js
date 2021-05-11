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
  const items = [
    {
      title:"Solar for New Roofs",
      desc:"Solar Roof Costs Less Than a New Roofs Plus Solar Panels",
      image:SolarRoof,
      first:true,
      twoButtons:'true',
      leftBtnTxt:'CUSTOM ORDER',
      rightBtnTxt:'LEARN MORE'
    },
    {
      title:"Model S",
      desc:"Order Online for Touchless Delivery",
      image:ModelS,
      twoButtons:true,
      first:false,
      leftBtnTxt:'CUSTOM ORDER',
      rightBtnTxt:'EXISTING INVENTORY'
    },
    {
      title:"Model Y",
      desc:"Order Online for Touchless Delivery",
      image:ModelY,
      twoButtons:true,
      first:false,
      leftBtnTxt:'CUSTOM ORDER',
      rightBtnTxt:'EXISTING INVENTORY'
    },
    {
      title:"Model 3",
      desc:"Order Online for Touchless Delivery",
      image:Model3,
      first:false,
      twoButtons:true,
      leftBtnTxt:'CUSTOM ORDER',
      rightBtnTxt:'EXISTING INVENTORY'
    },
    {
      title:"Model X",
      desc:"Order Online for Touchless Delivery",
      image:ModelX,
      first:false,
      twoButtons:true,
      leftBtnTxt:'CUSTOM ORDER',
      rightBtnTxt:'EXISTING INVENTORY'
    },
    {
      title:"Lowest Cost Solar Panels in America",
      desc:"Money-back guarantee",
      image:SolarPanel,
      first:false,
      twoButtons:true,
      leftBtnTxt:'CUSTOM ORDER',
      rightBtnTxt:'LEARN MORE'
    },
    {
      title:"Accessories",
      desc:"",
      image:Accessories,
      first:false,
      twoButtons:false,
      leftBtnTxt:'SHOP NOW',
      rightBtnTxt:''
    }
]
console.log(items);
  return (
    <div className="App">
     <Header />
     {
       items.map((item,id )=>(
         <Item
         key={id}
          title={item.title}
          desc={item.desc}
          first = {item.first}
          image={item.image}
          twoButtons={item.twoButtons}
          leftBtnTxt={item.leftBtnTxt}
          rightBtnTxt={item.rightBtnTxt}
         />
       ))
     }
    </div>
  );
}

export default App;
