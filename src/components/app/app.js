import React, {Component} from "react";
import Header from "../header";
import AddButton from "../add-button";
import ItemList from "../item-list";
import UserService from "../../services/user-service";

export default class App extends Component {

    userService = new UserService();

    render() {
        return (
            <div>
                <Header/>
                <AddButton />
                <br/>
                <ItemList getData={this.userService.getAllUsers} />
            </div>
        );
    }

}