module.exports = (_, res) => {
  res.status(400).json({ message: "Not found!" });
};
