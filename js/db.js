define( ['underscore'], function ( _ ) {

	var DBNAME = 'notesDB';
	var DBVERSION = '1.0';

	return {
		database: null,

		open: function () {
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

		getAllNotes: function() {
			console.log( 'getAllNotes() called' );
		}

	};

} );
