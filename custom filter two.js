/*global angular*/
(function() {
	'use strict';
	/**
	 * Filter to convert string into titleCase.
	 * 
	 * @returns {TitleCase string} function which will be used to convert the
	 *          given string into title Case.
	 */

	function pascalCase() {
		return function(str) {
			/**
			 * Replace everything but letters and spaces. Find non-words,
			 * upperCase letters, leading-word letters, and multiple spaces
			 * than convert 0 index word into lowerCase and else in upperCase.
			 */

			return (str.replace(/[^a-z ]/ig, '').replace(
					/(?:^\w|[A-Z]|\b\w|\s+)/g,
					function(match, index) {
						return +match === 0 ? ''
								: match[index === 0 ? 'toLowerCase'
										: 'toUpperCase']();
					}).replace(/([A-Z])/g, ' $1')).replace(/^./, function(str) {
				return str.toUpperCase();
			});
		};
	}

	var app = angular.module('myapp'), requires = [ pascalCase ];
	app.filter('cartosTitleCase', requires);
}());
