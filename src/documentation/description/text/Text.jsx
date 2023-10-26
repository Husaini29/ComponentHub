import { Text } from "../../../components";
import "./text.css";
import { CodeBlock } from "../../codeBlock/CodeBlock";

export const TextDoc = () => {
  const textString = `
  <Text size="xxxl">This is an example text.</Text>
  <Text size="xxl">This is an example text.</Text>
  <Text size="xl">This is an example text.</Text>
  <Text size="md">This is an example text.</Text>
  <Text size="sm">This is an example text.</Text>
  <Text size="xs">This is an example text.</Text>
  `;
  return (
    <div>
      <div className="text-head">Text</div>
      <div className="text-content">
        Text is used to render text and paragraphs within the interface.
      </div>

      <hr />

      <div className="text-topic">Texts</div>
      <div className="text-container">
        <Text size="xxxl">This is an example text.</Text>
        <Text size="xxl">This is an example text.</Text>
        <Text size="xl">This is an example text.</Text>
        <Text size="md">This is an example text.</Text>
        <Text size="sm">This is an example text.</Text>
        <Text size="xs">This is an example text.</Text>
      </div>

      <h3>How to use this code</h3>
      <CodeBlock codeString={textString} />
    </div>
  );
};
