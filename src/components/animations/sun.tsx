// import { motion } from "framer-motion";

// /**
//  * GlowingSun
//  *
//  * Props:
//  * - size (number) : outer SVG size in px (default 240)
//  * - rayCount (number) : number of rays (default 12)
//  * - rayLength (number) : how far rays extend from the core (default 44)
//  * - rayWidth (number) : thickness of each ray (default 8)
//  * - speed (number) : seconds per full cycle (default 3.6)
//  * - coreColor (string) : center color (default "#FFD95A")
//  * - rayColor (string) : ray color (default "#FFD95A")
//  * - glowColor (string) : glow color (default "#FFCF6E")
//  */
// export default function GlowingSun({
//   size = 240,
//   rayCount = 12,
//   rayLength = 44,
//   rayWidth = 8,
//   speed = 3.6,
//   coreColor = "#FFD95A",
//   rayColor = "#FFD95A",
//   glowColor = "#FFCF6E",
// }) {
//   const cx = size / 2;
//   const cy = size / 2;
//   const coreR = Math.round(size * 0.18); // core radius
//   const innerRadius = coreR + 6; // where rays start

//   // create array for rays
//   const rays = Array.from({ length: rayCount }).map((_, i) => i);

//   // animation settings for each ray (staggered)
//   const baseDelay = (speed / rayCount) * 0.6;

//   // subtle rotation for the whole sun
//   const rotateAnim = {
//     animate: { rotate: [0, 8, 0] },
//     transition: {
//       duration: speed * 2,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   };

//   return (
//     <motion.svg
//       width={size}
//       height={size}
//       viewBox={`0 0 ${size} ${size}`}
//       role="img"
//       aria-label="Glowing sun with golden rays"
//       initial={false}
//       {...rotateAnim}
//       style={{ display: "block" }}
//     >
//       <defs>
//         {/* soft outer glow */}
//         <filter
//           id="sunGlow"
//           x="-75%"
//           y="-75%"
//           width="250%"
//           height="250%"
//         >
//           <feGaussianBlur stdDeviation={size * 0.02} result="blur1" />
//           <feMerge>
//             <feMergeNode in="blur1" />
//             <feMergeNode in="SourceGraphic" />
//           </feMerge>
//         </filter>

//         {/* stronger glow for rays */}
//         <filter
//           id="rayGlow"
//           x="-200%"
//           y="-200%"
//           width="400%"
//           height="400%"
//         >
//           <feGaussianBlur
//             stdDeviation={rayWidth * 0.9}
//             result="rblur"
//           />
//           <feMerge>
//             <feMergeNode in="rblur" />
//             <feMergeNode in="SourceGraphic" />
//           </feMerge>
//         </filter>

//         {/* radial gradient for core */}
//         <radialGradient id="coreGrad" cx="50%" cy="45%" r="60%">
//           <stop offset="0%" stopColor={coreColor} stopOpacity="1" />
//           <stop
//             offset="60%"
//             stopColor={glowColor}
//             stopOpacity="0.95"
//           />
//           <stop
//             offset="100%"
//             stopColor="#FFF2D0"
//             stopOpacity="0.12"
//           />
//         </radialGradient>
//       </defs>

//       {/* large soft halo */}
//       <circle
//         cx={cx}
//         cy={cy}
//         r={coreR * 3}
//         fill={glowColor}
//         opacity={0.12}
//         style={{ filter: "url(#sunGlow)" }}
//       />

//       {/* rays group */}
//       <g transform={`translate(${cx}, ${cy})`}>
//         {rays.map((i) => {
//           const angle = (360 / rayCount) * i;
//           // Each ray is a rectangle that we position so its near end touches the core
//           const x = innerRadius;
//           const y = -rayWidth / 2;
//           const key = `ray-${i}`;

//           // animate scaleX from 0.2 -> 1 -> 0.2 with opacity pulse
//           const delay = i * baseDelay;
//           return (
//             <motion.g
//               key={key}
//               style={{ transformOrigin: "0px 0px" }}
//               transform={`rotate(${angle})`}
//               initial={{ opacity: 0.12, scaleX: 0.35 }}
//               animate={{
//                 opacity: [0.12, 0.95, 0.12],
//                 scaleX: [0.35, 1.06, 0.35],
//               }}
//               transition={{
//                 duration: speed,
//                 ease: "easeInOut",
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 delay,
//               }}
//             >
//               {/* core-adjacent rectangle representing the ray */}
//               <rect
//                 x={x}
//                 y={y}
//                 rx={rayWidth / 2}
//                 ry={rayWidth / 2}
//                 width={rayLength}
//                 height={rayWidth}
//                 fill={rayColor}
//                 style={{
//                   filter: "url(#rayGlow)",
//                   transformOrigin: "0 50%",
//                 }}
//               />
//             </motion.g>
//           );
//         })}
//       </g>

//       {/* central sun core with slight pulsing */}
//       <motion.g
//         style={{ transformOrigin: `${cx}px ${cy}px` }}
//         initial={false}
//         animate={{ scale: [1, 1.04, 1], opacity: [1, 0.98, 1] }}
//         transition={{
//           duration: speed * 0.9,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <circle
//           cx={cx}
//           cy={cy}
//           r={coreR}
//           fill="url(#coreGrad)"
//           stroke={glowColor}
//           strokeOpacity={0.18}
//           strokeWidth={Math.max(2, coreR * 0.12)}
//           style={{ filter: "url(#sunGlow)" }}
//         />

//         {/* subtle inner highlight */}
//         <circle
//           cx={cx - coreR * 0.25}
//           cy={cy - coreR * 0.22}
//           r={coreR * 0.36}
//           fill="#FFF7D7"
//           opacity={0.28}
//         />
//       </motion.g>
//     </motion.svg>
//   );
// }
