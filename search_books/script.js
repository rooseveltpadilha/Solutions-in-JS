// Buscando e contando dados em Array

// Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:

// * Contar o número de categorias e o número de livros de cada categoria.
// * Contar o número de autores
// * Mostrar livros do autor Augusto Cury
// * Transformar a função acima em uma função que irá receber o nome do autor e devolver
// os livros desse autor.

const booksByCategory = [
    {   
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubistituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


const contarNumberOfCategory = () => {
    return booksByCategory.length;
}

const contarNumberOfBooksOfCategory = () => {
    let categoryAndNumber = [];
    for(let i = 0; i < booksByCategory.length; i++) {
       let numberBooksThisCategory = booksByCategory[i].books.length;
       categoryAndNumber.push(booksByCategory[i].category+' ('+numberBooksThisCategory+')');
    }
    return categoryAndNumber;
};

const contarNumberOfAuthors = () => {
    let authors = [];
    for(let i = 0; i < booksByCategory.length; i++) {
        for(let j = 0; j < booksByCategory[i].books.length; j++) {
            let authorOfThisBook = booksByCategory[i].books[j].author;
            if (!authors.includes(authorOfThisBook)) {
                authors.push(authorOfThisBook);
            }
        }
    }
    return authors.length;
};

const showBooksOfAugustCury = () => {
    let author = "Augusto Cury";
    let books = [];
    for(let i = 0; i < booksByCategory.length; i++) {
        for(let j = 0; j < booksByCategory[i].books.length; j++) {
            if(booksByCategory[i].books[j].author == author) {
                books.push(booksByCategory[i].books[j].title);
            }
        }
    }
    return books;
};

const searchBooksByAuthor = (author) => {
    let books = [];
    for(let i = 0; i < booksByCategory.length; i++) {
        for(let j = 0; j < booksByCategory[i].books.length; j++) {
            if(booksByCategory[i].books[j].author == author) {
                books.push(booksByCategory[i].books[j].title);
            }
        }
    }
    return books;
};