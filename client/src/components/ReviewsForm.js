import React, { useState } from 'react';
import { Button, Paper, Box } from '@material-ui/core';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import useStyles from './ReviewsFormStyle';
import { postReview } from '../actions/reviews';

const Form = () => {
    const [rating, setRating] = useState('');
    const [review, setReview] = useState({
        name: '',
        username: '',
        review: '',
        rating: 5,
    });
    
    const dispatch = useDispatch();
    const classes = useStyles();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postReview(review));
        clear();
    }

    const clear = () => {
        setRating('');
        setReview({ name: '', username: '', review: '', rating: 5});
    }

    const handleChange = (e) => {
        setRating(e.target.value)
        setReview({...review, rating: e.target.value});
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" margin="auto">
            <h2>Leave a review!</h2>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}> 
                    <TextField
                        name="creator"
                        variant="outlined"
                        label="Name"
                        fullWidth
                        value={review.name}
                        onChange={(e) => setReview({...review, name: e.target.value})}
                    />
                    <TextField
                        name="title"
                        variant="outlined"
                        label="Username"
                        fullWidth
                        className={classes.box2}
                        value={review.username}
                        onChange={(e) => setReview({...review, username: e.target.value})}
                    />
                    <FormControl className={classes.box3} fullWidth>
                        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" variant="outlined" value={rating} label="Rating" onChange={handleChange}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        name="message"
                        variant="outlined"
                        label="Review"
                        fullWidth
                        className={classes.box4}
                        value={review.review}
                        onChange={(e) => setReview({...review, review: e.target.value})}
                    />
                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth className={classes.buttonSubmit}>Submit</Button>
                </form>
            </Paper>
        </Box>
    );
}

export default Form;