import { Link } from 'react-router-dom';

function Logo(props: {class: string, path: string}): JSX.Element {
  return (
    <Link className={props.class} to={props.path}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  );
}

export default Logo;
