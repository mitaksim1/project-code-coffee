import React from 'react';
import { Button } from 'react-bootstrap';

import './style.css';
import FormModal from '../FormModal';

export default class ButtonModal extends React.Component {

    state = {
        // Button initial state
        visible: false
    }

    visibleModal = () => {
        this.setState({
            visible: true
        });
        console.log("true");
    }

    invisibleModal = () => {
        this.setState({
            visible: false
        });
        console.log("false");
    }
    render() {
        return (
            <div className="button_modal">
                <Button onClick={this.visibleModal} className="signup_button" type="submit" variant="dark">Je m'inscris!</Button>
                <FormModal 
                visible={this.state.visible}
                invisible={this.invisibleModal}
                />
            </div>
        )
    }
}