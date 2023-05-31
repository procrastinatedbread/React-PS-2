import { useState } from "react";

const About = ({ heading, name, learning }) => {
  const [showLearning, setShowLearning] = useState(false);
  return (
    <>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setShowLearning(!showLearning);
        }}
      >
        {showLearning ? "Hide" : "Know"} More
      </button>
      {showLearning && <p>{learning}</p>}
    </>
  );
};
export default About;
