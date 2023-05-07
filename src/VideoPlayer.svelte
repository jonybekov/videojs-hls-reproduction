<script>
import {onMount} from "svelte"
import videojs from "video.js"
const options = {
  autoplay: "any",
  aspectRatio: "16:9",
  fluid: true,
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
const player = videojs('#video', options);

    player.src({
      src: "https://cdn.voxe.tv/s3/movies/shazam-fury-of-the-gods-903115/master.m3u8",
      type: "application/x-mpegURL",
    })


})
</script>

<video id="video" class="video-js vjs-theme-city vjs-big-play-centered" controls />

