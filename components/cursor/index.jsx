'use client';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function index({stickyElement}) {

  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 60 : 15;

  const [trails, setTrails] = useState([]);
  const numTrails = 10; // Number of trailing dots

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  //Smooth out the mouse values
  const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = e => {
    const { clientX, clientY } = e;

    // Update trail positions
    setTrails(prevTrails => {
      const newTrails = [...prevTrails];
      newTrails.push({ x: clientX, y: clientY });
      if (newTrails.length > numTrails) newTrails.shift();
      return newTrails;
    });

    // Simplified cursor movement - remove dependency on stickyElement for basic movement
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }

  useEffect(() => {
    setMounted(true);
    window.addEventListener("mousemove", manageMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    }
  }, []);

  // Don't render until component is mounted
  if (!mounted) return null;

  return (
    <div className={styles.cursorContainer}>
      {trails.map((trail, index) => (
        <motion.div
          key={index}
          className={styles.trail}
          style={{
            left: trail.x - 2,
            top: trail.y - 2,
            opacity: (index + 1) / trails.length, // Adjusted opacity calculation
          }}
        />
      ))}
      <motion.div 
        style={{
          left: smoothMouse.x, 
          top: smoothMouse.y,
        }} 
        animate={{
          width: cursorSize,
          height: cursorSize
        }}
        className={styles.cursor}>
      </motion.div>
    </div>
  )
}