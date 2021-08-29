import React,{useState} from "react";
 
export const CreateNote=(props)=>{
const [note,setNote]=useState({
        title:"",
        content:""
      });
const inputEvent=(event)=>{
    /*const value=event.target.value;
     const name=event.target.name;*/
 const{name,value}=event.target;

   setNote((privData)=>{
       return {...privData,[name]:value,};
             
        }); 
 //console.log(note);
};

const addEvent=()=>{
     props.passNote(note);  
       setNote({title:"",
        content:"" }); 
}
const[expend,expendIt]=useState(false);
const show=()=>{
  if(expend==false){
  expendIt(true);
  }
else
expendIt(false);
}

       return( 
           <div className="main_note">
              <form>
                {expend?
              <input type="text" placeholder="Title"  value={note.title} onChange={inputEvent} name="title" className="inner-item"/>
                 :null }
                <textarea placeholder="Write a note......."  value={note.content} onChange={inputEvent} name="content" onClick={show} className="inner-item">
              </textarea>
                <br/>
                 <span className="btn-box">
               <input type="button" value="+" className="btn btn-info" onClick={addEvent}/>
                </span>
             </form>
           </div>
      );
}

 