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

let imgFilesNames = []
let imgFilesNamesToRemove = []

for (const filePath of walkSync(__dirname)) {

    if(filePath.endsWith(".png") || filePath.endsWith(".jpg") || filePath.endsWith(".jpeg") || filePath.endsWith(".gif"))
        imgFilesNames.push(filePath.replaceAll("\\", "/").split("Wiki-ItemsAdder/").pop().replaceAll("_", "\\_"))
}

imgFilesNamesToRemove = [...imgFilesNames];

console.log(imgFilesNames.length)

for (const filePath of walkSync(__dirname)) {

    if(filePath.endsWith(".md")) {
        try {  
            var data = fs.readFileSync(filePath, 'utf8');
            
            // Add image to removal array if is not used by any md file
            imgFilesNames.forEach(function(item, index, object) {
                if(data.includes(item)) {

                    var index = imgFilesNamesToRemove.indexOf(item);
                    if (index !== -1) {
                        imgFilesNamesToRemove.splice(index, 1);
                    }

                    console.log("Found in file: " + filePath)
                }
            });
        } catch(e) {
            console.log('Error:', e.stack);
        }
    }
}

console.log("not used: " + imgFilesNamesToRemove.length )
console.log(__dirname)

imgFilesNamesToRemove.forEach(function(item, index, object) {
    const remove = __dirname + "\\" + item.replaceAll("\\_", "_");
    fs.unlinkSync(remove);
    console.log("Deleted file: " + remove)
});