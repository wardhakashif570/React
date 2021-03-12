

 const Increment = () => {
  return(dispatch)=>{
   dispatch({
       type:"Increment"
   })
  }
}

const Decrement = () => {
    return(dispatch)=>{
        dispatch({
            type:"Decrement"
        })
    }
}


export{
    Increment,
    Decrement
}