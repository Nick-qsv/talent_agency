
import axios from "axios";

const LOAD_CLIENTS = "LOAD_CLIENTS";
const LOAD_SKILLS = "LOAD_SKILLS";
const LOAD_CLIENTSKILLS = "LOAD_CLIENTSKILLS"


const loadClients = (clients) => {
  return {
    type: LOAD_CLIENTS,
    clients,
  };
};

const loadSkills = (skills) => {
  return {
    type: LOAD_SKILLS,
    skills,
  };
};

const loadClientSkills = (clientSkills) => {
    return {
      type: LOAD_CLIENTSKILLS,
      clientSkills,
    };
  };



export const fetchClients = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/clients");
      dispatch(loadClients(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSkills = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/skills");
      dispatch(loadSkills(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchClientSkills = () =>{
    return async (dispatch) => {
        try {
          const { data } = await axios.get("/api/clients/clientskills");
          dispatch(loadClientSkills(data));
        } catch (err) {
          console.log(err);
        }
      };
}



const initialState = {
    clients: [],
    skills: [],
    clientSkills: []
}

export default (state = initialState, action)=>{
    switch(action.type){
        case LOAD_SKILLS:
            return{
                ...state, 
                skills: action.skills
            }
        case LOAD_CLIENTS:
            return{
                ...state,
                clients: action.clients
            }
        case LOAD_CLIENTSKILLS:
            return{
                ...state,
                clientSkills: action.clientSkills
            }
        default:
            return state
    }
}
