import "./button.css";

export const Button = ({ children, type }) => {
  return <button className={`btn ${type}-btn`}>{children}</button>;
};

export const OutlineButton = ({ type, children }) => {
  return <button className={`btn ${type}-btn-border`}>{children}</button>;
};

export const LinkButton = ({ type, children }) => {
  return (
    <button
      className={type === "solid" ? "btn link-bg-btn" : "btn link-border-btn"}
    >
      {children}
    </button>
  );
};

export const IconButton = ({ icon, children }) => {
  return (
    <button className="icon-btn">
      {icon}
      <span>{children}</span>
    </button>
  );
};

export const FloatingButton = ({ icon }) => {
  return <button className="floating-btn">{icon}</button>;
};
