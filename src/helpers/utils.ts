export function getRandomInRange(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function capitalize(name: string): string {
    return name[0].toUpperCase() + name.slice(1);
}