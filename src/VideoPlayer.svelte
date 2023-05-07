<script>
import {onMount} from "svelte"
import videojs from "video.js"

let src = "https://cdn.voxe.tv/s3/movies/Harry.Potter.and.the.Order.of.the.Phoenix.2007.BDrip.720p.x264.Rus.Eng/master.m3u8" 
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
    src: src,
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

<label>
Source:
<input bind:value={src} />
</label>
<video id="video" class="video-js vjs-theme-city vjs-big-play-centered" width="800" height="800" controls />

