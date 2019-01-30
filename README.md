# SGG-Vote Acrobatic voting System

## To Do (Vergy)
* styling  src/components/OneResult.vue
* styling  src/components/Rangliste.vue
Du kannst Dich in den beiden Komponenten in <template> und <style> austoben :-)

## To Do (Nils)
* reactivity fail to import Team in use src/components/MobileInput.vue
* Kampfgerichte Arrays
* Resultcalculation
* load and save data.json

## Project setup
```
npm install
npm run serve
```

## Compiles and minifies for production
```
npm run build
```

## Pages Views

Result page   localhost:8080/
Zeigt alle 10 Sekunden abwechselnd die folgenden Componenten
```
src/components/Rangliste.vue 
src/components/OneResult.vue
```
Rangliste.vue zeigt die Gesamt- Rangliste gefiltert nach der letzten Wertungsklasse und typ an z.B. 'N1' && 'W3' 
OneResult.vue zeigt die Einzelwertung (aktuell nur die Überschriften hier kannst Du deine Vorstellung realisieren)
```
src/components/MobileInput.vue 
```

Kampfgericht   localhost:8080/input
Kampfgericht view zur Wertungseingabe auf den Mobile devices (Handy's I-Pads)

Organisations Page   localhost:8080/orga
Organisations Page. Festlegen der nächsten Startnummer für die nächste Wertung

