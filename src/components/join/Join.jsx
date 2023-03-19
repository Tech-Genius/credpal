import { Link } from 'react-router-dom';
import style from './assets/css/Join.module.css'
import join from './assets/images/join.png'
import playstore from './assets/images/play-store.png'
import applestore from './assets/images/apple-store.png'
// Default component rendered in the Get The App section
function Join() {

    return (

        <div className={style.Join}>


            <div className={style.JoinInner}>

                <div className={style.JoinBox} id={style.text}>
                    <h3>Join CredPal today</h3>
                    <p>Download the CredPal app and join millions of satisfied customers who are already using CredPal to access credit, make payments, invest & many more!</p>
                    <div className={style.store}>
                        <img src={playstore} alt="" />
                        <img src={applestore} alt="" />
                    </div>
                </div>

                <div className={style.JoinBox} id={style.img}>
                    <img src={join} alt="" />
                </div>

            </div>


        </div>


    )

}


export default Join