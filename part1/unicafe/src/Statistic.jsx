const Statistic = ({ text, value, suffix }) => (
    <tr>
      <td>{text}</td>
      <td>{value} {suffix}</td>
    </tr>
  )
  
  export default Statistic
  