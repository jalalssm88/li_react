import React, { Component } from 'react'
import { Modal, Form, Button, Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {createAgency, getAgency} from '../../actions/action';


class AgencyList extends Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false,
            name:'',
            is_active: props.is_active || false,
        }
    }
    componentWillMount(){
        this.props.getAgency();
    }
    handleCreateButton(evt) {
        evt.preventDefault()
        this.closeModal();
    }

    closeModal = () => {
        this.setState({ showModal: false,name:'', is_active:false})
    }

    openModal = (e)=>{
        this.setState({
            showModal:true
        })
    }
    changeHandler = (e) =>{
        this.setState({
            
        })
    }

    checkboxHandler = (e)=>{
        this.setState({ is_active: !this.state.is_active })
    }
    changeHandler = (e)=>{
        this.setState({ name:e.target.value});
    }

    submitHandler = (e) =>{
        e.preventDefault();
        const agency_values = {
            name:this.state.name,
            is_active:this.state.is_active
        }
        this.props.createAgency(agency_values)
        this.setState({
            showModal:false,
            name:'',
            is_active:false
        })
    }
    render() {
        return (
            <div className="main_container">
                <div className="ui grid stackable">
                    <div className="sixteen wide column">
                        <h2 style={{"float":"left"}}>Agency List View</h2>
                        <Modal size="small" open={this.state.showModal} trigger={<Button floated='right' size='mini' icon labelPosition='left' color="orange" onClick={this.openModal}><Icon name='plus' />Create Agency</Button>}>
                            <Modal.Header>Create Agency</Modal.Header>
                            <Modal.Content>
                                <form >
                                    <div className="ui form">
                                        <div className="field">
                                            <label>Name</label>
                                            <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                                        </div>
                                        <div className="field">
                                            <label>Is Active</label>
                                            <div className="ui toggle checkbox">
                                                <input type="checkbox" value={this.state.is_active} onChange={this.checkboxHandler} />
                                                <label></label>
                                            </div>
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
                                   <th>Agency</th>
                                   <th>Is Active</th>
                               </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.agency.agencies.map(agency=>(
                                        <tr key={agency._id}>
                                            <td>{agency.name}</td>
                                            <td>
                                                {
                                                    agency.is_active == true?<i className="icon large green check circle"></i>:<i className="icon large red remove circle"></i>
                                                }
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
    agency:state.agency
})
export default connect(mapStateToProps,{createAgency, getAgency})(AgencyList);
