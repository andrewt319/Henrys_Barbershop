export default (reviews = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'POST':
            return [...reviews, action.payload];
        default:
            return reviews;
    }
}