export const getHome = async (req, res) => {
  const data = {
    title: "Home page",
  };
  res.status(200).render("index", data);
};

export const getNew = async (req, res) => {
  const data = {
    title: "Add a new article",
  };
  res.status(200).render("new", { data ,layout : "./layouts/dashboard.ejs"});
};