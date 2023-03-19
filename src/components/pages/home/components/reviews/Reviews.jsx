import { FaStar, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import style from './assets/css/Reviews.module.css'
import { ReviewsData } from "./data/ReviewsData";

// Default component rendered in the Reviews section
function Reviews() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollPosition, setMaxScrollPosition] = useState(0);
    const reviewsInnerRef = useRef(null);


    const handleForwardClick = () => {
        if (reviewsInnerRef.current) {
          const container = reviewsInnerRef.current;
          const currentPosition = container.scrollLeft;
          const newPosition = currentPosition + 100;
          if (newPosition <= maxScrollPosition) {
            setScrollPosition(newPosition);
            container.scrollLeft = newPosition;
          }
        }
      };
    
      const handleBackwardClick = () => {
        if (reviewsInnerRef.current) {
          const container = reviewsInnerRef.current;
          const currentPosition = container.scrollLeft;
          const newPosition = currentPosition - 100;
          if (newPosition >= 0) {
            setScrollPosition(newPosition);
            container.scrollLeft = newPosition;
          }
        }
      };
    
      useEffect(() => {
        if (reviewsInnerRef.current) {
          const container = reviewsInnerRef.current;
          setMaxScrollPosition(container.scrollWidth - container.clientWidth);
        }
      }, []);



    return (

        <div className={style.Reviews}>

<div className={style.ReviewsIntro}>
<h3>Our customers love us</h3>
<p>Read what they have to say</p>
</div>
<div className={style.ReviewsWrap}ref={reviewsInnerRef} >
            <div className={style.ReviewsInner} >


                {
                    ReviewsData.map((data, index) => (




                        <>
                            <div className={style.ReviewsBox} id={style.text} >
                                <div className={style.user}>
                                    <img src={data.image} id={style.first} alt="" />
                                    <h5>{data.title}</h5>
                                </div>
                                <p>{data.content}</p>
                                <div className={style.star}>
                                    <FaStar className={style.starIcon} />
                                    <FaStar className={style.starIcon} />
                                    <FaStar className={style.starIcon} />
                                    <FaStar className={style.starIcon} />
                                    <FaStar className={style.starIcon} />
                                </div>
                            </div>



                        </>


                    ))
                }
   

            </div>
            </div>
            <div className={style.controls}>
                    <button onClick={handleBackwardClick}><FaAngleLeft/></button>
                    <button onClick={handleForwardClick}><FaAngleRight/></button>
                </div>
        </div>

    )

}


export default Reviews