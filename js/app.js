document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

});


const makeNewBook = function (title, author, category) {
  const book = {
    title: title,
    author: author,
    category: category
  }
  return book;
};

const handleFormSubmit = function (event) {
  event.preventDefault();
  const newBook = makeNewBook(event.target.title.value, event.target.author.value, event.target.category.value)
  // console.log('submitted');
  console.log(newBook);


  const newBookDiv = document.createElement("ul");
  const readingList = document.querySelector("#reading-list");
  readingList.appendChild(newBookDiv);

  const newBookTitle = document.createElement("li");
  newBookTitle.textContent = `Title: ${newBook.title}`;
  newBookDiv.appendChild(newBookTitle);



  const newBookAuthor = document.createElement("li");
  newBookAuthor.textContent = `Author: ${newBook.author}`;
  newBookDiv.appendChild(newBookAuthor);


  const newBookCategory = document.createElement("li");
  newBookCategory.textContent = `Category: ${newBook.category}`;
  newBookDiv.appendChild(newBookCategory);

};
