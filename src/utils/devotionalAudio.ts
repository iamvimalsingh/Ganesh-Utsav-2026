/**
 * Pure Web Audio API Devotional Ambient Drone & Temple Bell Synthesizer
 * 
 * STRICT COMPLIANCE:
 * - NEVER autoplays
 * - Only activates on explicit user interaction
 * - Generates warm Indian Vedic ambient harmonics (136.1 Hz Pranava 'Om' root + gentle harmonics)
 * - Safe audio context lifecycle management
 */

class DevotionalAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private bellIntervalId: number | null = null;

  public init() {
    if (typeof window === 'undefined') return;
    if (!this.ctx) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
        }
      } catch {
        this.ctx = null;
      }
    }
  }

  public get playing(): boolean {
    return this.isPlaying;
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

  public start() {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.stopNodes();

    // Master Gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 3.0);
    this.masterGain.connect(this.ctx.destination);

    // Warm Tanpura Drone Frequencies (Root: 136.1 Hz - Cosmic Om / Pancham: 204.15 Hz / Sa: 272.2 Hz)
    const baseFreqs = [136.1, 204.15, 272.2, 408.3];

    baseFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle slow detune modulation for authentic tanpura shimmer
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.15 + idx * 0.05, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(1.2, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();
      this.oscillators.push(lfo);

      gain.gain.setValueAtTime(0.06 / (idx + 1), this.ctx.currentTime);

      if (panner) {
        panner.pan.setValueAtTime((idx % 2 === 0 ? -0.3 : 0.3), this.ctx.currentTime);
        osc.connect(gain);
        gain.connect(panner);
        panner.connect(this.masterGain);
      } else {
        osc.connect(gain);
        gain.connect(this.masterGain);
      }

      osc.start();
      this.oscillators.push(osc);
    });

    // Play an initial soft temple chime
    this.playTempleChime(0.5);

    // Schedule gentle intermittent temple bell chimes every ~14 seconds
    this.bellIntervalId = window.setInterval(() => {
      if (this.isPlaying) {
        this.playTempleChime(0.4);
      }
    }, 14000);

    this.isPlaying = true;
  }

  public playTempleChime(volume: number = 0.5) {
    if (!this.ctx || !this.masterGain) return;

    const bellFrequencies = [528, 1056, 1584, 2112]; // Auspicious Solfeggio / Temple Harmonics
    const now = this.ctx.currentTime;

    bellFrequencies.forEach((freq, i) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const bellGainVal = (volume * 0.08) / (i * 1.5 + 1);
      gain.gain.setValueAtTime(bellGainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + (3.5 - i * 0.4));

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 4);
    });
  }

  public stop() {
    if (!this.ctx || !this.isPlaying) return;

    if (this.bellIntervalId) {
      clearInterval(this.bellIntervalId);
      this.bellIntervalId = null;
    }

    if (this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      setTimeout(() => {
        this.stopNodes();
        this.isPlaying = false;
      }, 1300);
    } else {
      this.stopNodes();
      this.isPlaying = false;
    }
  }

  private stopNodes() {
    this.oscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Already stopped
      }
    });
    this.oscillators = [];
  }
}

export const devotionalAudio = new DevotionalAudioEngine();
