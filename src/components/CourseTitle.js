import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

const CourseTitle = () => {

    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return (
        <div>
            <h4>All Courses {course.length}</h4>
            <div>
                {
                    course.map(c => <p key={course.id}>

                        <Link to={`course/${c.id}`}>{c.title}</Link>

                    </p>)
                }
            </div>
            <div>
                <ButtonGroup vertical>
                    <Button variant='outline-primary'> <FaGoogle></FaGoogle> Login with Google</Button>
                    <Button variant='outline-dark'><FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default CourseTitle;