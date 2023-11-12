import File from "../api/src/models/files.model.js";
import Archive from "../api/src/models/archives.model.js";

export const getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

export const getFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if(!file) return res.status(404).json({message: 'File not found'})
    return res.status(200).json(file)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const createFile = async (req, res) => {
  try {
    const { name, path } = req.body;
    const file = new File({
      name,
      path,
    });
    const savedFile = await file.save();
    return res.status(200).json(savedFile);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteFile = async (req, res) => {
  try {
    const file = await File.findByIdAndDelete(req.params.id);
    if(!file)
      return res.status(404).json({message: 'File not found'})

    return res.status(204);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

export const updateFile = async (req, res) => {
  try {
    const {name, path} = req.body;
    const fileUpdate = await File.findOneAndUpdate(
      {_id: req.params.id},
      {name, path},
      {new: true}
    );
    return res.json(fileUpdate);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};


