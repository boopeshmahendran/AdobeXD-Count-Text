const { Text } = require("scenegraph");
const { alert } = require("./lib/dialogs");

async function countText(selection) {
    let wc, cc;

    wc = cc = 0;

    selection.items.forEach(node => {
        if (node instanceof Text) {
            wc += countWords(node.text);
            cc += node.text.length;
        }
    });

    await alert(
        "Count Text",
        `Word Count: ${wc}`,
        `Character Count: ${cc}`
    );
}

function countWords(str) {
    return str.trim().split(/\s+/).length;
}

module.exports.commands = {
    countText
};