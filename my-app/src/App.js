import './App.css';
import Card from './components/Card';
import Mapping from './components/uniqueList/NestedMapping';
import List from './components/uniqueList/list';
import Data from './data.json';

function App(){
  //let items = [];
//use for loop
  // for(let x = 0; x<Data.length; x++){
  //   items.push(<Card key={x} name={Data[x].name}  des={Data[x].desc}/>)
  // }
//use mapping  
  // items = Data.map((item)=> 
  //      <Card name = {item.name} des = {item.desc} />
  // );
  return <div>
    <h1 className='headingStyle'>Todo App</h1>
    {Data.map((item, index)=> <Card key={index} name={item.name} des={item.desc} />)}

    <List />

    <Mapping />


    {/* <Card name={Data[0].name}  des={Data[0].desc}/>
    <Card name={Data[1].name}  des={Data[1].desc}/>
    <Card name={Data[2].name}  des={Data[2].desc}/> */}
  </div>
}

export default App;