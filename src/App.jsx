import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [ pacientes, setPacientes ] = useState([])
  const [ paciente, setPaciente ] = useState({})

  useEffect( () => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }

    obtenerLS()    
  }, [])

  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  const eliminarPaciente = (id) =>{
    const actualizarPacientes = pacientes.filter( paciente => paciente.id !== id)

    setPacientes(actualizarPacientes)
  }

  return (
    <div className="container mx-auto mt-20">
     <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          setPaciente={setPaciente}
          pacientes={pacientes}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
