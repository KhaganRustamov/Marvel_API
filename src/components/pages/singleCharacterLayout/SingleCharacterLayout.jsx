import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./singleCharacterLayout.scss";

const SingleCharacterLayout = ({ data }) => {
  const { name, fullDescription, thumbnail, comics, info } = data;

  return (
    <div className="single-comic">
      <Helmet>
        <meta name="description" content={name} />
        <title>{name}</title>
      </Helmet>
      <img src={thumbnail} alt={name} className="single-comic__char-img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{name}</h2>
        <p className="single-comic__descr">{fullDescription}</p>
        <div className="single-comic__name">Comics:</div>
        <ul className="char__comics-list">
          {comics.length > 0 ? null : "There is no comics with this character"}
          {comics.map((item, i) => {
            if (i > 4) {
              return;
            }
            return (
              <li key={i} className="char__comics-item">
                <Link to={info} target="_blank" className="char__comics-link">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="single-comic__button">
          <Link to="/" className="button button__main">
            <div className="inner">Back to all</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacterLayout;
