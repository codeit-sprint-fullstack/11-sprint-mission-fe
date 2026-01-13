export default function errorHanlder(error, req, res, next) {
  console.error(err);

  let status = err.status || 500;
  let message = err.message || 'server error';

  if (err.name === 'CastError') {
    status = 404;
    message = 'ID가 이상합니다.';
  }

  res.status(status).send({ message });
}
