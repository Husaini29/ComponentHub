import { ResponsiveImage, RoundImage } from "../../../components";
import { CodeBlock } from "../../codeBlock/CodeBlock";
import "./image.css";

export const ImageDoc = () => {
  const responseString = `
  <ResponsiveImage imgUrl={"/image.png"} altText={"mountainView"} />
  `;

  const roundString = `
  <RoundImage imgUrl={"/image.png"} altText={"mountainView"} />
  `;
  return (
    <div style={{ width: "70%" }}>
      <div className="image-head">Images</div>
      <div className="image-content">
        An image can be reponsive, which fits in all screen sizes. Images can
        also be round and square.
      </div>
      <hr />
      <div className="image-type">Responsive Images</div>
      <div className="resp-img-content">
        Responsive image are those images which adjust themselves according to
        the container they are in. You can get the idea by minimizing your
        screen.
      </div>
      <div className="image-container">
        <ResponsiveImage
          imgUrl={
            "https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          }
          altText={"mountainView"}
        />
      </div>
      <h3>How to use Responsive Image Component</h3>
      <CodeBlock codeString={responseString} />

      <hr />

      <div className="image-type">Round Images</div>
      <div className="image-container">
        <RoundImage
          imgUrl={
            "https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          }
          altText={"mountainView"}
        />
      </div>
      <h3>How to use Round Image Component</h3>
      <CodeBlock codeString={roundString} />
    </div>
  );
};
