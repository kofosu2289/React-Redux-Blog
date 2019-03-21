import React from "react";

export default () => (
  <div>
    {/*Main jumbotron for a primary marketing message or call to action*/}
    <div className="jumbotron">
      <h1 className="display-3">Welcome!</h1>
      <p>
      This is a MERN stack-based fully-functioning blog system. 
      </p>
      <p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more &raquo;
        </a>
      </p>
    </div>

    {/*Example row of columns*/}
    <div className="row">
      <div className="col-md-4">
        <h2>Frontend</h2>
        <p>
          The fontend is built using React and Redux(for middlewares and reducers). React-Router is used for navigation, Redux-Thunk is used for processing asychronous requests, and Bootstrap 4 is used for page styling. 
        </p>
        <p>
          <a className="btn btn-secondary" href="#" role="button">
            View details &raquo;
          </a>
        </p>
      </div>
      <div className="col-md-4">
        <h2>Backend</h2>
        <p>
          The backend is built with Express.js and Node.js. Passport.js is used as an authentication middleware in the server. JSON Web Tokens (JWT) is used for signing in users and making authenticated requests.
        </p>
        <p>
          <a className="btn btn-secondary" href="#" role="button">
            View details &raquo;
          </a>
        </p>
      </div>
      <div className="col-md-4">
        <h2>Database</h2>
        <p>
        MongoDB is used as the back-end database, which includes different data models/schemas (i.e., User, Post and Comment). Mongoose is used to access the MongoDB database for CRUD actions (create, read, update and delete)
        </p>
        <p>
          <a className="btn btn-secondary" href="#" role="button">
            View details &raquo;
          </a>
        </p>
      </div>
    </div>
  </div>
);
