/**
 * The `Content` component is a JavaScript React component that renders the main content of a webpage.
 * @returns The Content component is returning a div element with the className "main-content" and the
 * ContentMain component inside it.
 */
import "./Content.css";
import ContentTop from "../../components/ContentTop/ContentTop";
import ContentMain from "../../components/ContentMain/ContentMain";
const Content = () => {
  return (
    <div className="main-content">
      <ContentMain />
    </div>
  );
};

export default Content;
