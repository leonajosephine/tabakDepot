type TabakDepotMarkProps = {
    size?: number;
    className?: string;
  };
  
  export default function TabakDepotMark({
    size = 52,
    className = "",
  }: TabakDepotMarkProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Tabak Depot"
      >
        {/* Outer seal */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="1.25"
        />
  
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="currentColor"
          strokeWidth="0.45"
          opacity="0.35"
        />
  
        {/* TD */}
        <text
          x="50"
          y="54"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="var(--font-display)"
          fontSize="38"
          fontWeight="600"
          letterSpacing="-3"
        >
          TD
        </text>
  
        {/* botanical element */}
        <g
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        >
          {/* stems */}
          <path d="M50 63C43 70 36 75 28 77" />
          <path d="M50 63C57 70 64 75 72 77" />
  
          {/* left leaves */}
          <path d="M42 69C37 66 33 67 31 71C36 72 40 71 42 69Z" />
          <path d="M36 73C31 71 27 73 26 77C31 78 34 76 36 73Z" />
  
          {/* right leaves */}
          <path d="M58 69C63 66 67 67 69 71C64 72 60 71 58 69Z" />
          <path d="M64 73C69 71 73 73 74 77C69 78 66 76 64 73Z" />
        </g>
  
        {/* little seal details */}
        <circle cx="50" cy="7" r="1.2" fill="currentColor" />
        <circle cx="50" cy="93" r="1.2" fill="currentColor" />
      </svg>
    );
  }