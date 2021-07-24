import Input from './Input'
import Radio from './Radio'

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="wrapper-input">
        <Input title="Bill" icon="dollar" />
        <div className="radio-group">
          <span className="group-title">Select tip %</span>
          <div className="group-wrapper">
            <Radio title="5%" id="radio1" name="radio-tip" />
            <Radio title="10%" id="radio2" name="radio-tip" />
            <Radio title="15%" id="radio3" name="radio-tip" />
            <Radio title="25%" id="radio4" name="radio-tip" />
            <Radio title="50%" id="radio5" name="radio-tip" />
          </div>
        </div>
        <Input title="Person" icon="person" />
      </div>
      <div className="wrapper-output"></div>
    </div>
  )
}

export default Calculator