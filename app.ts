// class AudioProccessor {
//   extractAudio() {
//     console.log("Extracting audio from video...");
//   }
// }

import { AuthFacade } from "./pattern/auth.facad";

// class VideoProccessor {
//   decodeVideo() {
//     console.log("Decoding video...");
//   }
// }

// class Encoder {
//   encode(format: string) {
//     console.log(`Enkoding to format ${format}...`);
//   }
// }

// class VideoConverterFacade {
//   private audio = new AudioProccessor();
//   private video = new VideoProccessor();
//   private encoder = new Encoder();

//   convert(fileName: string, format: string) {
//     console.log(`Converting ${fileName} to ${format}...`);
//     this.audio.extractAudio();
//     this.video.decodeVideo();
//     this.encoder.encode(format);
//     console.log(`Conversion of ${fileName} to ${format} completed`);
//   }
// }

// const converter = new VideoConverterFacade();
// converter.convert("movie.mp4", "avi");

const auth = new AuthFacade();

function register() {
  try {
    const token = auth.register("m@gmail.com", "123456");
    console.log("Register Successful, token", token);
  } catch (error) {
    console.log("Register failed", error);
  }
}

function login() {
  try {
    const token = auth.login("m@gmail.com", "123456");
    console.log("Login Successful, token", token);
  } catch (error) {
    console.log("login failed", error);
  }
}

register();
login();
