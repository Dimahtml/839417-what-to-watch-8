import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import {ThunkAppDispatch} from '../../types/action';
import {logoutAction} from '../../store/api-actions';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  logoutAccount() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function UserBlock(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, logoutAccount} = props;

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link
            className="user-block__link"
            onClick={(evt) => {
              evt.preventDefault();
              logoutAccount();
            }}
            to="/"
          >
            Sign out
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <div className="user-block">
      <Link to="/login" className="user-block__link">Sign in</Link>
    </div>
  );
}

export {UserBlock};
export default connector(UserBlock);
