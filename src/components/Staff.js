// import './Home.css'
import React, {useState, useEffect} from 'react';
import {
  MDBCard,
//   MDBCardOverlay,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModal,
//   MDBModal,
//   MDBModalDialog,
//   MDBModalContent,
  MDBModalHeader,
  MDBModalTitle
//   MDBModalBody,
//   MDBModalFooter
} from 'mdb-react-ui-kit';

export default function Staff(){
    const [staffData , setStaffData]= useState([]);
    // modal
    const [reviewModal, setReviewModal] = useState(false);
    // review
    // set current user id
    const [id, setId] = useState(null);
    // add  a state variable to hold the cleaner's id
    const [cleanerId, setCleanerId] = useState(null);

    const [reviewInfo, setReviewInfo] = useState({
        rating: 0,
        review: "",
        // cleaner_id: 0
    });

    useEffect(() =>{
        fetch('/cleaners/summary')
        .then(response => response.json())
        .then(data => setStaffData(data));
    }, []);

    // render stars
    function renderStars(rating) {
        const stars = [];
      
        for (let i = 0; i < 5; i++) {
          if (i < rating) {
            stars.push(<i key={i} className="fa fa-star"></i>);
          } else {
            stars.push(<i key={i} className="fa fa-star-o"></i>);
          }
        }
      
        return stars;
      }

    // add review
    // inputchange: handleChange
      function handleChange(e){
        const{ name, value } = e.target;
        setReviewInfo((prevData) =>({
            ...prevData,
            [name]: value,
        }));
      }


    //   form submission:handleSubmit()
      function handleSubmit(e){
        // prevent form autosubmit
        // rails backend url:localhost:3000/cleaners/:id/reviews
        e.preventDefault();

        if( cleanerId === null){
            console.error("Cannot submit review: id is null");
            return;
        }

        // get the id of the staff member being viewed
        const staffMemberId = cleanerId;

        fetch(`/cleaners/${staffMemberId}/reviews`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewInfo),
        })
        .then((res) => res.json())
        .then((data) => {
            setStaffData((prevData) =>{
                prevData.map((staffMember)=>{
                    if(staffMember.id === data.cleaner_id){
                        return{
                            ...staffMember,
                            reviews: [...staffMember.reviews, data],
                        };
                    }else{
                        return staffMember;
                    }
                })
            });
            setReviewModal(false);
            setReviewInfo({
                rating: 0,
                review: "",
            });
        })
        .catch((err) => console.error(err));
      }
         

    return(
        <div className='staff'>
            {/* <h1>Staff records go here</h1>         */}
            <h1>Our Staff</h1>
            {/* convert staff data into an array before mapping it's contents */}
            {Array.isArray(staffData) && staffData.map((staffMember) => (  
                <MDBCard key={staffMember.id}  onClick={() => { setId(staffMember.id); setCleanerId(staffMember.id); }} style={{display: 'inline-block', marginLeft: '13em', justifyContent: 'center', flexDirection: 'column', alignContent: 'center'}} id='staff_details'> 
                    <MDBCardImage position='top' alt={staffMember.name} src={staffMember.image_url} style={{width:  '50%', height: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}/>
                        <MDBCardBody>
                            <MDBCardTitle>Names: {staffMember.name}</MDBCardTitle>
                            <MDBCardText>
                            {/* {staffMember.bio} */}
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBListGroup flush>
                            <MDBListGroupItem>Age: {staffMember.age}</MDBListGroupItem>
                            <MDBListGroupItem>Phone Number:{staffMember.phonenumber}</MDBListGroupItem>
                            <MDBListGroupItem>ID Number: {staffMember.id_no}</MDBListGroupItem>
                            <MDBListGroupItem>Work experience: {staffMember.experience} year(s)</MDBListGroupItem>
                            <MDBListGroupItem>
                                Reviews: 
                                {Array.isArray(staffMember.reviews) && staffMember.reviews.map((review) => (
                                    <div key={review.id} className='star-rating'>
                                        Rating: <span style={{ color: 'gold' }}>{renderStars(review.rating)}</span> <br /> Comment: {review.review}
                                    </div>
                                ))}
                            </MDBListGroupItem>
                            {/* <MDBListGroupItem>Reviews: {staffMember.reviews.rating}</MDBListGroupItem>
                            <MDBListGroupItem>Reviews: {staffMember.reviews.review}</MDBListGroupItem> */}
                        </MDBListGroup>
                        <MDBCardBody>
                            {/* <MDBCardLink href='/addreview'>Add Review</MDBCardLink> */}
                            <MDBBtn disabled={cleanerId === null} onClick={() => setReviewModal(true)} style={{backgroundColor: 'transparent', color:'lightblue', width: 'fitContent', height: 'auto'}}>Add Review</MDBBtn>
                            <MDBBtn href='/booking' style={{ width: 'fitContent', height: 'auto'}}>Book Cleaner</MDBBtn>
                        </MDBCardBody>
                </MDBCard>  
            ))} 
        {/* Modal body text goes here */}
        <MDBModal
            tabIndex='-1'
            show={reviewModal}
            getOpenState={(e) => setReviewModal(e)}
            centered
        >
            <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>
                <MDBModalTitle>Add Review</MDBModalTitle>
                <MDBBtn
                    className='btn-close'
                    color='none'
                    onClick={() => setReviewModal(false)}
                ></MDBBtn>
                </MDBModalHeader>


                <MDBModalBody>
                <form onSubmit={handleSubmit} data-id={id}>
                    <div className='form-group'>
                    <label htmlFor='review-rating'>Rating:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="rating"
                        name="rating"
                        value={reviewInfo.rating}
                        onChange={handleChange}
                        min="1"
                        max="5"
                        required
                    />
                    </div>
                    <div className='form-group'>
                    <label htmlFor='review-comment'>Comment:</label>
                    <textarea
                        className="form-control"
                        id="review"
                        name="review"
                        value={reviewInfo.review}
                        onChange={handleChange}
                        rows="3"
                        required
                    ></textarea>
                    <label htmlFor='review-comment'>Cleaner:</label>
                    <select
                        className="form-control"
                        id="review"
                        name="review"
                        value={reviewInfo.cleaner_id}
                        onChange={handleChange}
                        required>
                        <option value="">Select an option</option>
                        <option value="1">Cleaner 1</option>
                        <option value="2">Cleaner 2</option>
                        <option value="3">Cleaner 3</option>
                    </select>
                </div>  
                <div className='modal-footer'>
                  <MDBBtn color='secondary'>
                    Close
                  </MDBBtn>
                  <MDBBtn type='submit'>
                    Submit Review
                  </MDBBtn>
                </div>                                                  
                </form>
                </MDBModalBody>


            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    </div>
    )
}
