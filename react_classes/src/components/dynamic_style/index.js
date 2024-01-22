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
//className={`${valideInput ? "valide" : "invalide"}`}
  return (
    <div>
      <input 
      type='text' 
      name='name' 
      value={name} 
      onChange={handleChange} 
      
      className={`${valideInput && "valide"}`}
      />
    </div>
  )
}

export default Index;
