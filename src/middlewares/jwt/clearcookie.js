const clearCookie = async (req, res) => {
  await res.clearCookie("token", { maxAge: 0 }).send();
};

module.exports = clearCookie;
