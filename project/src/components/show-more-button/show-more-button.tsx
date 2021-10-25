import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {showMoreFilms as showMoreFilmsState} from '../../store/action';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({initialFilms, activeFilms, showedFilmsIndex}: State) => ({
  initialFilms,
  activeFilms,
  showedFilmsIndex,
});

// С использованием bindActionCreators
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onShowMoreFilms: showMoreFilmsState,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function ShowMoreButton(props: ConnectedComponentProps): JSX.Element {
  const {onShowMoreFilms} = props;
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={(evt) => {
          onShowMoreFilms();
        }}
      >
      Show more
      </button>
    </div>
  );
}

export {ShowMoreButton};
export default connector(ShowMoreButton);
