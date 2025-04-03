
        document.querySelectorAll('.draggable').forEach(element => {
            element.addEventListener('dragstart', (event) => {
                event.dataTransfer.setData('text', event.target.id);
            });
        });
        
        document.getElementById('canvas').addEventListener('dragover', (event) => {
            event.preventDefault();
        });
        
        document.getElementById('canvas').addEventListener('drop', (event) => {
            event.preventDefault();
            const elementType = event.dataTransfer.getData('text');
            const newElement = document.createElement('div');
            newElement.textContent = elementType;
            newElement.classList.add('draggable');
            newElement.style.background = "#28a745";
            newElement.style.color = "white";
            document.getElementById('canvas').appendChild(newElement);
        });
    