let currentRotation = 0
let spinning = false

function measureText(text, fontSize) {
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  ctx.font = `${fontSize}px sans-serif`
  return ctx.measureText(text).width
}

function getOptions() {
  const raw = document.getElementById("options").value

  return raw
    .split("\n")
    .map(o => o.trim())
    .filter(o => o.length > 0)
}

function getColor(i, total) {
  const hue = (i * 360) / total
  return `hsl(${hue}, 70%, 60%)`
}

function createWheel(options) {
  const wheel = document.getElementById("wheel")
  wheel.innerHTML = ""

  const cx = 150
  const cy = 150
  const r = 140

  if (options.length === 0) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")

    circle.setAttribute("cx", cx)
    circle.setAttribute("cy", cy)
    circle.setAttribute("r", r)
    circle.setAttribute("fill", "#444")

    wheel.appendChild(circle)
    return
  }

  const angle = 360 / options.length

  options.forEach((opt, i) => {
    const start = angle * i
    const end = angle * (i + 1)

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    const d = describeArc(cx, cy, r, start, end)

    path.setAttribute("d", d)
    path.setAttribute("fill", getColor(i, options.length))
    path.setAttribute("stroke", "black")

    wheel.appendChild(path)

    const midAngle = (start + end) / 2
    const textPos = polarToCartesian(cx, cy, r * 0.65, midAngle)

    const outerG = document.createElementNS("http://www.w3.org/2000/svg", "g")
    const innerG = document.createElementNS("http://www.w3.org/2000/svg", "g")

    const baseFontSize = 16
    const ctx = document.createElement("canvas").getContext("2d")
    ctx.font = `${baseFontSize}px sans-serif`

    const textWidth = ctx.measureText(opt).width

    const angleRad = (angle * Math.PI) / 180
    const radius = r * 0.65
    const arcWidth = 2 * radius * Math.sin(angleRad / 2)

    const rotationRad = ((midAngle + 90) * Math.PI) / 180
    const projectedWidth = textWidth * Math.abs(Math.cos(rotationRad))

    const safeWidth = projectedWidth < 1 ? textWidth : projectedWidth

    let scale = arcWidth / safeWidth
    scale = Math.min(scale, 1)
    scale = Math.max(scale, 0.3)

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text")

    text.textContent = opt
    text.setAttribute("fill", "#000")
    text.setAttribute("text-anchor", "middle")
    text.setAttribute("dominant-baseline", "middle")
    text.setAttribute("font-size", baseFontSize)
    text.setAttribute("x", 0)
    text.setAttribute("y", 0)

    let rotation = midAngle + 90
    if (midAngle > 90 && midAngle < 270) {
      rotation += 180
    }

    innerG.setAttribute("transform", `
      rotate(${rotation})
      scale(${scale})
    `)

    outerG.setAttribute("transform", `
      translate(${textPos.x}, ${textPos.y})
    `)

    innerG.appendChild(text)
    outerG.appendChild(innerG)
    wheel.appendChild(outerG)
  })
}

function polarToCartesian(cx, cy, r, angle) {
  const rad = (angle - 90) * Math.PI / 180
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad)
  }
}

function describeArc(cx, cy, r, start, end) {
  const startPos = polarToCartesian(cx, cy, r, end)
  const endPos = polarToCartesian(cx, cy, r, start)

  const largeArc = end - start <= 180 ? 0 : 1

  return [
    "M", cx, cy,
    "L", startPos.x, startPos.y,
    "A", r, r, 0, largeArc, 0, endPos.x, endPos.y,
    "Z"
  ].join(" ")
}

function spinWheel(result, total) {
  if (spinning) return
  spinning = true

  setTimeout(() => {
    spinning = false
  }, 4000)

  const wheel = document.getElementById("wheel")

  const segment = 360 / total
  const spins = 5 * 360
  const randomOffset = (Math.random() - 0.5) * segment * 0.8

  const target =
    spins +
    (360 - (result * segment + segment / 2)) +
    randomOffset

  currentRotation += target

  wheel.style.transition = "transform 4s cubic-bezier(.2,.8,.2,1)"
  wheel.style.transform = `rotate(${currentRotation}deg)`
}

document.getElementById("options").addEventListener("input", () => {
  createWheel(getOptions())
})

document.getElementById("spin").onclick = () => {
  const options = getOptions()

  if (options.length === 0) return

  const result = Math.floor(Math.random() * options.length)

  spinWheel(result, options.length)
}

createWheel([])