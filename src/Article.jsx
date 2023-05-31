import { useState } from "react";

const Article = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? "Hide" : "Know"} More
      </button>
      {showContent && <p>{content}</p>}
    </>
  );
};
export default Article;
