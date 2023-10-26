import "./codeBlock.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { useState } from "react";

export const CodeBlock = ({ codeString }) => {
  const [copy, setCopy] = useState(false);
  return codeString ? (
    <div className="snippet-container">
      <SyntaxHighlighter
        customStyle={{
          padding: "2rem"
        }}
        language="jsx"
        style={nightOwl}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
      {copy ? (
        <button className="copy-btn">
          <MdCheck />
        </button>
      ) : (
        <button
          className="copy-btn"
          onClick={() => {
            navigator.clipboard.writeText(codeString);
            setCopy(true);
            setTimeout(() => {
              setCopy(false);
            }, 3000);
          }}
        >
          <MdOutlineContentCopy />
        </button>
      )}
    </div>
  ) : null;
};
