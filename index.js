function calculate(calculator) {
    return calculator.multiplication(5, 3);
}
var calculatorObject = {
    sum: function (a, b) {
        return a + b;
    },
    subtraction: function (a, b) {
        return a - b;
    },
    multiplication: function (a, b) {
        return a * b;
    },
    division: function (a, b) {
        return b === 0 ? 0 : a / b;
    }
};
var bookService = {
    allBooks: [],
    allAuthor: [],
    showBook: function (nameBook) {
        return this.allBooks.find(function (book) { return book.name.toLowerCase().includes(nameBook.toLowerCase()); });
    },
    showAuthor: function (nameAuthor) {
        return this.allAuthor.find(function (author) { return "".concat(author.name, " ").concat(author.surname).toLowerCase().includes(nameAuthor.toLowerCase()); });
    }
};
