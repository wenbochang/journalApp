JournalApp.Views.PostsIndex = Backbone.View.extend({
  tagName: "ul",

  template: JST["posts/index"],

  events: {
    "click .delete-post": "deletePost"
  },

  initialize: function(posts) {
    var view = this;
    view.posts = posts;
    view.listenTo(view.posts, "add", view.render);
    view.listenTo(view.posts, "remove", view.render);
  },

  render: function() {
    var view = this;
    this.$el.html(this.template({
      posts: view.posts
    }));
    return this;
  },

  deletePost: function(event) {
    var post_id = $(event.currentTarget).attr("data_id");
    var post = new JournalApp.Models.Post({ id: parseInt(post_id) });
    this.posts.remove(post);
    //post.destroy();
  }
})
