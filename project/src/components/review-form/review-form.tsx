import React, {useState, ChangeEvent} from 'react';

function RatingInputs(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rating, setRating] = useState(0);
  const inputs = [];

  for (let i=10; i>=1; i--) {
    inputs.push(
      <React.Fragment>
        <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i}
          onChange={ ({target}: ChangeEvent<HTMLInputElement>) => {
            setRating(Number(target.value));
            // eslint-disable-next-line no-console
            console.log(target.value);
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

function ReviewForm(): JSX.Element {
  const [message, setMessage] = useState('');
  const inputs =<RatingInputs />;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          {inputs}
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
            onChange={( {target}: ChangeEvent<HTMLTextAreaElement>) => {
              setMessage(target.value);
            }}
            value={message}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
