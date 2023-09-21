import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center mt-80">
      <h2 className="text-7xl font-bold mb-10">Oops!!!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>😥😥😥</p>
      <p>
        Your page is <i>{error.statusText || error.message}</i>
      </p>
      <br />
      <Link to="/" className="btn btn-primary">
        Go Back to HomePage
      </Link>
    </div>
  );
};

export default ErrorPage;
