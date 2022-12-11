//Functional Component:

//import React from 'react';

//const Header = function() {
  // return (
       //<div className="header">     
        // Phone Directory
       //</div>
   //)
//}

//export default Header;





/*Class Component:

import React, { Component } from 'react';

class Header extends Component {
   render() {
       return (
           <div className="header">
               Phone Directory
           </div>
       )
   }
}

*/






//import React from 'react';

//const Header = function() {
   //return (
      // <div style={{textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase'}}>
   //Phone Directory
//</div>
   //)
//}

//export default Header;





//import React from 'react';

//const Header = function() {
	
//const headerStyle = {
  // textAlign: 'center',
  // padding: 20,
   //background: '#000',
   //color: '#fff',
   //textTransform: 'uppercase'
//};


//return (

//<div style={headerStyle}>

//Phone Directory
   
//</div>

 
   //)
//}

//export default Header;







import React from 'react';

import './Header.css';

const Header = function(props) {
	
//const Header = function() {
	

return (

<div className="header">  

Phone Directory

{/*{props.heading}*/}

 {/*{props.instructor}*/}
  
</div>

 
   )
}

export default Header;
