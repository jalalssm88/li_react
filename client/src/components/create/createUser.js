import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getAgency} from '../../actions/action';

class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_name:'',
            password:'',
            first_name:'',
            last_name:'',
            email:'',
            active: props.active || false,
            agency:''
        }
    }
    componentWillMount(){
        this.props.getAgency();
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    checkboxHandler = (e)=>{
        this.setState({ active: !this.state.active })
    }
    submitHandler = (e) =>{
        e.preventDefault();

    }
    render() {
        return (
            <div className="main_container">
                <div className="ui grid stackable">
                    <div className="sixteen wide column">
                        <h2 style={{"float":"left"}}>User List View</h2>
                    </div>
                    <div className="sixteen wide column">
                       <form onSubmit={this.submitHandler}>
                           <div className="ui form">
                                <div className="two fields">
                                    <div className="field">
                                        <label>User Name</label>
                                        <input type="text" name="user_name" value={this.state.user_name} onChange={this.changeHandler} />
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="three fields">
                                    <div className="field">
                                        <label>First Name</label>
                                        <input type="text" name="first_name" value={this.state.first_name} onChange={this.changeHandler} />
                                    </div>
                                    <div className="field">
                                        <label>Last Name</label>
                                        <input type="text" name="last_name" value={this.state.last_name} onChange={this.changeHandler} />
                                    </div>
                                    <div className="field">
                                        <label>Email</label>
                                        <input type="text" name="email" value={this.state.email} onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="three fields">
                                    <div className="field">
                                        <label>Active</label>
                                        <div className="ui toggle checkbox">
                                            <input type="checkbox" value={this.state.active} onChange={this.checkboxHandler} />
                                            <label></label>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>Agency</label>
                                        <select name="agency" onChange={this.changeHandler}>
                                            <option>--------------</option>
                                            {
                                                this.props.agency.agencies.map(agency=>(
                                                    <option key={agency._id} value={agency.name}>{agency.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="field">
                                        <label>sub</label>
                                        <button className="ui fluid labeled icon blue button"><i className="right arrow icon"></i> Create User</button>
                                    </div>
                                </div>
                           </div>
                       </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    agency:state.agency
})
export default connect(mapStateToProps,{getAgency})(UserList);