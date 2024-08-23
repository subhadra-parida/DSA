// Define a callback function to run when mutations are observed
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        } else if (mutation.type === 'attributes') {
            console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
    }
};

// Create a MutationObserver instance with the callback function
const observer = new MutationObserver(callback);

// Define which mutations to observe
const config = { attributes: true, childList: true, subtree: true };

// Select the target node to observe
const targetNode = document.getElementById('myElement');

// Start observing the target node with the configured options
observer.observe(targetNode, config);
