App.Views.Edit = Backbone.View.extend({
    events: {
        "submit form": "save"
    },

    initialize: function(recipes) {
	this.documents = recipes;
        this.render();
    },
    
    save: function(){
	alert('save');
    },

    render: function() {
	if(this.documents){
	    var out = '<form>';
	    out += 'Name<input name="name"  value="' + this.documents.get('name') + '" />';
	    out +=  '<br/>Content<textarea name="content">' + this.documents.get('content') + '</textarea>';
	    out +=  '<br/>';

	    var submitText = this.documents.isNew() ? 'Create' : 'Save';

	    out += "<button>" + submitText + "</button>";
            out += "</form>";
	}

	$(this.el).html(out);
	$('#edit').html(this.el);
    }
});