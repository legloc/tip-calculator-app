import Input from './Input'

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="wrapper-input">
        <Input title="Bill" icon="dollar" />
        <Input title="Person" icon="person" />
      </div>
      <div className="wrapper-output"></div>
    </div>
  )
}

export default Calculator