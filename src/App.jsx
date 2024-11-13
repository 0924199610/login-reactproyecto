import { useEffect, useState } from 'react'
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

async function Ingresar() {
const peticion = await fetch('http://localhost:3000/login?usuario=' + usuario + '&clave=' + clave,{credentials:'include'})
if(peticion.ok){
   setlogueado(true)
}else {
  alert('usuario o clave incorrecta')
}
}







async function validar(){
  const peticion = await fetch('http://localhost:3000/validar',{credentials:'include'})
  if(peticion.ok){
     setlogueado(true)
  }
}

useEffect(()=> {
  validar()
},[])

if (logueado) {
return <Conversor />;


}

  return (
    <>
    <h1>Inicio de sesion</h1>
    <input placeholder='Usuario'type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>
    <input placeholder='Clave'type="password" name="clave" id="clave" value={clave}  onChange={cambiarClave}/>
    <button onClick={Ingresar}>Ingresar</button>

    </>
  );
}

export default App
