import React from "react";
import Container from "./Container";

function App(message, image){

  const messages = ["This is an example!", "This is an example!", "This is an example!","This is an example!", "This is an example!", "This is an example!", "This is an example!"];

    return (
      <div className="App">
        <Container header="Example header" direction="horizontal">
          <div>
            {messages.map((message, index) => <div key={index}>{message}</div>)}:
          </div>
        </Container>
      </div>
    )
  }
  
  export default App;

//         { <Container header="Example header" textPosition="center">
//           <img>{image}</img>
//         </Container>
//         </div>
        
//     )
// }



// function App() {
//   return (
//     <div className="App">
//       <Container header="Example header" direction="horizontal">
//         <div>This is an example!</div>
//         <div>This is an example!</div>
//         <div>This is an example!</div>
//         <div>This is an example!</div>
//         <div>This is an example!</div>
//         <div>This is an example!</div>
//         <div>This is an example!</div>
//       </Container>
//       <Container header="Example header" textPosition="center">
//         <img
//           alt="turtle"
//           src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
//         />
//         <img
//           alt="turtle"
//           src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
//         />
//         <img
//           alt="turtle"
//           src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
//         />
//         <img
//           alt="turtle"
//           src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
//         />
//       </Container>
//     </div>
//   );
// }
