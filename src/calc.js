export const raToDeg = (raString) => {
    const parts = raString.split(/h|m|s/).map(part => part.trim()).filter(part => part);
    
    if (parts.length !== 3) {
        throw new Error("Invalid Right Ascension format");
    }

    const hours = parseFloat(parts[0]);
    const minutes = parseFloat(parts[1]);
    const seconds = parseFloat(parts[2]);

    const degrees = (hours * 15) + (minutes * 15 / 60) + (seconds * 15 / 3600);
    
    return degrees;
}

export const decToDeg = (decString) => {
    const parts = decString.split(/[°′″]/).map(part => part.trim()).filter(part => part);

    if (parts.length !== 3) {
        throw new Error("Invalid Declination format");
    }

    const degrees = parseFloat(parts[0]);
    const minutes = parseFloat(parts[1]);
    const seconds = parseFloat(parts[2]);

    const decimalDegrees = degrees + (minutes / 60) + (seconds / 3600);
    
    return decimalDegrees;
}

export const sphericalToCartesian = (rightAscension, declination, distance) => {
    const raRad = rightAscension * (Math.PI / 180);
    const decRad = declination * (Math.PI / 180);

    const mult = 10;

    const x = distance * Math.cos(decRad) * Math.cos(raRad) * mult;
    const y = distance * Math.cos(decRad) * Math.sin(raRad) * mult;
    const z = distance * Math.sin(decRad) * mult;

    return { x, y, z };
}

export const apparentMagnitude = (absoluteMagnitude, distance) => (absoluteMagnitude + 5 * Math.log10(distance) - 5);

export const calculateBrightness = (absoluteMagnitude, distance) => (10 ** (-0.4 * apparentMagnitude(absoluteMagnitude, distance)));
