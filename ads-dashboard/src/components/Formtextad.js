import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './form.css';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//   }

const Formtextad = () => {
  const [formData, setFormData] = useState({
    name: '',
    name2: '',
    Bname: '',
    url: '',
    message: '',
    buttonLabel: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process or submit the form data here
    console.log(formData);

     // Show the success modal
     setShowSuccessMessage(true);

     setTimeout(() => {
      // Redirect to Create Ads Page
      setShowSuccessMessage(false);
      window.location.href = '/create-ad'; // or use history.push('/create-ad')
    }, 600); 
   
  };


  return (
    <>
     <div className='textContainer'>
        <div className="textmain">
         
          <div className="App">
          <div className="title">
                Create Text & Media
              </div>
            <form onSubmit={handleSubmit}>
              

              <div className='leftSideForm'>
                <div className="form-control">
                  <label>
                    Heading 01
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Add a heading that would make user understand'
                    required
                  />
                </div>
              

                <div className="form-control">
                  <label>
                    Heading 02
                  </label>
                  <input
                    type="text"
                    name="name2"
                    value={formData.name2}
                    onChange={handleInputChange}
                    placeholder='Add a heading that would make user understand'
                    required
                  />
                </div>

                <div className="form-control">
                  <label>
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="Bname"
                    value={formData.Bname}
                    onChange={handleInputChange}
                    placeholder='Add your Business Name'
                    required
                  />
                </div>

               
              </div>

              <div className='rightSideForm'>
                <div class="form-control">
                  <label>
                    Description 01
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder='Add Primary text to help users understand more about your products,service and offer'
                    required
                  />
                </div>
                <div className="form-control">
                  <label>
                    Button Label
                  </label>
                  <select
                    name="buttonLabel"
                    value={formData.buttonLabel}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled selected>Select a Label that suits your ad</option>
                    <option value="label1">Label 1</option>
                    <option value="label2">Label 2</option>
                  </select>

                </div>
                
                
              </div>

              <div className="form-control">
                  <label>
                    Website URL
                  </label>
                  <input
                    type="text"
                    name="url"
                    value={formData.url}
                    onChange={handleInputChange}
                    placeholder='Add the URL of landing page you want to redirect user to '
                    required
                  />
                </div>
              <div className="btn">
                <div>
                <Link to='/create-ad'>
                  <button className='button_s' type="submit">Back</button>
                </Link>
                </div>
                <div>
                  <button className='button_s' type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      
      {/* Success Modal */}
      {showSuccessMessage && (
        <div className="modal">
          <div className="modal-content">
             <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '2em', marginBottom: '10px', color: 'green' }} />  
            <p>Submitted</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Formtextad;
