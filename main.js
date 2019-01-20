const { Text } = require("scenegraph");

function countText(selection) {
    let wc, cc;

    wc = cc = 0;

    selection.items.forEach(node => {
        if (node instanceof Text) {
            wc += countWords(node.text);
            cc += node.text.length;
        }
    });


    console.log("Word Count: " + wc);
    console.log("Character Count: " + cc);
}

function countWords(str) {
    return str.trim().split(/\s+/).length;
}

module.exports.commands = {
    countText
};