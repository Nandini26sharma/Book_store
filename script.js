// Array of books 
const books = [

  //fictions
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'fiction', price: '$10.99', image: 'https://books.google.co.in/books/publisher/content?id=JcYsEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70bbBOWd77-famopSXoxmYNLpRSHf8RzuBkFW3tyb9yd86c_F83nZyJlXTw0hmA2M40z2iERk_jAinG3Tze_0pDvQOQT0QDZl1qJaDrIhuglPvyl2CWLw0rF2mBgLmjqsI9xhR5' },

  { title: 'Beautiful World, Where Are You: A Novel - Hardcover', author: 'Rooney, Sally', category: 'fiction', price: '$21.96', image: 'https://pictures.abebooks.com/isbn/9780374602604-us.jpg' },

  { title: 'The Name of the Wind', author: 'Patrick Rothfuss', category: 'fiction', price: '$21.96', image: 'https://m.media-amazon.com/images/I/510xU0usiDL._SY445_SX342_.jpg' },

  { title: 'The Adventures of Sherlock Holmes (Word Cloud Classics) - Softcover', author: 'Doyle, Sir Arthur Conan', category: 'fiction', price: '$13.86', image: 'https://pictures.abebooks.com/isbn/9781607105565-us.jpg' },

  { title: 'To Kill a Mockingbird', author: 'harper Lee', category: 'fiction', price: '$21.96', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR819TtvIV0JJ5_Wzzfcnk3y2eXfPpamZmdbrg5ofv0Ydafpw_f' },


//non-fictions
  { title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', category: 'non-fiction', price: '$14.99', image: 'https://books.google.co.in/books/publisher/content?id=1EiJAwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2nf4ZzBE_NFma6-FTPoPwEmL0_oA&w=1280' },

  { title: 'Ikigai ', author: 'Francesc Miralles and Hector Garcia', category: 'non-fiction', price: '$14.99', image: 'https://kunzum.com/wp-content/uploads/2024/02/814Lvq01mL._SL1500_.jpg' },

  { title: 'The Psychology of Money ', author: 'Morgan Housel', category: 'non-fiction', price: '$14.99', image: 'https://kunzum.com/wp-content/uploads/2024/02/715ucF1cMZS._SL1500_.jpg' },

  { title: 'The Courage to be Disliked ', author: 'Fumitake Koga and Ichiro Kishimi', category: 'non-fiction', price: '$14.99', image: 'https://kunzum.com/wp-content/uploads/2024/02/61-8j1rtdOL._SL1500_.jpg' },
  { title: 'We Wish To Inform You That Tomorrow ', author: 'Philip Gourevitch', category: 'non-fiction', price: '$11.04', image: 'https://pictures.abebooks.com/isbn/9781447275268-us.jpg' },

  //mystery
  { title: 'The Da Vinci Code', author: 'Dan Brown', category: 'mystery', price: '$12.99', image: 'https://upload.wikimedia.org/wikipedia/en/e/e9/The_da_vinci_code_final.jpg' },


  { title: 'A New Lease on Death', author: 'Olivia Blacke', category: 'mystery', price: '$12.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1710858211i/203579013.jpg' },

  { title: "Don't Let the Forest In", author: 'C.G. Drews', category: 'mystery', price: '$12.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1699124610i/200982373.jpg' },

  { title: "The Inheritance Games", author: 'Jennifer Lynn Barnes', category: 'mystery', price: '$12.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1587396413i/52439531.jpg' },

  { title: "Another Fine Mess", author: 'Lindy Ryan', category: 'mystery', price: '$12.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1718938514i/211003818.jpg' },


  //science
  { title: 'A Brief History of Time', author: 'Stephen Hawking', category: 'science', price: '$15.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869.jpg' },
  { title: 'A Short History of Nearly Everything', author: 'Bill Bryson', category: 'science', price: '$15.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1433086293i/21.jpg' },


  { title: 'Why We Sleep: Unlocking the Power of Sleep and Dreams', author: 'Matthew Walker', category: 'science', price: '$15.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556604137i/34466963.jpg' },

  { title: 'Cosmos', author: 'Carl Sagan', category: 'science', price: '$15.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388620656i/55030.jpg' },

  { title: 'Guns, Germs, and Steel: The Fates of Human Societies', author: 'Jared Diamond', category: 'science', price: '$15.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1453215833i/1842.jpg' },
 

  //childrens-books
  { title: 'The Very Hungry Caterpillar', author: 'Eric Carle', category: "Childrens-Books", price: '$10.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1603739265i/4948.jpg' },
  { title: 'Kid Engineer: Intro to Engineering', author: 'Marc Chamberlain', category: "Childrens-Books", price: '$10.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689238513i/188604909.jpg' },

  { title: "Harry Potter and the Sorcerer's Stone", author: 'J.K. Rowling', category: "Childrens-Books", price: '$10.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg' },
  
  { title: "Harry Potter and the Prisoner of Azkaban", author: 'J.K. Rowling', category: "Childrens-Books", price: '$10.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630547330i/5.jpg' },

  { title: "Harry Potter and the Chambers of Secrets", author: 'J.K. Rowling', category: "Childrens-Books", price: '$10.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474169725i/15881.jpg' },

  { title: 'Brown Bear, Brown Bear, What Do You See?', author: 'Bill Martin Jr.', category: "Childrens-Books", price: '$10.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1430155496i/759611.jpg' },


  { title: 'Frog and Toad Are Friends', author: 'Arnold Lobel', category: "Childrens-Books", price: '$10.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626145524i/537296.jpg' },
  //horror
  { title: 'Dracula', author: 'Bram Stoker', category: 'Horror', price: '$10.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg' },
  { title: 'The Shining', author: 'stephing king', category: 'Horror', price: '$10.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg' },
  { title: "salem's Lot", author: 'stephing king', category: 'Horror', price: '$10.99', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327891565i/11590.jpg' },
];

const favorites = [];

// Array to store favorite books
let favoriteBooks = [];

// Function to display books
function displayBooks(filteredBooks) {
  const bookContainer = document.getElementById('book-container');
  bookContainer.innerHTML = '';  // Clear previous books

  filteredBooks.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
  
    bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h2>${book.title}</h2>
      <p>by ${book.author}</p>
      <p class="price">${book.price}</p>
      <button class="add-to-favorites">Add to Favorites</button>
    `;
  
    // Add event listener to 'Add to Favorites' button
    const addToFavoritesButton = bookCard.querySelector('.add-to-favorites');
    addToFavoritesButton.addEventListener('click', function () {
      addToFavorites(book);
    });
  
    bookContainer.appendChild(bookCard);
  });
}

// Function to add a book to favorites
function addToFavorites(book) {
  // Check if the book is already in the favorites array
  if (!favoriteBooks.includes(book)) {
    favoriteBooks.push(book);
    alert(`${book.title} added to favorites!`);
  }
}

// Function to display favorite books
function displayFavorites() {
  if (favoriteBooks.length === 0) {
    alert('No favorites added yet.');
    return;
  }
  
  const bookContainer = document.getElementById('book-container');
  bookContainer.innerHTML = '';  // Clear previous books

  favoriteBooks.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
  
    bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h2>${book.title}</h2>
      <p>by ${book.author}</p>
      <p class="price">${book.price}</p>
    `;
  
    bookContainer.appendChild(bookCard);
  });
}

// Event listener for 'Show Favorites' button
document.getElementById('show-favorites').addEventListener('click', function () {
  displayFavorites();  // Show only favorite books
});

// Filter books by category
document.getElementById('category').addEventListener('change', function () {
  const selectedCategory = this.value; // Value (fiction, etc.)

  if (selectedCategory === 'all') {
    displayBooks(books);  // Display all books
  } else {
    const filteredBooks = books.filter(book => book.category === selectedCategory);
    displayBooks(filteredBooks);  // Display filtered books
  }
});

// Initially display all books
displayBooks(books);

// Dark mode toggle functionality
document.getElementById('toggle-dark-mode').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});
