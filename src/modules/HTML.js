/**
 * html()
 * 
 * Returns the selected element's innerHTML, or replaces it if the "content" argument is entered
 *
 * Parameter: (optional)
 * -content
 */
	
	$.fn.html = function(_content) {
		
		var txt;
		
		this.init(function() {
			
			if (_content) {
				this.innerHTML = _content;
			}
			
			else {
				txt = this.innerHTML;
			}
			
		});
		
		return _content ? this : txt;
 	};
 