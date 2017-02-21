import { expect } from 'chai'
import FiniteStateGate from '../excercises/finite_state_gate'
let gate
let check = (done, callback) => {
  console.log('here');
  try {
    callback()
    done()
  } catch(error) {
    done(error)
  }
}
describe('FiniteStateGate', () => {
  it('exists', () => {
    expect(FiniteStateGate).to.be.a('function')
  })
  it('return open after complete cycle starting from closed', () => {
    gate = new FiniteStateGate
    gate.remoteclicked()
      setTimeout(() => {
        check(done(), () => {
          expect(gate.getState()).to.eql('OPEN')
        })
      }, 11000)
    })
  it('return closed after complete cycle starting form open', () => {
    gate = new FiniteStateGate('OPEN')
    gate.remoteclicked()
    setTimeout(() => {
      expect(gate.getState()).to.eql('CLOSED')
    },11000)
  })
  it('return stopped while closing after remote clicked while closing ', () => {
    gate = new FiniteStateGate('OPEN')
    gate.remoteclicked()
    setTimeout(() => {
      gate.remoteclicked()
      expect(gate.getState()).to.deep.equal('STOPPED_WHILE_CLOSING')
    }, 5000)
  })
  it('return stopped while opening after remote clicked while opening ', () => {
    gate = new FiniteStateGate
    gate.remoteclicked()
    setTimeout(() => {
      gate.remoteclicked()
      expect(gate.getState()).to.eql('STOPPED_WHILE_OPENING')
    }, 5000)
  })
  it('return closing when clicked in the middle of closing', () => {
    gate = new FiniteStateGate('OPEN')
    gate.remoteclicked()
    setTimeout(() => {
      expect(gate.getState()).to.eql('CLOSING')
    }, 5000)
  })
  it('return opening when clicked in the middle of opening', () => {
    gate = new FiniteStateGate
    gate.remoteclicked()
    setTimeout(() => {
      expect(gate.getState()).to.eql('OPENING')
    },5000)
  })
  it('proper duration', () => {
    gate = new FiniteStateGate('OPEN')
    gate.remoteclicked()
    setTimeout(() => {
      gate.remoteclicked()
    }, 5000)
    gate.remoteclicked()
  })
  it('proper duration', () => {
    gate = new FiniteStateGate
    gate.remoteclicked()
    setTimeout(() => {
      gate.remoteclicked()
    }, 5000)
    gate.remoteclicked()
  })
})
