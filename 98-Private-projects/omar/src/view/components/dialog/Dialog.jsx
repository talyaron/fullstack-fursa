import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const DialogComp = ({open, handleClose, title, content, onConfirm}) => {
    const handleAgree = () => {
        onConfirm();
        handleClose();
    }
    return (
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {title}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {content}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Disagree</Button>
      <Button onClick={handleAgree} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default DialogComp