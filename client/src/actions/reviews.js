import * as api from '../api';

export const getReviews = () => async(dispatch) => {
    try {
        const { data } = await api.fetchReviews();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch(error) {
        console.log(error);
    }
}

export const postReview = (review) => async(dispatch) => {
    try {
        const { data } = await api.postReviews(review);
        dispatch({ type: 'POST', payload: data});
    } catch(error) {
        console.log(error);
    }
}