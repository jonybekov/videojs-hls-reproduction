<script>
import {onMount} from "svelte"
import videojs from "video.js"

let src = "https://cdn.voxe.tv/s3/movies/shazam-fury-of-the-gods-903115/master.m3u8" 
let player;

const options = {
  autoplay: "any",
  aspectRatio: "16:9",
  fluid: false,
  textTrackSettings: true,
  vhs: {
    overrideNative: true,
  },
  html5: {
    hlsjsConfig: {
      debug: true,
    },
  },
}

onMount(() => {
  player = videojs('#video', options);

  player.src({
    src: "https://cdn.voxe.tv/s3/movies/shazam-fury-of-the-gods-903115/master.m3u8",
    type: "application/x-mpegURL",
  })
})

$: {
  if(player) player.src({
    src: src,
    type: "application/x-mpegURL"
  })
}

</script>

<input bind:value={src} />
<video id="video" class="video-js vjs-theme-city vjs-big-play-centered" width="800" height="800" controls />

