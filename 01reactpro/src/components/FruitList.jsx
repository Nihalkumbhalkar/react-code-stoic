// This is how we use props

// export default function FruitList(prop) {
//   return (
//     <li>
//       {prop.name} {prop.price} {prop.emoji}{" "}
//     </li>
//   );
// }

// this is how we de-structuring of prop is done

// export default function FruitList({ name, price, emoji }) {
//   return (
//     <li>
//       {name} {price} {emoji}
//     </li>
//   );
// }

// this code is for condtionally printing the elements

// export default function FruitList({ name, price, emoji }) {
//   return (
//     <>
//       {price <= 20 ? (
//         <li>
//           {name} {price} {emoji}{" "}
//         </li>
//       ) : (
//         " "
//       )}
//     </>
//   );
// }

// this code is for condtionally printing the text in certain elemnts

export default function FruitList({ name, price, emoji, available }) {
  return (
    <>
      <li>
        {name} {price} {emoji} {available ? "available" : "not available"}
      </li>
    </>
  );
}
