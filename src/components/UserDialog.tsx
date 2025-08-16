import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { UserDialogModel } from "../model/userDialog"

const UserDialog = (props: { openDialog: UserDialogModel, setOpenDialog: Function }) => {

    const { openDialog, setOpenDialog } = props

    const { currentUser } = openDialog

    const close = () => {
        setOpenDialog({
            currentUser: {
                id: '',
                rollNumber: 0,
                contactNumber: '',
                adharCardNumber: '',
                firstName: '',
                lastName: '',
                carNumber: ''
            },
            flag: false
        })
    }
    return (
        <>
            <Dialog open={openDialog.flag}>
                <DialogTitle>User Details for <b>{currentUser.firstName}</b> </DialogTitle>
                <DialogContent>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Roll Number</th> <td>: {currentUser.rollNumber}</td>
                            </tr>
                            <tr>
                                <th>First Name</th> <td>: {currentUser.firstName}</td>
                            </tr>
                            <tr>
                                <th>Last Name</th> <td>: {currentUser.lastName}</td>
                            </tr>
                            <tr>
                                <th>Contact Number</th> <td>: {currentUser.contactNumber}</td>
                            </tr>
                            <tr>
                                <th>Adhar Card Number</th> <td>: {currentUser.adharCardNumber}</td>
                            </tr>
                            <tr>
                                <th>Car Number</th> <td>: {currentUser.carNumber}</td>
                            </tr>
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => close()}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default UserDialog
