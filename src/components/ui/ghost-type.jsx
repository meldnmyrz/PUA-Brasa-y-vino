import React, { useState, useEffect } from 'react';

/**
 * GhostType Component from React Bits Pro
 * A headline that displays a base title and writes AI-style ghost completions.
 *
 * @param {Object} props
 * @param {string} props.text - Base text (always visible or typed)
 * @param {string[]} props.completions - Array of ghost completions
 * @param {boolean} [props.typeBase=false] - Whether to type out base text character by character
 * @param {number} [props.typeSpeed=40] - Speed of base text typing
 * @param {number} [props.streamSpeed=35] - Speed of ghost text streaming
 * @param {number} [props.eraseSpeed=20] - Speed of ghost text erasing
 * @param {number} [props.thinkDelay=500] - Delay before streaming ghost completion
 * @param {number} [props.holdDelay=2500] - Duration to display completion before erasing
 * @param {string} [props.accentColor='#C4924A'] - Accent color for cursor and ghost text
 * @param {number} [props.ghostOpacity=0.85] - Opacity of the ghost completion text
 * @param {boolean} [props.showCaret=true] - Display glowing caret
 * @param {boolean} [props.loop=true] - Loop completions indefinitely
 * @param {string} [props.className=''] - Wrapper styling
 * @param {string} [props.textClassName=''] - Main base text styling
 * @param {string} [props.ghostClassName=''] - Ghost completion text styling
 * @param {string} [props.cursorClassName=''] - Caret styling
 * @param {React.ElementType} [props.as='div'] - Element type to render
 */
export default function GhostType({
  text = 'PÚA BRASA Y VINO',
  completions = [
    ' — Sabores de Brasa & Cava',
    ' — Sinfonía & Temporada',
    ' — Cortes Prime de Autor',
    ' — Mixología Ritual'
  ],
  typeBase = false,
  typeSpeed = 40,
  streamSpeed = 35,
  eraseSpeed = 20,
  thinkDelay = 500,
  holdDelay = 2500,
  accentColor = '#C4924A',
  ghostOpacity = 0.9,
  showCaret = true,
  loop = true,
  className = '',
  textClassName = '',
  ghostClassName = '',
  cursorClassName = '',
  as: Component = 'div'
}) {
  const [displayedBase, setDisplayedBase] = useState(typeBase ? '' : text);
  const [isBaseComplete, setIsBaseComplete] = useState(!typeBase);
  const [displayedGhost, setDisplayedGhost] = useState('');
  const [completionIndex, setCompletionIndex] = useState(0);
  const [phase, setPhase] = useState(typeBase ? 'TYPE_BASE' : 'THINKING');
  const [isCaretVisible, setIsCaretVisible] = useState(true);

  // Sync if text prop changes
  useEffect(() => {
    if (!typeBase) {
      setDisplayedBase(text);
      setIsBaseComplete(true);
    }
  }, [text, typeBase]);

  // Caret blink interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIsCaretVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Base typing phase (if typeBase is enabled)
  useEffect(() => {
    if (phase !== 'TYPE_BASE') return;

    if (displayedBase.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedBase(text.slice(0, displayedBase.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timer);
    } else {
      setIsBaseComplete(true);
      setPhase('THINKING');
    }
  }, [displayedBase, text, phase, typeSpeed]);

  // Ghost completion animation state machine
  useEffect(() => {
    if (!isBaseComplete || !completions || completions.length === 0) return;

    let timer;
    const targetCompletion = completions[completionIndex] || '';

    switch (phase) {
      case 'THINKING':
        timer = setTimeout(() => {
          setPhase('STREAM_GHOST');
        }, thinkDelay);
        break;

      case 'STREAM_GHOST':
        if (displayedGhost.length < targetCompletion.length) {
          timer = setTimeout(() => {
            setDisplayedGhost(targetCompletion.slice(0, displayedGhost.length + 1));
          }, streamSpeed);
        } else {
          setPhase('HOLD');
        }
        break;

      case 'HOLD':
        timer = setTimeout(() => {
          setPhase('ERASE_GHOST');
        }, holdDelay);
        break;

      case 'ERASE_GHOST':
        if (displayedGhost.length > 0) {
          timer = setTimeout(() => {
            setDisplayedGhost(displayedGhost.slice(0, -1));
          }, eraseSpeed);
        } else {
          const nextIndex = completionIndex + 1;
          if (nextIndex < completions.length) {
            setCompletionIndex(nextIndex);
            setPhase('THINKING');
          } else if (loop) {
            setCompletionIndex(0);
            setPhase('THINKING');
          }
        }
        break;

      default:
        break;
    }

    return () => clearTimeout(timer);
  }, [
    phase,
    displayedGhost,
    completionIndex,
    completions,
    isBaseComplete,
    thinkDelay,
    streamSpeed,
    holdDelay,
    eraseSpeed,
    loop
  ]);

  return (
    <Component
      className={`relative z-10 w-full flex flex-col md:flex-row items-center justify-center text-center gap-1 md:gap-3 transition-all ${className}`}
      aria-label={`${text} ${completions[completionIndex] || ''}`}
    >
      {/* Base Title Text - Always highly visible */}
      <span className={`inline-block text-[#F4F0EA] drop-shadow-md ${textClassName}`}>
        {displayedBase}
      </span>

      {/* AI Ghost Completion Line */}
      <span className="inline-flex items-center justify-center">
        <span
          className={`inline-block transition-opacity duration-300 drop-shadow-lg ${ghostClassName}`}
          style={{
            color: accentColor,
            opacity: phase === 'THINKING' ? 0.4 : ghostOpacity
          }}
        >
          {displayedGhost}
        </span>

        {/* AI Caret */}
        {showCaret && (
          <span
            className={`inline-block ml-1 w-[3px] h-[0.85em] align-middle rounded-full transition-opacity duration-100 ${cursorClassName}`}
            style={{
              backgroundColor: accentColor,
              opacity: isCaretVisible ? 1 : 0.15,
              boxShadow: `0 0 12px ${accentColor}, 0 0 4px ${accentColor}`
            }}
          />
        )}
      </span>
    </Component>
  );
}
