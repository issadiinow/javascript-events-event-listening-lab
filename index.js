function addingEventListener() {
    // 1. Select the element with the id "button"
    const input = document.getElementById('button');
    
    // 2. Define a function to handle the click event
    function clickAlert() {
      alert('I was clicked!');
    }
    
    // 3. Attach the click event listener to the input element
    input.addEventListener('click', clickAlert);
  }
  
  // Call the function to ensure the event listener is added
  addingEventListener();
  