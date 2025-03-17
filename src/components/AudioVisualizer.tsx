import { useEffect, useRef } from 'react';

interface AudioVisualizerProps {
  isActive: boolean;
  isListening: boolean;
  isAgentSpeaking?: boolean;
}

const AudioVisualizer = ({ isActive, isListening, isAgentSpeaking }: AudioVisualizerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number>();
  const audioDataRef = useRef<number[]>([]);

  useEffect(() => {
    if (isActive) {
      initializeAudio();
    } else {
      cleanup();
    }

    return () => cleanup();
  }, [isActive]);

  const initializeAudio = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(stream);

      analyser.fftSize = 128;
      source.connect(analyser);

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      sourceRef.current = source;

      animate();
    } catch (error) {
      console.error('Error initializing audio:', error);
    }
  };

  const animate = () => {
    if (!canvasRef.current || !analyserRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animationFrameRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      // Update audio data for smooth transitions
      audioDataRef.current = Array.from(dataArray).map((value, i) => {
        const target = value / 255;
        const current = audioDataRef.current[i] || 0;
        return current + (target - current) * 0.2;
      });

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw circular visualizer
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.8;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Draw background circle
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw frequency bars
      const barCount = audioDataRef.current.length;
      const angleStep = (Math.PI * 2) / barCount;

      audioDataRef.current.forEach((value, i) => {
        const angle = i * angleStep;
        const length = value * radius;
        
        // Different colors for user and agent
        let gradient;
        if (isListening) {
          gradient = ctx.createLinearGradient(0, 0, length, 0);
          gradient.addColorStop(0, 'rgba(0, 255, 255, 0.8)');
          gradient.addColorStop(1, 'rgba(0, 128, 255, 0.4)');
        } else if (isAgentSpeaking) {
          gradient = ctx.createLinearGradient(0, 0, length, 0);
          gradient.addColorStop(0, 'rgba(255, 128, 0, 0.8)');
          gradient.addColorStop(1, 'rgba(255, 64, 0, 0.4)');
        } else {
          gradient = ctx.createLinearGradient(0, 0, length, 0);
          gradient.addColorStop(0, 'rgba(128, 128, 128, 0.4)');
          gradient.addColorStop(1, 'rgba(64, 64, 64, 0.2)');
        }

        ctx.save();
        ctx.rotate(angle);
        
        // Draw bar
        ctx.beginPath();
        ctx.moveTo(radius * 0.3, 0);
        ctx.lineTo(radius * 0.3 + length, 0);
        ctx.lineWidth = 4;
        ctx.strokeStyle = gradient;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        ctx.restore();
      });

      ctx.restore();
    };

    draw();
  };

  const cleanup = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (sourceRef.current) {
      sourceRef.current.disconnect();
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    audioDataRef.current = [];
  };

  return (
    <canvas
      ref={canvasRef}
      className="w-64 h-64 bg-transparent"
      width={300}
      height={300}
    />
  );
};

export default AudioVisualizer;
