import PropTypes from 'prop-types'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas Eliminar este Paciente?')

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className='bg-white shadow-md rounded-lg mx-5 mb-3 p-5'>

        <p className='font-bold uppercase mb-3 text-gray-700'>Nombre : {''}
          <span className='font-normal normal-case'>{nombre}</span>
        </p>

        <p className='font-bold uppercase mb-3 text-gray-700'>Propietario : {''}
          <span className='font-normal normal-case'>{propietario}</span>
        </p>

        <p className='font-bold uppercase mb-3 text-gray-700'>Email : {''}
          <span className='font-normal normal-case'>{email}</span>
        </p>

        <p className='font-bold uppercase mb-3 text-gray-700'>Fecha alta : {''}
          <span className='font-normal normal-case'>{fecha}</span>
        </p>

        <p className='font-bold uppercase mb-3 text-gray-700'>Sintomas : {''}
          <span className='font-normal normal-case'>{sintomas}</span>
        </p>

        <div className="flex justify-between">
          <button
            type='button'
            className='py-2 px-10 bg-indigo-600 rounded-lg text-white font-bold'
            onClick={ () => setPaciente(paciente)}
          >Editar</button>

          <button
            type='button'
            className='py-2 px-10 bg-red-600 rounded-lg text-white font-bold'
            onClick={handleEliminar}
          >Eliminar</button>
        </div>
        
      </div>
  )
}

Paciente.propTypes = {
  paciente: PropTypes.object.isRequired,
  setPaciente: PropTypes.func.isRequired,
  eliminarPaciente: PropTypes.func.isRequired 
}

export default Paciente