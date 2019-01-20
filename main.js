const { Text } = require("scenegraph");
const { alert, error } = require("./lib/dialogs");

async function countText(selection) {
    let wc = 0, cc = 0;

    let textLayersSelected = false;

    selection.items.forEach(node => {
        if (node instanceof Text) {
            let text = node.text.trim();

            textLayersSelected = true;

            wc += countWords(text);
            cc += text.length;
        }
    });

    // Handle error cases
    if (!textLayersSelected) {
        await error("Count Text - Error", "No text layers selected");
        return ;
    }

    await alert("Count Text", `Word Count: ${wc}`, `Character Count: ${cc}`);
}

function countWords(str) {
    return str.trim().split(/\s+/).length;
}

module.exports.commands = {
    countText
};