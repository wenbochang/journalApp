class Api::PostsController < ApplicationController
  def index
    @posts = Post.all

    respond_to do |format|
      format.html { render :html => "index.html.erb" }
      format.json { render :json => @posts }
    end

  end

  def create
    @post = Post.new(params[:post])
    if @post.save
      render :json => @post
    else
      render :json => @post.errors, :status => 422
    end
  end

  def show
    @post = Post.find(params[:id])
    render :json => @post
  end

  def destroy
    Post.find(params[:id]).destroy
    head :ok
  end
end
