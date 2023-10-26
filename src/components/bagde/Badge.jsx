import { Avatar } from "../avatar/Avatar";
import "./badge.css";

export const IconBadge = ({ count, size, children }) => {
  return (
    <div className="icon-badge">
      <span className="icon">
        <span
          className={
            size === "sm"
              ? "icon-sm"
              : size === "md"
              ? "icon-md"
              : size === "lg"
              ? "icon-lg"
              : "icon-default"
          }
        >
          {children}
        </span>
        <span className="badge">{count}</span>
      </span>
    </div>
  );
};

export const AvatarBadge = ({ status, avatarUrl, altText, size }) => {
  return (
    <div className="avatar-badge">
      <Avatar avatarUrl={avatarUrl} altText={altText} size={size} />
      <span className={`badge-dot ${status}`}></span>
    </div>
  );
};
