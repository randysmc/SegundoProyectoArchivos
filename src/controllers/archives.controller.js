import Archive from "../api/src/models/archives.model.js";
import User from "../api/src/models/user.model.js";
import File from "../api/src/models/files.model.js";

export const getArchives = async (req, res) => {
  try {
    const archives = await Archive.find().populate("file");
    res.json(archives);
  } catch (error) {}
};

export const createArchive = async (req, res) => {
  try {
    const { title, extension, description, date, user, file } = req.body;

    //verifico si la carpeta existe
    console.log(file)
    const fileExist = await File.findOne({ name: file });
    //if (!fileExist) return res.status(404).json({ error: "file not found" });

    //si no existe la carpeta la voy a crear
    let archiveFile;
    if(fileExist){
        archiveFile = fileExist._id
    }else{
        const newFile = new File({
            name: file,
            path: '/'+ file
        });
        const savedFile = await newFile.save();
        archiveFile = savedFile._id;
    }



    const archive = new Archive({
      title,
      extension,
      description,
      date,
      //user: req.user.id,
      file: archiveFile
    });

    const savedArchive = await archive.save();
    return res.status(200).json(savedArchive);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const copyArchive = async (req, res) => {
  try {
    const archive = req.params.id;

    const originalArchive = await Archive.findById(archive);

    if (!originalArchive) {
      return res.status(404).json({ message: "Archive not found" });
    }

    const copyArch = new Archive({
      title: originalArchive.title + "_copia",
      extension: originalArchive.extension,
      description: originalArchive.description,
      file: originalArchive.file,
    });
    const savedCopy = await copyArch.save();
    res.status(201).json(savedCopy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteArchive = async (req, res) => {
  try {
    const archive = await Archive.findByIdAndDelete(req.params.id);
    if (!archive) return res.status(404).json({ message: "Archive not found" });

    return res.status(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateArchive = async (req, res) => {
  try {
    const { title, extension, description, date } = req.body;
    const archiveUpdate = await Archive.findOneAndUpdate(
      { _id: req.params.id },
      { title, extension, description, date },
      { new: true }
    );
    return res.json(archiveUpdate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getArchive = async (req, res) => {
  try {
    const archive = await Archive.findById(req.params.id);
    if (!archive) return res.status(404).json({ message: "Archive not found" });
    //res.json(archive)
    return res.status(200).json(archive);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
