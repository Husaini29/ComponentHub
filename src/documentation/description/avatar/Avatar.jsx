import { Avatar } from "../../../components";
import { CodeBlock } from "../../codeBlock/CodeBlock";
import "./avatar.css";

export const AvatarDoc = () => {
  const avatarString = `
  <Avatar avatarUrl={"/image.png"} altText="avatarProfile" size="xs" />

  <Avatar avatarUrl={"/image.png"} altText="avatarProfile" size="sm" />

  <Avatar avatarUrl={"/image.png"} altText="avatarProfile" size="md" />

  <Avatar avatarUrl={"/image.png"} altText="avatarProfile" size="lg" />
  `;

  return (
    <div>
      <div className="avatar-head">Avatar</div>
      <div className="avatar-content">
        The Avatar component is used to represent a user, and displays the
        profile picture.
      </div>
      <hr />
      <div className="avatar-type">Simple Round Avatars</div>
      <div className="avatar-container">
        <Avatar
          avatarUrl={
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
          }
          altText="avatarProfile"
          size="xs"
        />

        <Avatar
          avatarUrl={
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
          }
          altText="avatarProfile"
          size="sm"
        />

        <Avatar
          avatarUrl={
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
          }
          altText="avatarProfile"
          size="md"
        />

        <Avatar
          avatarUrl={
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
          }
          altText="avatarProfile"
          size="lg"
        />
      </div>

      <h3>How to use Avatar component</h3>
      <CodeBlock codeString={avatarString} />
    </div>
  );
};
