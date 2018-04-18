async function app() {
  const audioCtx = new AudioContext()
  const response = await fetch('/hi_everybody.wav')
  const arrayBuffer = await response.arrayBuffer()
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)

  const source = audioCtx.createBufferSource()

  source.buffer = audioBuffer
  source.connect(audioCtx.destination)

  document.body.onclick = event => {
    const source = audioCtx.createBufferSource()
    source.buffer = audioBuffer
    source.connect(audioCtx.destination)
    source.start()
  }
}

app()
