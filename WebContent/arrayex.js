/**
 * 
 */

// 배열 확장(remove, insert)
//Array.prototype.insert = 
//	function(index, value){
//		if(value instanceof Array){
//			// 가변값 this.splice(index, 0, v1, v2, v3, v4)
//			value.forEach(function(element){
//				this.splice(index, 0, element);
//				console.log(this);
//				index += 1;
//			}.bind(this));
//		} else {
//			this.splice(index, 0, value);
//		}
//	}

//closure

Array.prototype.insert = 
	function(index, value){
		if(value instanceof Array){
			var _this = this;
			value.forEach(function(element){
				_this.splice(index, 0, element);
				index += 1;
			});
		} else {
			this.splice(index, 0, value);
		}
	}

Array.prototype.remove = 
	function(index, value){
		this.splice(index, 1);
	}
