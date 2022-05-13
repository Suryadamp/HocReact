import * as React from 'react';
import {Button,TextField,Dialog,DialogActions,DialogContent, DialogContentText,DialogTitle} from "@material-ui/core"




export default function FormDialog(props) {
 
    console.log(props)

  return (
    <div>
      <Button variant="outlined" onClick={props.handleOpen} >
        Open form dialog
      </Button>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={props.handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
