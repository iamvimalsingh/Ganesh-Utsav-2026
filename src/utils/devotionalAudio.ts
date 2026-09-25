/**
 * Pure Web Audio API Devotional Ambient Drone & Sacred Shankh (Conch) Synthesizer
 * 
 * STRICT COMPLIANCE:
 * - NEVER autoplays
 * - Only activates on explicit user interaction
 * - Centralized Web Audio controller
 * - Exposes playShankh(), playChime(), playBhaktiTone(), stopAllAudio()
 * - Debounces rapid clicks to prevent loud overlapping sound distortion
 * - Gracefully handles environments without Web Audio support
 */

class DevotionalAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private droneGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private shankhIntervalId: number | null = null;
  private lastShankhTime: number = 0;
  private lastChimeTime: number = 0;
  private userHasInteracted: boolean = false;

  public init(): boolean {
    if (typeof window === 'undefined') return false;
    if (!this.ctx) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
          this.masterGain = this.ctx.createGain();
          this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
          this.masterGain.connect(this.ctx.destination);

          this.sfxGain = this.ctx.createGain();
          this.sfxGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
          this.sfxGain.connect(this.masterGain);
        }
      } catch {
        this.ctx = null;
        return false;
      }
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    this.userHasInteracted = true;
    return !!this.ctx;
  }

  public get playing(): boolean {
    return this.isPlaying;
  }

  public get hasInteracted(): boolean {
    return this.userHasInteracted;
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  /**
   * Starts ambient devotional drone (Cosmic Om / Tanpura Harmonics)
   */
  public start() {
    if (!this.init()) return;
    if (!this.ctx || !this.masterGain) return;

    this.stopDroneNodes();

    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.droneGain.gain.exponentialRampToValueAtTime(0.16, this.ctx.currentTime + 3.0);
    this.droneGain.connect(this.masterGain);

    // Warm Tanpura Drone Frequencies (Root: 136.1 Hz - Cosmic Om / Pancham: 204.15 Hz / Sa: 272.2 Hz)
    const baseFreqs = [136.1, 204.15, 272.2, 408.3];

    baseFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.droneGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle slow detune modulation for authentic tanpura shimmer
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.15 + idx * 0.05, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();
      this.oscillators.push(lfo);

      gain.gain.setValueAtTime(0.05 / (idx + 1), this.ctx.currentTime);

      if (panner) {
        panner.pan.setValueAtTime((idx % 2 === 0 ? -0.25 : 0.25), this.ctx.currentTime);
        osc.connect(gain);
        gain.connect(panner);
        panner.connect(this.droneGain);
      } else {
        osc.connect(gain);
        gain.connect(this.droneGain);
      }

      osc.start();
      this.oscillators.push(osc);
    });

    this.isPlaying = true;
  }

  /**
   * Sacred Shankh (Conch Shell) Sound Synthesizer
   * 
   * Characteristics:
   * - Deep warm fundamental with subtle organic rising pitch (230 Hz -> 285 Hz)
   * - Natural lip-reed acoustic harmonics
   * - Gentle breath-like swell attack (~350ms)
   * - Sustained ceremonial resonance (~1.5s)
   * - Smooth natural fade (~0.9s)
   * - Total duration: ~2.8 seconds
   */
  public playShankh(volume: number = 0.45) {
    const nowMs = Date.now();
    // Prevent overlapping shankh blasts
    if (nowMs - this.lastShankhTime < 2400) return;
    this.lastShankhTime = nowMs;

    if (!this.init()) return;
    if (!this.ctx || !this.sfxGain) return;

    const ctx = this.ctx;
    const now = ctx.currentTime;
    const shankhDuration = 2.8;

    // Shankh Harmonics: Fundamental + overtone spectrum
    const harmonics = [
      { startFreq: 232, peakFreq: 284, endFreq: 260, gain: 0.22, type: 'sine' as OscillatorType },
      { startFreq: 232, peakFreq: 284, endFreq: 260, gain: 0.12, type: 'triangle' as OscillatorType },
      { startFreq: 464, peakFreq: 568, endFreq: 520, gain: 0.10, type: 'sine' as OscillatorType },
      { startFreq: 696, peakFreq: 852, endFreq: 780, gain: 0.05, type: 'sine' as OscillatorType },
      { startFreq: 928, peakFreq: 1136, endFreq: 1040, gain: 0.025, type: 'sine' as OscillatorType },
      { startFreq: 1160, peakFreq: 1420, endFreq: 1300, gain: 0.012, type: 'sine' as OscillatorType },
    ];

    // Master envelope for the Shankh invocation
    const shankhEnvelope = ctx.createGain();
    shankhEnvelope.gain.setValueAtTime(0.0001, now);
    // Breath swell attack (0 -> 0.35s)
    shankhEnvelope.gain.exponentialRampToValueAtTime(Math.min(1.0, volume * 1.2), now + 0.35);
    // Sustained middle (0.35s -> 1.8s)
    shankhEnvelope.gain.setValueAtTime(Math.min(1.0, volume * 1.2), now + 1.8);
    // Natural release / decay (1.8s -> 2.8s)
    shankhEnvelope.gain.exponentialRampToValueAtTime(0.00001, now + shankhDuration);
    shankhEnvelope.connect(this.sfxGain);

    // Warm Lowpass Filter for organic resonant air-column chamber
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(750, now);
    filter.frequency.exponentialRampToValueAtTime(1600, now + 0.4);
    filter.frequency.exponentialRampToValueAtTime(600, now + shankhDuration);
    filter.Q.setValueAtTime(2.5, now);
    filter.connect(shankhEnvelope);

    // Subtle breath air noise burst during initial attack
    try {
      const bufferSize = ctx.sampleRate * 0.4;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.03;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(800, now);
      noiseFilter.Q.setValueAtTime(3.0, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.0001, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.08 * volume, now + 0.15);
      noiseGain.gain.exponentialRampToValueAtTime(0.00001, now + 0.4);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(shankhEnvelope);
      noise.start(now);
      noise.stop(now + 0.45);
    } catch {
      // Noise buffer fallback if restricted
    }

    // Oscillators generation for all harmonics
    harmonics.forEach(({ startFreq, peakFreq, endFreq, gain: hGain, type }) => {
      const osc = ctx.createOscillator();
      const nodeGain = ctx.createGain();

      osc.type = type;
      // Natural pitch-bend curve of conch blowing
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(peakFreq, now + 0.45);
      osc.frequency.setValueAtTime(peakFreq, now + 1.8);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + shankhDuration);

      // Subtle vibrato / air tremolo
      const vibrato = ctx.createOscillator();
      const vibratoGain = ctx.createGain();
      vibrato.frequency.setValueAtTime(5.2, now); // ~5 Hz gentle lip modulation
      vibratoGain.gain.setValueAtTime(1.5, now);
      vibrato.connect(vibratoGain);
      vibratoGain.connect(osc.frequency);
      vibrato.start(now);
      vibrato.stop(now + shankhDuration + 0.1);

      nodeGain.gain.setValueAtTime(hGain, now);

      osc.connect(nodeGain);
      nodeGain.connect(filter);

      osc.start(now);
      osc.stop(now + shankhDuration + 0.1);
    });
  }

  /**
   * Soft sparkling chime for flower offering, diya lighting & subtle taps
   */
  public playChime(volume: number = 0.35) {
    const nowMs = Date.now();
    if (nowMs - this.lastChimeTime < 150) return;
    this.lastChimeTime = nowMs;

    if (!this.init()) return;
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    const chimeFrequencies = [880, 1174.66, 1318.51, 1760]; // Auspicious musical pentatonic

    chimeFrequencies.forEach((freq, idx) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.035);

      const level = (volume * 0.06) / (idx * 0.6 + 1);
      gainNode.gain.setValueAtTime(0.0001, now + idx * 0.035);
      gainNode.gain.exponentialRampToValueAtTime(level, now + idx * 0.035 + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, now + idx * 0.035 + 1.4);

      osc.connect(gainNode);
      gainNode.connect(this.sfxGain);

      osc.start(now + idx * 0.035);
      osc.stop(now + idx * 0.035 + 1.5);
    });
  }

  /**
   * Very soft warm tone for Bhakti Touch / Prayer interaction
   */
  public playBhaktiTone(volume: number = 0.4) {
    if (!this.init()) return;
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    const chord = [272.2, 408.3, 544.4, 816.6]; // Sacred Shadja-Panchama harmony

    chord.forEach((freq, i) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const targetGain = (volume * 0.05) / (i * 0.8 + 1);
      gainNode.gain.setValueAtTime(0.0001, now);
      gainNode.gain.exponentialRampToValueAtTime(targetGain, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, now + 2.2);

      osc.connect(gainNode);
      gainNode.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + 2.3);
    });
  }

  public stop() {
    if (!this.ctx || !this.isPlaying) return;

    if (this.shankhIntervalId) {
      clearInterval(this.shankhIntervalId);
      this.shankhIntervalId = null;
    }

    if (this.droneGain) {
      const now = this.ctx.currentTime;
      this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, now);
      this.droneGain.gain.exponentialRampToValueAtTime(0.00001, now + 1.0);
      setTimeout(() => {
        this.stopDroneNodes();
        this.isPlaying = false;
      }, 1100);
    } else {
      this.stopDroneNodes();
      this.isPlaying = false;
    }
  }

  public stopAllAudio() {
    this.stop();
  }

  private stopDroneNodes() {
    this.oscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Safe ignore
      }
    });
    this.oscillators = [];
  }
}

export const devotionalAudio = new DevotionalAudioEngine();
