const highlights = [
  { icon: "🔧", text: "Torque-checked, hand-tightened to spec" },
  { icon: "🛡️", text: "Balanced and safety-inspected before we leave" },
  { icon: "⏱️", text: "Most fittings done in under 20 minutes" },
];

const TyreFittingShowcase = () => {
  return (
    <section className="overflow-x-hidden py-10 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <span className="icon-pulse mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path d="M21 3l-4 4 2 2 4-4a5 5 0 01-6 6L6 22l-2-2 11-11a5 5 0 016-6z" />
              </svg>
            </span>

            <h2 className="mb-4 text-xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
              Watch Our Technicians Fit Your Tyre, Right Where You Parked
            </h2>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-body-color-dark">
              No workshop, no towing, no wasted time. Our mobile technicians
              arrive fully equipped, remove the old tyre, fit the new one and
              torque it to spec — all in your driveway, office car park, or
              by the roadside.
            </p>

            <ul className="space-y-4">
              {highlights.map((h) => (
                <li key={h.text} className="flex items-center gap-3 text-white">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-lg text-primary">
                    {h.icon}
                  </span>
                  <span className="text-sm sm:text-base">{h.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl bg-dark/60 ring-1 ring-primary/20">
              <svg viewBox="0 0 400 300" className="h-full w-full">
                <line x1="20" y1="232" x2="380" y2="232" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2" />

                {/* car body */}
                <path
                  d="M55,200 L55,178 Q55,162 72,156 L120,138 Q150,104 185,104 L250,104 Q282,104 305,138 L345,156 Q362,162 362,178 L362,200 Z"
                  fill="#1b2433"
                  stroke="var(--color-primary)"
                  strokeWidth="3"
                />
                <path
                  d="M128,136 Q155,112 183,112 L246,112 Q272,112 293,136 Z"
                  fill="#0f172a"
                  opacity="0.6"
                />

                {/* rear wheel (already fitted) */}
                <g transform="translate(130,200)">
                  <circle r="30" fill="#0f172a" stroke="#fff" strokeWidth="3" />
                  <circle r="10" fill="#fff" />
                </g>

                {/* front wheel well (empty slot, dashed) */}
                <circle
                  cx="285"
                  cy="200"
                  r="30"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2.5"
                  strokeDasharray="5 6"
                  opacity="0.6"
                />

                {/* tyre: sits fitted, gets pulled off, then the replacement rolls in and docks */}
                <g style={{ animation: "tyreCycle 6s ease-in-out infinite", transformOrigin: "285px 200px" }}>
                  <g transform="translate(285,200)">
                    <circle r="30" fill="#0f172a" stroke="#fff" strokeWidth="3" />
                    <circle r="10" fill="#fff" />
                    <g stroke="#fff" strokeWidth="2.5">
                      <line x1="0" y1="-20" x2="0" y2="-10" />
                      <line x1="0" y1="20" x2="0" y2="10" />
                      <line x1="-20" y1="0" x2="-10" y2="0" />
                      <line x1="20" y1="0" x2="10" y2="0" />
                      <line x1="-14" y1="-14" x2="-7" y2="-7" />
                      <line x1="14" y1="14" x2="7" y2="7" />
                      <line x1="14" y1="-14" x2="7" y2="-7" />
                      <line x1="-14" y1="14" x2="-7" y2="7" />
                    </g>
                  </g>
                </g>

                {/* secure pulse ring, flashes once the tyre docks */}
                <circle
                  cx="285"
                  cy="200"
                  r="30"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="3"
                  style={{ animation: "mountPulse 6s ease-in-out infinite" }}
                />

                {/* mechanic: crouched beside the wheel, arm swings in with a wrench in hand to work the hub */}
                <g>
                  {/* back leg, kneeling */}
                  <path d="M313,196 L308,228 L319,230 L324,200 Z" fill="#13233a" />
                  {/* front leg, bent forward */}
                  <path d="M336,202 L350,218 L344,230 L328,214 Z" fill="#1e3a5f" />
                  {/* torso, leaning forward over the wheel */}
                  <path d="M313,176 Q329,166 345,176 L350,196 Q338,208 318,202 L311,188 Z" fill="#20426b" />
                  {/* stripe accent on uniform */}
                  <path d="M320,178 L335,206" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
                  {/* head + cap */}
                  <circle cx="335" cy="164" r="10" fill="#f2c29a" />
                  <path d="M324,162 Q335,148 346,162 L346,157 Q335,150 324,157 Z" fill="#111827" />

                  {/* arm + hand + wrench, swings from the shoulder to work the hub */}
                  <g style={{ animation: "armSwing 6s ease-in-out infinite", transformOrigin: "322px 182px" }}>
                    <path d="M322,182 Q310,196 300,206" stroke="#20426b" strokeWidth="8" strokeLinecap="round" fill="none" />
                    <circle cx="300" cy="206" r="5" fill="#f2c29a" />
                    <g transform="translate(300,206) rotate(40)">
                      <rect x="-3" y="-20" width="6" height="24" rx="2" fill="#e5e7eb" />
                      <circle cy="-22" r="7" fill="none" stroke="#e5e7eb" strokeWidth="3.5" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            <div className="absolute -left-4 top-6 flex animate-[float_3.5s_ease-in-out_infinite] items-center gap-2 rounded-full bg-dark px-4 py-2 text-sm font-semibold text-white ring-1 ring-primary/30 shadow-lg sm:-left-8">
              <span className="text-lg">✅</span> Fitted On-Site
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TyreFittingShowcase;
