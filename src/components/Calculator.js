import { useState } from 'react'
import Input from './Input'
import RadioGroup from './RadioGroup'
import OutputGroup from './OutputGroup'

const Calculator = () => {
  const [state, setState] = useState({
    bill: null,
    tip: null,
    persons: null,
  })

  const countTotal = () => {
    let count = state.bill * state.tip * 0.01
    return isNaN(count) ? 0 : count
  }

  const countTipAmount = () => {
    let count = countTotal() / state.persons
    return isNaN(count) ? 0 : count
  }

  return (
    <div className="calculator">

      <div className="wrapper-input">
        <Input
          title="Bill"
          icon="dollar"
          value={ state.bill }
          isValid={ state.bill !== 0 }
          onChange={ e => setState({ ...state, bill: e  }) } />
        
        <RadioGroup
          title="Select tip %"
          name="radio-tip"
          onSelect={ e => setState({ ...state, tip: parseInt(e) }) } />
        
        <Input
          title="Person"
          icon="person"
          value={ state.persons }
          isValid={ state.persons !== 0 }
          onChange={ e => setState({ ...state, persons: e }) } />
      </div>

      <div className="wrapper-output">
        <div>
          <OutputGroup
            title="Tip amount"
            amount={ countTipAmount() } />
          
          <OutputGroup
            title="Total"
            amount={ countTotal() } />
        </div>
        <button
          className="btn-reset"
          onClick={ () => setState({ ...state, bill: '', persons: '' }) }>Reset</button>
      </div>

    </div>
  )
}

export default Calculator