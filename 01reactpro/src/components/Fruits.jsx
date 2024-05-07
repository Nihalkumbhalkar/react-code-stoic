// This code is for rendering the array using map function

import FruitList from "./FruitList";

// export default function Fruits() {
//   const fruits = ["apple", "banana", "orange", "fruit2", "fruit3"];
//   return (
//     <div>
//       <ul>
//         {fruits.map((fruit) => (
//           <li className={fruit} key={fruit}>
//             {fruit}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// This code is for rendering the array of object using map function

// export default function Fruits() {
//   const fruits = [
//     { fruit: "apple", price: "10", emoji: "🍎" },
//     { fruit: "banana", price: "20", emoji: "🍌" },
//     { fruit: "orange", price: "30", emoji: "🟠" },
//     { fruit: "pineapple", price: "60", emoji: "🍍" },
//   ];
//   return (
//     <ul>
//       <div>
//         {fruits.map((fruit) => (
//           <li className={fruit} key={fruit.fruit}>
//             {fruit.emoji} {fruit.fruit} {fruit.price}
//           </li>
//         ))}
//       </div>
//     </ul>
//   );
// }

// This code is for rendering the array of object using map function from Fruit list componet it is taking values (parent to child sharing through props)

export default function Fruits() {
  const fruits = [
    { fruitName: "apple", price: "10", emoji: "🍎", available: false },
    { fruitName: "banana", price: "20", emoji: "🍌", available: false },
    { fruitName: "orange", price: "30", emoji: "🟠", available: true },
    { fruitName: "pineapple", price: "60", emoji: "🍍", available: true },
  ];
  return (
    <ul>
      <div>
        {fruits.map((fruit) => (
          <FruitList
            key={fruit.fruitName}
            name={fruit.fruitName}
            price={fruit.price}
            emoji={fruit.emoji}
            available={fruit.available}
          />
        ))}
      </div>
    </ul>
  );
}
