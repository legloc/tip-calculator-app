const Radio = ({ title, id, name }) => {
  return (
    <div className="radio-wrapper">
      <input type="radio" id={ id } name={ name } />
      <label htmlFor={ id }>{ title }</label>
    </div>
  )
}

export default Radio