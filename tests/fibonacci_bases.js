import { expect } from 'chai'
import fibonacciBases from '../excercises/fibonacci_bases'

describe.only('fibonacciBases', () => {
  it('exists', () => {
    expect(fibonacciBases).to.be.a('function')
  })
  it('convert from decimal to fibonacci base', () => {
    expect(fibonacciBases('decimal', 16)).to.equal("1001000")
  })
  it('convert from decimal to fibonacci base', () => {
    expect(fibonacciBases('decimal', 31)).to.equal("10100100")
  })
  it('convert from fibonacci base to decimal', () => {
    expect(fibonacciBases('fib', 10)).to.equal("1")
  })
  it('convert from fibonacci base to decimal', () => {
    expect(fibonacciBases('fib', 1)).to.equal("1")
  })
  it('convert from fibonacci base to decimal', () => {
    expect(fibonacciBases('fib', 11111)).to.equal("12")
  })
})
