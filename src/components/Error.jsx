import PropTypes from 'prop-types'

const Error = ({children}) => {
  return (
    <div 
        className='tracking-widest rounded-xl mb-5 p-3 text-center font-bold text-white uppercase bg-red-600'>
        <p>{children}</p>
    </div>
  )
}

Error.PropTypes = {
  children: PropTypes.any.isRequired
}
export default Error