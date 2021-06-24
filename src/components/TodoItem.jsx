import React from "react";

const TodoItem = (props) => {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
};

export default TodoItem;

// import React from "react";

// const TodoItem = (props) => {
//   const [isDone, setIsDone] = React.useState(false);
//   return (
//     <div
//       onClick={() => {
//         setIsDone((prevValue) => {
//           return !prevValue;
//         });
//       }}
//     >
//       <li style={{ textDecoration: isDone && "line-through" }}>{props.item}</li>
//     </div>
//   );
// };
