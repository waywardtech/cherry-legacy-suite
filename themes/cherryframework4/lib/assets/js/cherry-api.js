var CHERRY_API;

(function($){
	'use strict';

	CHERRY_API = {
		name : 'Cherry Js API',
		varsion : '1.0.0',
		author : 'Cherry Team',

		variable : {
			$document : $( document ),
			$window : $( window ),
			// $.browser was removed in jQuery 1.9 (2013). Nothing reads
			// this field outside the dead IE8 detection in set_variable
			// (now a no-op), so an empty stub is safe.
			browser : {},
			browser_supported : true,
			security : cherry_ajax,
			loaded_assets : {
				script : wp_load_style,
				style : wp_load_script
			}
		},

		status : {
			on_load : false,
			is_ready : false
		},

		init : function(){

			CHERRY_API.set_variable ();

			$( document ).ready( CHERRY_API.ready );

			$( window ).load( CHERRY_API.load );
		},

		set_variable : function(){
			// IE8-or-earlier detection (the only thing this used to do) is
			// dead in 2026, and the original implementation read $.browser
			// which jQuery removed in 1.9 — caused a TypeError on every page
			// load. browser_supported is initialized to true above and
			// nothing else writes it, so this is a safe no-op.
		},

		ready : function(){
			CHERRY_API.status.is_ready = true;
		},

		load : function(){
			CHERRY_API.status.on_load = true;
		},

		utilites : {
			namespace : function( space_path ){
				var parts = space_path.split( '.' ),
					parent = CHERRY_API,
					length = parts.length,
					i = 0;

					for(i = 0; i < length; i += 1 ){
						if( typeof parent[ parts[ i ] ] === 'undefined' ){
							parent[ parts[ i ] ] = {};
						}
						parent = parent[ parts[ i ] ];
					}
				return parent;
			},
			get_compress_assets: function ( url, callback ){
				var data = {
					action : 'get_compress_assets',
					security : CHERRY_API.variable.security,
					style : [],
					script : []
					},
					reg_name = /([\S.]+\/)/gmi,
					reg_type = /(\.js|\.css)/gmi,
					callback_function = callback || function(){};

				if( !$.isArray( url ) ){
					url = [ url ];
				}

				for( var index in url ){
					var file_url = url[ index ],
						file_name = file_url.replace( reg_name, '' ),
						file_type = file_url.match( reg_type )[ 0 ];

					if( file_type === '.js' && $.inArray( file_name, CHERRY_API.variable.loaded_assets.script ) == -1 ){
						data.script.push( file_url );
						CHERRY_API.variable.loaded_assets.script.push( file_name );
					}

					if( file_type === '.css' && $.inArray( file_name, CHERRY_API.variable.loaded_assets.style ) == -1 ){
						data.style.push( file_url );
						CHERRY_API.variable.loaded_assets.style.push( file_name );
					}
				}

				$.get(ajaxurl, data, function(response) {
					var json = $.parseJSON(response),
						compress_style = json.style,
						compress_script = json.script;

					if(compress_style){
						var style = document.createElement('style'),
							styleSheet;

						style.type = 'text/css';
						style.media = 'all';
						style.innerHTML = compress_style;

						$('body', document).append(style);

					}

					if(compress_script){
						var script = new Function(compress_script)();
					}

					return callback_function();
				});
			}
		}
	};

	CHERRY_API.init();
}(jQuery));