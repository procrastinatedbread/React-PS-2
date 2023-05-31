const Product = ({ productName, productPrice }) => {
  return (
    <>
      <b
        style={{
          color: "blue"
        }}
      >
        {productName}
      </b>
      <i
        style={{
          color: "green"
        }}
      >
        {productPrice}
      </i>
    </>
  );
};
export default Product;
