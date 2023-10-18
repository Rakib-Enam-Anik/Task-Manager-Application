import React, { Componet} from "react";

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

class CustomModal extends Componet {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }
}

    //To check if the checkbox is checked or not
    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox"){
            value = e.targetchecked;
        }
        const activeItem = { ...this.state.activeItem, value };
        this.setState({ activeItem })
    };

    render()  {
        const { toggle, onSave } = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Task Item</ModalHeader>
                <ModalBody>
                    <form>
                        
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button color="success" onClick={() => onSave(this.state.activeItem)}>
                        save
                    </button>
                    
                </ModalFooter>
            </Modal>
        )
    }
