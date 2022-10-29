import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData()
    return (
        <div>
            <h2>{course.title}</h2>
        </div>
    );
};

export default Course;