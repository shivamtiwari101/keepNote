import React from "react";
 
export const Note=(props)=>{
    const deleteNote=(i)=>{
         props.deleteItem(props.id);
        }
        return( 
     
                

           <div className="note">
                  <h4>{props.title}</h4><br/>
                    <p>{props.content}</p>
                  <span style={{float:"right"}}><button className="btn btn-danger" onClick={deleteNote}>X</button></span>
           </div>
       
      );
}

 