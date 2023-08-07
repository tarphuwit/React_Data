exports.read = async (req, res) => {
  try {
    res.send("Hello Controller Read");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

exports.list = async (req, res) => {
  try {
    res.send("Hello Controller List");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
exports.create = async (req, res) => {
  try {
    res.send("Creating Post");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
exports.update = async (req, res) => {
  try {
    res.send("Hello Controller Update");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
exports.remove = async (req, res) => {
  try {
    res.send("Hello Controller Remove");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
