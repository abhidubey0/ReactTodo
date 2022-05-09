import React, { useState, useEffect } from 'react'

const  Todo = () => {

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () =>{
    if(inputData == ""){
        alert("Pz Fill anything")
    }else{
      const myNewInput = {
        id : new Date().getTime().toString(),
        name:inputData
      }
      setItems([...items, myNewInput])
      setInputData("");
    }
  }

// Delete the items 
const delItem = (currIndex) =>{
  console.log(currIndex)
     const updatedItems = items.filter((currElem)=>{
         console.log(currElem)
         return currElem.id !== currIndex
     })
     setItems(updatedItems)
}

// remove all the elements
const removeAll = () =>{
   setItems([])
}

// items set to the local storage
useEffect(()=>{
 localStorage.setItem("mytodoList", JSON.stringify(items))
},[items])

  return (
    <>                     
      <div className='main-div'>
        <div className='center-div'>
             <div className='img-div'>
               <img src="./images/download.png" alt="" />
               <p style={{textAlign:"center", color:"white", fontSize:"20px"}}>Add your List Here...</p>
             </div>
            
            <div className='input-div'>
            <input type="text" placeholder=':✍️write here.....' name="" id="" value={inputData} onChange={(e) => setInputData(e.target.value)} />
            <i className="fa fa-plus" aria-hidden="true" onClick={addItem}></i>
            </div>

            <div className='show-item'>
             {
               items.map((currElem) =>{
                   return(
                    <div className='add-item' key={currElem.id} >
                    <h3>{currElem.name}</h3>
                    <div className='icons'>
                    <i className="fa fa-edit" aria-hidden="true"></i> &nbsp;
                    <i className="fa fa-trash" aria-hidden="true" onClick={()=> delItem(currElem.id)}></i> 
                    </div>
                  </div>
                   )
               })
             }
            </div>
            

            <button data-sm-link-text="Remove All" onClick={removeAll}><span>Remove All</span></button>
        </div>
      </div>
    </>
  )
}

export default  Todo;
