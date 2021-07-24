import Radio from './Radio'

const RadioGroup = ({ name, title, onSelect }) => {
  return (
    <div className="radio-group">
      <span className="group-title">{ title }</span>
      <div className="group-wrapper">
        { [5, 10, 15, 25, 50].map(tip => (
          <Radio key={ tip } title={ `${ tip }%` } id={ `radio${ tip }` } name={ name } value={ tip } onClick={ e => onSelect(e) } />
        )) }
      </div>
    </div>
  )
}

export default RadioGroup