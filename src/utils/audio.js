let audioCtx;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function playThunderStrike() {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') return; // Can't play until user interacts

    const duration = 2.5;
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Generate brown noise for deep rumble
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      let white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5; // Compensate for gain
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;

    // Filter to muffle it into a thunderous boom
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    // Initial crack is higher freq, then it rapidly drops to deep rumble
    filter.frequency.setValueAtTime(1000, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
    filter.frequency.linearRampToValueAtTime(50, ctx.currentTime + duration);

    // Envelope
    const gainNode = ctx.createGain();
    // Sudden spike for the strike
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.05);
    // Rapid decay into rumble
    gainNode.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.3);
    // Long fade out
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    noiseSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    noiseSource.start();
    noiseSource.stop(ctx.currentTime + duration);

    // Also play a high-frequency electric ZAP
    playElectricZap(ctx);
  } catch (e) {
    console.warn("AudioContext not supported or initialized properly", e);
  }
}

function playElectricZap(ctx) {
  const duration = 0.3;
  const bufferSize = ctx.sampleRate * duration;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  // White noise
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noiseSource = ctx.createBufferSource();
  noiseSource.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 5000; // Only sharp frequencies

  const gainNode = ctx.createGain();
  // Crackle envelope: multiple rapid spikes
  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.02);
  gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.05);
  gainNode.gain.linearRampToValueAtTime(0.8, ctx.currentTime + 0.08);
  gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.12);
  gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.15);
  gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);

  noiseSource.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(ctx.destination);

  noiseSource.start();
  noiseSource.stop(ctx.currentTime + duration);
}
