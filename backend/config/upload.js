const multer = require('multer');
const path = require('path');

    module.exports = {
        storage: multer.diskStorage({
            // path.resolve va chercher le bon chemin du dossier selon les différents OS
            destination: path.resolve(__dirname, '..', 'Images'),
            filename: (request, file, callback) => {
                const ext = path.extname(file.originalname);
                const name = path.basename(file.originalname, ext);

                callback(null, `${ name }-${ Date.now()}${ ext }`);
            },
        }),
    };