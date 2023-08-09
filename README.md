## Getting Started

Kjør frontend:

```bash
npm run dev
```
i root

Kjør backend:

```bash
cd server
npm run devStart
```

- Åpne [http://localhost:3000](http://localhost:3000).
- Logg inn med spotify konto
- Legg til sanger i køen
- Spiller av automatisk

**Note:**
<br/>
Man trenger også
- Miljø variabler fra .env.
- Tilgang til spotify dev appen.

Send meg en melding på slack.

## To-do

- Start med å lage en side der man kan søke opp sanger. 
- Implementer en firebase (firestore) dokument DB for å lagre track-uri og en teller som sier noe om antall likes
- Vis spillelisten under søket, men sortering på antall likes
- Implementer en private route med react router eller i next som viser spilleliste og muligjør sletting av sanger. 

Nice to have: 
- Implementere et køsystem som legger til en sang i en datastruktur (Se WIP branchen)
- Hindre siden i å rerendre når en sang blir lagt til , vi må brått ha spillelisten i firestore med en GET og PUT til backend for så å vise i frontend. 

Teknologier: Firebase?, ReactQuery/TanStack? 
***Har man innspill og teknologi valg legg til under denne bolken.***

