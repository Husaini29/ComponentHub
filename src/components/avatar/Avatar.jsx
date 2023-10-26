import "./avatar.css";

export const Avatar = ({ avatarUrl, altText, size }) => {
  return (
    <div
      className={
        size === "xs"
          ? " avatar avatar-xs"
          : size === "sm"
          ? " avatar avatar-sm"
          : size === "md"
          ? " avatar avatar-md"
          : size === "lg"
          ? " avatar avatar-lg"
          : "avatar"
      }
    >
      <img className="avatar-img" src={avatarUrl} alt={altText} />
    </div>
  );
};
