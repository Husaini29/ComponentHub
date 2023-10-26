import "./card.css";
import { AiFillHeart, AiOutlineShareAlt, AiOutlineClose } from "react-icons/ai";
import { IoEllipsisVerticalOutline } from "react-icons/io5";

export const CardWithBadge = ({ book, badgeText }) => {
  const { imageUrl, title, author, description } = book;
  return (
    <div className="complete-card relative">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="main-info-cont">
        <h3 className="info-head">{title}</h3>
        <p className="sm-txt">{author}</p>
      </div>
      <div className="sub-info-cont">
        <p className="sub-info">{description}</p>
      </div>
      <div className="footer">
        <button className="button read-btn">Read</button>
        <button className="button bookmark-btn">Bookmark</button>
        <div className="icon-cont">
          <button className="card-icon">
            <AiFillHeart />
          </button>
          <button className="card-icon">
            <AiOutlineShareAlt />
          </button>
          <button className="card-icon">
            <IoEllipsisVerticalOutline />
          </button>
        </div>
      </div>
      <div className="card-badge">{badgeText}</div>
    </div>
  );
};

export const CardWithDismiss = ({ book }) => {
  const { imageUrl, title, author, description } = book;
  return (
    <article className="complete-card relative">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="main-info-cont">
        <h3 className="info-head">{title}</h3>
        <p className="sm-txt">{author}</p>
      </div>
      <div className="sub-info-cont">
        <p className="sub-info">{description}</p>
      </div>
      <div className="footer">
        <button className="button read-btn">Read</button>
        <button className="button bookmark-btn">Bookmark</button>
        <div className="icon-cont">
          <button className="card-icon">
            <AiFillHeart />
          </button>
          <button className="card-icon">
            <AiOutlineShareAlt />
          </button>
          <button className="card-icon">
            <IoEllipsisVerticalOutline />
          </button>
        </div>
      </div>
      <div className="dismiss-badge">
        <AiOutlineClose />
      </div>
    </article>
  );
};

export const CardWithTextOverlay = ({ book, overlayText }) => {
  const { imageUrl, title, author, description } = book;
  return (
    <div className="complete-card relative">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="main-info-cont text-overlay">
        <h3 className="info-head">{title}</h3>
        <p className="sm-txt">{author}</p>
      </div>
      <div className="sub-info-cont">
        <p className="sub-info">{description}</p>
      </div>
      <div className="footer">
        <button className="button read-btn">Read</button>
        <button className="button bookmark-btn">Bookmark</button>
        <div className="icon-cont">
          <button className="card-icon">
            <AiFillHeart />
          </button>
          <button className="card-icon">
            <AiOutlineShareAlt />
          </button>
          <button className="card-icon">
            <IoEllipsisVerticalOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export const TextOnlyCard = ({ book }) => {
  const { title, author, description } = book;
  return (
    <div className="complete-card">
      <div className="main-info-cont">
        <h3 className="info-head">{title}</h3>
        <p className="sm-txt">{author}</p>
      </div>
      <div className="sub-info-cont">
        <p className="sub-info">{description}</p>
      </div>
      <div className="footer">
        <button className="button read-btn">Read</button>
        <button className="button bookmark-btn">Bookmark</button>
        <div className="icon-cont">
          <button className="card-icon">
            <AiFillHeart />
          </button>
          <button className="card-icon">
            <AiOutlineShareAlt />
          </button>
          <button className="card-icon">
            <IoEllipsisVerticalOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export const HorizontalCard = ({ book }) => {
  const { imageUrl, title, author, description } = book;
  return (
    <div className="complete-card">
      <div className="horizontal-content">
        <img src={imageUrl} alt={title} className="card-image hori-img" />
        <div className="main-info-cont">
          <h3 className="info-head">{title}</h3>
          <p className="sm-txt">{author}</p>
          <p className="sub-info text-only">{description}</p>
        </div>
      </div>
      <div className="footer">
        <button className="button read-btn">Read</button>
        <button className="button bookmark-btn">Bookmark</button>
        <div className="icon-cont">
          <button className="card-icon">
            <AiFillHeart />
          </button>
          <button className="card-icon">
            <AiOutlineShareAlt />
          </button>
          <button className="card-icon">
            <IoEllipsisVerticalOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export const CardWithShadow = ({ book }) => {
  const { imageUrl, title, author, description } = book;
  return (
    <div className="complete-card shadow">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="main-info-cont">
        <h3 className="info-head">{title}</h3>
        <p className="sm-txt">{author}</p>
      </div>
      <div className="sub-info-cont">
        <p className="sub-info">{description}</p>
      </div>
      <div className="footer">
        <button className="button read-btn">Read</button>
        <button className="button bookmark-btn">Bookmark</button>
        <div className="icon-cont">
          <button className="card-icon">
            <AiFillHeart />
          </button>
          <button className="card-icon">
            <AiOutlineShareAlt />
          </button>
          <button className="card-icon">
            <IoEllipsisVerticalOutline />
          </button>
        </div>
      </div>
    </div>
  );
};
