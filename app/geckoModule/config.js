var config = {
    wavesurfer: {
        container: '#waveform',
        waveColor: 'black',
        // waveColor == progressColor => no progress painting
        // progressColor: 'black',
        pixelRatio: 1,
        autoCenter : true,
        autoCenterImmediately: true,
        height: '350',
        useSpectrogram: true,
        scrollParent: true
    },
    parserOptions: {
        srt: {
            groupWords: true
        }
    },
    slider: "#slider",
    isServerMode: false,
    proofreadingAutoScroll: false,
    enableDrafts: false
}

export { config }