import { useState } from 'react'
import Input from './Input'
import RadioGroup from './RadioGroup'
import OutputGroup from './OutputGroup'

const Calculator = () => {
  const [state, setState] = useState({
    bill: 0,
    tip: 0,
    persons: 0
  })

  return (
    <div className="calculator">

      <div className="wrapper-input">
        <Input title="Bill" icon="dollar" onChange={ e => setState({ ...state, bill: e }) } />
        <RadioGroup title="Select tip %" name="radio-tip" onSelect={ e => setState({ ...state, tip: e }) } />
        <Input title="Person" icon="person" onChange={ e => setState({ ...state, persons: e }) } />
      </div>

      <div className="wrapper-output">
        <div>
          <OutputGroup title="Tip amount" amount={ state.bill * state.tip * 0.01 / state.persons } />
          <OutputGroup title="Total" amount={ state.bill * state.tip * 0.01 } />
        </div>
        <button className="btn-reset" onClick={ () => setState({ ...state, bill: 1 }) }>Reset</button>
      </div>

    </div>
  )
}

export default Calculator