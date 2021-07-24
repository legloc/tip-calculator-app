const OutputGroup = ({ title, amount }) => {
  return (
    <div className="output-group">
      <div>
        <span className="title">{ title }</span>
        <span className="subtitle">/ person</span>
      </div>
      <span className="amount">${ amount }</span>
    </div>
  )
}

export default OutputGroup