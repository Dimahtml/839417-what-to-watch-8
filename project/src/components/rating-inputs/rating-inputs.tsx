import React, {useState, ChangeEvent} from 'react';

function RatingInputs(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rating, setRating] = useState(0);
  const inputs = [];

  for (let i=10; i>=1; i--) {
    inputs.push(
      <React.Fragment>
        <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i} key={`star-${i}`}
          onChange={ ({target}: ChangeEvent<HTMLInputElement>) => {
            setRating(Number(target.value));
          }}
        />
        <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
      </React.Fragment>,
    );
  }

  return (
    <div className="rating__stars">
      {inputs}
    </div>
  );
}

export default RatingInputs;
