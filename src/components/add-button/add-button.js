import React, {Component} from "react";

import './add-button.css';

export default class AddButton extends Component {


    render() {
        return (
            <div className="row right">
                <button className="btn btn-success">
                    Add User
                </button>
            </div>
        );
    }

}