module.exports = function(){
	return{

     	add: function(num1, num2){
        console.log("the sum is:", num1 + num2);
    	},

    	multiply: function(num1, num2){
        console.log("the answer is:", num1 * num2);
    	},

    	square: function(num){
        console.log("the answer is:",num*num);
    	},

    	random: function(max, min){
        console.log("the answer is:",Math.floor(Math.random() * (max - min + 1) ) + min);
;
    	}
	}
}