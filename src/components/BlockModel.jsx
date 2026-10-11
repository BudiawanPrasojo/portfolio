// Decorative plan view of a mining block model: cells shaded by an illustrative grade field.
// It is not project data. The grade function is deterministic, so the pattern is the same on every load.
const CELL = 20, GAP = 1.6

const grade = (c, r, cols, rows) => {
  const x = (c / (cols - 1)) * 2 - 1, y = (r / (rows - 1)) * 2 - 1
  const wide = cols > rows * 3
  const d = Math.hypot((x + 0.1) * (wide ? 0.5 : 1.05), (y - 0.06) * (wide ? 0.8 : 1.2))
  const n = Math.sin(c * 1.7 + r * 0.9) * 0.12 + Math.cos(c * 0.6 - r * 1.4) * 0.1 + Math.sin((c + r) * 0.8) * 0.06
  const v = 1 - d + n
  return v < 0.2 ? 0 : v < 0.42 ? 1 : v < 0.62 ? 2 : v < 0.8 ? 3 : 4
}

export default function BlockModel({ cols = 56, rows = 6 }) {
  const w = cols * CELL, h = rows * CELL
  const cells = []
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) cells.push([c, r, grade(c, r, cols, rows)])
  return (
    <svg className="bm" viewBox={`0 -18 ${w} ${h + 18}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {cells.map(([c, r, g]) => (
        <rect key={`${c}-${r}`} className={`g${g}`} x={c * CELL} y={r * CELL} width={CELL - GAP} height={CELL - GAP}
              style={{ animationDelay: `${300 + (c + r) * 18}ms` }} />
      ))}
      {[0, 100, 200, 300, 400, 500].map((t, i) => (
        <text key={t} className="tick" x={(i / 5) * (w - 24) + 2} y={-6}>{t}</text>
      ))}
    </svg>
  )
}
