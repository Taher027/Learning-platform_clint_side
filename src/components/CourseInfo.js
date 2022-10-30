import React from 'react';

const CourseInfo = (props) => {
    const { title, description, img, duration } = props.value;

    return (
        <div>
            <div className="card text-center">
        <div className="text-center">
          <img
            src={img}
            className="card-img-top"
            alt={title}
            style={{ height: '100px', width: '100px' }}
          />
        </div>
        <div className="card-body text-info">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <span>Duration:{duration}</span>
        </div>
      </div>
        </div>
    );
};

export default CourseInfo;