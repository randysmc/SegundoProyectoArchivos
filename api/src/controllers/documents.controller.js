import Document from "../models/documents.model.js";
import User from "../models/user.model.js";

export const getDocuments = async (req, res) => {
try {
    const documents = await Document.find({
        user: req.user.id,
      }).populate("user") ;
      res.json(documents);
} catch (error) {
    return res.status(500).json({message: error.message})
}
};

export const createDocument = async (req, res) => {
  try {
    const { title, description, date, user } = req.body;

    //const usersFound = await User.find({name: { $in: username }})
    //console.log(req.user);

    const document = new Document({
      title,
      description,
      date,
      user: req.user.id,
    });

    const savedDocument = await document.save();
    return res.status(200).json(savedDocument);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};



export const deleteDocument = async (req, res) => {
 try {
    const document = await Document.findByIdAndDelete(req.params.id);
    if (!document) 
        return res.status(404).json({ message: "Document not found" });

    return res.status(204);
 } catch (error) {
    return res.status(500).json({message: error.message})
 }
};

export const updateDocument = async (req, res) => {
    try {
        const {title, description, date} = req.body;
        const documentUpdate = await Document.findOneAndUpdate(
            {_id: req.params.id},
            {title,  description, date},
            {new: true}
        );
        return res.json(documentUpdate);
    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }
};

export const getDocumentById = async (req, res) => {
  try {
      const document = await Document.findById(req.params.id);
      if (!document) return res.status(404).json({ message: "Document not found" });
      return res.status(200).json(document);
  } catch (error) {
      return res.status(500).json({message: error.message})
  }
  };


/**
 *   const document = await Document.findByIdAndUpdate(
    req.params.documentId,
    req.body,
    {
      new: true,
    }
  );
  if (!document) return res.status(404).json({ message: "Document not found" });
  return res.json(document);
 * 
 * 
 */