// Створіть інтерфейс, який описує структуру об'єкта, що представляє калькулятор. 
// Калькулятор повинен мати методи для виконання арифметичних операцій: додавання, віднімання, множення та ділення. 
// Потім створіть функцію calculate, яка приймає об'єкт цього типу та виконує операцію і повертає результат.
interface iCalculator{
    sum : (a : number, b : number) => number ,
    subtraction : (a : number, b : number) => number ,
    multiplication : (a : number, b : number) => number ,
    division : (a : number, b : number) => number
}

function calculate(calculator : iCalculator) : number {
    return calculator.multiplication(5, 3)
}

const calculatorObject : iCalculator = {
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

interface iAuthor {
    name : string ,
    surname : string ,
    autobiography : string ,
    writtenBooks : iBook | iBook[]
}

interface iBook {
    name : string ,
    yearOfIssue : Date ,
    numberOfPages : number ,
    authors : iAuthor | iAuthor[]
}

interface iBookService {
    allBooks : iBook[] ,
    allAuthor : iAuthor[] ,

    showBook : ( book : string ) => iBook | void ,
    showAuthor : ( author : string ) => iAuthor | void
}

const bookService : iBookService = {
    allBooks : [] ,
    allAuthor : [] ,

    showBook ( nameBook : string ) : iBook | void {
        const index = this.allBooks.findIndex ( book => book.name.includes ( nameBook ) ) ;
        if ( index >= 0 ) {
            return this.allBooks[ index ] ;
        }
    } ,
    showAuthor ( nameAuthor : string ) : iAuthor | void {
        const index = this.allAuthor.findIndex ( author => `${author.name}${author.surname}`.includes ( nameAuthor ) ) ;
        if ( index >= 0 ) {
            return this.allAuthor[ index ] ;
        }
    }
}