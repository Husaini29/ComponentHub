import "./alert.css";
import {
  MdErrorOutline,
  MdOutlineCheckCircle,
  MdWarningAmber,
  MdInfo
} from "react-icons/md";

export const Alert = ({ status, message }) => {
  let alertColor;
  let alertBg;
  let alertIcon;

  switch (status) {
    case "error":
      alertColor = "#ff2c2c";
      alertBg = "#ffadad";
      alertIcon = <MdErrorOutline />;
      break;
    case "warning":
      alertColor = "#c4be06";
      alertBg = "#fff6a3";
      alertIcon = <MdWarningAmber />;
      break;
    case "info":
      alertColor = "#077ad9";
      alertBg = "#6ddafc";
      alertIcon = <MdInfo />;
      break;
    case "success":
      alertColor = "#2bd825";
      alertBg = "#a3ff9b";
      alertIcon = <MdOutlineCheckCircle />;
      break;
    default:
      alertBg = "#34d399";
  }
  return (
    <div
      className="alert"
      style={{
        backgroundColor: alertBg,
        color: alertColor,
        border: `1px solid ${alertColor}`
      }}
    >
      <div className="alert-icon">{alertIcon}</div>
      <span>{message}</span>
    </div>
  );
};
