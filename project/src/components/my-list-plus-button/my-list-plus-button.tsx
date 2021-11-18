import React from 'react';

function MyListPlusButton(): JSX.Element {
  return (
    <React.Fragment>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </React.Fragment>
  );
}

export default MyListPlusButton;
