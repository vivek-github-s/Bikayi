import './App.css';
import Header from './components/Header';
import axios from "axios";
import { useEffect, useState } from "react"
import PrizeCard from './components/PrizeCard';

function App() {

  const [product, setProduct] = useState([]);
  const [filterdProduct, setFilterdprodu] = useState([])

  const getData = async () => {
    try {
      const data = await axios.get(
        "http://api.nobelprize.org/v1/prize.json"
      );
      console.log(data.data)
      setProduct(data.data.prizes)
      setFilterdprodu(data.data.prizes)
    }
    catch(e){
      console.log(e);
    }
  };

  useEffect(()=>{
    getData();
  },[]);


  return (
    <div className="app">
      <Header/>
     <div className='app__prizecard'>
     {filterdProduct.map((item)=>{
        return(
         <PrizeCard year = {item.year} category = {item.category} laureates = {item.laureates} > </PrizeCard>
        )
      })}
       </div> 

      
    </div>
  );
}

export default App;
