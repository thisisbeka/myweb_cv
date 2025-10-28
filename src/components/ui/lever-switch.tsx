interface LeverSwitchProps {
  checked: boolean;
  onToggle: () => void;
  leftLabel?: string;
  rightLabel?: string;
}

export const LeverSwitch = ({ checked, onToggle, leftLabel = "EN", rightLabel = "RU" }: LeverSwitchProps) => {
  return (
    <div className="relative inline-flex items-center gap-3">
      <span className={`text-sm font-['Rajdhani'] font-bold tracking-wider transition-colors duration-300 ${
        !checked ? "text-white" : "text-[#C0C0C0]/50"
      }`}>
        {leftLabel}
      </span>

      <div className="toggle-container" onClick={onToggle}>
        <input
          className="toggle-input"
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          aria-label="Toggle language"
        />
        <div className="toggle-handle-wrapper">
          <div className="toggle-handle">
            <div className="toggle-handle-knob"></div>
            <div className="toggle-handle-bar-wrapper">
              <div className="toggle-handle-bar"></div>
            </div>
          </div>
        </div>
        <div className="toggle-base">
          <div className="toggle-base-inside"></div>
        </div>
      </div>

      <span className={`text-sm font-['Rajdhani'] font-bold tracking-wider transition-colors duration-300 ${
        checked ? "text-white" : "text-[#C0C0C0]/50"
      }`}>
        {rightLabel}
      </span>

      <style>{`
        .toggle-container {
          position: relative;
          width: 60px;
          height: 32px;
          cursor: pointer;
          user-select: none;
        }

        .toggle-input {
          position: absolute;
          opacity: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
          z-index: 10;
        }

        .toggle-base {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          border: 2px solid rgba(192, 192, 192, 0.2);
          border-radius: 16px;
          box-shadow:
            inset 0 2px 4px rgba(0, 0, 0, 0.5),
            0 1px 2px rgba(192, 192, 192, 0.1);
          transition: all 0.3s ease;
        }

        .toggle-container:hover .toggle-base {
          border-color: rgba(192, 192, 192, 0.4);
          box-shadow:
            inset 0 2px 4px rgba(0, 0, 0, 0.5),
            0 0 8px rgba(108, 99, 255, 0.3);
        }

        .toggle-base-inside {
          position: absolute;
          top: 4px;
          left: 4px;
          right: 4px;
          bottom: 4px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 12px;
        }

        .toggle-handle-wrapper {
          position: absolute;
          top: 50%;
          left: 4px;
          transform: translateY(-50%);
          transition: left 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
          z-index: 5;
        }

        .toggle-input:checked ~ .toggle-handle-wrapper {
          left: calc(100% - 28px);
        }

        .toggle-handle {
          position: relative;
          width: 24px;
          height: 24px;
        }

        .toggle-handle-knob {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #C0C0C0 0%, #EDEDED 50%, #C0C0C0 100%);
          border-radius: 50%;
          box-shadow:
            0 2px 4px rgba(0, 0, 0, 0.4),
            inset 0 -2px 4px rgba(0, 0, 0, 0.2),
            inset 0 2px 4px rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .toggle-input:checked ~ .toggle-handle-wrapper .toggle-handle-knob {
          background: linear-gradient(135deg, #6C63FF 0%, #8B82FF 50%, #6C63FF 100%);
          box-shadow:
            0 2px 6px rgba(108, 99, 255, 0.6),
            inset 0 -2px 4px rgba(0, 0, 0, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.2),
            0 0 12px rgba(108, 99, 255, 0.4);
        }

        .toggle-handle-bar-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
        }

        .toggle-handle-bar {
          position: absolute;
          width: 100%;
          height: 2px;
          background: rgba(0, 0, 0, 0.3);
          top: 50%;
          transform: translateY(-50%);
          border-radius: 1px;
        }

        .toggle-handle-bar::before,
        .toggle-handle-bar::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 1px;
        }

        .toggle-handle-bar::before {
          top: -4px;
        }

        .toggle-handle-bar::after {
          top: 4px;
        }

        .toggle-container:active .toggle-handle-knob {
          transform: scale(0.95);
        }

        .toggle-input:checked ~ .toggle-base {
          background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
          border-color: rgba(108, 99, 255, 0.3);
        }
      `}</style>
    </div>
  );
};
