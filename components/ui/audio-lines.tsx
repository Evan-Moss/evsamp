'use client';

import { motion } from 'motion/react'; // No need for useAnimation here
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react'; // No need for useImperativeHandle or refs for animation control

export interface AudioLinesIconHandle {
  // You might not need these if animation is self-contained
  // startAnimation: () => void;
  // stopAnimation: () => void;
}

interface AudioLinesIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const AudioLinesIcon = forwardRef<HTMLDivElement, AudioLinesIconProps>( // Ref for the div, not animation control
  ({ className, size = 28, ...props }, ref) => {

    return (
      <div
        className={className}
        ref={ref} // Forward ref to the div if needed by the TooltipTrigger
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 10v3" />
          <motion.path
            // Directly use animate for looping animation
            animate={{
              d: ['M6 6v11', 'M6 10v3', 'M6 6v11'],
              transition: {
                duration: 1.5,
                repeat: Infinity,
              },
            }}
            d="M6 6v11"
            // No initial or controls needed for continuous loop
          />
          <motion.path
            animate={{
              d: ['M10 3v18', 'M10 9v5', 'M10 3v18'],
              transition: {
                duration: 1,
                repeat: Infinity,
              },
            }}
            d="M10 3v18"
          />
          <motion.path
            animate={{
              d: ['M14 8v7', 'M14 6v11', 'M14 8v7'],
              transition: {
                duration: 0.8,
                repeat: Infinity,
              },
            }}
            d="M14 8v7"
          />
          <motion.path
            animate={{
              d: ['M18 5v13', 'M18 7v9', 'M18 5v13'],
              transition: {
                duration: 1.5,
                repeat: Infinity,
              },
            }}
            d="M18 5v13"
          />
          <path d="M22 10v3" />
        </svg>
      </div>
    );
  }
);

AudioLinesIcon.displayName = 'AudioLinesIcon';

export { AudioLinesIcon };