import flags from './helpers/flags';
import { createTeams } from './helpers/randomizer';
import { logResult } from './helpers/logger';
import colors from 'colors';
const _colors = colors;

export async function choose() {
    if (!flags.debug) {
        console.debug = () => {};
    }

    const start = Date.now();
    const { teams, people } = await flags.configuration();
    console.debug(`\n[${'INFO'.blue}] Generating ${teams} teams with a total of ${people.length} people...`);
    const generated = createTeams(teams, people);
    const end = Date.now();
    logResult(generated);
    console.debug(`[${'OK'.green}] Done in ${end - start}ms.`);
}