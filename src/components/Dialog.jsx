import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

const DialogComponent = ({ open, handleClose, handleDelete, id }) => {
    console.log(`idididididid${id}`)
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Delete"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Do want to delete this project?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() =>{ handleDelete(id);handleClose()}}>Delete</Button>
                <Button onClick={handleClose} autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default DialogComponent;