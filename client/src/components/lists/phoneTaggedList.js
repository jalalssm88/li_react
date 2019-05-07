import React, { Component } from 'react'
import { Modal, Form, Button, Icon } from 'semantic-ui-react';


class TaggedPhoneList extends Component {
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
    render() {
        return (
            <div className="main_container">
                <div className="ui grid stackable">
                    <div className="sixteen wide column">
                        <h2 style={{"float":"left"}}>Agency List View</h2>
                        <Modal size="small" open={this.state.showModal} trigger={<Button floated='right' size='mini' icon labelPosition='left' color="orange" onClick={this.openModal}><Icon name='plus' />add phone</Button>}>
                            <Modal.Header>Create Tagged Phone </Modal.Header>
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

export default TaggedPhoneList;
