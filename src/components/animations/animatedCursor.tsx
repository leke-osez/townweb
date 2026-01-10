import AnimatedCursor from "react-animated-cursor";

const AnimatedCursorWrapper = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        trailingSpeed={9}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
          mixBlendMode: "difference",
          zIndex: 303030,
        }}
        outerStyle={{
          border: "0.3px solid var(--cursor-border-color)",
          backgroundColor: "rgb(128 128 128 / 30%)",
          zIndex: 303030,
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
};

export default AnimatedCursorWrapper;
