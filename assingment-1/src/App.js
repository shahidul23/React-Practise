import Head from "./components/header";
import './assets/app.css';
import Card from "./components/Caed";
import Data from './data.json'
function App(){
  return <>
     <Head />

     {Data.map((item,index)=><Card key={index} photo={item.image} title={item.title} price={item.price} reating={item.reating} desc={item.desc}/>)}
  </>
}
export default  App;