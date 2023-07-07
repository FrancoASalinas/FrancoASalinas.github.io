import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="w-screen h-screen bg-secondary text-white p-6">
      <h2 className="text-primary text-3xl p-2">
        I'm sorry, there's been an error
      </h2>
      <p className="my-5">{error.data}</p>
      <button className="bg-primary text-black p-2 rounded-md">
        <Link to="/Portfolio/">
          <i className="fa-solid fa-arrow-left p-1"></i>Go Back to Home
        </Link>
      </button>
    </div>
  );
}
