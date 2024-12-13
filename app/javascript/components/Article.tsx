import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Article = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({ content: "" });

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setArticle(response))
      // .catch(() => navigate("/articles"));
  }, [params.id]);

  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  };

  const deleteArticle = () => {
    const url = `/api/v1/destroy/${params.id}`;
    const token = document.querySelector('meta[name="csrf-token"]')?.content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => navigate("/articles"))
      // .catch((error) => console.log(error.message));
  };

  const articleContent = addHtmlEntities(article.content);

  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <img
          src={article.image}
          alt={`${article.title} image`}
          className="img-fluid position-absolute"
        />
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white px-5">
          {article.title}
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          {/* <div className="col-sm-12 col-lg-3">
            <ul className="list-group">
              <h5 className="mb-2">Ingredients</h5>
              {ingredientList()}
            </ul>
          </div> */}
          <div className="col-sm-12 col-lg-7">
            <h5 className="mb-2">Content</h5>
            <div
              dangerouslySetInnerHTML={{
                __html: `${articleContent}`,
              }}
            />
          </div>
          <div className="col-sm-12 col-lg-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={deleteArticle}
            >
              Delete Article
            </button>
          </div>
        </div>
        <Link to="/articles" className="btn btn-link">
          Back to articles
        </Link>
      </div>
    </div>
  );
};

export default Article;
