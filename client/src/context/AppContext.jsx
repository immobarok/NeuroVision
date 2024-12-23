import { createContext } from 'react'
import React from 'react'

export const AppContext = createContext()
const AppContextProvider = (props) => {
  const [user, setUser] = React.useState(null);
  const [showLogin, setShowLogin] = React.useState(false);
  const value = {
    user, setUser, showLogin, setShowLogin
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider; 