/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState, useEffect, ChangeEvent, FormEvent} from 'react';
import RatingInputs from '../rating-inputs/rating-inputs';
import {AddReview} from '../../types/add-review';

type ReviewFormProps = {
  onSubmit: (review: AddReview) => void,
};

function ReviewForm(props: ReviewFormProps): JSX.Element {
  const onSubmit = props.onSubmit;
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [messageDirty, setMessageDirty] = useState(false);
  const [messageError, setMessageError] = useState('Message can`t be empty');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (messageError || rating === 0) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [messageError, rating]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (rating !== undefined && messageError === '') {
      onSubmit({
        rating: rating,
        comment: message,
      });
    }
  };

  const messageHandler = (evt: any) => {
    setMessage(evt.target.value);
    if ((message.length < 50) || (message.length > 400)) {
      setMessageError('Valid message is from 50 to 400 characters');
    } else {
      setMessageError('');
    }
  };

  const blurHandler = (evt: any) => {
    switch (evt.target.name) {
      case 'review-text':
        setMessageDirty(true);
        break;
    }
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <RatingInputs
            onRatingChange={setRating}
          />
        </div>

        <div className="add-review__text">
          {
            (messageDirty && messageError)
              ? <div style={{color:'red'}}>{messageError}</div>
              : ''
          }
          <textarea
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            onChange={(evt) => messageHandler(evt)}
            onBlur={(evt) => blurHandler(evt)}
            value={message}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!formValid}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
