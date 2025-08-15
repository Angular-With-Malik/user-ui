import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"

const UserDialog = (props: { openDialog: boolean, setOpenDialog: Function }) => {

    const { openDialog, setOpenDialog } = props

    return (
        <>
            <Dialog open={openDialog}>
                <DialogTitle>User Details for 'USER.NAME' </DialogTitle>
                <DialogContent>
                    This will be user content
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default UserDialog
