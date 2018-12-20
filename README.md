# Teamr

A random team generator CLI tool.

## Installation & Usage

Install **teamr** globally by running:

```sh
npm install -g @strongeleeroy/teamr
```

Then, use it from the command line:

```sh
teamr --config teams.yaml
```

Output:
```sh
>---------- Viable Chinchillas ----------<
  =>  Steven
  =>  Margene
  =>  Ashlie
  =>  Christen
  =>  Carlos
>----------------------------------------<


>---------- Braided Leopards ----------<
  =>  Sally
  =>  Buck
  =>  Jamika
  =>  Luisa
>--------------------------------------<
```

## Configuration (teams.yaml)

The initial teams configuration is done in YAML and must contain the number of desired teams and a list of people:

```yaml
teams: 2
people:
- Luisa
- Carlos
- Jamika
- Buck
- Steven
- Christen
- Sally
- Margene
- Ashlie
```

## Debug logs

Display debug logs by addind the `--debug` flag to the `teamr` command:

```sh
teamr --config ./teams.yaml --debug
```

Output:
```sh
[INFO] Generating 2 teams with a total of 9 people...

>---------- Viable Chinchillas ----------<
  =>  Steven
  =>  Margene
  =>  Ashlie
  =>  Christen
  =>  Carlos
>----------------------------------------<


>---------- Braided Leopards ----------<
  =>  Sally
  =>  Buck
  =>  Jamika
  =>  Luisa
>--------------------------------------<

[OK] Done in 11ms.
```