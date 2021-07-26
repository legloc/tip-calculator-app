const Input = ({ title, icon, value, isValid, onChange }) => {
  return (
    <div className={ `input-group ${ !isValid && "input-error" }` }>
      <label className="group-wrapper">
        <div className="group-header">
          <span className="group-title">{ title }</span>
          <span className="group-error">Can't be a zero</span>
        </div>
        <div className={ `input-wrapper icon-${ icon }` }>
          <input type="number" placeholder="0" min="0" value={ value } onChange={ e => onChange(parseInt(e.target.value)) } />
        </div>
      </label>
    </div>
  )
}

export default Input