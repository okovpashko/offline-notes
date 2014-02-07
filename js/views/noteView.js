define( ['jquery', 'underscore', 'backbone'], function ( $, _, Backbone ) {

	return Backbone.View.extend( {
		tagName: 'li',

		events: {
			'click': 'activate'
		},

		initialize: function () {
			this.model.on( 'change', this.render, this );
			this.model.on( 'destroy', this.remove, this );
		},

		render: function () {
			this.$el.html( this.model.get( 'title' ) );
			return this;
		},

		remove: function () {
			this.$el.remove();
		},

		activate: function () {
			this.$el.siblings().removeClass( 'current' ).end().addClass( 'current' );
			$( '.note-text' ).text( this.model.get( 'text' ) );
		}

	} );

} );