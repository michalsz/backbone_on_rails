App.Routers.Recipes = Backbone.Router.extend({
    routes: {
        "":                         "index",
        "recipes/:id":              "edit",
        "new":                      "newRecipe"
    },
    
    edit: function(id) {
        var recipe = new Recipe({ id: id });
        recipe.fetch({
            success: function(model, resp) {
                new App.Views.Edit({ model: recipe });
            },
            error: function() {
                new Error({ message: 'Could not find that recipe.' });
                window.location.hash = '#';
            }
        });
    },
    
    index: function() {
        $.getJSON('/recipes', function(data) {
            if(data) {
                var recipes = _(data).map(function(i) {
		    return new Recipe(i);
		});
		new App.Views.Index(recipes);
            } else {
                new Error({ message: "Error loading recipes." });
            }
        });
    },
    
    newDoc: function() {
        new App.Views.Edit({ model: new Recipe() });
    }
});