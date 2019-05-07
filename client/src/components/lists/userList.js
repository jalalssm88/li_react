import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {getUser} from '../../actions/action';

class UserList extends Component {
    componentWillMount(){
        this.props.getUser();
    }
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
                                    <th>User Name</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Agency</th>
                                    <th>Is Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.user.users.map(user =>(
                                        <tr key={user._id}>
                                            <td>{user.user_name}</td>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.agency}</td>
                                            <td>
                                                {user.active == true?<i className="icon large green check circle"></i>:<i className="icon red remove large icon"></i>}
                                            </td>


                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    user:state.user
})
export default connect(mapStateToProps,{getUser})(UserList);