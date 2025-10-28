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
      style={{ imageRendering: 'pixelated' }}
    >
      <rect x="1" y="1" width="22" height="22" stroke={color} strokeWidth="1" fill="none" />
      <rect x="2" y="2" width="20" height="20" stroke={color} strokeWidth="0.5" opacity="0.3" fill="none" />

      <rect x="11" y="6" width="2" height="2" fill={color} />
      <rect x="10" y="8" width="4" height="2" fill={color} />
      <rect x="9" y="10" width="6" height="2" fill={color} />
      <rect x="11" y="12" width="2" height="6" fill={color} />

      <rect x="5" y="19" width="14" height="1" fill={color} opacity="0.4" />
      <rect x="7" y="20" width="10" height="1" fill={color} opacity="0.2" />
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
      style={{ imageRendering: 'pixelated' }}
    >
      <rect x="8" y="3" width="2" height="8" fill={color} opacity="0.6" />
      <rect x="10" y="4" width="4" height="2" fill={color} opacity="0.6" />
      <rect x="14" y="3" width="2" height="8" fill={color} opacity="0.6" />

      <rect x="7" y="10" width="10" height="10" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="8" y="11" width="8" height="8" stroke={color} strokeWidth="1" opacity="0.3" fill="none" />

      <rect x="9" y="13" width="6" height="1" fill={color} />
      <rect x="11" y="14" width="2" height="1" fill={color} />
      <rect x="10" y="15" width="4" height="1" fill={color} />
      <rect x="11" y="16" width="2" height="1" fill={color} />
      <rect x="9" y="17" width="6" height="1" fill={color} />

      <rect x="9" y="4" width="2" height="2" fill={color} />
      <rect x="13" y="4" width="2" height="2" fill={color} />
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
      style={{ imageRendering: 'pixelated' }}
    >
      <rect x="3" y="8" width="2" height="2" fill={color} />
      <rect x="5" y="10" width="2" height="2" fill={color} />
      <rect x="7" y="12" width="2" height="2" fill={color} />
      <rect x="5" y="14" width="2" height="2" fill={color} />
      <rect x="3" y="16" width="2" height="2" fill={color} />

      <rect x="19" y="8" width="2" height="2" fill={color} />
      <rect x="17" y="10" width="2" height="2" fill={color} />
      <rect x="15" y="12" width="2" height="2" fill={color} />
      <rect x="17" y="14" width="2" height="2" fill={color} />
      <rect x="19" y="16" width="2" height="2" fill={color} />

      <rect x="10" y="6" width="2" height="2" fill={color} opacity="0.9" />
      <rect x="11" y="8" width="2" height="2" fill={color} opacity="0.8" />
      <rect x="12" y="10" width="2" height="2" fill={color} opacity="0.7" />
      <rect x="11" y="12" width="2" height="2" fill={color} opacity="0.6" />
      <rect x="12" y="14" width="2" height="2" fill={color} opacity="0.7" />
      <rect x="11" y="16" width="2" height="2" fill={color} opacity="0.8" />
      <rect x="12" y="18" width="2" height="2" fill={color} opacity="0.9" />

      <rect x="1" y="1" width="22" height="22" stroke={color} strokeWidth="0.5" opacity="0.2" fill="none" />
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
      style={{ imageRendering: 'pixelated' }}
    >
      <rect x="4" y="9" width="16" height="11" stroke={color} strokeWidth="1.5" fill="rgba(0,0,0,0.3)" />
      <rect x="5" y="10" width="14" height="9" stroke={color} strokeWidth="0.5" opacity="0.3" fill="none" />

      <rect x="9" y="5" width="6" height="4" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="10" y="6" width="4" height="2" stroke={color} strokeWidth="0.5" opacity="0.3" fill="none" />

      <rect x="4" y="13" width="16" height="1" fill={color} opacity="0.5" />

      <rect x="10" y="11" width="4" height="2" fill={color} opacity="0.3" />

      <rect x="6" y="11" width="1" height="7" fill={color} opacity="0.15" />
      <rect x="17" y="11" width="1" height="7" fill={color} opacity="0.15" />
    </svg>
  );
}
