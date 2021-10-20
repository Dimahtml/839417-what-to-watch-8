import React, {useState, ChangeEvent} from 'react';
import RatingInputs from '../rating-inputs/rating-inputs';

function ReviewForm(): JSX.Element {
  const [message, setMessage] = useState('');

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <RatingInputs />
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
