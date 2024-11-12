import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './conversor';

function App() {
  const [usuario, setUsuario] = useState ('')
  const [clave, setclave] = useState('')
  const [logueado, setlogueado] = useState (false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value) 
  }

function cambiarClave(evento) {
  setclave(evento.target.value)
}

function ingresar() {
 if (usuario == 'jsanchez' && clave =='123456'){
  alert('ingresaste')
  setlogueado(true)
 }else{
  alert('usuario o clave incorrecta ')
}
}

if (logueado) {
return <Conversor />
}

  return (
    <>
    <h1>Inicio de sesion</h1>
    <input placeholder='Usuario'type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>
    <input placeholder='Clave'type="password" name="clave" id="clave" value={clave}  onChange={cambiarClave}/>
    <button onClick={ingresar}>ingresar</button>

    </>
  )
}

export default App
