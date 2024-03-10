export default function ErrorComponent({ error }) {
  return (
    <>
      <div className="error-container">
        <h2 className="alternate-content">
          Oops! Something went wrong processing your request 🙉
        </h2>
        {error ? (
          <p className="error-info">
            Error: {error.status} {error.msg}
          </p>
        ) : null}
      </div>
    </>
  );
}
