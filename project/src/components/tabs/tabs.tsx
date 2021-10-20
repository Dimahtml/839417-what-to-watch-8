import React, {useState} from 'react';
import {Film} from '../../types/film';
import TabContent from '../tab-content/tab-content';

type TabsProps = {
  film: Film;
}

const items = [
  {title: 'Overview'},
  {title: 'Details'},
  {title: 'Reviews'},
];

function Tabs({film}: TabsProps): JSX.Element {
  const [active, setActive] = useState(0);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {items.map((item, index) => (
            <li
              className={`film-nav__item ${index === active ? 'film-nav__item--active' : ''}`}
              data-index={index}
              key={item.title}
              onClick={(evt: any) => {
                setActive(Number(evt.currentTarget.dataset.index));
              }}
            >
              <a className="film-nav__link">{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <TabContent film={film} tabIndex={active} />
    </div>
  );
}

export default Tabs;
