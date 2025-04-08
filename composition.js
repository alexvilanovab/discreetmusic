function playNote() {
  const envelope = {
    attack: 0.3,
    attackCurve: "linear",
    release: 4,
    releaseCurve: "linear",
  };
  const filterEnvelope = {
    attack: 0,
    decay: 0,
    release: 1000,
    baseFrequency: 100,
    octaves: 2,
  };

  const synth = new Tone.DuoSynth({
    harmonicity: 1,
    vibratoRate: 0.1,
    vibratoAumount: 0.1,
    voice0: {
      oscillator: {
        type: "sawtooth",
      },
      envelope,
      filterEnvelope,
    },
    voice1: {
      oscillator: {
        type: "sine",
      },
      envelope,
      filterEnvelope,
    },
  }).toDestination();

  synth.triggerAttackRelease("C4", 1);
}
