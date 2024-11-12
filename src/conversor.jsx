import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'  

function Conversor() {
  const [textoAvoz, setTextoAvoz] = useState ('')
  const [vozATexto, setVozATexto] = useState ('')

function CambiarTexto(evento) {
  setTextoAvoz(evento.target.value)
}

function convertirtextoAvoz() {
  const synth = window.speechSynthesis
  const utterThis = new SpeechSynthesisUtterance(textoAvoz)
  synth.speak(utterThis)
}
function resultado(event) { 
  setVozATexto(event.results[0][0].transcript);
}
function grabarVozATexto() {
 const recognition = new window.webkitSpeechRecognition()
 recognition.lang = 'es-ES'
 recognition.start()
 recognition.onresult = resultado
}

return (   
<>
<h1>Conversor TTS y STT</h1>
<br />
<h3>conversor de texto a voz</h3>
<input type="text" id="textoAvoz" value={textoAvoz} onChange={CambiarTexto}/>
<button onClick={convertirtextoAvoz}>convertir</button>

<h3>conversor de texto a texto</h3>
<button onClick={grabarVozATexto}>grabar</button>
{vozATexto}
</>
);

}

export default Conversor
