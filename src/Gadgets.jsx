const Gadgets = ({ products }) => {
  return (
    <>
      <ol>
        {products.map(({ id, name, description, price }) => {
          if (price > 50000) {
            return (
              <li
                key={id}
                style={{
                  border: "1px solid black"
                }}
              >
                Name: {name}, Description: {description}, Price:{price}
              </li>
            );
          }
          return (
            <li key={id}>
              Name: {name}, Description: {description}, Price:{price}
            </li>
          );
        })}
      </ol>
    </>
  );
};
export default Gadgets;
