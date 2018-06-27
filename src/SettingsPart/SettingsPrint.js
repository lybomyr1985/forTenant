 import React from 'react'
 
 
export default class Print extends React.Component {
  render() {
    return (
          
             <div className="sett-printing">
                <button onClick={() => window.print()}>PRINT</button>     
                <p>Click above button opens print preview with these words on page</p>
     
              </div>
           
       )
  }
}