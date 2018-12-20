import { Team } from "./randomizer";

export function logResult(teams: Team[]): void {
    const teamColor: any[] = ['green', 'cyan', 'magenta', 'yellow', 'red', 'blue'];
    for (let i = 0; i < teams.length; i++) {
        const firstLine = `>---------- ${teams[i].name} ----------<`;
        const lastLine = [];
        
        for (const _ of firstLine.split('')) {
            lastLine.push('-');
        }
        lastLine[0] = '>';
        lastLine[lastLine.length - 1] = '<';

        console.log('');
        console.log(firstLine[teamColor[i]]);
        for (const member of teams[i].members) {
            console.log(`  =>  ${member}`[teamColor[i]]);
        }
        console.log(lastLine.join('')[teamColor[i]]);
        console.log('');
    }
}