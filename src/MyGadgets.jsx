import { useState } from "react";

const MyGadgets = ({ productsEighth }) => {
  const [isExpensive, setIsExpensive] = useState(false);
  return (
    <>
      <ol>
        {productsEighth.map(({ id, name, description, price }) => {
          if (isExpensive && price > 50000) {
            return (
              <li
                key={id}
                style={{
                  backgroundColor: "green"
                }}
              >
                Name: {name}, Description: {description}, Price: {price}
              </li>
            );
          }
          return (
            <li key={id}>
              Name: {name}, Description: {description}, Price: {price}
            </li>
          );
        })}
      </ol>
      <button
        onClick={() => {
          setIsExpensive(!isExpensive);
        }}
      >
        {isExpensive ? "Hide" : "Highlight"} Expensive Gadgets
      </button>
    </>
  );
};
export default MyGadgets;
