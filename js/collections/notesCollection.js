define( ['backbone', '../models/noteModel', 'db'], function ( Backbone, NotesModel, db ) {
	return Backbone.Collection.extend( {
		model: NotesModel,

		initialize: function () {
			db.open( this.fetch, this );
		},

		fetch: function () {
			var notes = db.getAllNotes();
			this.reset( notes );
		}
	} );
} );
