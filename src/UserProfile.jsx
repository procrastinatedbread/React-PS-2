const UserProfile = ({ userData }) => {
  const { name, age, email } = userData;
  return (
    <h1>
      Name: {name}, Age: {age}, Email: {email}{" "}
    </h1>
  );
};
export default UserProfile;
