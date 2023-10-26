import "./text.css";

export const Text = ({ size, children }) => {
  return (
    <p
      className={
        size === "xs"
          ? "xs"
          : size === "sm"
          ? "sm"
          : size === "md"
          ? "md"
          : size === "lg"
          ? "lg"
          : size === "xl"
          ? "xl"
          : size === "xxl"
          ? "xxl"
          : size === "xxxl"
          ? "xxxl"
          : "default"
      }
    >
      {children}
    </p>
  );
};
