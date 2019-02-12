## SGG-Vote Akrobatik voting System

### To Do (Verjy)
* styling  src/components/OneResult.vue
* styling  src/components/Rangliste.vue
* Du kannst Dich in den beiden Komponenten in template und style austoben :-)

### To Do (Nils)
* reactivity fail to import Team in use src/components/MobileInput.vue
* Kampfgerichte Arrays
* Resultcalculation
* Load and save data.json
* Kontrolle der Wertungsberechnung und Freigabe der Wertung

### Project setup
```
npm install
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
