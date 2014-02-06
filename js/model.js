define( ['jquery', 'underscore', 'Backbone', 'db'], function ( $, _, Backbone, db ) {

	return Backbone.Model.extend( {
		init: function () {
			db.open();
		},

		sync: function () {

		}
	} );

} );