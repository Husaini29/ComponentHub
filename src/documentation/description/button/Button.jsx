import {
  Button,
  FloatingButton,
  IconButton,
  LinkButton,
  OutlineButton
} from "../../../components";
import { CodeBlock } from "../../codeBlock/CodeBlock";
import "./button.css";
import { HiHome } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";

export const ButtonDoc = () => {
  const solidBtnString = `
  <Button type="primary">Primary</Button>
  <Button type="secondary">Secondary</Button>
  <Button type="success">Success</Button>
  <Button type="warning">Warning</Button>
  `;

  const outlineBtnString = `
  <OutlineButton type="primary">Primary</OutlineButton>
  <OutlineButton type="secondary">Secondary</OutlineButton>
  <OutlineButton type="success">Success</OutlineButton>
  <OutlineButton type="warning">Warning</OutlineButton>
  `;

  const linkBtnString = `
  <LinkButton type="solid">Link</LinkButton>
  <LinkButton type="outline">Link</LinkButton>
  `;

  const iconBtnString = `
  <IconButton icon={<HiHome/>}>Home</IconButton>
  <IconButton icon={<CiSearch/>}>Search</IconButton>
  `;

  const floatingBtnString = `
  <FloatingButton icon={<IoIosAdd/>}/>
  <FloatingButton icon={<AiOutlineCheck/>}/>
  `;

  return (
    <div>
      <div className="btn-head">Button</div>
      <div className="btn-content">
        Button gives you the most interactivity for the user experience. For
        this, library has many multiple types of categories.
      </div>
      <hr />

      <div className="btn-type">Button with background</div>
      <div className="btn-container">
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
      </div>
      <h3>How to use this component</h3>
      <CodeBlock codeString={solidBtnString} />

      <hr />

      <div className="btn-type">Button with outlines</div>
      <div className="btn-container">
        <OutlineButton type="primary">Primary</OutlineButton>
        <OutlineButton type="secondary">Secondary</OutlineButton>
        <OutlineButton type="success">Success</OutlineButton>
        <OutlineButton type="warning">Warning</OutlineButton>
      </div>
      <h3>How to use this component</h3>
      <CodeBlock codeString={outlineBtnString} />

      <div className="btn-type">Button with Links</div>
      <div className="btn-container">
        <LinkButton type="solid">Link</LinkButton>
        <LinkButton type="outline">Link</LinkButton>
      </div>
      <h3>How to use this component</h3>
      <CodeBlock codeString={linkBtnString} />

      <div className="btn-type">Button with Icons</div>
      <div className="btn-container">
        <IconButton icon={<HiHome />}>Home</IconButton>
        <IconButton icon={<CiSearch />}>Search</IconButton>
      </div>
      <h3>How to use this component</h3>
      <CodeBlock codeString={iconBtnString} />

      <div className="btn-type">Button with Floating Actions</div>
      <div className="btn-container">
        <FloatingButton icon={<IoIosAdd />} />
        <FloatingButton icon={<AiOutlineCheck />} />
      </div>
      <h3>How to use this component</h3>
      <CodeBlock codeString={floatingBtnString} />
    </div>
  );
};
