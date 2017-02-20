import { expect } from 'chai'
import parensBeGone from '../excercises/parens_be_gone'

describe.only('parensBeGone', () => {
  it('exists', () => {
    expect(parensBeGone).to.be.a('function')
  })
  it('removes all redundant parentheses from expression', () => {
    expect(parensBeGone('((1((23)(45)))6)')).to.equal('((1((23)(45)))6)')
  })
  it('removes all redundant parentheses from expression', () => {
    expect(parensBeGone('(((1234)(((5)67))))')).to.equal('((1234)((5)67))')
  })
  it('removes all redundant parentheses from expression', () => {
    expect(parensBeGone('12((3))')).to.equal('12(3)')
  })
})
