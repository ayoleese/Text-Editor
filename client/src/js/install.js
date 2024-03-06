const butInstall = document.getElementById('buttonInstall');

// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // store the triggered events
   window.deferredPrompt = event;

   // removes hidden class from button
   butInstall.classList.toggle('hidden', false);
});

// Implement a click event handler on the `butInstall` element
// After you click the button to install
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if(!promptEvent) {
        return;
    }
    // show prompt
    promptEvent.prompt();
    // reset the deferred prompt variable, can only use once
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// Event handler for the `appinstalled` event
// After installation it clear prompt
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
