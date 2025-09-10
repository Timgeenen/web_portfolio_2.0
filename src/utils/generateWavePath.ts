export default function generateWavePath(
    amplitude: number,
    wavelength: number,
    offsetY: number,
    phase: number,
    size: number,
) {
    let path = `M 0 ${offsetY}`;
    for (let x = 0; x <= size; x++) {
        const y = amplitude * Math.sin((x / wavelength) * Math.PI * 2 + phase) + offsetY;
        path += ` L ${x} ${y}`;
    }
    path += ` L ${size} ${size} L 0 ${size} Z`; // close shape down to bottom
    return path;
}
