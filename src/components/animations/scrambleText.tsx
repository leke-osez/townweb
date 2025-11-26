import { useState, useEffect } from "react";
import { useScramble } from "use-scramble";
import _ from "lodash";
import { cn } from "@/utils/style";
import { generateUnicodeString } from "@/utils/helper";

type Props = {
  targetWord: string;
  trigger: boolean;
  onComplete: () => void;
  textClass?: string;
};

export const ScrabbleTextReveal = ({
  targetWord,
  trigger,
  onComplete,
  textClass,
}: Props) => {
  // Use a piece of state to control the scrambling effect
  const [isRevealed, setIsRevealed] = useState(false);

  // The useScramble hook takes the target text and configuration options
  const { ref, replay } = useScramble({
    text: targetWord, // The final word to reveal
    // Optional configuration for the effect
    speed: 0.5,
    tick: 1,
    scramble: 10,
    range: generateUnicodeString(targetWord),
    ignore: [" ", "-"],

    onAnimationEnd: () => {
      setIsRevealed(true);
      _.delay(() => {
        onComplete();
      }, targetWord.length * 200);
    },
    // Add custom characters for a more scrabble-like feel if needed
    // playOnMount: false, // Prevents auto-play on mount if you want to control it manually
    // onComplete: () => setIsRevealed(true), // Callback when animation is done
  });

  // Effect to re-trigger the animation when the trigger prop changes
  useEffect(() => {
    if (trigger) {
      setIsRevealed(false);
      replay(); // Replay the scramble animation
    }
  }, [trigger]);

  return (
    <span
      ref={ref}
      className={cn(
        isRevealed ? "text-amber-800" : "text-gray-500",
        textClass
      )}
      //   style={{ color: isRevealed ? "black" : "gray" }}
      //   onFocus={replay}
      //   onMouseOver={replay}
    /> // Apply styling
  );
};
