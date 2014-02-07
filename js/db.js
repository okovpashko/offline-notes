define( ['underscore'], function ( _ ) {

	var DBNAME = 'notesDB';
	var DBVERSION = '1.0';

	return {
		database: null,

		open: function ( callback, context ) {
			var self = this;
			window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
			window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
			window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

			if ( !window.indexedDB ) {
				throw new Error( 'This browser don\'t support indexedDB' );
			}

			var request = window.indexedDB.open( DBNAME, DBVERSION );

			request.onsuccess = function ( e ) {
				self.database = e.target.result;
				console.log( 'database opened' );
				if ( callback && typeof callback == 'function' ) {
					callback.apply( context );
				}
			};
			request.onerror = function () {
				throw new Error( 'Can\'t open indexedDB' );
			};
			request.onupgradeneeded = function ( e ) {
				self.database = e.target.result;
				if ( !self.databaseobjectStoreNames.contains( "notes" ) ) {
					var objectStore = db.createObjectStore( 'notes', {keyPath: 'id', autoIncrement: true} );
					objectStore.createIndex( 'title', 'title', {unique: false} );
					objectStore.createIndex( 'text', 'text', {unique: false} );
					objectStore.createIndex( 'timestamp', 'timestamp', {unique: false} );
				}
			};
		},

		saveNote: function ( note ) {
			var defaultNote = {
				title    : '',
				text     : '',
				timestamp: new Date().getTime()
			};

			note = _.extend( defaultNote, note );

			//			self.database.transaction(['notes'], 'readwrite');

			console.log( 'saveNote() called' );
		},

		getNote: function () {
			console.log( 'getNote() called' );
		},

		getAllNotes: function () {
			console.log( 'getAllNotes() called' );

			return [
				{
					title    : 'sample note 1',
					text     : 'sample text 1',
					timestamp: new Date().getTime()
				},
				{
					title    : 'sample note 2',
					text     : 'sample text 2',
					timestamp: new Date().getTime()
				},
				{
					title    : 'sample note 3',
					text     : 'sample text 3',
					timestamp: new Date().getTime()
				},
				{
					title    : 'sample note 4',
					text     : 'sample text 4',
					timestamp: new Date().getTime()
				}
			]
		}

	};

} );
