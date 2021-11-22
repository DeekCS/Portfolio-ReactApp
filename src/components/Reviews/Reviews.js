import React from 'react';
import ReviewCard from "./ReviewCard/ReviewCard";
import './reviews.css';
// import CardReviews from "./ReviewCard/ReviewCard";

const reviewsData =[
    {
        id: 1,
        image:'assets/images/ellon.jpg',
        name:'Ellon',
        position:'CEO',
        desc:'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum',

    },
    {
        id: 2,
        image:'assets/images/ellon.jpg',
        name:'Ellon',
        position:'CEO',
        desc:'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum',

    },
    {
        id: 3,
        image:'/images/assets/ellon.jpg',
        name:'Ellon',
        position:'CEO',
        desc:'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum',

    },

]
const Reviews = () => {
    return (

        <section className='testimonial-section'>
        <div className='container '>
            <div className="row ">
                {
                    reviewsData.map(review =>
                        <ReviewCard src={review.image} name={review.name} position={review.position} desc={review.desc} key={review.id}/>)
                }
        </div>
            </div>
        </section>
        );
    };

export default Reviews;

