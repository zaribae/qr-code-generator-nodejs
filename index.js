import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
    .prompt([{
        /* Pass your questions in here */
        message: 'Type in a URL that you want to generate the QR Code: ',
        name: 'URL'
    }])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const url = answers.URL;
        const qr_image = qr.image(url);
        qr_image.pipe(fs.createWriteStream('qr_image.png'));

        fs.writeFile('URL.txt', url, (error) => {
            if (error) throw error;
            console.log('The file was successfully saved!');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
/* 
3. Create a txt file to save the user input using the native fs node module.
*/
