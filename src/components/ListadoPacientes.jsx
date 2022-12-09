import Paciente from './Paciente'
import PropTypes from 'prop-types'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className='.--md:w-1/2 lg:w-3/5 md:h-screen '>

      {pacientes && pacientes.length 
      ? 
        <>
          <h2 className='font-black text-center text-2xl'>
            Listado Pacientes
          </h2>

          <p className='font-bold text-xl text-center my-5'>Administra tus {' '}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span></p>

          <div className='md:h-screen overflow-y-scroll'>
            {pacientes.map( (paciente) => (
              <Paciente 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}        
          </div>  
        </>
      :
        <>
        <h2 className='font-black text-center text-2xl'>
            No hay Pacientes
          </h2>

          <p className='font-bold text-xl text-center my-5'>Carga tu Listado de {' '}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span></p>
        </>
      }
        

    </div>
  )
}

ListadoPacientes.propTypes = {
  pacientes: PropTypes.array.isRequired, 
  setPaciente: PropTypes.func.isRequired, 
  eliminarPaciente: PropTypes.func.isRequired
}

export default ListadoPacientes