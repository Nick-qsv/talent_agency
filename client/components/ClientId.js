import React from 'react'
import {connect} from 'react-redux'
import { fetchSingleClient } from '../store/singleClient'
import {fetchSkills, fetchClientSkills} from '../store/allClientsSkills'

class ClientId extends React.Component {
    constructor(){
        super()
        this.state={
        }
    }
    componentDidMount(){
        this.props.loadClient(this.props.match.params.clientId);
    //   await this.props.loadSkills();
    //   await this.props.loadClientSkills();
      console.log('THIS IS PROPS------>', this.props)
    }
    render(){
        const {client} = this.props
        const {skills} = this.props
        const {clientSkills} = this.props
        return (
        <div className="clientList--container">
            <hr></hr>
            {/* <h1>{client.name}</h1>
            <h5>{skills.name}</h5> */}
            {/* <h5>{clientSkills.skillId}</h5> */}

        </div>
    )}
}

const mapStateToProps = (state)=>{
    return{
        client: state.client
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        loadSingleClient: (clientId)=> dispatch(fetchSingleClient(clientId)),
        // loadSkills: () => dispatch(fetchSkills()),
        // loadClientSkills: () => dispatch(fetchClientSkills())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClientId)