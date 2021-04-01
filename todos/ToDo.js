import React from "react";


const ToDo = ({removeTask,id}) => {
    
    const handleRemove = ()=>{
        removeTask(id)
    }
       

    return (
    <div>
      
      <button onClick={handleRemove}>X</button>
      
    </div>
    )
}

export default ToDo;