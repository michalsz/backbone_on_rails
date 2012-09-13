Recipe = Backbone.Model.extend({
    initialize: function(){
    },
    defaults: {
	"name": 'Soup',
	"content": 'content'
    },

    url : function() {
	var base = 'recipes';
	if (this.isNew()) return base;
	return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
    }

});