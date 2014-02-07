require.config( {
	baseURL: '',
	paths  : {
		jquery    : 'lib/jquery-1.11.0.min',
		underscore: 'lib/underscore-min',
		backbone  : 'lib/backbone-min'
	},
	shim   : {
		'backbone'  : {
			deps   : ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
	}
} );

window.NOTES = window.NOTES || {};

require( ['router'], function ( NotesRouter ) {
	NOTES.app = new NotesRouter();
} );
