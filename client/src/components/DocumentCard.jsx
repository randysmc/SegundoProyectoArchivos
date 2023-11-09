function DocumentCard({ document }) {
    console.log(document)
   return (
    <div className="bg-red-950 max-w-sm rounded-md">
    <h1 className="text-2xl">{document.title}</h1>
    <div>
        <button>Editar</button>
        <button>Eliminar</button>
    </div>
    <p className="text-ellipsis">{document.description}</p>
    
    <p>{new Date(document.date).toLocaleDateString()}</p>
    
  </div>
  );
}

export default DocumentCard;
