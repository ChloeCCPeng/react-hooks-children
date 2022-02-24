import React from "react";
import App from "./App";

function Container({
  header,
  children,
  textPosition = "", // possible values: left, right, center
  direction = "horizontal", // possible values: vertical, horizontal
  contentPosition = "center", // possible values: left, right, center
}) {
  return (
    <div className={`container ${textPosition}`}>
      {header ? <h2>{header}</h2> : null}

      <div className={`container-children ${direction} ${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;

// funciton App(props){
//   return (
//     <div className="App">
//       <Container header="Example header" direction="horizontal">
//         <div>{props.exampleMessage}</div>
//       </Container>

// }


// <Example exampleProp="example value" />;

// <Example exampleProp="example value">
//   <h1>Example header!</h1>
//   <p>Some example text</p>
// </Example>
