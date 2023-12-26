const Statstics = ({options, data} ) => (
  <ul>
    {options.map((option, index) => (
      <li key={index}>
       <p >
       {option.toUpperCase()}: {data}
       </p>
      </li>
    ))}
  </ul>
)

export default Statstics;