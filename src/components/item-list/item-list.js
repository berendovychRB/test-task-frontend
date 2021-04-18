import React, {Component} from "react";
import UserService from "../../services/user-service";
import axios from "axios";

export default class ItemList extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    renderItems(arr) {
        return arr.map(({id, username, created, group}) => {
            return (
                <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{username}</td>
                    <td>{created}</td>
                    <td>{group}</td>
                    <td>
                        <button className="btn btn-warning">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            );
        })
    }


    render() {

        const itemList = this.state.itemList;

        // const items = this.renderItems(itemList);

        return (
            <div className="row">
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Created</th>
                        <th scope="col">Group</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.itemList.map(( item ) => this.renderItems(item.id, item.username, item.created, m.c))}
                    </tbody>
                </table>
            </div>
        );
    }

}