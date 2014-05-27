/* El.addClass / El.removeClass / El.hasClass / El.toggleClass
 *
 * Adds/removes a specified class; detects whether or not a specified element has a specified class; toggles a specified class
 *
 * Parameters:
 * -element
 * -className
 *
 * Requires: Core.js
 */
	
	// Detect is a given element has a particular class
	
	El.hasClass = function(element,cls){
		if (testParam(element)){
			return element.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
		} else {
			throw new Error("Cannot evaluate class status for undefined element.");
		}
	}
	
	// Add the specified className to the element if it doesn't already contain that class
	
	El.addClass = function(element,cls){
		if (testParam(element)){
			if (!El.hasClass(element,cls)){
				if (testParam(cls)){
					if (element.className == ""){
						element.className += cls;
					} else {
						element.className += " " + cls;
					}
				} else {
					throw new Error("Class to add is undefined.");
				}
			}
		} else {
			throw new Error("Cannot add class to undefined element.");
		}
	}
	
	// Remove the specified className from the element if it contains that class
	
	El.removeClass = function(element,cls) {
		if (testParam(element)){
			if (El.hasClass(element,cls)){
				if (testParam(cls)){
					var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
					element.className = element.className.replace(reg,"");
				} else {
					throw new Error("Class to remove is undefined.");
				}
			}
		} else {
			throw new Error("Cannot remove class from undefined element.");
		}
	}
	
	// Toggles the specified className
	
	El.toggleClass = function(element,cls){
		if (testParam(element)){
			if (!El.hasClass(element,cls)){
				El.addClass(element,cls);
			} else if (El.hasClass(element,cls)){
				El.removeClass(element,cls);
			}
		} else {
			throw new Error("Cannot toggle class for undefined element.");
		}
	};