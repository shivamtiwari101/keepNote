import React from "react";
 
export const Footer=()=>{
  const year=new Date().getFullYear();
        return( 
             <footer className="footer">
            <p>&copy;and &reg; BY Shivam Keep App {year}</p>
           </footer>
      );
}
