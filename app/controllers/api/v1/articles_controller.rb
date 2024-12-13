class Api::V1::ArticlesController < ApplicationController
  before_action :set_article, only: %i[show destroy]

  def index
    articles = Article.all.order(created_at: :desc)
    render json: articles
  end

  def create
    article = Article.new(article_params)

    if article.save
      render json: article
    else
      render json: article.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @article
  end

  def destroy
    @article&.destroy
    render json: { message: 'Article deleted!' }
  end

  private

  def article_params
    params.permit(:title, :content, :image)
  end

  def set_article
    @article = Article.find(params[:id])
  end
end
