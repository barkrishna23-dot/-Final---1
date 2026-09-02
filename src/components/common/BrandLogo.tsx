import React from 'react';

interface BrandLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  lang?: 'bn' | 'en';
  variant?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 56,
  className = '',
  showText = false,
  lang = 'bn',
  variant = 'light',
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* SVG Vector recreation of the official circular Sundarban Vromon logo */}
      <div
        style={{ width: size, height: size }}
        className="relative rounded-full shrink-0 flex items-center justify-center shadow-md bg-white p-[1px]"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full rounded-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base White Circle & Outer Deep Olive Green Ring */}
          <circle cx="100" cy="100" r="95" fill="#FFFFFF" stroke="#3D5A2B" strokeWidth="6.5" />

          {/* ============================================================ */}
          {/* 1. MANGROVE / SUNDARI TREE (Right Side)                      */}
          {/* ============================================================ */}
          <g id="mangrove-tree" stroke="#1A2814" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
            {/* Trunk */}
            <path d="M 127 106 L 124 82 L 130 82 L 127 106 Z" fill="#2D3B23" stroke="#1A2814" strokeWidth="2" />
            
            {/* Arching Stilt Roots (ঠেস মূল ও শ্বাসমূল) */}
            <path d="M 125 92 Q 112 108 98 132" fill="none" stroke="#2D3B23" strokeWidth="4" />
            <path d="M 125 96 Q 116 114 106 136" fill="none" stroke="#2D3B23" strokeWidth="3.2" />
            <path d="M 126 102 Q 120 120 115 137" fill="none" stroke="#2D3B23" strokeWidth="2.8" />
            <path d="M 127 106 L 127 138" fill="none" stroke="#2D3B23" strokeWidth="3.2" />
            <path d="M 128 102 Q 134 120 139 137" fill="none" stroke="#2D3B23" strokeWidth="2.8" />
            <path d="M 129 96 Q 138 114 148 136" fill="none" stroke="#2D3B23" strokeWidth="3.2" />
            <path d="M 129 92 Q 142 108 156 132" fill="none" stroke="#2D3B23" strokeWidth="4" />

            {/* Upper branches */}
            <path d="M 124 82 Q 114 66 108 58" fill="none" stroke="#2D3B23" strokeWidth="3.5" />
            <path d="M 127 82 L 127 56" fill="none" stroke="#2D3B23" strokeWidth="3.5" />
            <path d="M 130 82 Q 140 66 146 58" fill="none" stroke="#2D3B23" strokeWidth="3.5" />

            {/* Left Main Tree Canopy (Cluster of Cloud Bubbles) */}
            <path
              d="M 100 70 
                 C 94 65 93 53 100 46 
                 C 98 38 107 30 117 33 
                 C 122 24 135 24 141 31 
                 C 150 28 158 37 155 47 
                 C 162 53 160 66 151 71 
                 C 148 79 137 83 127 81 
                 C 114 83 104 78 100 70 Z"
              fill="#3E6B2D"
              stroke="#1A2814"
              strokeWidth="2.4"
            />

            {/* Right Secondary Overlapping Tree Canopy */}
            <path
              d="M 146 68 
                 C 142 61 142 49 148 43 
                 C 147 34 157 28 165 32 
                 C 171 26 182 28 186 35 
                 C 193 37 196 46 191 54 
                 C 195 61 191 71 183 75 
                 C 178 81 168 83 160 79 
                 C 152 81 146 76 146 68 Z"
              fill="#345B25"
              stroke="#1A2814"
              strokeWidth="2.4"
            />
          </g>

          {/* ============================================================ */}
          {/* 2. ROYAL BENGAL TIGER FACE (Left Side) - Exact 2D Line Art    */}
          {/* ============================================================ */}
          <g id="tiger-face" stroke="#1A2814" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
            {/* Left Ear */}
            <ellipse cx="43" cy="40" rx="12" ry="14" fill="#FFAF14" transform="rotate(-15 43 40)" />
            <ellipse cx="43" cy="40" rx="6.5" ry="8.5" fill="#FFF2CF" transform="rotate(-15 43 40)" />

            {/* Right Ear */}
            <ellipse cx="95" cy="40" rx="12" ry="14" fill="#FFAF14" transform="rotate(15 95 40)" />
            <ellipse cx="95" cy="40" rx="6.5" ry="8.5" fill="#FFF2CF" transform="rotate(15 95 40)" />

            {/* Tiger Face Silhouette / Orange Base Coat */}
            <path
              d="M 40 48 
                 C 32 57 28 72 31 86 
                 C 29 98 38 110 52 118 
                 C 58 122 64 123 69 123 
                 C 74 123 80 122 86 118 
                 C 100 110 109 98 107 86 
                 C 110 72 106 57 98 48 
                 C 88 42 50 42 40 48 Z"
              fill="#FFAF14"
              stroke="#1A2814"
              strokeWidth="3.2"
            />

            {/* White Cheeks / Muzzle Fur */}
            <path
              d="M 32 82 
                 C 29 92 34 104 46 114 
                 C 54 120 64 118 69 118 
                 C 74 118 84 120 92 114 
                 C 104 104 109 92 106 82 
                 C 101 88 95 94 85 96 
                 C 78 90 74 88 69 88 
                 C 64 88 60 90 53 96 
                 C 43 94 37 88 32 82 Z"
              fill="#FFFFFF"
              stroke="#1A2814"
              strokeWidth="2.2"
            />

            {/* White Chin Extension */}
            <path
              d="M 61 118 
                 C 61 125 64 128 69 128 
                 C 74 128 77 125 77 118 Z"
              fill="#FFFFFF"
              stroke="#1A2814"
              strokeWidth="2.2"
            />

            {/* White Eye Patches */}
            <ellipse cx="52" cy="67" rx="7" ry="5.5" fill="#FFFFFF" stroke="none" transform="rotate(-10 52 67)" />
            <ellipse cx="86" cy="67" rx="7" ry="5.5" fill="#FFFFFF" stroke="none" transform="rotate(10 86 67)" />

            {/* Tiger Eyes */}
            <path d="M 47 68 Q 53 62 59 67 Q 53 72 47 68 Z" fill="#FFFFFF" stroke="#1A2814" strokeWidth="2" />
            <circle cx="53" cy="67" r="2.4" fill="#1A2814" stroke="none" />
            <path d="M 79 67 Q 85 62 91 68 Q 85 72 79 67 Z" fill="#FFFFFF" stroke="#1A2814" strokeWidth="2" />
            <circle cx="85" cy="67" r="2.4" fill="#1A2814" stroke="none" />

            {/* Pink Nose */}
            <path
              d="M 63 86 
                 C 65 85 73 85 75 86 
                 C 76 89 71 96 69 97 
                 C 67 96 62 89 63 86 Z"
              fill="#F28D95"
              stroke="#1A2814"
              strokeWidth="2"
            />
            {/* Philtrum and Mouth Line */}
            <line x1="69" y1="97" x2="69" y2="103" stroke="#1A2814" strokeWidth="2.2" />
            <path d="M 62 103 Q 69 107 76 103" fill="none" stroke="#1A2814" strokeWidth="2.2" />

            {/* Whiskers Dots */}
            <circle cx="57" cy="102" r="1" fill="#1A2814" stroke="none" />
            <circle cx="54" cy="105" r="1" fill="#1A2814" stroke="none" />
            <circle cx="56" cy="107" r="1" fill="#1A2814" stroke="none" />
            <circle cx="81" cy="102" r="1" fill="#1A2814" stroke="none" />
            <circle cx="84" cy="105" r="1" fill="#1A2814" stroke="none" />
            <circle cx="82" cy="107" r="1" fill="#1A2814" stroke="none" />

            {/* Distinct Black Tiger Stripes */}
            {/* Forehead Stripes */}
            <path d="M 69 45 L 69 58" stroke="#1A2814" strokeWidth="2.8" />
            <path d="M 63 47 Q 67 53 65 61" fill="none" stroke="#1A2814" strokeWidth="2.4" />
            <path d="M 75 47 Q 71 53 73 61" fill="none" stroke="#1A2814" strokeWidth="2.4" />
            <path d="M 69 63 L 66 69 L 72 69 Z" fill="#1A2814" stroke="#1A2814" strokeWidth="1" />

            {/* Left Cheek Stripes */}
            <path d="M 36 60 Q 42 62 47 64" fill="none" stroke="#1A2814" strokeWidth="2.5" />
            <path d="M 34 71 Q 40 72 44 75" fill="none" stroke="#1A2814" strokeWidth="2.5" />
            <path d="M 35 83 Q 41 82 47 84" fill="none" stroke="#1A2814" strokeWidth="2.5" />
            <path d="M 41 94 Q 47 92 51 93" fill="none" stroke="#1A2814" strokeWidth="2.5" />

            {/* Right Cheek Stripes */}
            <path d="M 102 60 Q 96 62 91 64" fill="none" stroke="#1A2814" strokeWidth="2.5" />
            <path d="M 104 71 Q 98 72 94 75" fill="none" stroke="#1A2814" strokeWidth="2.5" />
            <path d="M 103 83 Q 97 82 91 84" fill="none" stroke="#1A2814" strokeWidth="2.5" />
            <path d="M 97 94 Q 91 92 87 93" fill="none" stroke="#1A2814" strokeWidth="2.5" />
          </g>

          {/* ============================================================ */}
          {/* 3. RIVER WATER WAVES (Bottom) - 4 Flowing Blue Waves         */}
          {/* ============================================================ */}
          <g id="river-waves" stroke="#1A2814" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
            {/* Wave 1 (Top Wave) */}
            <path
              d="M 24 130 
                 C 38 121, 60 119, 85 128 
                 C 110 137, 144 135, 176 126 
                 C 154 136, 118 142, 91 135 
                 C 64 128, 44 132, 24 130 Z"
              fill="#1CA1D3"
            />

            {/* Wave 2 */}
            <path
              d="M 26 144 
                 C 42 135, 66 133, 93 142 
                 C 118 150, 147 148, 174 138 
                 C 152 148, 123 154, 98 147 
                 C 73 140, 48 146, 26 144 Z"
              fill="#1CA1D3"
            />

            {/* Wave 3 */}
            <path
              d="M 34 158 
                 C 50 149, 72 147, 97 155 
                 C 121 163, 146 160, 166 151 
                 C 145 160, 122 166, 99 160 
                 C 76 154, 54 160, 34 158 Z"
              fill="#1CA1D3"
            />

            {/* Wave 4 (Bottom Wave) */}
            <path
              d="M 46 172 
                 C 60 163, 80 162, 101 169 
                 C 120 175, 139 173, 152 165 
                 C 135 174, 116 179, 99 174 
                 C 80 169, 62 174, 46 172 Z"
              fill="#1CA1D3"
            />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-tight leading-none text-xl sm:text-2xl font-heading ${
            variant === 'dark' ? 'text-white' : 'text-[#064E3B]'
          }`}>
            {lang === 'bn' ? 'সুন্দরবন ভ্রমণ' : 'Sundarban Vromon'}
          </span>
          <span className={`text-[11px] sm:text-xs tracking-wider uppercase font-medium ${
            variant === 'dark' ? 'text-[#F4B942]' : 'text-[#0E7490]'
          }`}>
            {lang === 'bn' ? 'SUNDARBAN VROMON • ২০১৯ থেকে' : 'TOUR & SAFARI AGENCY • EST. 2019'}
          </span>
        </div>
      )}
    </div>
  );
};
