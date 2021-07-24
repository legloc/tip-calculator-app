const Input = ({ title, icon }) => {
  return (
    <div className="input-group">
      <label className="group-wrapper">
        <span className="group-title">{ title }</span>
        <div className={ `input-wrapper icon-${ icon }` }>
          <input type="text" placeholder="0.00" />
        </div>
      </label>
    </div>
  )
}

export default Input