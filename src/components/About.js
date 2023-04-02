// import plant from './images/plant.svg';
import clean from './images/clean.jpg'
// import clean2 from './images/clean2.jpg'
import image1 from './images/image1.svg';
import cleanrush from './images/cleanrush.jpg'
export default function About(){
    return(
        <div id='abt'>
            {/* main card */}
            <div className='details'>
                <h1>About Us</h1>
                <p>
                    At our cleaning company,
                    we understand the challenges and risks involved in
                    finding a reliable and trustworthy house help. 
                    That's why we take the burden off your shoulders
                    by thoroughly screening and background checking all of 
                    our cleaning professionals before they join our team. 
                    You can rest assured that your home is in safe hands
                    with our experienced and dependable cleaners. 
                    Say goodbye to the stress of finding a cleaner
                    and hello to a spotless home with our cleaning company.
                </p>
            </div>
            {/* card 1 */}
            <div className='body1'>
                <div className='plantsy'>
                    <img src={image1} alt='plant' className='planty' id='parent-s'/>
                </div>   
                <div className='text'>
                    <h1>Residential Cleaning</h1>
                    <br />
                    <p>
                    When you work with Almaid Cleaning you can
                     cross a major choir off your list,
                      cleaning your home.<br/>One Time / Recurring
                    </p>
                </div>  
            </div>  
            {/* card 2 */}
            <div className='body2'>
                <div className='plantsy'>
                    <img src={clean} alt='plant' className='planty' id='parent-s'/>
                </div>   
                <div className='text'>
                    <h1>Commercial Cleaning</h1>
                    <br />
                    <p>
                    In Almaid we use a wide variety of cleaning methods, chemicals, 
                    and equipment to facilitate and expedite the cleaning process. 
                    <br/>One Time / Recurring
                    </p>
                </div>  
            </div>   
            {/* card 3 */}
            <div className='body3'>
                <div className='plantsy'>
                <img src={cleanrush} alt='plant' className='planty' id='parent-s'/>
                </div>   
                <div className='text'>
                    <h1>Janitorial Cleaning Services</h1>
                    <br />
                    <p>
                        Looking for a reliable and professional janitorial cleaning service provider?
                        Look no further than Almaid Cleaning Services!
                        Our team of experienced cleaners are dedicated
                        to providing the highest level of cleaning services 
                        to meet your specific needs. 
                        Whether you're looking for daily, weekly, 
                        or monthly cleaning services, we've got you covered.
                        At Almaid Cleaning Services,
                        we use only the best cleaning products and equipment
                        to ensure that your office or 
                        commercial space is thoroughly cleaned and disinfected. 
                        We understand the importance of a clean and hygienic work environment,
                        and we take pride in delivering exceptional 
                        results that exceed your expectations.
                    </p>
                </div>  
            </div>                                 
        </div>
    );
}