db.createCollection('archivos');

db.archivos.insertOne({title: 'Felicidad', 
extension: 'txt', description: 'esto es un archivo que refleja felicidad', 
fecha: new Date("2023-06-26"), user:["randysmc"], carpeta: '/emociones'})

db.archives.insertOne({title: 'Solo Exitos', 
extension: 'txt', description: 'esto es un que guarda las mejores canciones del momento', 
fecha: new Date("2023-06-26"), user:["randy"], carpeta: '/musica'})

db.archives.insertOne({title: 'Exitos Jose Jose', 
extension: 'txt', description: 'la nave del olvido, gavilan o paloma', 
fecha: new Date("2023-06-26"), user:["randy"], carpeta: '/musica'})

db.archives.insertOne({title: 'Peliculas', 
extension: 'txt', description: 'Lista de peliculas del cine', 
fecha: new Date("2023-06-26"), user:["randy"], carpeta: '/peliculas'})

db.archives.insertOne({title: 'Perros', 
extension: 'txt', description: 'Este es un archivo que guarda informacion de los perros', 
fecha: new Date("2023-06-26"), user:["randy"], carpeta: '/perros'})

db.archives.insertOne({title: 'Felicidad', 
extension: 'txt', description: 'esto es un archivo que refleja felicidad', 
fecha: new Date("2023-06-26"), user:["randy"], carpeta: '/emociones'})

db.archives.insertOne({title: 'Felicidad', 
extension: 'txt', description: 'esto es un archivo que refleja felicidad', 
fecha: new Date("2023-06-26"), user:["randy"], carpeta: '/emociones'})

db.archives.insertOne({title: 'Felicidad', 
extension: 'txt', description: 'esto es un archivo que refleja felicidad', 
fecha: new Date("2023-06-26"), user:["randy"], carpeta: '/emociones'})

db.archives.insertOne({title: 'Felicidad', 
extension: 'txt', description: 'esto es un archivo que refleja felicidad', 
fecha: new Date("2023-06-26"), user:["randy"], carpeta: '/emociones'})

db.archives.insertOne({title: 'Felicidad', 
extension: 'txt', description: 'esto es un archivo que refleja felicidad', 
fecha: new Date("2023-06-26"), user:["randy"], carpeta: '/emociones'})

db.archives.insertOne({title: 'Felicidad', 
extension: 'txt', description: 'esto es un archivo que refleja felicidad', 
fecha: new Date("2023-06-26"), user:["randy"], carpeta: '/emociones'})

db.archives.find().populate('title')