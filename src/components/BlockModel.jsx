// Decorative plan view of a mining block model: cells shaded by an illustrative grade field.
// It is not project data. The grade function is deterministic, so the pattern is the same on every load.
const COLS = 24, ROWS = 20, CELL = 20, GAP = 1.6

const grade = (c, r) => {
  const x = (c / (COLS - 1)) * 2 - 1, y = (r / (ROWS - 1)) * 2 - 1
  const d = Math.hypot((x + 0.1) * 1.05, (y - 0.06) * 1.2)
  const n = Math.sin(c * 1.7 + r * 0.9) * 0.12 + Math.cos(c * 0.6 - r * 1.4) * 0.1 + Math.sin((c + r) * 0.8) * 0.06
  const v = 1 - d + n
  return v < 0.2 ? 0 : v < 0.42 ? 1 : v < 0.62 ? 2 : v < 0.8 ? 3 : 4
}

const cells = []
for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) cells.push([c, r, grade(c, r)])

export default function BlockModel() {
  const w = COLS * CELL, h = ROWS * CELL
  return (
    <svg className="bm" viewBox={`-26 -22 ${w + 40} ${h + 36}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {cells.map(([c, r, g]) => (
        <rect key={`${c}-${r}`} className={`g${g}`} x={c * CELL} y={r * CELL} width={CELL - GAP} height={CELL - GAP}
              style={{ animationDelay: `${300 + (c + r) * 22}ms` }} />
      ))}
      {[0, 100, 200, 300, 400, 500].map((t, i) => (
        <text key={`x${t}`} className="tick" x={(i / 5) * (w - CELL)} y={-8}>{t}</text>
      ))}
      {[0, 100, 200, 300, 400].map((t, i) => (
        <text key={`y${t}`} className="tick" x={-8} y={(i / 4) * (h - CELL) + 13} textAnchor="end">{t}</text>
      ))}
    </svg>
  )
}
