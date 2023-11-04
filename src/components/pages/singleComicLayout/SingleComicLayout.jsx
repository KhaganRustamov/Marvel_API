import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./singleComicLayout.scss";

const SingleComicLayout = ({ data }) => {
  const { title, description, pageCount, thumbnail, language, price, homepage } = data;

  return (
    <div className="single-comic">
      <Helmet>
        <meta name="description" content={title} />
        <title>{title}</title>
      </Helmet>
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
        <div className="single-comic__button__homepage">
          <Link to={homepage} className="button button__main">
            <div className="inner">Homepage</div>
          </Link>
        </div>
        <div className="single-comic__button">
          <Link to="/comics" className="button button__main">
            <div className="inner">Back to all</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleComicLayout;
