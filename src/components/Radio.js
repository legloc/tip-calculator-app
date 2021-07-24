const Radio = ({ title, id, value, name, onClick }) => {
  return (
    <div className="radio-wrapper">
      <input type="radio" id={ id } name={ name } value={ value } onClick={ e => onClick(e.target.value) } />
      <label htmlFor={ id }>{ title }</label>
    </div>
  )
}

export default Radio