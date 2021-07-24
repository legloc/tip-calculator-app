import Radio from './Radio'

const RadioGroup = ({ name, title, inputs }) => {
  return (
    <div className="radio-group">
      <span className="group-title">{ title }</span>
      <div className="group-wrapper">
        { inputs.map(input => (
          <Radio title={ input } id={ `radio${ input }` } name={ name } />
        )) }
      </div>
    </div>
  )
}

export default RadioGroup