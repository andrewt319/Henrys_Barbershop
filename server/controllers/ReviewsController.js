import mongoose from 'mongoose';
import ReviewModel from '../models/ReviewModel.js';

export const getReviews = async (req, res) => {
    try {
        const review = await ReviewModel.find();

        res.status(200).json(review);
    } catch (error) {
        console.log(error)
    }
}