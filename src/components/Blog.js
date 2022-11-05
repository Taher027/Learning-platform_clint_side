import React from 'react';

const Blog = () => {
    return (
        <div className='p-5 m-5'>
            <div>
                <h2 className=''>1. What is cors?</h2>
                <p>ross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div>
                <h2 className=''>2. Why are you using firebase? what options do you have to implement authentication?</h2>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. That's why I used to firebase. </p>
                <p>I have to implement at least email and pass authentication option.</p>
            </div>
            <div>
                <h2 className=''>3. How does the private route work?</h2>
                <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property</p>
            </div>
            <div>
                <h2 className=''>4. What is node ? How does node Work?</h2>
                <p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently</p>
            </div>
        </div>
    );
};

export default Blog;