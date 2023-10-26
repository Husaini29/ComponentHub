import { Heading } from "../../../components";
import { CodeBlock } from "../../codeBlock/CodeBlock";
import "./heading.css";

export const HeadingDoc = () => {
  const headingString = `
  <Heading size="h1">H1: This is a heading</Heading>
  <Heading size="h2">H2: This is a heading</Heading>
  <Heading size="h3">H3: This is a heading</Heading>
  <Heading size="h4">H4: This is a heading</Heading>
  <Heading size="h5">H5: This is a heading</Heading>
  <Heading size="h6">H6: This is a heading</Heading>
  `;
  return (
    <div>
      <div className="heading-head">Heading</div>
      <div className="heading-content">
        Heading is used to render semantic HTML heading elements.
      </div>
      <hr />

      <div className="heading-topic"></div>
      <div className="heading-container">
        <Heading size="h1">H1: This is a heading</Heading>
        <Heading size="h2">H2: This is a heading</Heading>
        <Heading size="h3">H3: This is a heading</Heading>
        <Heading size="h4">H4: This is a heading</Heading>
        <Heading size="h5">H5: This is a heading</Heading>
        <Heading size="h6">H6: This is a heading</Heading>
      </div>

      <h3>How to use Heading component</h3>
      <CodeBlock codeString={headingString} />
    </div>
  );
};
