import React, { useEffect, useState } from 'react'

const Index = () => {
  const[name, setName] = useState('');
  const[valideInput, setValideInput] = useState(false);

  useEffect(() =>{
    if(name.length < 2){
        setValideInput(false)
    }else{
        setValideInput(true)
    }
  },[name])

  const handleChange = (e) =>{
    setName(e.target.value);
  }
// style={{color: valideInput ? "red" : "green"}}
  return (
    <div>
      <input 
      type='text' 
      name='name' 
      value={name} 
      onChange={handleChange} 
      
      className={`${valideInput ? "valide" : "invalide"}`}
      />
    </div>
  )
}

export default Index;
