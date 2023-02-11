module.exports = (err, req, res, next) => {
  //   console.log(res.statusCode);
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  const enviroment = process.env.NODE_ENV === "production" ? null : err.stack;
  res.json({ message: err.message, stack: enviroment });
};
