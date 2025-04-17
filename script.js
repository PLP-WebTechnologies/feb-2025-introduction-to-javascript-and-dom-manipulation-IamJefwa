// Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('dynamicText').textContent = "Text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById('toggleStyleButton').addEventListener('click', function() {
    let textElement = document.getElementById('dynamicText');
    textElement.style.color = textElement.style.color === 'red' ? '#333' : 'red';
    textElement.style.fontSize = textElement.style.fontSize === '30px' ? '20px' : '30px';
});

// Add a new element dynamically
document.getElementById('addElementButton').addEventListener('click', function() {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is a new dynamically added element.';
    document.getElementById('elementContainer').appendChild(newElement);
});
