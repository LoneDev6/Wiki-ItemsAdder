const fs = require('fs');
const path = require('path');

function *walkSync(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}

let assetsFilesNames = []
let assetsFilesNamesToRemove = []

for (const filePath of walkSync(__dirname + "/.gitbook/assets/")) {
    assetsFilesNames.push(filePath.replaceAll("\\", "/").split("Wiki-ItemsAdder/").pop().replaceAll("_", "\\_"))
}

assetsFilesNamesToRemove = [...assetsFilesNames];

console.log(assetsFilesNames.length)

for (const filePath of walkSync(__dirname)) {

    if(filePath.endsWith(".md")) {
        try {  
            var data = fs.readFileSync(filePath, 'utf8');
            
            // Add image to removal array if is not used by any md file
            assetsFilesNames.forEach(function(item, index, object) {
                if(data.includes(item)) {

                    var index = assetsFilesNamesToRemove.indexOf(item);
                    if (index !== -1) {
                        assetsFilesNamesToRemove.splice(index, 1);
                    }

                    console.log("Found in file: " + filePath)
                }
            });
        } catch(e) {
            console.log('Error:', e.stack);
        }
    }
}

console.log("not used: " + assetsFilesNamesToRemove.length )
console.log(__dirname)

assetsFilesNamesToRemove.forEach(function(item, index, object) {
    const remove = __dirname + "\\" + item.replaceAll("\\_", "_");
    fs.unlinkSync(remove);
    console.log("Deleted file: " + remove)
});