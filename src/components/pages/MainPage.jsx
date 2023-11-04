import { useState } from "react";
import { Helmet } from "react-helmet";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharSearchForm from "../charSearchForm/CharSearchForm";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const MainPage = () => {
  const [setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel information portal" />
        <title>Marvel information portal</title>
      </Helmet>
      <ErrorBoundary>
        <CharSearchForm />
      </ErrorBoundary>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default MainPage;
