import { expect } from 'chai'
import whoWantsADate from '../excercises/who_wants_a_date'

describe.only('whoWantsADate', () => {
  it('exists', () => {
    expect(whoWantsADate).to.be.a('function')
  })
  it('returns the date in the proper format', () => {
    expect(whoWantsADate('2017-02-20')).to.equal('2017-02-20')
  })
  it('returns the date in the proper format', () => {
    expect(whoWantsADate('02/20/17')).to.equal('2017-02-20')
  })
  it('returns the date in the proper format', () => {
    expect(whoWantsADate('02#17#20')).to.equal('2017-02-20')
  })
  it('returns the date in the proper format', () => {
    expect(whoWantsADate('20*02*2017')).to.equal('2017-02-20')
  })
  it('returns the date in the proper format', () => {
    expect(whoWantsADate('Feb 20, 17')).to.equal('2017-02-20')
  })
  it('returns the date in the proper format', () => {
    expect(whoWantsADate('Feb 20, 2017')).to.equal('2017-02-20')
  })
})
