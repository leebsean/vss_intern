document.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const submit = document.getElementById('test');
    if (test) {
        console.log(test.innerHTML);
    } else {
        console.log("Element not found.");
    }
});