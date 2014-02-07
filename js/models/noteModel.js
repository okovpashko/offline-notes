define( ['jquery', 'underscore', 'backbone', '../db'], function ( $, _, Backbone, db ) {

	return Backbone.Model.extend( {

		initialize: function () {
			db.open();
		},

		get: db.getNote,

		set: db.saveNote

	} );

} );
