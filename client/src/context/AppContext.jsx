import { axios } from 'axios';
import { createContext, useEffect, useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AppContext = createContext()
const AppContextProvider = (props) => {
  const [user, setUser] = React.useState(null);
  const [showLogin, setShowLogin] = React.useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const navigate = useNavigate()


  const [credit, setCredit] = useState(false);
  const backendUrl = import.meta.env.BACKEND_URI;

  const loadCreditsdata = async () => {
    try {
      const { data } = await axios.get(backendUrl + 'api/user/credits', { headers: { token } })
      if (data.success) {
        setCredit(data.credit)
        setUser(data.user)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  //generate image
  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/image/generate-image', { prompt }, { headers: { token } })
      if (data.success) {
        loadCreditsdata()
        return data.resultImage
      } else {
        toast.error(data.message)
        loadCreditsdata()
        if (data.creditBalance === 0) {
          navigate('/buy')
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setUser(null)
  }

  useEffect(() => {
    if (token) {
      loadCreditsdata()
    }
  }, [token])


  const value = {
    user, setUser, showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit, loadCreditsdata, logout, generateImage
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider; 