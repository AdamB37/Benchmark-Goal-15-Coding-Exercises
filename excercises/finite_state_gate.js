export default class FiniteStateGate {
  constructor(state = 'CLOSED') {
    let _state = state
    let _start = 0
    let _progress = 0
    let _stateChange = null
    this.getState = () => {
      return _state
    }
    this.changeStateFromClosed = () => {
      _start = new Date()
      _state = 'OPENING'
      clearTimeout(_stateChange)
      _stateChange = setTimeout( () => {
        _state = 'OPEN'
      }, 10000)
    }

    this.changeStateFromStoppedWhileClosing = () => {
      let duration = _progress - _start
      console.log('duration',duration);
      _start = new Date()
      _state = 'OPENING'
      clearTimeout(_stateChange)
      _stateChange = setTimeout( () => {
        _state = 'OPEN'
      }, duration)
    }

    this.changeStateFromOpen = () => {
      _start = new Date()
      _state = 'CLOSING'
      clearTimeout(_stateChange)
      _stateChange = setTimeout( () => {
        _state = 'CLOSED'
      }, 10000)
    }

    this.changeStateFromStoppedWhileOpening = () => {
      let duration = _progress - _start
      console.log('duration',duration);
      _start = new Date()
      _state = 'CLOSING'
      clearTimeout(_stateChange)
      _stateChange = setTimeout( () => {
        _state = 'CLOSED'
      }, duration)
    }

    this.changeStateFromClosing = () => {
      _progress = new Date()
      clearTimeout(_stateChange)
      _state = 'STOPPED_WHILE_CLOSING'
    }

    this.changeStateFromOpening = () => {
      _progress = new Date()
      clearTimeout(_stateChange)
      _state = 'STOPPED_WHILE_OPENING'
    }
  }

  remoteClick() {
    switch (this.getState()) {
      case 'CLOSED':
        this.changeStateFromClosed()
        break
      case 'CLOSING':
        this.changeStateFromClosing()
        break
      case 'STOPPED_WHILE_CLOSING':
      console.log('here')
        this.changeStateFromStoppedWhileClosing()
        break
      case 'OPEN':
        this.changeStateFromOpen()
        break
      case 'OPENING':
        this.changeStateFromOpening()
        break
      case 'STOPPED_WHILE_OPENING':
        this.changeStateFromStoppedWhileOpening()
        break
      default:
        break
    }
  }


}
