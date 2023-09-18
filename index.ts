// Створіть інтерфейс, який описує структуру об'єкта, що представляє калькулятор. 
// Калькулятор повинен мати методи для виконання арифметичних операцій: додавання, віднімання, множення та ділення. 
// Потім створіть функцію calculate, яка приймає об'єкт цього типу та виконує операцію і повертає результат.
interface ICalculator{
    sum : (a : number, b : number) => number ,
    subtraction : (a : number, b : number) => number ,
    multiplication : (a : number, b : number) => number ,
    division : (a : number, b : number) => number
}

function calculate(calculator : ICalculator) : number {
    return calculator.multiplication(5, 3)
}

const calculatorObject : ICalculator = {
    sum(a : number, b: number) : number {
        return a + b;
    } ,
    subtraction(a: number, b: number) : number {
        return a - b;
    } ,
    multiplication(a: number, b: number) : number {
        return a * b; 
    } ,
    division(a : number, b : number) : number {
        return b === 0 ? 0 : a / b ;
    }
}


// Уявіть, що ви створюєте інтерфейси для веб-сервісу, який надає інформацію про книги. 
// Створіть інтерфейси Book, Author, і BookService, які описують структуру даних книжок, авторів і методи веб-сервісу для отримання інформації про книжки та авторів. 
// Потім створіть об'єкт bookService, який імітує роботу веб-сервісу, і використовуйте інтерфейси для отримання інформації про книги та авторів.

interface IAuthor {
    name : string ,
    surname : string ,
    autobiography : string ,
    writtenBooks : IBook | IBook[]
}

interface IBook {
    name : string ,
    yearOfIssue : Date ,
    numberOfPages : number ,
    authors : IAuthor | IAuthor[]
}

interface IBookService {
    allBooks : IBook[] ,
    allAuthor : IAuthor[] ,

    showBook : ( book : string ) => IBook | undefined ,
    showAuthor : ( author : string ) => IAuthor | undefined
}

const bookService : IBookService = {
    allBooks : [] ,
    allAuthor : [] ,

    showBook ( nameBook : string ) : IBook | undefined {
        return this.allBooks.find ( book => book.name.toLowerCase().includes ( nameBook.toLowerCase() ) ) ;
    } ,
    showAuthor ( nameAuthor : string ) : IAuthor | undefined {
        return this.allAuthor.find ( author => `${author.name} ${author.surname}`.toLowerCase().includes ( nameAuthor.toLowerCase() ) ) ;
    }
}