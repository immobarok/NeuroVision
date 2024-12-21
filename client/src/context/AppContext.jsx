import { createContext } from 'react'
import React from 'react'

export const AppContext = createContext()
const AppContextProvider = (props) => {
  const [user, setUser] = React.useState(true);
  const value = {
    user,
    setUser
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider; 