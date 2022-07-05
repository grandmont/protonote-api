const fs = require("fs");
const path = require("path");

const { model, barrel } = require("./template.js");

// Grab file name from terminal argument
const grc = (name, targetPath = "/") => {
  if (!name) throw new Error("You must include a file name.");

  const dir = path.join("./src", targetPath, name);

  // Throw an error if the file already exists
  if (fs.existsSync(dir))
    throw new Error("A file with that name already exists.");

  // Create the folder
  fs.mkdirSync(dir, { recursive: true });

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  fs.writeFile(`${dir}/${name}.ts`, model(name), writeFileErrorHandler);
  fs.writeFile(`${dir}/index.ts`, barrel(name), writeFileErrorHandler);

  console.log(`Created file: ${name}`);
  console.log("Path:", dir);
};

module.exports = grc;
