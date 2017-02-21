import { expect } from 'chai'
import resolveSymlink from '../excercises/resolving_symlinks'

describe('resolveSymLink', () => {
  it('exists', () => {
    expect(resolveSymlink).to.be.a('function')
  })
  it('return resolved symlink', () => {
    expect(resolveSymlink(`1
/home/private/documents:/stuff/urgent/docs
/home/private/documents/office`)).to.equal('/stuff/urgent/docs/office')
  })
  it('return resolved symlink', () => {
    expect(resolveSymlink(`3
/bin:/usr/bin
/usr/bin:/usr/local/bin/
/usr/local/bin/log:/var/log-2017
/bin/log/lib`)).to.equal('/var/log-2017/lib')
  })
})
