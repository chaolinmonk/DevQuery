const { exec } = require('child_process');
const hola = "sorras";
exec(`python -c "from stringtest import stringpy; stringpy('${hola}')"`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`Resultado: ${stdout}`);
});