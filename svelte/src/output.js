const { exec } = require('child_process');
var output;

const url = 'https://www.figma.com';

exec(`npx linkinator ${url} --verbose`, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    //output = stdout;
    //console.log(output);
    const output = stdout.toString();
    const brokenLinks = output.match(/Broken\sLinks:\n(.*)/);
    console.log(output);
    console.log(brokenLinks);
    // const json = { output, brokenLinks };
    // fs.writeFileSync('output.json', JSON.stringify(json));

});
export { output };