angular.module('demo',['ngAnimate'])
       .controller('MainCtrl', function($window){

       	var i=0;

       	this.items=[i++];

       	//enters items in window
       	this.push = function(){
       		this.items.push(i++);
       	};
       	//leaves item from window
       	this.pop = function(){
       		this.items.pop();
       	};
	
});