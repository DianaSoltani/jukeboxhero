//to be implemented in index.html
//as the interactive portion of the jukebox

var music;
function main(){
	
	music = loadSound("songTest/Mountkid_-_No_Lullaby_[NCS_Release]");

	createCanvas(300,300);
	background(0,0,0); 
}
function mousePressed(){
	if( !music.isPlaying() ){
		music.stop();
		background(255,255,255);
	}
	else{
		song.play();
		background(0,0,0);
	}
}