import { createContext } from 'react'
import React from 'react'

export const AppContext = createContext()
const AppContextProvider = (props) => {
  const [user, setUser] = React.useState(null);
  const [showLogin, setShowLogin] = React.useState(false);
  const backendUrl = import.meta.env.BACKEND_URI;
  const value = {
    user, setUser, showLogin, setShowLogin,backendUrl
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider; 