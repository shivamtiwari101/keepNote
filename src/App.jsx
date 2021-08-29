import React,{useState} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {CreateNote} from "./CreateNote";
import {Note} from "./Note";
export const App=()=>{
const [addItem,setAddItem]=useState([]);
const addNote=(note)=>{
     
    setAddItem((prevData)=>{
         return [...prevData,note];
         
          });

//console.log(note);
};
const onDelete=(id)=>{
   if(window.confirm("Are you Sure To delete The Record")==true){
  setAddItem((olddata)=>
      olddata.filter((currentdata,index)=>{
           return index!==id;
       })

);
}
 
 };
   return (
     <>
        
       <Header/>
        <CreateNote passNote={addNote}/>

         <div className="note-box">
       { 
         addItem.map((val,index)=>{
             return<Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete}/>
        })
       }
       </div>
       <Footer/>
 </>
      );
};