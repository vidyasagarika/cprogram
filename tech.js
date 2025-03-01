const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

(async () => {
  try {
    // Read content from src.txt
    const data = await readFile('src.txt', 'utf8');

    // Write content to dest.txt
    await writeFile('dest.txt', data, 'utf8');

    // Log success message
    console.log('Data moved from src.txt to dest.txt');
  } catch (err) {
    console.log('Error:', err);
  }
})();
