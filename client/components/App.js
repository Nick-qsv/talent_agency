import React from "react";
import { connect } from "react-redux";
import { fetchClients, fetchSkills, fetchClientSkills} from "../store/allClientsSkills";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
       
    }
  }
  async componentDidMount(){
      await this.props.loadClients();
      await this.props.loadSkills();
      await this.props.loadClientSkills();
      console.log("THIS IS PROPS------>", this.props)
      console.log("THIS IS STATE--->", this.state)
  }
  render() {
    const {clients} = this.props.allClientsSkills
    const {skills} =this.props.allClientsSkills
    const {clientSkills} = this.props.allClientsSkills
    console.log("THIS IS CLIENTS AND SKILLS--->", clients, skills, clientSkills)
    return (
        <div>
            <div className="mainPage--container">
                <div className="clientList--container">
                    <h3>Clients</h3>
                    {clients? clients.map((client)=>{
                        return(
                        <div className="clientList--client" key={client.id}>
                            <Link to={`/api/clients/${client.id}`}>
                                <h5>{client.name}{" "}({clientSkills.reduce((accum, elem)=>{
                                    if(elem.clientId === client.id){
                                        accum++;
                                    }
                                    return accum
                                },0)})</h5>
                            </Link>
                        </div>)
                    }): <h1>noclients</h1>}
                </div>
                <div className="skillList--container">
                    <h3>Skills</h3>
                    {skills.map((skill)=>{
                        return(
                            <div className="skillList--skill" key={skill.id}>
                                <Link to={`/api/skills/${skill.id}`}>
                                    <h5>{skill.name}{" "}({clientSkills.reduce((accum, elem)=>{
                                    if(elem.skillId === skill.id){
                                        accum++;
                                    }
                                    return accum
                                },0)})</h5>
                                </Link>
                        </div>)
                    })}
            </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return{
        allClientsSkills: state.allClientsSkills
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        loadClients: () => dispatch(fetchClients()),
        loadSkills: () => dispatch(fetchSkills()),
        loadClientSkills: () => dispatch(fetchClientSkills())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)