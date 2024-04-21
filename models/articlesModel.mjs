import mongoose from "mongoose";

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "The title of the article is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "The author of the article is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "The content of the article is required"],
      trim: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;