export function onRequest(context, next) {
  // intercept response data from a request
  //   console.log(context);
  // optionally, transform the response
  // return a Response directly, or the result of calling `next()`
  return next();
}
