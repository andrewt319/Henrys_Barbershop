import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    name: String,
    message: String,
    stars: {
        type: Number,
        default: 0
    }
});

const ReviewMessage = mongoose.model('ReviewMessage', reviewSchema);

export default ReviewMessage;