var loaderState = function(game){

	this.init=function(){
		var sprite = game.add.image(game.world.centerX, game.world.centerY, 'loading');
		sprite.anchor = { x:0.5, y:0.5};
		
	};

	this.preload = function(){

	}


}