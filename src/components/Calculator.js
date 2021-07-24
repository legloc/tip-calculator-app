import Input from './Input'
import RadioGroup from './RadioGroup'

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="wrapper-input">
        <Input title="Bill" icon="dollar" />
        <RadioGroup title="Select tip %" name="radio-tip" inputs={[ '5%', '10%', '15%', '25%', '50%' ]} />
        <Input title="Person" icon="person" />
      </div>
      <div className="wrapper-output"></div>
    </div>
  )
}

export default Calculator