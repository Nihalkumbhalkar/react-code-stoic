//this is the code to render conditionally anything

// export default function ConditionalComponet() {
//   const condition = true;
//   if (condition) {
//     return <h1>this is a conditional block 1</h1>;
//   } else {
//     return <h1>this is a conditional block 2</h1>;
//   }
// }

// This code is for rendering a component conditonally
// import Code from "./Code";
// import Welcome from "./Welcome";

// export default function ConditionalComponet() {
//   const condition = false;
//   if (condition) {
//     return <Welcome />;
//   } else {
//     return <Code />;
//   }
// }

// This code is for rendering a component conditonally using element variable
// export default () => {
//   let message;
//   const condition = true;
//   if (condition) {
//     message = <h1>This is messaage 1</h1>;
//   } else {
//     message = <h1>This is messaage 2</h1>;
//   }
//   return message;
// };

// This code is for rendering a component conditonally using turnary operator
import Code from "./Code";
import Welcome from "./Welcome";

export default () => {
  const condition = true;
  //   let message1 = <div>"this is message 1"</div>;
  //   let message2 = <div>"this is message 2"</div>;
  //   return condition ? message2 : message1;
  return condition ? <Welcome /> : <Code />;
};
