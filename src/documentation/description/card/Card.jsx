import {
  CardWithBadge,
  CardWithDismiss,
  CardWithShadow,
  CardWithTextOverlay,
  HorizontalCard,
  TextOnlyCard
} from "../../../components";
import { CodeBlock } from "../../codeBlock/CodeBlock";
import "./card.css";

const book = {
  title: "Lord of the Flies",
  imageUrl:
    "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  author: "William Golding",
  description:
    "Lord of the Flies is a 1954 novel by the Nobel laureate British author William Golding."
};

export const CardDoc = () => {
  const cardWithBadgeString = `
  const book ={
    title:"Lord of the Flies",
    imageUrl:"imageurl.png",
    author:"William Golding",
    description:"Lord of the Flies is a 1954 novel by the Nobel laureate British author William Golding."
  }

  <CardWithBadge book={book} badgeText="New"/>
  `;

  const cardWithDismissString = `
  const book ={
    title:"Lord of the Flies",
    imageUrl:"imageurl.png",
    author:"William Golding",
    description:"Lord of the Flies is a 1954 novel by the Nobel laureate British author William Golding."
  }

  <CardWithDismiss book={book} />
  `;

  const cardWithTextOverlayString = `
  const book ={
    title:"Lord of the Flies",
    imageUrl:"imageurl.png",
    author:"William Golding",
    description:"Lord of the Flies is a 1954 novel by the Nobel laureate British author William Golding."
  }

  <CardWithTextOverlay book={book} />
  `;

  const textOnlyCardString = `
  const book ={
    title:"Lord of the Flies",
    author:"William Golding",
    description:"Lord of the Flies is a 1954 novel by the Nobel laureate British author William Golding."
  }

  <TextOnlyCard book={book} />
  `;

  const horizontalCardString = `
  const book ={
    title:"Lord of the Flies",
    imageUrl:"imageurl.png",
    author:"William Golding",
    description:"Lord of the Flies is a 1954 novel by the Nobel laureate British author William Golding."
  }

  <HorizontalCard book={book} />
  `;

  const cardWithShadowString = `
  const book ={
    title:"Lord of the Flies",
    imageUrl:"imageurl.png",
    author:"William Golding",
    description:"Lord of the Flies is a 1954 novel by the Nobel laureate British author William Golding."
  }

  <CardWithShadow book={book} />
  `;
  return (
    <div className="main-card-container">
      <div className="card-head">Card</div>
      <div className="card-content">
        This is a basic card which which contains a badge. Badges are used to
        highlight specific information to catch the user's attention. They can
        appear to top-left or top-right corner of the card.
      </div>
      <hr />
      <div className="card-type">Card with badges</div>
      <div className="card-container">
        <CardWithBadge book={book} badgeText="New" />
      </div>
      <h3>How to use CardWithBadge component</h3>
      <CodeBlock codeString={cardWithBadgeString} />

      <div className="card-type">Card with dismiss</div>

      <hr />
      <div className="card-container">
        <CardWithDismiss book={book} />
      </div>
      <h3>How to use CardWithDismiss component</h3>
      <CodeBlock codeString={cardWithDismissString} />

      <div className="card-type">Card with Text Overlay</div>
      <hr />
      <div className="card-container">
        <CardWithTextOverlay book={book} />
      </div>
      <h3>How to use CardWithTextOverlay component</h3>
      <CodeBlock codeString={cardWithTextOverlayString} />

      <div className="card-type">Card with Text Only</div>
      <hr />
      <div className="card-container">
        <TextOnlyCard book={book} />
      </div>
      <h3>How to use TextOnlyCard component</h3>
      <CodeBlock codeString={textOnlyCardString} />

      <div className="card-type">Horizontal Card</div>
      <hr />
      <div className="card-container">
        <HorizontalCard book={book} />
      </div>
      <h3>How to use HorizontalCard component</h3>
      <CodeBlock codeString={horizontalCardString} />

      <div className="card-type">Card with Shadow</div>
      <hr />
      <div className="card-container">
        <CardWithShadow book={book} />
      </div>
      <h3>How to use CardWithShadow component</h3>
      <CodeBlock codeString={cardWithShadowString} />
    </div>
  );
};
