import { confirmAlert } from 'react-confirm-alert';


const ConfirmAlertHook = (handleClickDelete:Function)=> {
    confirmAlert({
        title: 'Confirm  Delete',
        message: 'Are you sure to do this.',
        buttons: [  {label: 'Yes', onClick: () => handleClickDelete()}, {label: 'No', onClick: () => {}}],
        overlayClassName:"menu"
    });
}


export default ConfirmAlertHook


