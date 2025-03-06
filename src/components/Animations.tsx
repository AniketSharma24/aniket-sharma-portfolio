
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Framer Motion variants
export const fadeIn = (delay: number = 0, duration: number = 0.5): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay,
      duration,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
});

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideUp: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', delay: number = 0): Variants => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
      opacity: 0
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
};

export const scale: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Animation components
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn(delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideUpSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { y: 100, opacity: 0 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: {
            delay,
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1.0]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hook for GSAP animations
export const useGSAPAnimation = (
  selector: string, 
  animation: 'fadeIn' | 'slideUp' | 'slideIn' | 'stagger', 
  options?: any
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) return;
    
    switch (animation) {
      case 'fadeIn':
        gsap.fromTo(
          elements,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            stagger: 0.2,
            scrollTrigger: {
              trigger: elements[0],
              start: "top 80%",
              ...options
            }
          }
        );
        break;
        
      case 'slideUp':
        gsap.fromTo(
          elements,
          { y: 100, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: elements[0],
              start: "top 80%",
              ...options
            }
          }
        );
        break;
        
      case 'slideIn':
        gsap.fromTo(
          elements,
          { 
            x: options?.direction === 'left' ? -100 : options?.direction === 'right' ? 100 : 0,
            opacity: 0 
          },
          { 
            x: 0, 
            opacity: 1, 
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: elements[0],
              start: "top 80%",
              ...options
            }
          }
        );
        break;
        
      case 'stagger':
        gsap.fromTo(
          elements,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.1,
            scrollTrigger: {
              trigger: elements[0],
              start: "top 80%",
              ...options
            }
          }
        );
        break;
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, animation, options]);
};

export default {
  fadeIn,
  staggerContainer,
  slideUp,
  slideIn,
  scale,
  FadeInSection,
  SlideUpSection,
  useGSAPAnimation
};
