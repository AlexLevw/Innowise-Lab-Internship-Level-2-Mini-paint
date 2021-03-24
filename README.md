# Innowise Lab Internship: Level 2: Mini-Paint

## Task: [google docs](https://docs.google.com/document/d/1K79_NA4lMYfqQiIJGqLDek1K9z-oc2qg8n4AvrN1PXE/edit).
---
## [Demo](https://alexlevw.github.io/Innowise-Lab-Internship-Level-2-Mini-paint/)

---
## How to run the app:

1. Clone this repository
```
$ git clone git@github.com:AlexLevw/Innowise-Lab-Internship-Level-2-Mini-paint.git
```
2. Go to the directory
```
$ cd Innowise-Lab-Internship-Level-2-Mini-paint
```
3. Install app
```
$ yarn
```
4. Add ```.env.local``` file with firebase keys to the root directory

5. Start app
```
$ yarn start      #Open http://localhost:3000 to view it in the browser.
```
---
## Database snapshot
The application uses firestore db.
### Structure:
```
users - UserMail
            ├userId:`string`
            └userName:`string`
drawings - drawId
              ├drawId:`string`
              ├drawUrl:`string`
              ├userId:`string`   <- owner
              ├userName:`string` <- owner
```
---
## Application stack
* React
* Redux
* Typescript
* firebase
* react-router-dom
* node-sass
* eslint + prettier
* react-slick
* craco-alias
* validator