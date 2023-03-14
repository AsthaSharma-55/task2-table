import React from "react";
import "../styles/table.css";
import Popup from "reactjs-popup";
//import { DndProvider, useDrag, useDrop } from "react-dnd";
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

function Table() {
  const arr = [
    {
      id: 1,
      FirstName: "Astha ",
      LastName: "Sharma",
      Subjects: ["Maths", "physics", "chemistry"]
    },

    {
      id: 2,
      FirstName: "karshima ",
      LastName: "Sharma",
      Subjects: ["Maths", "physics", "chemistry", "Hindi", "sanskrit"]
    },
    {
      id: 3,
      FirstName: "samntha",
      LastName: "Sharma",
      Subjects: [
        "Maths",
        "physics",
        "chemistry",
        "sanskrit",
        "hindi",
        "history"
      ]
    }
  ];


  let row;

  const start=(e)=>{
  console.log("jkhdb",e)  
  row = e.target; 
}
const dragover=(e)=>{
  // var e = event;
  console.log("tr",e.target.parentNode)     //tr parentnode
  // console.log("tr-empty",e.target.parentNode.parentNode)  
  // console.log("tr-empty",e.target.parentNode.parentNode.children)

  e.preventDefault();       //cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.


  //The Array.from() method returns an array from any object with a length property.
  ////The Array.from() method returns an array from any iterable object.
  let children= Array.from(e.target.parentNode.parentNode.children);   // tbody(parentnode) tr(parentnode) td(text)       
                                                                                        
                                                                                        
  
  //console.log("first:",children.indexOf(e.target.parentNode))
 
  //when we are dropping (putting)  that will show in particular row index[0,1,2]
  //console.log("second:",children.indexOf(row))
  //console.log("whole condition:",children.indexOf(e.target.parentNode)>children.indexOf(row))

  if(children.indexOf(e.target.parentNode)>children.indexOf(row))   //tr indexs --->  tbody indexes    row means any rowin table
    e.target.parentNode.after(row);        //dragiing downwards(movement upward to downward)
  else
    e.target.parentNode.before(row);         //dragging upwards ^ (movement downward to upward)
}

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>EMAIL</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr draggable="true" onDragStart={(e)=>start(e)} onDragOver={(e)=>dragover(e)}>
            <td>ahon@gmail.com</td>
            <td>axy</td>
          </tr>
          <tr draggable="true" onDragStart={(e)=>start(e)} onDragOver={(e)=>dragover(e)}>
            <td>barygirl@yahoo.com</td>
            <td>hkhkj</td>
          </tr>
          <tr draggable="true" onDragStart={(e)=>start(e)} onDragOver={(e)=>dragover(e)}>
            <td>cha24@yahoo.com</td>
            <td>hkjhk</td>
            
          </tr>
          <tr draggable="true" onDragStart={(e)=>start(e)} onDragOver={(e)=>dragover(e)}>
            <td>dhon@gmail.com</td>
            <td>axy</td>
          </tr>
          <tr draggable="true" onDragStart={(e)=>start(e)} onDragOver={(e)=>dragover(e)}>
            <td>earygirl@yahoo.com</td>
            <td>hkhkj</td>
          </tr>
          <tr draggable="true" onDragStart={(e)=>start(e)} onDragOver={(e)=>dragover(e)}>
            <td>fha24@yahoo.com</td>
            <td>hkjhk</td></tr>
        </tbody>
      </table>
      {/*     
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Subjects</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((items) => {
            return (
              <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.FirstName}</td>
                <td>{items.LastName}</td>
                <td>{items.Subjects[0]}</td>
                <Popup
                  trigger={<button className="Hover" style={{border: "none",backgroundColor: "white",fontSize: "26px"}}>...</button>}
                  position="right center"
                >
                 <div style={{ border: "1px solid aqua", backgroundColor: "aqua" }}>
                      <div className="hide"
                        style={{
                          height: "80px",
                          width: "200px",
                          overflow: "overlay"
                        }}
                      >
                        <ul>
                          {items.Subjects.map((items) => (
                            <li key={items.id}>{items}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                </Popup>
              </tr>
            );
          })}
        </tbody>
      </table> */}




  {/* return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>Age</td>
            </tr>
            <tbody>
              {arr.map((items) => {
                return (
                  <tr
                    draggable="true"
                    onDragStart={(e) => start(e)}
                    onDragOver={(e) => dragover(e)}
                  >
                    <td>{items.id}</td>
                    <td>{items.FirstName}</td>
                    <td>{items.LastName}</td>
                    <td>{items.Subjects[0]}</td>
                  </tr>
                );
              })}
            </tbody>
          </thead>
        </table>
      </div> */}
   



    </div>
  );
}
export default Table;
