import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function UserBlock(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link to="" className="user-block__link">Sign out</Link>
        </li>
      </ul>
    );
  }
  return (
    <div className="user-block">
      <Link to="sign-in.html" className="user-block__link">Sign in</Link>
    </div>
  );
}

export {UserBlock};
export default connector(UserBlock);