import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from "./assets/img.png";
import image2 from "./assets/img2.png";

const CreateAd = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className='CreateAd'>
        <div className='conationerAd'>
          <h3>Create Ads</h3>
          <div className='sectionAds'>
            <div className='box'>
              <div className="selection-wrapper">
                <label htmlFor="selected-item-1" className="selected-label">
                  <input
                    type="radio"
                    name="selected-item"
                    id="selected-item-1"
                    onChange={() => handleOptionChange('text')}
                  />
                  <span className="icon"></span>
                  <div className="selected-content">
                    <img src={image} alt="" />
                    <p>Create</p>
                    <h4>Text Ad</h4>
                  </div>
                </label>
              </div>
            </div>
            <div className='box'>
              <div className="selection-wrapper">
                <label htmlFor="selected-item-2" className="selected-label">
                  <input
                    type="radio"
                    name="selected-item"
                    id="selected-item-2"
                    onChange={() => handleOptionChange('media')}
                  />
                  <span className="icon"></span>
                  <div className="selected-content">
                    <img src={image2} alt="" />
                    <p>Create</p>
                    <h4>Media Ad</h4>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <Link to={selectedOption === 'text' ? '/form-text-ads' : '/form-media-ads'}>
            <button className="button-22" role="button">Next</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CreateAd;
