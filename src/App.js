/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/











//import React,{Component} from 'react';
/*
class App extends Component
{
	
render()
{
	
let x= 1;
let y = 2;
	
return(
/*		
<div>



<div className="header">

Phone Directory
		
</div>



<button> Add </button>




<div>

<span> Name </span> <br/>

<span> Phone </span>

</div>




<label htmlFor="name"> Name: </label>

<input id= "name" type= "text" placeholder= "Type Here" defaultValue= "shilpa" /> 


<label htmlFor="name"> Name: </label>

<input id= "name" type= "text" placeholder= "Type Here" defaultValue= {x+y} />




<div id="module">

<p> REACTJS </p>

</div>



</div>
*/
//React.createElement("div", {id: "module"},
   //React.createElement("p", null, "ReactJS")
   //)
		
//);
		
//}
	
//}

//export default App;

// Rendering refers to showing the output in the
// browser.













//import React,{Component} from 'react';

//import Header from "./Header";

//class App extends Component
//{
	
//render()
//{
	
//return(

//<div>



//<Header/>



//<button> Add </button>




//<div>

//<span> Name </span> <br/>

//<span> Phone </span>

//</div>



//</div>

//);
		
//}
	
//}

//export default App;

















import React, { Component } from 'react';

import Header from './Header.js';

import './App.css';

class App extends Component {
		
	
//deleteHandler()
//{
//alert("Delete clicked");
//}



clickHandler(message)
{
alert(message);
}



	
render() {
	  
let subscribers= [           // Array of Object

{
	
id:1,
name:"Shilpa bhat",
phone:"7338795581"
},



{
	
id:2,
name:"Puja bhat",
phone:"6338795581"
},




{
	
id:3,
name:"Shristi jain",
phone:"8338795581"
},



{
	
id:4,
name:"Rajiv kumar",
phone:"5338795581"
}


]


	  
return (
	
<div className="component-container">
	  
        
<Header />




{/*<Header heading="centurion university"/>*/}

{/*<Header heading="centurion university" instructor="india"/>*/}
		
		
		
<div className="component-body-container">
  
  
<button className="custom-btn add-btn">Add</button>




<div className="grid-container heading-container">


<span className="grid-item name-heading">Name</span>

<span className="grid-item phone-heading">Phone</span>


</div>








{/*
<div className="grid-container ">


<span className="grid-item ">Shilpa</span>

<span className="grid-item ">7338795581</span>


</div>






<div className="grid-container ">


<span className="grid-item ">Suresh</span>

<span className="grid-item ">9338795581</span>


</div>







<div className="grid-container ">


<span className="grid-item ">Sachin</span>

<span className="grid-item ">6338795581</span>


</div>
*/}








{
	
subscribers.map(sub => {

return <div  key={sub.id}  className="grid-container ">


<span className="grid-item ">{sub.name}</span>

<span className="grid-item ">{sub.phone}</span>



<span className="grid-item action-btn-container">

{/*<button className="custom-btn delete-btn" onClick={this.deleteHandler}>Delete</button>*/}



<button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this,"Delete Handler clicked")}>Delete</button>

</span>


</div>

})


}


</div>


</div>

  );
	
  }
  
}

export default App;









