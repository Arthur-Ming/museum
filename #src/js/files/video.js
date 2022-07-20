
let currentVideo = document.querySelector('.swiper-slide-active>.video')
const videoToggler = document.getElementById('video-toggle')
const volumeToggler = document.getElementById('volume-toggle')
const playButton = document.querySelector('.video__start')
const progressBar = document.querySelector('.video--progress-video')
const volume = document.querySelector('.video--loud')
const videoCurrentSpeed = document.querySelector('.video__current-speed')
let isStop = true
let isVolume = true

progressBar.value = 0;

function stopVideo() {
   currentVideo.pause()
   // videoToggler.removeEventListener('click', play)
   const value = 0;
   progressBar.value = value
   progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
   currentVideo.currentTime = value;
   isStop = true
   videoToggler.classList.remove('_pause')
   playButton.classList.remove('_pause')
}

function onVolumeToggler() {
   volumeToggler.classList.toggle('_not-vol')
   isVolume = !isVolume
   const currentValue = isVolume ? 40 : 0
   volume.value = currentValue
   currentVideo.volume = currentValue / 100;
   volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${currentValue}%, #C4C4C4 ${currentValue}%, #C4C4C4 100%)`

}

function showCurrentSpeed(speed, el = videoCurrentSpeed) {
   el.classList.add('is-show-speed')
   el.innerHTML = speed;
   setTimeout(() => {
      el.classList.remove('is-show-speed')
   }, 1000)

}

function play() {

   isStop ? currentVideo.play() : currentVideo.pause()
   isStop = !isStop;
   videoToggler.classList.toggle('_pause')
   playButton.classList.toggle('_pause')
}

function videoVolume() {
   const value = Number(this.value)
   let currentValue;
   if (value === 0) {
      isVolume = false
      volumeToggler.classList.add('_not-vol')
      currentValue = 0;

   } else {
      isVolume = true
      volumeToggler.classList.remove('_not-vol')
      currentValue = value
   }

   currentVideo.volume = currentValue / 100
   this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${currentValue}%, #C4C4C4 ${currentValue}%, #C4C4C4 100%)`


}

function onVideoClick() {

   play()

}

function resetVideo() {
   stopVideo()
   currentVideo.removeEventListener('timeupdate', onTimeUpdate)
   currentVideo.removeEventListener('click', onVideoClick)

   currentVideo = document.querySelector('.swiper-slide-active>.video')

   currentVideo.addEventListener('timeupdate', onTimeUpdate)
   currentVideo.addEventListener('click', onVideoClick)
   currentVideo.volume = Number(volume.value) / 100
}

let shift = '';
function onkeydownHendler(e) {

   if (e.code === 'Space' && currentVideo.currentTime) {
      e.preventDefault()
      play()
   }
   if (e.code === 'KeyM') {
      onVolumeToggler()
   }
   if (e.code === 'KeyF') {
      fullscreenToggle()
   }


   if (e.key === 'Shift') {

      shift = 'Shift'

      document.addEventListener('keyup', () => {
         shift = ''
      })
   }

   if (e.code === 'Period') {
      shift = shift + 'Period'
      if (shift === 'ShiftPeriod' && currentVideo.currentTime) {

         if (currentVideo.playbackRate < 2) {
            currentVideo.playbackRate += 0.25
         }
         shift = ''
         showCurrentSpeed(currentVideo.playbackRate)

      }
   }
   if (e.code === 'Comma') {
      shift = shift + 'Comma'
      if (shift === 'ShiftComma' && currentVideo.currentTime) {
         if (currentVideo.playbackRate > 0.25) {
            currentVideo.playbackRate -= 0.25
         }
         shift = ''
         showCurrentSpeed(currentVideo.playbackRate)

      }
   }


   /*   console.log(e.code)
     console.log(e.key) */
}



progressBar.addEventListener('input', function () {
   const value = this.value;

   this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`

   let a = Number(currentVideo.duration);
   let b = Number(value)

   currentVideo.currentTime = a / 100 * b

})

function onTimeUpdate() {
   //progressBar.

   const value = this.currentTime / this.duration * 100
   progressBar.value = value
   if (value >= 100) {
      stopVideo()
   }

   progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
}

volume.addEventListener('input', videoVolume)
volumeToggler.addEventListener('click', onVolumeToggler)
videoToggler.addEventListener('click', play)
playButton.addEventListener('click', play)
currentVideo.addEventListener('timeupdate', onTimeUpdate)
currentVideo.addEventListener('click', onVideoClick)
document.querySelector('.videoslider__wrapper').addEventListener("transitionend", resetVideo);
document.addEventListener('keydown', onkeydownHendler)




//==============================================================
const videosliderPanel = document.querySelector('.videoslider__panel')
const videosliderWrapper = document.querySelector('.videoslider')


function fullscreenToggle() {
   document.fullscreenElement ? exitFullscreen('fs_section_video') : enterFullscreen('fs_section_video')

}


document.getElementById('fs-button').addEventListener('click', fullscreenToggle)



document.cancelFullScreen = document.cancelFullScreen ||
   document.webkitCancelFullScreen ||
   document.mozCancelFullScreen;


function enterFullscreen(id) {

   var el = document.getElementById(id);
   var onfullscreenchange = function (event) {

      console.log('!!!')
      var fullscreenElement = document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement;
      var fullscreenEnabled = document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled;
   }

   el.addEventListener("webkitfullscreenchange", onfullscreenchange);
   el.addEventListener("mozfullscreenchange", onfullscreenchange);
   el.addEventListener("fullscreenchange", onfullscreenchange);

   /*  if (el.webkitRequestFullScreen) {
       el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else {
       el.mozRequestFullScreen();
    } */
   if (el.requestFullscreen) {
      el.requestFullscreen();
   } else if (el.webkitrequestFullscreen) {
      el.webkitRequestFullscreen();
   } else if (el.mozRequestFullscreen) {
      el.mozRequestFullScreen();
   }

}

function exitFullscreen(id) {

   document.cancelFullScreen();

}
//=========================================================
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const videosliderVideoItem = document.querySelectorAll('.videoslider__video-item')
const videosliderItem = document.querySelectorAll('.videoslider__item')
const arr = []
let done = false;
let isFirstTimeStateChange = true;


function onYouTubeIframeAPIReady() {
   for (const id of videosliderVideoItem) {


      let player = new YT.Player(id, {

         events: {
            'onReady': (event) => {
               window.addEventListener('click', (e) => {
                  event.target.pauseVideo();
               });
            },
            'onStateChange': (event) => {

               stopVideo();
               if (!isFirstTimeStateChange) {
                  for (const i of arr) {

                     if (i.getPlayerState() === 1 && i.id !== event.target.id && !done) {
                        i.pauseVideo();
                     }
                  }
                  done = !done;
               }
               isFirstTimeStateChange = false
            }
         }

      });
      arr.push(player)

   }

}