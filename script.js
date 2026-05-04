document.getElementById('downloadBtn').addEventListener('click', function() {
    // This triggers the browser print dialog
    // Modern browsers allow "Save as PDF" from this menu
    window.print();
});