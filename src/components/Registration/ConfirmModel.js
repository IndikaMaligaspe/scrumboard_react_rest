import React from 'react';
import {Modal, Button} from 'react-bootstrap'

export const RegistrationConfirmModel = (props)=>(
   <React.Fragment>
    <Modal show={props.show} onHide={props.handleClose} centered backdrop="static">
        <Modal.Body>
            {props.message}
        </Modal.Body>
        <Modal.Footer>
            <Button variant={props.varient} onClick={props.handleClose}>
                Close
            </Button>                
        </Modal.Footer>
    </Modal>
   </React.Fragment>
)

// export default RegistrationConfirmModel;