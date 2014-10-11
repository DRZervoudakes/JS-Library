/* GrindstoneJS (https://github.com/DRZervoudakes/GrindstoneJS)
 *
 * Library Core
 *
 * Includes:
 * -Constructor "Grindstone" and selector functions
 * -Any tertiary functions as necessary
 *
 * Copyright (c) 2014 Dan Zervoudakes
 * Developed under the MIT license
 */
	
	// Global constructor "Grindstone" and selector functions...
	
	var Grindstone = function(selector,context){
		var info = {
			Name: "GrindstoneJS",
			Version: "1.0.0",
			About: "Lightweight JavaScript library optimized for simple DOM manipulation. Not a MVC.",
			Compatibility: "Chrome, Firefox, Safari, Opera, IE 9+, mobile.",
			GitHub: "https://github.com/DRZervoudakes/GrindstoneJS",
			Author: "Dan Zervoudakes"
		};
		if (selector){
			var selectedElements;
			if (typeof selector === "string"){
				if (context){
					var elem = document.querySelector(context);
					selectedElements = elem.querySelectorAll(selector);
				} else {
					selectedElements = document.querySelectorAll(selector);
				}
				if (selectedElements.length > 0){
					this.init = selectedElements;
				} else {
					return [];
				}
				return this;
			} else if (typeof selector === "object"){
				this.init = [selector];
			} else {
				return null;
			}
		} else {
			return info;
		}
	};
	
	// Shorthand method for obtaining the same results as above...
	
	var $ = function(selector,context){
		return new Grindstone(selector,context);
	};
	
	// Custom forEach function to streamline the looping process throughout... (since we are dealing with NodeLists, the Array.prototype.forEach() method will not work natively)
	
	$.forEach = function(array,callback){
		for (var i = 0; i < array.length; i++){
			callback.call(array[i]);
		};
	};
	
	// Cut down on repetitive text throughout...
	
	$.gs = Grindstone.prototype;