const fs = require("fs/promises"); // File System
const { existsSync } = require("node:fs");
console.log(__dirname, __filename);

const createFolder = (folderName) => {
	if (existsSync(`${__dirname}/${folderName}`)) {
		return console.log(`📁 Dossier ${folderName} déjà existant`);
	}
	fs.mkdir(`${__dirname}/${folderName}`)
		.then((path) => {
			console.log(`✔️ Dossier ${folderName} créé - ${path}`);
		})
		.catch((err) => {
			console.error(`❌ Erreur lors de la création du dossier - ${err}`);
		});
};

const deleteFolder = (folderName) => {
	fs.rmdir(`${__dirname}/${folderName}`)
		.then(() => {
			console.log(`✔️ Dossier ${folderName} supprimé`);
		})
		.catch((err) => {
			console.error("❌ Erreur lors de la suppression du dossier");
		});
};

const createFile = (filename) => {
	fs.appendFile(`${__dirname}/${filename}`, "").then(() => {
		console.log(`✔️ Fichier ${filename} créé`);
	});
};

const writeFile = (filename, data) => {
	fs.appendFile(`${__dirname}/${filename}`, data).then(() => {
		console.log(`✔️ Fichier ${filename} modifié`);
	});
};

const removeFile = (filename) => {
	fs.rm(`${__dirname}/${filename}`)
		.then(() => {
			console.log(`✔️ Fichier ${filename} supprimé`);
		})
		.catch((err) => {
			console.error(`❌ Erreur lors de la suppression du fichier - ${err}`);
		});
}

// createFolder("temp");
removeFile("Readme.md");

