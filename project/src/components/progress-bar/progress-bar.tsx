type Props = {
  percent: number;
};

function ProgressBar({percent}: Props): JSX.Element {
  return (
    <div className="player__time">
      <progress
        className="player__progress"
        value={percent}
        max="100"
      />

      <div
        className="player__toggler"
        style={{ 'left': `${percent}%` }}
      >
        Toggler
      </div>
    </div>
  );
}

export default ProgressBar;
