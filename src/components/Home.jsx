import { MDBBtn } from 'mdb-react-ui-kit';
import './Home.css'

import image1 from './images/image1.svg';
import image2 from './images/image2.svg';
// import Water from './images/Water.svg';

export default function Home() {
  return (
    <div>
        <div className='home'>
            <div className='flex-container'>
              <p className='para'>Sparkle<br />with<br />your<br />ideal<br />clean</p>
                <div className='image-container'>
                <img src={image1} alt='Woman 1' className='image2'/>
                <img src={image2} alt='Woman 2' className='image1' />
                {/* <img src={Water} alt='Water' className='water' /> */}
              </div>
            </div>
            <MDBBtn className='btn' href='signup'>View more</MDBBtn>
        </div>
    </div>
  );
}
