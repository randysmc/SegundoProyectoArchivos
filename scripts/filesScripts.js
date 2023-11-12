{
    "name": "actualizar",
    "path": "/actualizar"
}

db.files.insertOne({name: 'musica', 
path: '/musica'})

db.files.insertOne({name: 'peliculas', 
path: '/peliculas'})

db.files.insertOne({name: 'perros', 
path: '/perros'})

db.files.insertOne({name: 'gatos', 
path: '/gatos'})


//Ver loso registrso

db.files.find().populate('name')