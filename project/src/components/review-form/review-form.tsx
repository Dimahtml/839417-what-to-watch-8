import {useState, useEffect, FormEvent} from 'react';
import RatingInputs from '../rating-inputs/rating-inputs';
import {AddReview} from '../../types/add-review';
import {useParams} from 'react-router-dom';
import { AppRoute } from '../../const';
import { useHistory } from 'react-router';

const MIN_MESSAGE_LENGTH = 50;
const MAX_MESSAGE_LENGTH = 400;

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
  const history = useHistory();
  const id = +(useParams<{ id: string }>().id);

  useEffect(() => {
    if (messageError || rating === 0) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [messageError, rating]);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (rating !== undefined && messageError === '') {
      try {
        await onSubmit({
          rating: rating,
          comment: message,
        });
        history.push(AppRoute.Film.replace(':id', id.toString()));
      } catch {
        setMessageError('ERROR! Form was not submitted');
      }
    }
  };

  const handleMessage = (evt: any) => {
    setMessage(evt.target.value);
    if ((message.length < MIN_MESSAGE_LENGTH) || (message.length > MAX_MESSAGE_LENGTH)) {
      setMessageError('Valid message is from 50 to 400 characters');
    } else {
      setMessageError('');
    }
  };

  const handleBlur = (evt: any) => {
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
        {
          (messageDirty && messageError)
            ? <div style={{color:'red'}}>{messageError}</div>
            : ''
        }
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            onChange={handleMessage}
            onBlur={handleBlur}
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
