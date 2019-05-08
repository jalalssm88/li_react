import React, { Component } from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react';
import {createPhone, getPhone} from '../../actions/action';
import { connect } from 'react-redux';


class PhoneList extends Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false,
            phone_no:''
        }
    }

    handleCreateButton(evt) {
        evt.preventDefault()
        this.closeModal();
    }

    closeModal = () => {
        this.setState({ showModal: false,phone_no:'' })
    }

    openModal = (e)=>{
        this.setState({
            showModal:true
        })
    }

    changeHandler = (e)=>{
        this.setState({
            phone_no:e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const create_phone = {
            phone_no:this.state.phone_no
        }
        this.props.createPhone(create_phone);
        this.setState({
            showModal: false,phone_no:''
        })
    }

    componentWillMount(){
        this.props.getPhone();
    }
    render() {
        return (
            <div className="main_container">
                <div className="ui grid stackable">
                    <div className="sixteen wide column">
                        <h2 style={{"float":"left"}}>Agency List View</h2>
                        <Modal size="small" open={this.state.showModal} trigger={<Button floated='right' size='mini' icon labelPosition='left' color="orange" onClick={this.openModal}><Icon name='plus' />add phone</Button>}>
                            <Modal.Header>Add Phone Number</Modal.Header>
                            <Modal.Content>
                                <form >
                                    <div className="ui form">
                                        <div className="field">
                                            <label>Phone</label>
                                            <input type="text" name="phone_no" value={this.state.phone_no} onChange={this.changeHandler}/>
                                        </div>
                                    </div>
                                </form>
                            </Modal.Content>
                            <Modal.Actions>
                                <button onClick={this.closeModal} className="ui small labeled icon button red cancel"><i className="close icon"></i>cancel</button>
                                <button onClick={this.submitHandler} className="ui small labeled icon button blue"><i className="right arrow icon"></i> Submit</button>
                            </Modal.Actions>
                        </Modal>
                    </div>
                    <div className="sixteen wide column">
                        <table className="ui celled table">
                            <thead>
                                <tr>
                                    <th>Phone Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.phone.phones.map(phone => (
                                        <tr key={phone._id}>
                                            <td>{phone.phone_no}</td>
                                            <td>
                                                <button className="ui icon button"><i className="action icon"></i></button>
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
    phone:state.phone
})

export default connect(mapStateToProps,{createPhone, getPhone}) (PhoneList);
