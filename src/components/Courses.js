import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseInfo from './CourseInfo';

const Courses = () => {
    const loaderData = useLoaderData();
    return (
        <div>
           <div className="container d-flex">
      <div className="col-5">
        {loaderData.map(e => {
          return (
            <div className="m-2" key={e.id}>
              <Link to={`/course/${e.id}`}>
                <button className="btn btn-primary">
                  {e.title}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="col-7">
        <div>
          {loaderData.map(e => {
            return <CourseInfo value={e} key={e.id}></CourseInfo>;
          })}
        </div>
      </div>
    </div>
        </div>
    );
};

export default Courses;