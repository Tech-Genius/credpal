import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section8.module.css'


// Default component rendered in the Section8 section
function SectionEight() {

    return (
        <div className={style.Section8}>

            <div className={style.Section8Inner}>


                <div className={style.Section8InnerBackground}>

                </div>

                <div className={style.Section8OverlayText}>

               
                <h3 className={style.introText}>Leverage Our Connectors</h3>
                <p className={style.introText}>Just A Few Scenarios, Unlimited Possibilities</p>
                <div className={style.Section8BoxWrapper}>


                    <div className={style.Section8Box} id={style.top} data-aos="fade-up" data-aos-duration="1200">
                        <h3>Push</h3>
                        <p>Collect employee performance data in a timesheet app. Use a PowerBI Connector to send your data to the Microsoft business intelligence tool to create dashboards & reports, producing valuable insights.</p>
                    </div>


                    <div className={style.Section8Box} id={style.bottom} data-aos="fade-up" data-aos-duration="1200">
                        <h3>Pull</h3>
                        <p>Save time when creating order forms by pulling in your client lists. Connect to a range of systems including Sharepoint List, Excel doc on Dropbox, or a table in an Azure SQL database to name a few.</p>
                    </div>


                    <div className={style.Section8Box} id={style.top} data-aos="fade-up" data-aos-duration="1200">
                        <h3>Trigger</h3>
                        <p>Specify when an automated email populated with relevant data should be sent out. A common example would be when a hazardous element is uncovered during a building inspection.</p>
                    </div>


                    <div className={style.Section8Box} id={style.bottom} data-aos="fade-up" data-aos-duration="1200">
                        <h3>Store</h3>
                        <p>Instead of duplicating data manually into external systems, rather integrate and insert rows directly into Microsoft SQL Databases, Google BigQuery, and Sharepoint lists.</p>
                    </div>
                </div>

                </div>
            </div>

        </div>

    )

}


export default SectionEight