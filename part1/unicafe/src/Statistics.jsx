import Statistic from './Statistic'

const Statistics = ({ good, neutral, bad, total, suffix }) => {
  return (
    <>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={bad} />
            <Statistic text="All" value={total} />
            <Statistic text="Average" value={total ? (good - bad) / total : 0} />
            <Statistic text="Positive" value={total ? (good / total) * 100 : 0} suffix={suffix} />
          </tbody>
        </table>
      )}
    </>
  )
}

export default Statistics
