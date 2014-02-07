define( ['jquery', 'underscore', 'backbone', 'models/noteModel', 'views/noteView'], function ( $, _, Backbone, NoteModel, NoteView ) {

	return Backbone.View.extend( {
		el: '.notes-list',

		events: {

		},

		initialize: function () {
			this.collection.on( 'add', this.renderNote, this );
			this.collection.on( 'reset', this.renderAllNotes, this );
		},

		renderNote: function ( noteItem ) {
			var noteView = new NoteView( {model: noteItem} );
			this.$el.append( noteView.render().el );
		},

		renderAllNotes: function () {
			this.$el.children().remove();
			this.collection.forEach( this.renderNote, this )
		},

		render: function () {
			this.renderAllNotes();
		}

	} );

} );
