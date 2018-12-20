import yaml from 'js-yaml';
import { promisify } from 'util';
import { readFile as fsReadFile } from 'fs';

const readFile = promisify(fsReadFile);

export interface Configuration {
    teams: number;
    people: string[];
}

export class Flags {
    public flags: string[];

    constructor() {
        this.flags = process.argv.slice(2);
    }

    public get debug(): boolean {
        return this.flags.indexOf('--debug') >= 0;
    }

    public async configuration(): Promise<Configuration> {
        const configIndex = this.flags.indexOf('--config'),
            configFileLocation = this.flags[configIndex + 1],
            configFile = await readFile(configFileLocation, 'utf8');

        if (configIndex >= 0 && configFileLocation && configFile) {
            const config: Configuration = yaml.safeLoad(configFile);
            if (this.validateConfig(config)) {
                return config;
            } else {
                throw new Error('Invalid configuration.');
            }
        } else {
            throw new Error('You must define a configuration file path (e.g. --config ./my-config.yaml)');
        }
    }

    private validateConfig(config: Configuration): boolean {
        let valid: boolean = true;
        if (!config.teams || typeof config.teams !== 'number') {
            valid = false;
        }
        if (!config.people || !Array.isArray(config.people)) {
            valid = false;
        }
        return valid;
    }
}

const flags = new Flags();
export default flags;