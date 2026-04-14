'use client';

import { motion } from 'motion/react';

/**
 * Animated gradient mesh backdrop — blobs + dot grid + noise + vignette.
 * Drops inside any `relative overflow-hidden` parent (typically a dark section).
 * Extracted from the homepage Hero so test variants can share the same wow.
 */
export const GlowBackdrop = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute h-[700px] w-[700px] rounded-full bg-[#4F6CFF] opacity-40 blur-[140px]"
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '-15%', right: '-10%' }}
        />
        <motion.div
          className="absolute h-[600px] w-[600px] rounded-full bg-[#7092FF] opacity-35 blur-[130px]"
          animate={{
            x: [0, -60, 50, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.85, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '-10%', left: '-15%' }}
        />
        <motion.div
          className="absolute h-[500px] w-[600px] rounded-full bg-[#2F41FC] opacity-30 blur-[120px]"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.3, 0.4, 0.2, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '30%', left: '35%' }}
        />
        <motion.div
          className="absolute h-[350px] w-[400px] rounded-full bg-[#99B9FF] opacity-20 blur-[100px]"
          animate={{
            x: [0, -50, 60, 0],
            y: [0, 40, -50, 0],
            scale: [1, 1.4, 0.7, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '10%', left: '20%' }}
        />
        <motion.div
          className="absolute h-[500px] w-[500px] rounded-full bg-[#202CB3] opacity-50 blur-[110px]"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '5%', right: '10%' }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #BFD5FF 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Noise texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="glow-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#glow-noise)" />
        </svg>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#141952_100%)]" />
    </>
  );
};
