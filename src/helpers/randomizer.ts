import { getRandomInRange } from "./utils";
import { getName } from "./name-generator";

export interface Team {
    name: string;
    members: string[];
}

export function createTeams(teams: number, people: string[]): Team[] {
    const peopleCopy = people.slice();
    const randomized = [];
    while (peopleCopy.length > 0) {
        const randomIndex = getRandomInRange(0, peopleCopy.length - 1);
        const person = peopleCopy[randomIndex];
        randomized.push(person);
        peopleCopy.splice(randomIndex, 1);
    }

    const result: Team[] = [];
    let teamsCounter = teams;
    while (teamsCounter > 0) {
        const team: Team = {
            name: getName(),
            members: []
        }
        result.unshift(team);
        teamsCounter--;
    }

    let currentTeam = 0;
    for (const person of randomized) {
        result[currentTeam].members.push(person);
        currentTeam = currentTeam === teams - 1 ? 0 : currentTeam + 1;
    }

    return result;
}