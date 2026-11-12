// Original vector illustration, drawn for this project. No third-party assets.
export default function KyotoScene() {
  return (
    <div className="kyoto-art" aria-hidden="true">
      <svg viewBox="0 0 640 460" fill="none">
        <defs>
          <linearGradient id="sky" x2="0" y2="1">
            <stop stopColor="#dbece8" />
            <stop offset="1" stopColor="#f1f4e8" />
          </linearGradient>
          <pattern
            id="windows"
            width="18"
            height="23"
            patternUnits="userSpaceOnUse"
          >
            <path d="M6 0v23M0 12h18" stroke="#c3c9ae" strokeWidth="2" />
          </pattern>
        </defs>
        <rect
          x="25"
          y="20"
          width="590"
          height="405"
          rx="170"
          fill="url(#sky)"
        />
        <circle cx="450" cy="111" r="42" fill="#eeb99c" />
        <path
          d="M20 258 132 152 223 227 305 144 447 260 520 192 637 285V386H20Z"
          fill="#b7cfc0"
        />
        <path
          d="m0 294 117-70 100 69 120-95 125 91 76-48 102 56v90H0Z"
          fill="#91b4a4"
        />
        <path
          d="M40 349c150-38 228 22 357-9s178 5 226 21v62H40Z"
          fill="#e9e7d3"
        />
        <path
          d="M298 331c40 31 1 45-24 59s45 24 87 38h130c-106-30-150-28-143-45s13-36-8-52Z"
          fill="#a7ced0"
        />
        <path
          d="m279 397 89 22m-59-37 48 12m-31-43 24 6"
          stroke="#deefea"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <g stroke="#2c5353" strokeWidth="3" strokeLinejoin="round">
          <path d="M449 150v183" />
          <path d="m445 147 4-25 4 25" fill="#355954" />
          <path
            d="M430 189h38v36h-38zM420 225h58v35h-58zM411 260h76v36h-76zM403 296h92v41h-92z"
            fill="#a97c5e"
          />
          <path
            d="m421 190 28-27 29 27 14 6h-84Z M408 227l41-25 42 25 13 6H394Z M398 264l51-26 51 26 16 6H382Z M387 301l62-27 63 27 17 6H370Z"
            fill="#345955"
          />
          <path
            d="M436 313v24m15-24v24m15-24v24m-30-67v26m16-26v26m-17-62v25m17-25v25"
            stroke="#e3c9a3"
          />
        </g>
        <g>
          <path d="M85 286h111v77H85Z" fill="#e7d7b9" />
          <path d="m69 292 70-54 74 54Z" fill="#355955" />
          <path d="M96 308h88v55H96Z" fill="url(#windows)" />
          <path d="M144 307h23v56h-23Z" fill="#7e8970" />
          <path d="m79 324 122-1" stroke="#465f50" strokeWidth="7" />
          <path d="M191 310h89v63h-89z" fill="#d4ba94" />
          <path d="m180 313 52-41 60 41Z" fill="#6c8170" />
          <path d="M207 326h54v38h-54Z" fill="url(#windows)" />
        </g>
        <g stroke="#567963" strokeWidth="6">
          <path d="M61 326v66m-15-45 15 17 20-30M549 322v67m-16-43 16 13 19-29" />
        </g>
        <g fill="#648e73">
          <circle cx="60" cy="318" r="28" />
          <circle cx="42" cy="335" r="20" />
          <circle cx="80" cy="334" r="24" />
          <circle cx="548" cy="309" r="32" />
          <circle cx="525" cy="333" r="22" />
          <circle cx="572" cy="329" r="26" />
        </g>
        <path
          d="M360 370q56-29 111-3M360 360q55-30 111-4m-108 6v18m20-26v19m23-23v18m23-20v19m24-17v18m17-14v18"
          stroke="#9a8063"
          strokeWidth="5"
        />
        <g transform="translate(238 348)">
          <circle cy="-17" r="7" fill="#dca789" />
          <path d="M-7-8h14l5 27h-23Z" fill="#277c79" />
          <path d="m-5 19-3 20m14-20 4 20" stroke="#2c5353" strokeWidth="5" />
          <path d="m7-5 9 14" stroke="#dca789" strokeWidth="4" />
        </g>
        <g transform="translate(503 374)">
          <circle cy="-16" r="6" fill="#dca789" />
          <path d="M-6-8h12l3 24h-18Z" fill="#e6b66c" />
          <path d="m-4 16-3 17m11-17 3 17" stroke="#2c5353" strokeWidth="4" />
        </g>
        <path
          d="M85 133q8-9 16 0 8-9 16 0m232-53q7-7 14 0 7-7 14 0"
          stroke="#698f82"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M24 403h170m332 13h81" stroke="#b6c9b7" strokeWidth="2" />
      </svg>
      <div className="art-note">
        <span className="note-dot" /> Kyoto, Japan{" "}
        <span>35.01° N / 135.77° E</span>
      </div>
    </div>
  );
}
