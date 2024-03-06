const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
// Before button click & installation
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    textHeader.textContent = 'Click to install!';
});

// Implement a click event handler on the `butInstall` element
// After you click the button to install
butInstall.addEventListener('click', async () => {
    event.prompt();
    butInstall.setAttribute('disable', true);
    butInstall.textContent = 'Installed!';
});

// Event handler for the `appinstalled` event
// After installation it prompts a message
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Successfully installed!';
    console.log('👍🏼', 'appinstalled', event);
});
