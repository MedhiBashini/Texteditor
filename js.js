const editor = document.getElementById('editor');
const colorButton = document.getElementById('colorButton');

function executeCommand(command) {
    document.execCommand(command);
}

// Function to handle button clicks for specific actions
document.getElementById('boldButton').addEventListener('click', () => {
    executeCommand('bold');
});

document.getElementById('underlineButton').addEventListener('click', () => {
    executeCommand('underline');
});

document.getElementById('italicButton').addEventListener('click', () => {
    executeCommand('italic');
});

function applyFontColor(color) {
    document.execCommand('foreColor', false, color);
}

colorButton.addEventListener('click', () => {
    const selectedText = window.getSelection().toString().trim();

    if (selectedText !== '') {
        const colorPicker = document.createElement('input');
        colorPicker.type = 'color';
        colorPicker.style.position = 'absolute';
        colorPicker.style.opacity = '0';
        colorPicker.addEventListener('change', function() {
            applyFontColor(this.value);
            document.body.removeChild(this);
        });
        document.body.appendChild(colorPicker);
        colorPicker.click();
    } else {
        alert('Please select some text to apply color.');
    }
});

document.getElementById('justifyLeftButton').addEventListener('click', () => {
    executeCommand('justifyLeft');
});

document.getElementById('justifyCenterButton').addEventListener('click', () => {
    executeCommand('justifyCenter');
});

document.getElementById('justifyRightButton').addEventListener('click', () => {
    executeCommand('justifyRight');
});

document.getElementById('justifyFullButton').addEventListener('click', () => {
    executeCommand('justifyFull');
});

document.getElementById('undoButton').addEventListener('click', () => {
    executeCommand('undo');
});

document.getElementById('redoButton').addEventListener('click', () => {
    executeCommand('redo');
});