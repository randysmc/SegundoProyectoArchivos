import Archive from '../models/archives.model.js';
import User from '../models/user.model.js'
import File from '../models/files.model.js'

export const getArchives = async(req, res) => {
    try {
        const archives = await Archive.find()
        res.json(archives);
    } catch (error) {
        
    }
}

export const createArchive = async(req, res) => {
    try {
        const {title, extension, description, date, user, file} = req.body;

        //verifico si la carpeta existe
        const fileExist = await File.findOne({name: file});
        if(!fileExist)
            return res.status(404).json({error: 'file not found'})

        const archive = new Archive({
            title, 
            extension,
            description,
            date,
            //user: req.user.id,
            file: fileExist._id,
        });

        const savedArchive = await archive.save();
        return res.status(200).json(savedArchive)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

export const deleteArchive = async(req, res) => {
    try {
        const archive = await Archive.findByIdAndDelete(req.params.id);
        if(!archive)
            return res.status(404).json({message: "Archive not found"});

        return res.status(204);
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

export const updateArchive = async(req, res) => {
    try {
        const{title, extension, description, date} = req.body;
        const archiveUpdate = await Archive.findOneAndUpdate(
            {_id: req.params.id},
            {title, extension, description, date},
            {new: true}
        );
        return res.json(archiveUpdate)
    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }
}

export const getArchive = async(req, res) => {
    try {
        const archive = await Archive.findById(req.params.id);
        if(!archive) return res.status(404).json({message: "Archive not found"});
        res.json(archive)
        return res.status(200).json({message: error.message})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}