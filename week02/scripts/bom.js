const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    // Check if the input is not blank
    if (input.value != '') {
        // Create a li element
        const li = document.createElement('li');
        // Create a delete button
        const deleteButton = document.createElement('button');
        // Populate the li element's textContent with the input value
        li.textContent = input.value;
        // Set the delete button's textContent to '❌'
        deleteButton.textContent = '❌';
        // Append the delete button to the li element
        li.append(deleteButton);
        // Append the li element to the unordered list
        list.append(li);
        // Add an event listener to the delete button to remove the li when clicked
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus(); // Send the focus back to the input element
        });
        // Clean up the input field and set focus back to it
        input.value = '';
        input.focus();
    } else {
        // Optionally, alert the user if the input is empty
        alert('Please enter a chapter name.'); // Or you might use another method to show the message
        input.focus();
    }
});
