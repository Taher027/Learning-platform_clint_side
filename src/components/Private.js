import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Private = () => {
    const loaderData = useLoaderData();
    const { title , description } = loaderData;
    return (
        <div>
            <h1 className="text-center text-info">
        Congratulation!Yout get access {title}
      </h1>
      <p className="p-5">{description}</p>
      
        </div>
    );
};

export default Private;