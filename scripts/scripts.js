db.createCollection('archivos');

db.archivos.insertOne({nombre: 'Felicidad', 
extension: 'txt', description: 'esto es un archivo que refleja felicidad', 
fecha: new Date("2023-06-26"), user:["randysmc"], carpeta: '/emociones'})