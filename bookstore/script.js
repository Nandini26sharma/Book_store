// Book Data
const books = [
    { title: "Fiction One", author: "Author A", price: "$10", category: "fiction", image: "fiction1.jpg" },
    { title: "Non-Fiction One", author: "Author B", price: "$15", category: "non-fiction", image: "nonfiction1.jpg" },
    { title: "Comic One", author: "Author C", price: "$12", category: "comics", image: "comic1.jpg" },
    { title: "Fiction Two", author: "Author D", price: "$20", category: "fiction", image: "fiction2.jpg" }
  ];
  
  const favorites = [];
  
  // Function to display books
  function displayBooks(bookList) {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = '';
  
    bookList.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
      bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h2>${book.title}</h2>
        <p>by ${book.author}</p>
        <p>${book.price}</p>
        <p>Category: ${book.category}</p>
        <button onclick='toggleFavorite("${book.title}")'>${favorites.includes(book) ? 'Remove from Favorites' : 'Add to Favorites'}</button>
      `;
      bookContainer.appendChild(bookCard);
    });
  }
  
  // Function to toggle favorite
  function toggleFavorite(bookTitle) {
    const book = books.find(b => b.title === bookTitle);
    if (favorites.includes(book)) {
      favorites.splice(favorites.indexOf(book), 1);
    } else {
      favorites.push(book);
    }
    alert(`${book.title} has been ${favorites.includes(book) ? 'added to' : 'removed from'} favorites.`);
    displayBooks(books);
  }
  
  // Function to handle search
  document.getElementById('search-input').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
  });
  
  // Function to handle sorting
  document.getElementById('sort').addEventListener('change', function () {
    const sortBy = this.value;
    let sortedBooks = [...books];
  
    if (sortBy === 'price-low-high') {
      sortedBooks.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    } else if (sortBy === 'price-high-low') {
      sortedBooks.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    } else if (sortBy === 'title') {
      sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
    }
  
    displayBooks(sortedBooks);
  });
  
  // Function to display favorites
  document.getElementById('show-favorites').addEventListener('click', function () {
    displayBooks(favorites.length > 0 ? favorites : books);
  });
  
  // Function to toggle dark mode
  document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
  
  // Function to filter by category
  function filterCategory(category) {
    const filteredBooks = category === 'all' ? books : books.filter(book => book.category === category);
    displayBooks(filteredBooks);
  }
  
  // Initial display of books
  displayBooks(books);
  