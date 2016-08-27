function Media(title, duration) {
  this.title = title;
  this.duration = duration;
  this.isPlaying = false;
}


Media.prototype.start = function start() {
  this.isPlaying = true;
};

Media.prototype.stop = function stop() {
  this.isPlaying = false;
};

function Song(title, artist, duration) {
  Media.call(this, title, duration);
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

function Movie(title, year, duration) {
  Media.call(this, title, duration);
  this.year = year;
}

Movie.prototype = Object.create(Media.prototype);

console.log(Media);