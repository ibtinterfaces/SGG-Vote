## SGG-Vote Akrobatik Voting System

### Wlan Zugang für Mobile Devices
Wlan Kennung ID: SGG-Voting-Lan
Wlan Passwort  : SGG-Acrobats

Mobile Vote URL: http://192.168.0.20:8080/input
Orga        URL: http://192.168.0.20:8080/Orga
Beamer      URL: http://192.168.0.20:8080

### Start Websocket Data Server
```
node data-server.js
```

### Start GUI Server
```
npm run serve
```

### To Do


### Project setup
```
npm install
npm run serve
```

### Start websocket data server
```
node data-server.js
```

### Start SGG Vote server application
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### SGG-Vote Server
Distributes data between devices and browser windows
```
git clone https://github.com/ibtinterfaces/SGG-Server.git
npm install
npm run serve
```


### Pages Views

Result page:   localhost:8080
Zeigt alle 10 Sekunden abwechselnd die folgenden Komponenten
```
src/components/Rangliste.vue 
src/components/OneResult.vue
```
Rangliste.vue zeigt die Gesamt- Rangliste gefiltert nach der letzten Wertungsklasse und typ an z.B. 'N1' && 'W3' 
OneResult.vue zeigt die Einzelwertung (aktuell nur die Überschriften hier kannst Du deine Vorstellung realisieren)

Kampfgericht Page:   localhost:8080/input
```
src/components/MobileInput.vue 
```
Kampfgericht view zur Wertungseingabe auf den Mobile devices (Handy's I-Pads)

Organisations Page:   localhost:8080/orga
```
src/components/OrgaStarterListe.vue 
```
Festlegen der nächsten Startnummer für die nächste Wertung
Kontrolle der Wertungsberechnung und Freigabe der Wertung
