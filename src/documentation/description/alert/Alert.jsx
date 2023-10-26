import "./alert.css";
import { Alert } from "../../../components";
import { CodeBlock } from "../../codeBlock/CodeBlock";

export const AlertDoc = () => {
  const alertString = `
  <Alert status="success" message="This is an success alert — check it out!" />
  <Alert status="info" message="This is an info alert — check it out!" />
  <Alert status="error" message="This is an error alert — check it out!" />
  <Alert status="warning" message="This is an warning alert — check it out!" />
  `;

  return (
    <div className="alert-document">
      <div className="alert-head">Alert</div>
      <div className="alert-content">
        Alert is a component which is used to draw user's attention to a
        specified thing.
      </div>

      <hr />

      <div className="alert-topic">Alert with background color</div>

      <div className="alert-container">
        <Alert
          status="success"
          message="This is an success alert — check it out!"
        />
        <Alert status="info" message="This is an info alert — check it out!" />
        <Alert
          status="error"
          message="This is an error alert — check it out!"
        />
        <Alert
          status="warning"
          message="This is an warning alert — check it out!"
        />
      </div>
      <h3>How to use Alert component?</h3>
      <CodeBlock codeString={alertString} />
    </div>
  );
};
