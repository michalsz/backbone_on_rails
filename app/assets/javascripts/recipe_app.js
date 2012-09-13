var App = {
    Models: {},
    Views: {},
    Routers: {},
    init: function() {
	new App.Routers.Recipes();
	Backbone.history.start();
    }
};