Flickity.prototype.stopPlayer = function() {
	this.player.stop();
	// always resume play after 3 seconds
	setTimeout( () => {
	this.player.play();
	}, 100)
};