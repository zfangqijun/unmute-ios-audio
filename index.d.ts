interface UnmuteIosAudioOptions {
    /**
     * reuse your context reference
     */
    context: AudioContext;
    /**
     * override internal ios detection    
     * default: false
     */
    forceIos?: boolean;
    /**
     * run when user triggers an event
     * default: true
     */
    whenEvent?: boolean;
}
declare function unmuteIosAudio(options: UnmuteIosAudioOptions): void;

export {
    unmuteIosAudio
}