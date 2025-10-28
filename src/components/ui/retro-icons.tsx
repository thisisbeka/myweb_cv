interface IconProps {
  className?: string;
  color?: string;
}

export function RetroArrowUp({ className = "w-10 h-10", color = "#EDEDED" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="28" height="28" stroke={color} strokeWidth="2" fill="rgba(0,0,0,0.4)" />
      <rect x="3" y="3" width="26" height="26" stroke={color} strokeWidth="1" opacity="0.3" />

      <path d="M16 22 L16 10" stroke={color} strokeWidth="2.5" strokeLinecap="square" />
      <path d="M11 15 L16 10 L21 15" stroke={color} strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" fill="none" />

      <rect x="15" y="9" width="2" height="2" fill={color} opacity="0.8" />

      <line x1="8" y1="25" x2="24" y2="25" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="10" y1="23" x2="22" y2="23" stroke={color} strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

export function RetroMedal({ className = "w-10 h-10", color = "#7B61FF" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="9" y="14" width="14" height="14" stroke={color} strokeWidth="2" fill="rgba(123,97,255,0.15)" />
      <rect x="10" y="15" width="12" height="12" stroke={color} strokeWidth="1" opacity="0.4" />

      <path
        d="M9 14 L9 4 L11.5 6.5 L16 4 L20.5 6.5 L23 4 L23 14"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="miter"
        fill="rgba(123,97,255,0.1)"
      />

      <line x1="13" y1="21" x2="19" y2="21" stroke={color} strokeWidth="2.5" strokeLinecap="square" />
      <line x1="16" y1="18" x2="16" y2="24" stroke={color} strokeWidth="2.5" strokeLinecap="square" />

      <rect x="14.5" y="19.5" width="3" height="3" fill={color} opacity="0.3" />

      <rect x="11" y="5" width="2" height="2" fill={color} opacity="0.6" />
      <rect x="19" y="5" width="2" height="2" fill={color} opacity="0.6" />
    </svg>
  );
}

export function RetroCode({ className = "w-10 h-10", color = "#EDEDED" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 8 L4 16 L11 24" stroke={color} strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
      <path d="M21 8 L28 16 L21 24" stroke={color} strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />

      <path d="M10 9 L5 16 L10 23" stroke={color} strokeWidth="1" opacity="0.3" strokeLinejoin="miter" />
      <path d="M22 9 L27 16 L22 23" stroke={color} strokeWidth="1" opacity="0.3" strokeLinejoin="miter" />

      <line x1="18" y1="6" x2="14" y2="26" stroke={color} strokeWidth="2" strokeLinecap="square" />
      <line x1="17.5" y1="7" x2="13.5" y2="25" stroke={color} strokeWidth="1" opacity="0.3" />

      <rect x="3" y="15" width="2" height="2" fill={color} opacity="0.7" />
      <rect x="27" y="15" width="2" height="2" fill={color} opacity="0.7" />

      <rect x="2" y="2" width="28" height="28" stroke={color} strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

export function RetroBriefcase({ className = "w-6 h-6", color = "#EDEDED" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="10" width="24" height="16" stroke={color} strokeWidth="2" fill="rgba(0,0,0,0.3)" />
      <rect x="5" y="11" width="22" height="14" stroke={color} strokeWidth="1" opacity="0.3" />

      <path d="M10 10 L10 6 L22 6 L22 10" stroke={color} strokeWidth="2" strokeLinejoin="miter" fill="none" />
      <path d="M11 10 L11 7 L21 7 L21 10" stroke={color} strokeWidth="1" opacity="0.3" />

      <line x1="4" y1="16" x2="28" y2="16" stroke={color} strokeWidth="2" />
      <line x1="5" y1="17" x2="27" y2="17" stroke={color} strokeWidth="1" opacity="0.2" />

      <rect x="13" y="14" width="6" height="4" stroke={color} strokeWidth="2" fill="rgba(0,0,0,0.5)" />
      <rect x="14" y="15" width="4" height="2" stroke={color} strokeWidth="1" opacity="0.4" />

      <line x1="7" y1="12" x2="7" y2="24" stroke={color} strokeWidth="1" opacity="0.2" />
      <line x1="25" y1="12" x2="25" y2="24" stroke={color} strokeWidth="1" opacity="0.2" />
    </svg>
  );
}
