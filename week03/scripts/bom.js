const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Function to retrieve chapters from local storage or set an empty array
function getChapterList() {
    const storedChapters = localStorage.getItem('myFavBOMList');
    return storedChapters ? JSON.parse(storedChapters) : [];
}

// Declare and initialize chaptersArray
let chaptersArray = getChapterList();

// Display each chapter on page load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Function to display chapters
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.appendChild(deleteButton);
    list.appendChild(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// Event listener for adding chapters
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    } else {
        alert('Please enter a chapter name.');
    }
});

// Function to update local storage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to delete a chapter
function deleteChapter(chapter) {
    chapter = chapter.slice(0, -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
