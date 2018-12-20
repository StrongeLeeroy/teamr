import { getRandomInRange, capitalize } from "./utils";
import adjectives from "../dictionaries/adjectives";
import animals from "../dictionaries/animals";

export function getName(): string {
    const leftIndex = getRandomInRange(0, adjectives.length - 1),
        rightIndex = getRandomInRange(0, animals.length - 1);

    return `${capitalize(adjectives[leftIndex])} ${capitalize(animals[rightIndex])}`;
}

