import "./component.css";
import { useNavigate } from "react-router-dom";

export const Component = () => {
  const allComponents = [
    "Avatar",
    "Alert",
    "Badge",
    "Button",
    "Heading",
    "Card",
    "Text",
    "Image"
  ];

  const navigate = useNavigate();
  return (
    <div>
      <h2>All Components</h2>
      <div className="components-container">
        {allComponents.map((component, index) => (
          <div
            onClick={() => navigate(`/components/${component.toLowerCase()}`)}
            key={index}
            className="components-link"
          >
            <span>{component}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
