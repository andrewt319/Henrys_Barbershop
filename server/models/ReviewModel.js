import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    name: String,
    username: String,
    review: String,
    rating: {
        type: Number,
        default: 0
    }
});

const ReviewMessage = mongoose.model('ReviewMessage', reviewSchema);

export default ReviewMessage;