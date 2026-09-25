/**
 * Pure Web Audio API Devotional Ambient Drone & Temple Bell Synthesizer
 * 
 * STRICT COMPLIANCE:
 * - NEVER autoplays
 * - Only activates on explicit user interaction
 * - Centralized Web Audio controller
 * - Exposes playBell(), playChime(), playBhaktiTone(), stopAllAudio()
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
  private bellIntervalId: number | null = null;
  private lastBellTime: number = 0;
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
          this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
          this.masterGain.connect(this.ctx.destination);

          this.sfxGain = this.ctx.createGain();
          this.sfxGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
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

    // Play an initial soft chime
    this.playBell(0.35);

    // Schedule gentle intermittent temple chime every ~16 seconds
    this.bellIntervalId = window.setInterval(() => {
      if (this.isPlaying) {
        this.playBell(0.25);
      }
    }, 16000);

    this.isPlaying = true;
  }

  /**
   * Temple brass bell chime with rich harmonics and natural acoustic decay
   */
  public playBell(volume: number = 0.4) {
    const nowMs = Date.now();
    if (nowMs - this.lastBellTime < 250) return; // Prevent harsh overlap
    this.lastBellTime = nowMs;

    if (!this.init()) return;
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    // Authentic temple brass bell modal frequencies
    const bellFrequencies = [
      { freq: 528, gain: 0.12, decay: 2.8 },    // Fundamental tone
      { freq: 1056, gain: 0.08, decay: 2.2 },   // Octave harmonic
      { freq: 1584, gain: 0.04, decay: 1.6 },   // Tierce harmonic
      { freq: 2112, gain: 0.02, decay: 1.2 },   // Quint harmonic
      { freq: 3168, gain: 0.01, decay: 0.8 },   // Shimmer
    ];

    bellFrequencies.forEach(({ freq, gain: baseGain, decay }) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const targetGain = Math.max(0.0001, baseGain * volume);
      gainNode.gain.setValueAtTime(0.0001, now);
      gainNode.gain.exponentialRampToValueAtTime(targetGain, now + 0.015);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, now + decay);

      osc.connect(gainNode);
      gainNode.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + decay + 0.1);
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

    if (this.bellIntervalId) {
      clearInterval(this.bellIntervalId);
      this.bellIntervalId = null;
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
