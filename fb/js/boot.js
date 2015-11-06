var bootState = function(game)
{
	this.preload=function()
	{
		game.load.image('loading','assets/loading.gif');
	};

	this.create =function()
	{
	
		game.state.start('loader');
	
	};



}