/* eslint-disable no-console */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {Reviews} from '../../types/review';
import TabContent from '../tab-content/tab-content';

type TabsProps = {
  film: Film;
  reviews: Reviews;
}

const items = [
  {title: 'Overview'},
  {title: 'Details'},
  {title: 'Reviews'},
];

function Tabs({film, reviews}: TabsProps): JSX.Element {
  const [active, setActive] = useState(0);
  const hash = items[active].title;
  const filmId = film.id;

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {items.map((item, index) => (
            <li
              className={`film-nav__item ${index === active ? 'film-nav__item--active' : ''}`}
              key={item.title}
              onClick={(evt: React.MouseEvent<HTMLLIElement>) => {
                setActive(Number(index));
              }}
            >
              <Link
                className="film-nav__link"
                to={{
                  pathname: `/films/${filmId}`,
                  hash: `#${hash}`,
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <TabContent film={film} tabIndex={active} reviews={reviews} />
    </div>
  );
}

export default Tabs;
