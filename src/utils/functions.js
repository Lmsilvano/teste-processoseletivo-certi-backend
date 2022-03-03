const fileSystem = require('fs');

function getData(fileName) {
    try {
        const result = JSON.parse(fileSystem.readFileSync('src/database/' + fileName, 'utf8'));
        return result
    }
    catch (err) {
        return []
    }
}


async function createOrUpdateData(fileName, data) {
    return fileSystem.writeFileSync('src/database/' + fileName, JSON.stringify(data));

}
module.exports = {
    getData,
    createOrUpdateData
}