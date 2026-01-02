export function SparklesIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.813 10.273c.593-1.093.89-1.64.89-2.273 0-.634-.297-1.18-.89-2.273l-.28-.516c-.528-.97-.792-1.455-1.163-1.639-.371-.183-.813-.06-1.697.187l-.55.154C4.82 3.197 4.38 3.319 4 3.55s-.59.609-1.008 1.39L2.65 5.562c-.46.86-.69 1.29-.69 1.765 0 .474.23.904.69 1.764l.342.622c.418.782.627 1.173 1.041 1.401.415.229.92.163 1.93.03l.504-.065c1.016-.132 1.524-.198 1.939.031.415.228.623.62 1.04 1.401l.342.622c.46.86.69 1.29.69 1.765 0 .474-.23.904-.69 1.764l-.342.622c-.418.781-.626 1.173-1.041 1.4-.415.23-.923.164-1.939.032l-.504-.066c-1.01-.131-1.515-.196-1.93.033-.414.228-.623.619-1.04 1.4l-.342.623c-.46.86-.69 1.29-.69 1.764 0 .475.23.905.69 1.765l.342.622c.418.782.626 1.173 1.04 1.401.416.23.923.164 1.94.032l.503-.065c1.01-.131 1.515-.197 1.93.032.415.228.623.619 1.04 1.401l.342.622c.46.86.69 1.29.69 1.765s-.23.904-.69 1.764l-.342.622c-.418.781-.626 1.173-1.04 1.4-.416.231-.923.165-1.94.033l-.503-.066c-1.01-.131-1.515-.196-1.93.033-.414.228-.623.619-1.04 1.4l-.342.623C3 21.49 2.77 21.92 2.77 22.394c0 .475.23.905.69 1.765"
      />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function LightningIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  );
}

export function MessageIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 4h16a2 2 0 0 1 2 2v10.5a1.5 1.5 0 0 1-2.4 1.2L16 15H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function FireIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2c2 2 2.5 4.5 2.5 6.5 0 1.5-.5 3-2 4.5.5-2-1.5-4-3-5 0 3-2.5 4-2.5 7.5S9 22 12 22s5-2.5 5-5.5C17 11 13.5 9.5 12 2Z" />
    </svg>
  );
}

export function RadarIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      <path strokeWidth={1.5} strokeLinecap="round" d="m12 3 1.5 5.5L18 12" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

export function CalendarIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="4" y="5" width="16" height="16" rx="2" strokeWidth={1.5} />
      <path strokeWidth={1.5} d="M8 3v4M16 3v4M4 10h16" />
    </svg>
  );
}

export function DumbbellIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth={1.5} d="M3 9h2v6H3zm16 0h2v6h-2zM8 10h2v4H8zm6 0h2v4h-2zM10 12h4" />
    </svg>
  );
}

export function PlateIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
      <path strokeWidth={1.5} d="M12 4v2m0 12v2" />
    </svg>
  );
}
