import { useContext } from 'react'
import { UsersContext } from '../context/UserContext'

const useUserContext = () => {
  return useContext(UsersContext)
}

export default useUserContext
