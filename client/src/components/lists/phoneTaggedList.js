import React, { Component } from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import {connect} from 'react-redux';
import{createTagged, getTagged} from '../../actions/action'
var global_timeout;

class TaggedPhoneList extends Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false,
            tagged_phone:'',
            response_status:false,
            display_status:'block',
            header_phone:'',

            phone_id:'',
            name:'',
            address: '',
            valid_upto:''
        }
    }

    handleCreateButton(evt) {
        evt.preventDefault()
        this.closeModal();
    }

    closeModal = () => {
        this.setState({ 
            showModal: false,
            tagged_phone:'',
            response_status:false,
            display_status:'block',
            header_phone:'',
            phone_error:''
        })
        clearTimeout(global_timeout) 

    }

    openModal = (e)=>{
        this.setState({
            showModal:true
        })
    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    keyupHandler=(e)=>{
        clearTimeout(global_timeout)
        global_timeout = setTimeout(() => {
            global_timeout = null
            axios.get(`/phone/tagged/${this.state.tagged_phone}`).then(res=>{
                console.log('res.status', res)
                
                if(res.data.status === "success"){
                    console.log('yes it is')
                    this.setState({
                        response_status:true,
                        display_status:"none",
                        header_phone:res.data.phone_no[0].phone_no,
                        phone_id:res.data.phone_no[0]._id,
                        phone_error:''
                    })
                }else{
                    this.setState({
                        response_status:false,
                        display_status:"block",
                        phone_error:'this number is no found in phone list'
                    })
                }
            })
        },1000)
    }
   
    submitHandler = (e) =>{
        e.preventDefault();
        const taged_data = {
            phone_id:this.state.phone_id,
            name:this.state.name,
            address:this.state.address,
            valid_upto:this.state.valid_upto
        }
        this.props.createTagged(taged_data)

        this.setState({
            name:'',
            data:'',
            address:'',
            showModal: false,
            tagged_phone:'',
            response_status:false,
            display_status:'block',
            header_phone:'',
            phone_error:'',
            phone_id:''
        })
    }

    componentWillMount(){
        this.props.getTagged();
    }

    render() {
        return (
            <div className="main_container">
                <div className="ui grid stackable">
                    <div className="sixteen wide column">
                        <h2 style={{"float":"left"}}>Tagged Phone List View</h2>
                        <Modal size="small" open={this.state.showModal} trigger={<Button floated='right' size='mini' icon labelPosition='left' color="orange" onClick={this.openModal}><Icon name='plus' />add phone</Button>}>
                            <Modal.Header>{this.state.response_status == true?this.state.header_phone:<React.Fragment>Create Tagged Phone</React.Fragment>} </Modal.Header>
                            <Modal.Content>
                                <form >
                                    <div className="ui form">
                                        <div className="field" style={{'display':this.state.display_status}}>
                                            <label>Phone</label>
                                            <input type="text" name="tagged_phone" value={this.state.tagged_phone} onChange={this.changeHandler} onKeyUp={this.keyupHandler}/>
                                        </div>
                                        {
                                            console.log('respone_status', this.state.response_status)
                                        }
                                        {
                                            this.state.response_status === true &&
                                            <React.Fragment>
                                                <div className="field">
                                                    <label>Name</label>
                                                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                                                </div>
                                                <div className="field">
                                                    <label>Address</label>
                                                    <input type="text" name="address" value={this.state.address} onChange={this.changeHandler} />
                                                </div>
                                                <div className="field">
                                                    <label>Valid Upto</label>
                                                    <input type="date" name="valid_upto" value={this.state.valid_upto} onChange={this.changeHandler} />
                                                </div>
                                            </React.Fragment>
                                        }
                                        <p style={{'color':'red'}}>
                                            {
                                                this.state.phone_error
                                            }
                                        </p>
                                        
                                    </div>
                                </form>
                            </Modal.Content>
                            <Modal.Actions>
                                <button onClick={this.closeModal} className="ui small labeled icon button red cancel"><i className="close icon"></i>cancel</button>
                                {
                                    this.state.response_status == true?
                                <button onClick={this.submitHandler} className="ui small labeled icon button blue"><i className="right arrow icon"></i> Submit</button>
                                    :''
                            }
                                </Modal.Actions>
                        </Modal>
                    </div>
                    <div className="sixteen wide column">
                        <table className="ui celled table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Valid Upto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   this.props.tagged.tagged_phone.map(tagged=>(
                                       <tr key={tagged._id}>
                                           <td>{tagged.name}</td>
                                           <td>{tagged.address}</td>
                                           <td>{tagged.valid_upto}</td>
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

const mapStateToProps = (state) => ({
    tagged:state.tagged
})
export default connect(mapStateToProps, {createTagged, getTagged}) (TaggedPhoneList);
