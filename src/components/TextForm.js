import React,{useState} from 'react'


export default function TextForm(props) {
     const [text,setText] = useState();
     const handleOnchange =(event)=>
          {
               setText(event.target.value)
          }
     const UperCaseconverter = ()=>
          {
               console.log(text);
               let Newtext = text.toUpperCase();
               setText(Newtext);
          }
     
     return (

          <>
               <div>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                         <textarea placeholder='Enter Something' className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="10"></textarea>
                    </div>
               </div>
               <button className="btn btn-primary" onClick={UperCaseconverter}>Convert to UpperCase</button>
          </>

     )
}
