const Todo = ({ todoItems }) => {
  return (
    <>
      {todoItems.map(({ id, title, description, isCompleted }) => {
        return (
          <>
            <h1
              key={id}
              style={{
                color: isCompleted ? "green" : "red"
              }}
            >
              {title}
            </h1>
            <p
              key={id}
              style={{
                color: isCompleted ? "green" : "red"
              }}
            >
              {description}
            </p>
          </>
        );
      })}
    </>
  );
};
export default Todo;
