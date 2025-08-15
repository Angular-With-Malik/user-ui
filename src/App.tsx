import React, { useState } from 'react'
import UserList from './components/UserList'
import Header from './shared/template/Header'
import './app.css'
import UserForm from './components/UserForm'
import { User } from './model/user'

const App = () => {

  const [flag, setFlag] = useState<boolean>(false)

  const [currentUser, setCurrentUser] = useState<User>({
    id: '',
    rollNumber: 0,
    contactNumber: '',
    adharCardNumber: '',
    firstName: '',
    lastName: ''
  })

  return (
    <>
      <div className='header-container'>
        <Header />
      </div>
      <div className='row m-2'>
        <div className='col-md-3'>
          <UserForm currentUser={currentUser}
            setCurrentUser={(data: User) => setCurrentUser(data)}
            setFlag={(value: boolean) => setFlag(value)} />
        </div>
        <div className='col-md-9'>
          <UserList setCurrentUser={(data: User) => setCurrentUser(data)}
            flag={flag}
            setFlag={(value: boolean) => setFlag(value)} />
        </div>
      </div>
    </>
  )
}

export default App