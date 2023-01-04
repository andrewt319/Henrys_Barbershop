import express from 'express';

import { getReviews, postReview } from '../controllers/ReviewsController.js';

const router = express.Router();

router.get('/', getReviews);
router.post('/', postReview);

export default router;