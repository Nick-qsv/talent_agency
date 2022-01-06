import axios from "axios";

const LOAD_SINGLE_CLIENT = "LOAD_SINGLE_CLIENT";
const LOAD_SINGLE_CLIENTSKILLS = "LOAD_SINGLE_CLIENTSKILLS";

const loadSingleClient = (client) => {
  return {
    type: LOAD_SINGLE_CLIENT,
    client,
  };
};

const loadSingleClientSkills = (clientSkills) => {
  return {
    type: LOAD_SINGLE_CLIENTSKILLS,
    clientSkills,
  };
};

export const fetchSingleClient = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/clients/${id}`);
      dispatch(loadSingleClient(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSingleClientSkills = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/client/clientskills/${id}`);
      dispatch(loadSingleClientSkills(data))
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
    client: {},
}

export default (state = initialState, action)=>{
    switch(action.type){
        case LOAD_SINGLE_CLIENT:
            return{
                ...state,
                client: action.client
            }
        case LOAD_SINGLE_CLIENTSKILLS:
            return{
                ...state,
                clientSkills: action.clientSkills
            }
        default:
            return state
    }
}
