import React, { useEffect } from "react";

import dashjs from "dashjs";

const App = () => {

  useEffect(() => {

    initPlayer()
  }, [])

  const initPlayer = () => {
    var protData = {
      "com.widevine.alpha": {
        "serverURL": "https://drm-widevine-licensing.axtest.net/AcquireLicense",
        "httpRequestHeaders": {
          "X-AxDRM-Message": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiNjllNTQwODgtZTllMC00NTMwLThjMWEtMWViNmRjZDBkMTRlIiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImtleXMiOlt7ImlkIjoiNmU1YTFkMjYtMjc1Ny00N2Q3LTgwNDYtZWFhNWQxZDM0YjVhIn1dfX0.yF7PflOPv9qHnu3ZWJNZ12jgkqTabmwXbDWk_47tLNE"
        },
      }
    };
    var url = "https://media.axprod.net/TestVectors/v6.1-MultiDRM/Manifest_1080p.mpd";
    var firstLoad = true;
    var player = dashjs.MediaPlayer().create();
    

    player.updateSettings({
      autoPlay: false,
      debug: {
        logLevel: dashjs.Debug.LOG_LEVEL_WARNING,
        dispatchEvent: false
      },
      streaming: {

        buffer: {
          // stableBufferTime: player.StableBufferDelay,
          // bufferTimeAtTopQuality: player.BufferTimeAtTopQuality,
          // bufferTimeAtTopQualityLongForm: player.BufferTimeAtTopQualityLongForm,
          initialBufferLevel: 600,
          bufferPruningInterval: player.bufferPruningInterval,
          fastSwitchEnabled: player.fastSwitchEnabled,
        },

        errors: {
          recoverAttempts: {
            mediaErrorDecode: 5
          }
        },

        gaps: {
          jumpGaps: true,
          jumpLargeGaps: true,
          smallGapLimit: 1.5,
          threshold: 0.3,
          enableSeekFix: true,
          enableStallFix: false,
          stallSeek: 0.1
        },
        text: {
          defaultEnabled: false
        },
      }
    })

    if (!firstLoad) {
      player.attachSource(url);
    }
    else {
      firstLoad = false;

      player.initialize(document.querySelector("video"), url, true);
      player.on(dashjs.MediaPlayer.events.ERROR, function (e) {

        if (!e.event) {
          console.log("(Player)", e.error.code)
          switch (e.error.code) {
            case dashjs.MediaPlayer.errors.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE:
              console.log("(Player)MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE(10)")
              break;
            case dashjs.MediaPlayer.errors.MANIFEST_LOADER_LOADING_FAILURE_ERROR_CODE:
              console.log("(Player)MANIFEST_LOADER_LOADING_FAILURE_ERROR_CODE(11)")
              break;
            case dashjs.MediaPlayer.errors.XLINK_LOADER_LOADING_FAILURE_ERROR_CODE:
              console.log("(Player)XLINK_LOADER_LOADING_FAILURE_ERROR_CODE(12)")
              break;
            case dashjs.MediaPlayer.errors.SEGMENT_BASE_LOADER_ERROR_CODE:
              console.log("(Player)SEGMENT_BASE_LOADER_ERROR_CODE(15)")
              break;
            case dashjs.MediaPlayer.errors.TIME_SYNC_FAILED_ERROR_CODE:
              console.log("(Player)TIME_SYNC_FAILED_ERROR_CODE(16)")
              break;
            case dashjs.MediaPlayer.errors.FRAGMENT_LOADER_LOADING_FAILURE_ERROR_CODE:
              console.log("(Player)FRAGMENT_LOADER_LOADING_FAILURE_ERROR_CODE(17)")
              break;
            case dashjs.MediaPlayer.errors.FRAGMENT_LOADER_NULL_REQUEST_ERROR_CODE:
              console.log("(Player)FRAGMENT_LOADER_NULL_REQUEST_ERROR_CODE(18)")
              break;
            case dashjs.MediaPlayer.errors.URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE:
              console.log("(Player)URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE(19)")
              break;
            case dashjs.MediaPlayer.errors.APPEND_ERROR_CODE:
              console.log("(Player)APPEND_ERROR_CODE(20)")
              break;
            case dashjs.MediaPlayer.errors.REMOVE_ERROR_CODE:
              console.log("(Player)REMOVE_ERROR_CODE(21)")
              break;
            case dashjs.MediaPlayer.errors.DATA_UPDATE_FAILED_ERROR_CODE:
              console.log("(Player)DATA_UPDATE_FAILED_ERROR_CODE(22)")
              break;
            case dashjs.MediaPlayer.errors.CAPABILITY_MEDIASOURCE_ERROR_CODE:
              console.log("(Player)CAPABILITY_MEDIASOURCE_ERROR_CODE(23)")
              break;
            case dashjs.MediaPlayer.errors.CAPABILITY_MEDIAKEYS_ERROR_CODE:
              console.log("(Player)CAPABILITY_MEDIAKEYS_ERROR_CODE(24)")
              break;
            case dashjs.MediaPlayer.errors.DOWNLOAD_ERROR_ID_MANIFEST_CODE:
              console.log("(Player)DOWNLOAD_ERROR_ID_MANIFEST_CODE(25)")
              break;
            case dashjs.MediaPlayer.errors.DOWNLOAD_ERROR_ID_SIDX_CODE:
              console.log("(Player)DOWNLOAD_ERROR_ID_SIDX_CODE(26)")
              break;
            case dashjs.MediaPlayer.errors.DOWNLOAD_ERROR_ID_CONTENT_CODE:
              console.log("(Player)DOWNLOAD_ERROR_ID_CONTENT_CODE(27)")
              break;
            case dashjs.MediaPlayer.errors.DOWNLOAD_ERROR_ID_INITIALIZATION_CODE:
              console.log("(Player)DOWNLOAD_ERROR_ID_INITIALIZATION_CODE(28)")
              break;
            case dashjs.MediaPlayer.errors.DOWNLOAD_ERROR_ID_XLINK_CODE:
              console.log("(Player)DOWNLOAD_ERROR_ID_XLINK_CODE(29)")
              break;
            case dashjs.MediaPlayer.errors.MANIFEST_ERROR_ID_PARSE_CODE:
              console.log("(Player)MANIFEST_ERROR_ID_PARSE_CODE(31)")
              break;
            case dashjs.MediaPlayer.errors.MANIFEST_ERROR_ID_NOSTREAMS_CODE:
              console.log("(Player)MANIFEST_ERROR_ID_NOSTREAMS_CODE(32)")
              break;
            case dashjs.MediaPlayer.errors.TIMED_TEXT_ERROR_ID_PARSE_CODE:
              console.log("(Player)TIMED_TEXT_ERROR_ID_PARSE_CODE(33)")
              break;
            // mss errors
            case dashjs.MediaPlayer.errors.MSS_NO_TFRF_CODE:
            // protection errors
            case dashjs.MediaPlayer.errors.MEDIA_KEYERR_CODE:
              console.log("(Player)MEDIA_KEYERR_CODE")
              break;
            case dashjs.MediaPlayer.errors.MEDIA_KEYERR_UNKNOWN_CODE:
              console.log("(Player)MEDIA_KEYERR_UNKNOWN_CODE")
              break;
            case dashjs.MediaPlayer.errors.MEDIA_KEYERR_CLIENT_CODE:
              console.log("(Player)MEDIA_KEYERR_CLIENT_CODE")
              break;
            case dashjs.MediaPlayer.errors.MEDIA_KEYERR_SERVICE_CODE:
              console.log("(Player)MEDIA_KEYERR_SERVICE_CODE")
              break;
            case dashjs.MediaPlayer.errors.MEDIA_KEYERR_OUTPUT_CODE:
              console.log("(Player)MEDIA_KEYERR_OUTPUT_CODE")
              break;
            case dashjs.MediaPlayer.errors.MEDIA_KEYERR_HARDWARECHANGE_CODE:
              console.log("(Player)MEDIA_KEYERR_HARDWARECHANGE_CODE")
              break;
            case dashjs.MediaPlayer.errors.MEDIA_KEYERR_DOMAIN_CODE:
              console.log("(Player)MEDIA_KEYERR_DOMAIN_CODE")
              break;

          }
          console.log("p", e.error)
        }
      });
    }
    player.setProtectionData(protData);
  }
  return (
    <div className="App">
      {/* <img src="https://imag.malavida.com/mvimgbig/download-fs/html5-video-player-10741-1.jpg" onClick={initPlayer()}/> */}
      <video id="video" controls
        onPlaying={() => console.log('(Player)playing')}
        onPause={() => console.log('(Player)pause')}
        onSeeking={() => console.log('(Player)seeking')}
        onWaiting={() => console.log('(Player)waiting')}
        onVolumeChange={() => console.log('(Player)volumeChnage')}
        onLoadStart={() => console.log('(Player)Loadstart')}
        onPlayTimeUpdate={() => console.log('(Player)Time')}
        onError={() => console.log('(Player)error')}
        onStalled={() => console.log('(Player)stalled')}
        onPlaybackPaused={() => console.log('(Player)backpause')}
      >
      </video>
    </div>
  );
}

export default App;


