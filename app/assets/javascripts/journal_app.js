window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');

    var postsCol = new JournalApp.Collections.Posts();
    postsCol.fetch({
      success: function() {
        var v = new JournalApp.Views.PostsIndex(postsCol);
        $("body").append(v.render().$el);
      }
    });
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
