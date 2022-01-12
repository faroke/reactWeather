export const API = 'bff61f5d94a04cfebfaef8a1f46684cc';


export function getPosition(position) {
    localStorage.setItem('lat', position.coords.latitude);
    localStorage.setItem('lon', position.coords.longitude);
}
