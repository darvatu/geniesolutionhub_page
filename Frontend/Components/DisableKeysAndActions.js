export function disableKeysAndActions() {
    // Function to prevent default keyboard behavior
    const preventDefaultKeys = function(event) {
        // List of keys to disable
        const disabledKeys = [
            'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', // Function keys
            'Alt', 'Control', 'Shift', // Modifier keys
            'CapsLock' // Caps Lock
        ];

        // Check if pressed key is in the disabledKeys list
        if (disabledKeys.includes(event.key)) {
            event.preventDefault();
        }
    };

// The "document" object is a built-in global object provided by the browser's JavaScript environment. The document object represents the entire HTML document that's loaded in the browser window. It provides various methods and properties for interacting with the document, such as adding event listeners, modifying the DOM, and accessing elements on the page.


    // Attach event listener for keydown event to prevent default keyboard behavior
    document.addEventListener('keydown', preventDefaultKeys);

    // Prevent right-click context menu
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });

    // Prevent text selection
    document.addEventListener("selectstart", function (e) {
        e.preventDefault();
    });

    // Prevent dragging and dropping
    document.addEventListener("dragstart", function (e) {
        e.preventDefault();
    });
}


