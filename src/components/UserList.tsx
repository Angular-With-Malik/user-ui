import React, { useEffect, useState } from 'react'
import { _deleteUser, _getAllUser } from '../services/employeeService'
import { AxiosResponse } from 'axios'
import { User } from '../model/user'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import UserDialog from './UserDialog';

const UserList = (props: {
    setCurrentUser: Function, flag: boolean,
    setFlag: Function
}) => {

    const { setCurrentUser, flag, setFlag } = props

    const [allUser, setAllUser] = useState<User[]>([])

    useEffect(() => {
        getAllUser()
    }, [flag])

    const getAllUser = () => {
        _getAllUser().then((response: AxiosResponse) => {
            console.log(response);
            setAllUser(response.data)
            setFlag(false)
        })
    }

    const deleteUser = (id: string) => {
        _deleteUser(id).then((response: AxiosResponse) => {
            getAllUser()
        })
    }

    const [openDialog, setOpenDialog] = useState<boolean>(false)

    const openUserDialog = () => {
        setOpenDialog(true)
    }

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Roll Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Adhar Card Number</th>
                        <th>Contact Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUser.map((user: User) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.rollNumber}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.adharCardNumber}</td>
                                <td>{user.contactNumber}</td>
                                <td>
                                    {/* <a className='text-primary'
                                        onClick={() => setCurrentUser(user)}>
                                        <i className='bi bi-pen-fill'></i>
                                    </a> */}
                                    <a onClick={() => setCurrentUser(user)}>
                                        <EditIcon color='info' />
                                    </a>
                                    {/* <a className='m-3 text-danger'
                                        onClick={() => deleteUser(user.id)}>
                                        <i className='bi bi-trash-fill'></i>
                                    </a> */}
                                    <a onClick={() => deleteUser(user.id)} className='m-3'>
                                        <DeleteForeverIcon color='error' />
                                    </a>
                                    {/* <a className='text-secondary'>
                                        <i className='bi bi-eye-fill'></i>
                                    </a> */}
                                    <a onClick={() => openUserDialog()}>
                                        <VisibilityIcon color='primary' />
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <UserDialog openDialog={openDialog} 
                setOpenDialog={(value:boolean) => setOpenDialog(value)} />
        </div>
    )
}

export default UserList