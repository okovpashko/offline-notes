define( ['jquery', 'underscore', 'backbone', 'collections/notesCollection', 'views/noteListView'], function ( $, _, Backbone, NotesCollection, NoteListView ) {

	return Backbone.Router.extend( {
		routes    : {
			''   : 'index',
			':id': 'show'
		},
		initialize: function () {
			this.notesList = new NotesCollection();
			this.notesListView = new NoteListView( {collection: this.notesList} );
			Backbone.history.start();
		},
		index     : function () {
			console.log( 'index() called' );
			this.notesList.fetch();
		},
		show      : function ( id ) {
			console.log( 'show() id:' + id + ' called' );
		}
	} );

} );
