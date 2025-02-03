//function to catch errors in async functions.
//It is an alternative to adding try catch blocks in every async function
//(It saves you time and is more efficient)
export default function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}
