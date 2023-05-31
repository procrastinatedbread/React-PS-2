const Phones = ({ productsPhone }) => {
  return (
    <>
      {productsPhone.map(({ id, name, description, price }) => {
        return (
          <li key={id}>
            Name: {name}, Description: {description}, Price: {price}
          </li>
        );
      })}
    </>
  );
};
export default Phones;
