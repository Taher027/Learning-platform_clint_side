import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Private = () => {
    const loaderData = useLoaderData();
    const { title } = loaderData;
    return (
        <div>
            <h1 className="text-center text-info">
        Congratulation!Yout get access {title}
      </h1>
        </div>
    );
};

export default Private;