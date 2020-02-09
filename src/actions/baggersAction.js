import axiosClient from '../apiClient'
import { FETCH_BAGGERS_BEGIN, FETCH_BAGGERS_SUCCESS, FETCH_BAGGERS_FAILURE } from './types';

const fetchBaggers = () => dispatch => {
  
  dispatch({ type: FETCH_BAGGERS_BEGIN })
  axiosClient.get()
    .then(res =>
      dispatch({
        type: FETCH_BAGGERS_SUCCESS,
        payload: res.data,
      }),

    ).catch(error => {
      dispatch({
        type: FETCH_BAGGERS_FAILURE,
        payload: { error },
      })
    })
}

export default fetchBaggers