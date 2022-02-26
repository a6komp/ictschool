import DOC from "../../api-documentation.json";

const posts = async (req, res) => {
  res.setHeader(`Cache-Control`, [
    `maxage=86400`,
    `s-maxage=86400`,
    `state-if-error=1`,
  ]);
  res.status(200);
  res.json(DOC);
};

export default posts;
