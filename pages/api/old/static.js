const staticApi = async (req, res) => {
  try {
    res.redirect(307, "https://ictschool.uz/wp-json/wp/v2/");
  } catch (err) {
    res.status(500).send({ error: "failed to transfer to static" });
  }
};

export default staticApi;
