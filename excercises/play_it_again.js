function playItAgain() {
  var audioCtx = new AudioContext()
  // var buffer = audioCtx.createBuffer()
  let oscillator = audioCtx.createOscillator()
  oscillator.type = 'square'
  oscillator.frequency = 262
  oscillator.start()
  //262, 294, 330, 349, 392, 440, 494

}
