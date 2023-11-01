import Document from "../models/documents.model.js"
import User from "../models/user.model.js"

export const getDocuments = async (req, res) =>{
    const documents = await Document.find({
        user: req.user.id
    }).populate('user')
    res.json(documents);

}

export const createDocument = async (req, res) =>{
    try {
        const {title, description, date, user} = req.body;

    //const usersFound = await User.find({name: { $in: username }})
    console.log(req.user)

    const document = new Document({
        title,
        description,
        date,
        user: req.user.id
    });

    const savedDocument = await document.save();
    return res.status(200).json( savedDocument);
    } catch (error) {
        return res.status(400).json(error)
    }


}

export const getDocumentById = async (req, res) =>{
    const document = await Document.findById(req.params.documentId);
    if(!document) return res.status(404).json({ message: 'Document not found'});
    return res.status(200).json(document);
}




export const deleteDocument = async (req, res) =>{
    const document = await Document.findByIdAndDelete(req.params.documentId)
    if(!document) return res.status(404).json({message: 'Document not found'})
    return res.status(204)
}






export const updateDocument = async (req, res) =>{
    const document = await Document.findByIdAndUpdate(req.params.documentId, req.body, {
        new: true
    })
    if(!document) return res.status(404).json({message: 'Document not found'})
    return res.json(document)
}



