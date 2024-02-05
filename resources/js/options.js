function saveOptions(e) {

    e.preventDefault();
    chrome.storage.sync.set({
        url: document.querySelector("#url").value,
        token: document.querySelector("#token").value,
    });
}

function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector("#url").value = result.url || "";
        document.querySelector("#token").value = result.token || "";
    }
    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = chrome.storage.sync.get();
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
