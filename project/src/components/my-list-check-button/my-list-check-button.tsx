import React from 'react';

function MyListCheckButton(): JSX.Element {
  return (
    <React.Fragment>
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
      <span>My list</span>
    </React.Fragment>
  );
}

export default MyListCheckButton;
