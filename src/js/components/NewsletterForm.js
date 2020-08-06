import React from 'react'
import "../../scss/utils/_all.scss";
import '../../scss/components/_newsletterForm.scss';

export default function NewsletterForm() {
    return (
        <section className="newsletter  col-lg ">
            <div className='h-wrap col-lg-5'>
                <h3 className='header'>Lorem ipsum dolor sit amet </h3>
            </div>
            <div className='news-wrap col-lg-7'>
                <form id='newsletter'  method='POST'>
                    <div className='newsletter-from'>
                        <input type='email' placeholder='write your e-mail address'></input>
                        <button className='btn' type="submit">Lorem</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
