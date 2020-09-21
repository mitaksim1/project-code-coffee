import React from 'react';

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
            <>
            <ul className="menu_list">
                <li>Trouver un café</li>
                <li onClick={this.visibleModal} type="submit">Se connecter</li>
                <FormModal 
                visible={this.state.visible}
                invisible={this.invisibleModal}
                />
            </ul>      
            </>
        )
    }
}