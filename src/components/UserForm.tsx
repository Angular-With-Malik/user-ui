import React, { ChangeEvent } from 'react'
import { User } from '../model/user'
import { _createUser, _getAllUser, _updateUser } from '../services/employeeService'
import { AxiosResponse } from 'axios'
import { Button, TextField } from '@mui/material'

const UserForm = (props: {
    currentUser: User, setCurrentUser: Function,
    setFlag: Function
}) => {

    const { currentUser, setCurrentUser, setFlag } = props

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = event.target
        console.log(value, ' : ', name);
        setCurrentUser({
            ...currentUser,
            [name]: value
        })
    }

    const save = () => {
        if (currentUser.id === '')
            createUser()
        else
            updateUser()
    }

    const updateUser = () => {
        _updateUser(currentUser).then((response: AxiosResponse) => {
            console.log(response);
            if (response.status === 200) {
                setFlag(true)
            }
            clearForm()
        })
    }

    const createUser = async () => {
        let newUserId: string = await getMaxUserId()
        console.log(newUserId);
        currentUser.id = newUserId
        _createUser(currentUser).then((response: AxiosResponse) => {
            console.log(response);
            if (response.status === 201) {
                setFlag(true)
            }
            clearForm()
        })
    }

    const getMaxUserId = (): Promise<string> => {
        return new Promise(resolve => {
            _getAllUser().then((response: AxiosResponse) => {
                let allUser: User[] = response.data
                let allUserId = allUser.map((user: User) => Number(user.id))
                console.log(allUserId);
                let maxUserId = Math.max(...allUserId)
                console.log(maxUserId);
                resolve(String(maxUserId + 1))
            })
        })
    }

    const clearForm = () => {
        setCurrentUser({
            id: '',
            rollNumber: 0,
            contactNumber: '',
            adharCardNumber: '',
            firstName: '',
            lastName: '',
            carNumber: ''
        })
    }

    return (
        <>
            {/* <input placeholder='First Name' className='form-control mb-3'
                value={currentUser.firstName}
                onChange={(event) => handleChange(event)}
                name='firstName'
            /> */}
            <TextField label='First Name' variant='standard'
                className='w-100 mb-2'
                value={currentUser.firstName}
                onChange={(event) => handleChange(event)}
                name='firstName' />

            {/* <input placeholder='Last Name' className='form-control mb-3'
                value={currentUser.lastName}
                onChange={(event) => handleChange(event)}
                name='lastName'
            /> */}

            <TextField label='Last Name' variant='standard'
                className='w-100 mb-2'
                value={currentUser.lastName}
                onChange={(event) => handleChange(event)}
                name='lastName' />

            {/* <input placeholder='Contact Number' className='form-control mb-3'
                value={currentUser.contactNumber}
                onChange={(event) => handleChange(event)}
                name='contactNumber'
            /> */}

            <TextField label='Contact Number' variant='standard'
                className='w-100 mb-2'
                value={currentUser.contactNumber}
                onChange={(event) => handleChange(event)}
                name='contactNumber' />

            {/* <input placeholder='Adhar Card Number' className='form-control mb-3'
                value={currentUser.adharCardNumber}
                onChange={(event) => handleChange(event)}
                name='adharCardNumber'/> */}

            <TextField label='Adhar Card Number' variant='standard'
                className='w-100 mb-3'
                value={currentUser.adharCardNumber}
                onChange={(event) => handleChange(event)}
                name='adharCardNumber' />

            <div className='row'>
                <div className='col-md-6'>
                    {/* <button className='btn btn-primary w-100'
                        onClick={() => save()}>
                        SAVE
                    </button> */}
                    <Button variant='contained' className='w-100'
                        onClick={() => save()}>
                        SAVE
                    </Button>
                </div>
                <div className='col-md-6'>
                    {/* <button className='btn btn-secondary w-100'
                        onClick={() => clearForm()}>
                        CLEAR
                    </button> */}
                    <Button variant='contained'
                        color='inherit'
                        className='w-100'
                        onClick={() => clearForm()}>
                        CLEAR
                    </Button>
                </div>
            </div>
        </>
    )
}

export default UserForm