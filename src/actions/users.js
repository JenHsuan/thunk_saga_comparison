import axios from 'axios';

export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USERS_SUCCESS: 'users/get_users_success'
}

export const getUserRequest = () => async dispatch => {
    var res = {data:[]};
    try {
        res = await axios.get('/users', {
            params: {
                limit: 1000
            }
        });

        await dispatch({
                type: Types.GET_USERS_REQUEST, 
                payload: res.data})
    } catch (error) {
        //res.data = error;
        console.log(error);
    
    }
}
