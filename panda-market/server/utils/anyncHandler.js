export default function anyncHandler(hendler) {
  return async (req, res, next) => {
    try {
      await handler(req, res, nest);
    } catch (error) {
      next(error);
    }
  };
}
