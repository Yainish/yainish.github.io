const svg = document.getElementById("wheel");
const textarea = document.getElementById("options");

const cx = 150;
const cy = 150;
const radius = 140;

function getOptions() {
    return textarea.value
        .split("\n")
        .map(o => o.trim())
        .filter(o => o.length > 0);
}

function polarToCartesian(cx, cy, r, angle) {
    const rad = (angle - 90) * Math.PI / 180;
    return {
        x: cx + r * Math.cos(rad),
        y: cy + r * Math.sin(rad)
    };
}

function createSlice(startAngle, endAngle, color) {
    const start = polarToCartesian(cx, cy, radius, endAngle);
    const end = polarToCartesian(cx, cy, radius, startAngle);

    const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    const d = [
        `M ${cx} ${cy}`,
        `L ${start.x} ${start.y}`,
        `A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y}`,
        "Z"
    ].join(" ");

    path.setAttribute("d", d);
    path.setAttribute("fill", color);

    return path;
}

function createText(label, angle, segmentAngle) {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");

    const midAngle = angle + segmentAngle / 2;

    const r = radius * 0.65;

    const pos = polarToCartesian(cx, cy, r, midAngle);

    text.setAttribute("x", pos.x);
    text.setAttribute("y", pos.y);

    text.setAttribute("transform", `rotate(${midAngle}, ${pos.x}, ${pos.y})`);

    let fontSize = Math.min(18, (segmentAngle * 0.6)); 

    text.setAttribute("font-size", fontSize);

    const maxChars = Math.floor(segmentAngle / 4) + 5;

    if (label.length > maxChars) {
        label = label.substring(0, maxChars) + "…";
    }

    text.textContent = label;

    return text;
}

function drawWheel() {
    svg.innerHTML = "";

    const options = getOptions();

    if (options.length === 0) return;

    const angleStep = 360 / options.length;

    options.forEach((opt, i) => {
        const start = i * angleStep;
        const end = start + angleStep;

        const color = `hsl(${i * 360 / options.length}, 70%, 50%)`;

        const slice = createSlice(start, end, color);
        svg.appendChild(slice);

        const text = createText(opt, start, angleStep);
        svg.appendChild(text);
    });
}

// actualizar al escribir
textarea.addEventListener("input", drawWheel);

// inicial
drawWheel();