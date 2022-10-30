import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const loaderData = useLoaderData();
  const { title, description, img, duration , id } = loaderData;
    return (
        <div>
          <div className="col-6 mx-auto text-center text-info border mt-3">
      <div className="d-flex justify-content-around mt-2">
        
        <h2>{title}</h2>
      </div>
      <img src={img} alt={title} style={{ height: '100px', width: '100px' }} />
      <p>{description}</p>
      <p> Duration = {duration}</p>
      <Link to={`/private/${id}`}>
        <button type="button" className="btn btn-primary">
          Get premium access
        </button>
      </Link>
    </div>
        </div>
    );
};

export default Course;