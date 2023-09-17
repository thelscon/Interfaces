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
        var index = this.allBooks.findIndex(function (book) { return book.name.includes(nameBook); });
        if (index >= 0) {
            return this.allBooks[index];
        }
    },
    showAuthor: function (nameAuthor) {
        var index = this.allAuthor.findIndex(function (author) { return "".concat(author.name).concat(author.surname).includes(nameAuthor); });
        if (index >= 0) {
            return this.allAuthor[index];
        }
    }
};
