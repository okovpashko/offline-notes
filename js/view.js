define( ['jquery', 'underscore', 'Backbone', 'model'], function ( $, _, Backbone, NotesModel ) {

	return Backbone.View.extend( {
		model: new NotesModel(),

		init: function () {

		}

	} );

} );