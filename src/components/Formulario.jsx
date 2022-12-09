import { useState, useEffect } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    
    const [ nombre, setNombre ] = useState('')
    const [ propietario, setPropietario ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ fecha, setFecha ] = useState('')
    const [ sintomas, setSintomas ] = useState('')

    const [ error, setError ] = useState(false)

    useEffect(() => {
        
      if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      }

    }, [paciente])
    

    const generarId = () => {
        const fecha = Date.now().toString(36)
        const random = Math.random().toString(36).substring(2)

        return fecha + random
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Validacion de campos
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true)
            return;
        }
        // Reseteo de mensaje error
        setError(false)
        
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if(paciente.id){
            // Editando Registro
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( statePacientes => 
            statePacientes.id === paciente.id ? objetoPaciente : statePacientes )
            
            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            // Cargando Nuevo Registro
            objetoPaciente.id = generarId()
            setPacientes([
                ...pacientes,
                objetoPaciente
            ])
        }       

        // Reinicio de formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

  return (

    <div className='xs:mr-5 ml-5 md:w-1/2 lg:w-2/5 md:h-screen'>

        <h2 className='font-black text-center text-2xl'>
            Seguimiento Pacientes
        </h2>

        <p className='font-bold text-xl text-center my-5'>Añade Pacientes y {' '}
        <span className='text-indigo-600'>Administralos</span></p>

        <form 
            className='bg-white shadow-md rounded-lg px-3 pt-5 pb-5'
            onSubmit={handleSubmit}
        >
            {error && <Error>todos los campos son obligatorios</Error>
                
            }
            
            <div className='pb-5 px-5'>
                <label className='block my-2 uppercase font-bold' htmlFor="mascota">
                    Mascota
                </label>
                <input className='w-full border-2 p-2 placeholder-gray-600 rounded-md'
                    type="text" 
                    id='mascota'
                    placeholder='Nombre de la Mascota'
                    value={nombre}
                    onChange={ (e) => setNombre(e.target.value)}
                />
            </div>

            <div className='py-5 px-5'>
                <label className='block my-2 uppercase font-bold' htmlFor="propietario">
                    Propietario
                </label>
                <input className='w-full border-2 p-2 placeholder-gray-600 rounded-md'
                    type="text" 
                    id='propietario'
                    placeholder='Nombre del Propietario'
                    value={propietario}
                    onChange={ (e) => setPropietario(e.target.value)}

                />
            </div>

            <div className='py-5 px-5'>
                <label className='block my-2 uppercase font-bold' htmlFor="email">
                    Email
                </label>
                <input className='w-full border-2 p-2 placeholder-gray-600 rounded-md'
                    type="email" 
                    id='email'
                    placeholder='Email de Contacto'
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}

                />
            </div>

            <div className='py-5 px-5'>
                <label className='block uppercase font-bold mb-2' htmlFor="fecha">
                    Fecha Alta
                </label>
                <input className='w-full border-2 p-2 placeholder-gray-600 rounded-md'
                    type="date" 
                    id='fecha' 
                    value={fecha}  
                    onChange={ (e) => setFecha(e.target.value)}
                 
                />
            </div>
            
            <div className='py-5 px-5'>
                <label className='block uppercase font-bold mb-2' htmlFor='sintomas'>
                    Sintomas
                </label>
                <textarea 
                    className='w-full border-2 p-2 placeholder-gray-600 rounded-md resize-none'
                    placeholder='Descripcion de los Sintomas'
                    id='sintomas'
                    value={sintomas}
                    onChange={ (e) => setSintomas(e.target.value)}

                />
            </div>

            <input 
                type="submit" 
                className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-800 cursor-pointer transition-all'
                value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
            />

        </form>

    </div>
    
  )
}

Formulario.propTypes = {
    pacientes: PropTypes.array.isRequired,
    setPacientes: PropTypes.func.isRequired,
    paciente: PropTypes.object.isRequired,
    setPaciente: PropTypes.func.isRequired 
}

export default Formulario