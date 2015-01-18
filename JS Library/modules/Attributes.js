/**
 * attr() / hasAttr() / removeAttr()
 *
 * Sets or returns the value of the specified attribute; Checks to see if the specified element has the specified attribute;
 * Removes the specified attribute
 *
 * Parameters:
 * -attribute
 * -value (optional - if included, the specified attribute will be set to this value...
 *         otherwise, the current value of the specified value will be returned)
 */
	
	$.fn.attr = function(_attribute,_value){
		var elemAttribute;
		$.forEach(this.init,function(){
			if (_attribute){
				if (_value){
					this.setAttribute(_attribute,_value);
				} else {
					elemAttribute = this.getAttribute(_attribute);
				}
			} else {
				throw new Error("Please specify an attribute to either edit or return it's value.");
			}
		});
		var toReturn = (_value) ? this : elemAttribute;
		return toReturn;
	};
	
	$.fn.hasAttr = function(_attribute){
		var attr;
		$.forEach(this.init,function(){
			if (_attribute){
				attr = $(this).attr(_attribute) !== null;
			} else {
				throw new Error("Can't determine if the selected element has null attribute.");
			}
		});
		return attr;
	};
	
	$.fn.removeAttr = function(_attribute){
		$.forEach(this.init,function(){
			if (_attribute){
				this.removeAttribute(_attribute);
			} else {
				throw new Error("Please specify an attribute to remove.");
			}
		});
		return this;
	};