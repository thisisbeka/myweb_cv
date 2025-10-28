interface IconProps {
  className?: string;
  color?: string;
}

export function RetroArrowUp({ className = "w-10 h-10", color = "#EDEDED" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="18" height="18" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M12 16 L12 8" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
      <path d="M9 11 L12 8 L15 11" stroke={color} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

export function RetroMedal({ className = "w-10 h-10", color = "#7B61FF" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="11" width="8" height="8" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M8 11 L8 5 L10 7 L12 5 L14 7 L16 5 L16 11" stroke={color} strokeWidth="1.5" strokeLinejoin="miter" />
      <line x1="10" y1="15" x2="14" y2="15" stroke={color} strokeWidth="1.5" />
      <line x1="12" y1="13" x2="12" y2="17" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function RetroCode({ className = "w-10 h-10", color = "#EDEDED" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 7 L4 12 L9 17" stroke={color} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
      <path d="M15 7 L20 12 L15 17" stroke={color} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
      <line x1="12" y1="5" x2="12" y2="19" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function RetroBriefcase({ className = "w-6 h-6", color = "#EDEDED" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="8" width="16" height="11" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M8 8 L8 6 L16 6 L16 8" stroke={color} strokeWidth="1.5" strokeLinejoin="miter" />
      <line x1="4" y1="12" x2="20" y2="12" stroke={color} strokeWidth="1.5" />
      <rect x="10" y="10" width="4" height="2" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}
