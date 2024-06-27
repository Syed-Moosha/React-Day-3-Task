import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';

const App = () => {
  const [products,setProducts]=useState([
    {
      id:"1",
      prod:"Fancy Product",
      pri:"$40.00 - $80.00",
      sts:true,
    },
    { 
      id:"2",
      prod:"Special Item",
      del:"$20.00",
      pri:" $18.00",
      star:"star",
      sale:"sale",
      sts:true,
    },
    {
      id:"3",
  
      prod:"Sale Item",
      del:"$50.00",
      pri:" $25.00",
      sale:"sale",
      sts:true,
  
  
    },
    {
      id:"4",
      sts:true,
      prod:"Popular Item",
      pri:" $40.00",
      star:"star",
    },
    {
      id:"5",
      sts:true,
  
  
      prod:"Sale Item",
      del:"$50.00",
      pri:" $25.00",
      sale:"sale",
    },
    {
      id:"6", 
         sts:true,
  
  
      prod:"Fancy Product",
      pri:" $120.00 - $280.00",
    },
    {
      id:"",
      sts:true,
      prod:"Special Item",
      del:"$20.00",
      pri:"$18.00",
      sale:"sale",
      star:"star"
    },
    {
      id:"8",
      sts:true,
  
      prod:"Popular Item",
      pri:"$40.00",
      star:"star"
    }
      
    ])
  
    const [value,setvalue]=useState(0);
    // const [sts,setsts]=useState(true);
  
    const productInc=(id)=>{
      // setsts(false);
      const update=  products.map((ele)=>{
        if(ele.id===id){
          
      setvalue(e=>e+1)
      return {...ele,sts:false}
      
        }
        return ele
  
      })
      setProducts(update)
      
  
    }
    const productDec=(id)=>{
      // setsts(true)
    const update= products.map((ele)=>{
        if(ele.id===id){
      setvalue(e=>e-1)
      return {...ele,sts:true}
        }
  return ele
      })
      setProducts(update)
    }
  return (
    <>
    <div>
      <Navbar value={value}/>
      <Header />
      <Products products={products} productInc={productInc} productDec={productDec}/>
      <Footer/>
    </div>
    </>
  );
};

export default App;