export function hello(event, context, callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello World!'),
  };

  callback(null, response);
}
