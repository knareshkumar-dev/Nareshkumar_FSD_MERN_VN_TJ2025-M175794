// Task 17: Download file function with callback
function downloadFile(filename, callback) {
    setTimeout(() => {
        console.log(`Downloading ${filename}...`);
        callback();
    }, 2000);
}

// Call the function
downloadFile("document.pdf", () => {
    console.log("Download complete!");
});

