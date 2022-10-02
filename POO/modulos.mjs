function videoPlay(id) {
  const url = "https://youtube.com";
  console.log("Se está reproduciendo desde la url " + url);
}

function videoStop(id) {
  const url = "https://youtube.com";
  console.log("Pausamos la url " + url);
}

export class Clases {
  constructor({ name, VideoID }) {
    this.name = name;
    this.VideoID = VideoID;
  }

  reproducir() {
    videoPlay(this.VideoID);
  }

  
}
