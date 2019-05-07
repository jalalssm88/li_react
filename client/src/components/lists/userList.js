import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class UserList extends Component {
    render() {
        return (
            <div className="main_container">
                <div className="ui grid stackable">
                    <div className="sixteen wide column">
                        <h2 style={{"float":"left"}}>User List View</h2>
                        <Link to="/user/create" className="ui orange labeled icon right floated mini button"><i className="plus icon"></i>Create User</Link>
                    </div>
                    <div className="sixteen wide column">
                        <table className="ui celled table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserList;
