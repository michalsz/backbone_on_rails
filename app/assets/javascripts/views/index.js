App.Views.Index = Backbone.View.extend({
    initialize: function(recipes) {
	this.documents = recipes;
        this.render();
    },
    
    render: function() {
	if(this.documents.length > 0) {
            var out = "<h3><a href='#new'>Create New</a></h3><ul>";
            _(this.documents).each(function(item) {
                out += "<li><a href='#recipes/" + item.get('id') + "'>" + item.get('name') + "</a></li>";
            });
            out += "</ul>";
        } else {
            out = "<h3>No documents! <a href='#new'>Create one</a></h3>";
        }


        $(this.el).html(out);
        $('#app').html(this.el);
    }
});