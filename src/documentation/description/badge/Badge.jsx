import "./badge.css";
import { BsFillCartFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GrNotification } from "react-icons/gr";
import { AvatarBadge, IconBadge } from "../../../components";
import { CodeBlock } from "../../codeBlock/CodeBlock";

export const BadgeDoc = () => {
  const iconBadgeString = `
  <IconBadge count={7} size="lg"><BsFillCartFill /></IconBadge>
  <IconBadge count={3} size="lg"><MdEmail /></IconBadge>
  <IconBadge count={8} size="lg"><GrNotification /></IconBadge>
  `;

  const avatarBadgeString = `
  <AvatarBadge status="online" avatarUrl={"/image.png"} altText="avatarProfile" size="md"/>
  <AvatarBadge status="offline" avatarUrl={"/image.png"} altText="avatarProfile" size="md"/>
  <AvatarBadge status="dnd" avatarUrl={"/image.png"} altText="avatarProfile" size="md"/>
  `;

  return (
    <div>
      <div className="badge-head">Badge</div>
      <div className="badge-content">
        Badges are used to denote a small piece of information.
      </div>
      <hr />
      <div className="badge-type">Badge on icons</div>
      <div className="badge-content">
        Badge on icons are usually used to show how many notifications, items,
        messages you have in a particular app.
      </div>
      <div className="badge-container">
        <IconBadge count={7} size="lg">
          <BsFillCartFill />
        </IconBadge>
        <IconBadge count={3} size="lg">
          <MdEmail />
        </IconBadge>
        <IconBadge count={8} size="lg">
          <GrNotification />
        </IconBadge>
      </div>
      <h3>How to use Icon Badge</h3>
      <CodeBlock codeString={iconBadgeString} />

      <hr />

      <div className="badge-type">Badge on Avatars</div>
      <div className="badge-content">
        Badge on avatars are used to show you the status of that person right
        now. They can be of three types :{" "}
        <span className="focus">Online, offline, do not disturb</span>
      </div>

      <div className="badge-container">
        <AvatarBadge
          status="online"
          avatarUrl={
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
          }
          altText="avatarProfile"
          size="md"
        />

        <AvatarBadge
          status="offline"
          avatarUrl={
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
          }
          altText="avatarProfile"
          size="md"
        />

        <AvatarBadge
          status="dnd"
          avatarUrl={
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
          }
          altText="avatarProfile"
          size="md"
        />
      </div>
      <h3>How to use AvatarBadge </h3>
      <CodeBlock codeString={avatarBadgeString} />
    </div>
  );
};
