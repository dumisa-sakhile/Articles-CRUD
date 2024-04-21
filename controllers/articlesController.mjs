import Article from "../models/articlesModel.mjs";

export const getArticles = async (req, res) => {
  try {
    const data = await Article.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addArticles = async (req, res) => {
  try {
    const data = await Article.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    const errorMessage = error.errors;

    res.status(500).json(errorMessage);
    console.log(errorMessage);
  }
};

export const updateArticle = async (req, res) => {
  try {

    const data = await Article.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    res.status(200).json(data);
    
  } catch (error) {

    res.status(500).json(error);

    console.log(error);
  }
};

//delete an article
export const deleteArticle = async (req, res) => {

  try {

    const data = await Article.findOneAndDelete({ _id: req.params.id});

    res.status(200).json(data);

  } catch (error) {

    const errorMessage = error.errors;

    res.status(500).json(errorMessage);

    console.log(errorMessage);
  }
};
