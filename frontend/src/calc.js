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

    console.log(parts, degrees, minutes, seconds)

    const decimalDegrees = degrees + (minutes / 60) + (seconds / 3600); 
    return decimalDegrees;
}

export const PC_TO_KM = 3.08567758149137e13;
export const PC_TO_M = PC_TO_KM * 1000.0;
export const M_TO_U = 1e-9;

// Absolute magnitude to size
export function magnitudeToSize(absmag) {
    let pseudo_l = Math.pow(10, -0.4 * absmag);

    let size_fac = 1;

    // TODO: Maximum size
    let size = Math.pow(pseudo_l, 0.4) * size_fac;

    return size;
}

export const sphericalToCartesian = (rightAscension, declination, distance) => {
    const raRad = rightAscension * (Math.PI / 180);
    const decRad = declination * (Math.PI / 180);

    const x = distance * Math.cos(raRad) * Math.cos(decRad);
    const y = distance * Math.sin(raRad) * Math.cos(decRad);
    const z = distance * Math.sin(decRad);

    return { x, y, z };
}

export const apparentMagnitude = (absoluteMagnitude, distance) => (absoluteMagnitude + 5 * Math.log10(distance) - 5);

export const calculateBrightness = (absoluteMagnitude, distance) => (10 ** (-0.4 * apparentMagnitude(absoluteMagnitude, distance)));
