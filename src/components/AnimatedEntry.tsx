import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
};

export function AnimatedEntry({ children, delay = 0, style, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
