export const getHome = async (req, res) => {
  const data = {
    title: "Home page",
  };
  res.status(200).render("index", data);
};
