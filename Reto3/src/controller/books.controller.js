const Book = require('../models/book')

let book = null;

let books = [

  new Book("El Conde de Montecristo", "Tapa Blanda", "Alejandro Dumas", 15.99, "https://covers.alibrate.com/b/59872e92cba2bce50c1b7929/06d27f27-09cf-4135-a431-1d6f54c184e3/share", 301020, 0),
  new Book("El Elemento", "Tapa Blanda", "Ken Robinson", 12.99, "https://tecreolibreria.com/386-medium_default/el-elemento--ken-robinson.jpg", 301021, 0),
  new Book("El Poder de Confiar en Ti", "Tapa Blanda", "Curro Cañete", 16, "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2019/12/03/15753839869322.jpg", 301022, 0),
  new Book("El Ángel de la Ciudad", "Tapa Blanca", "Eva G. Sáenz de Urturi", 13.50, "https://i.blogs.es/5e4c0e/1366_2000-3-/450_1000.jpeg", 301023, 0)

];
const getBooks = (req, res) => {
  res.send(books);
};


const getBook = (req, res) => {
  const id = req.params.id;

  if (id) {
    const libro = books.find(libro => libro.id_book === parseInt(id));
    if (libro) {
      res.send([libro]);
    } else {
      res.status(404).send('Libro no encontrado');
    }
  } else {
    res.send(books);
  }
};

const postBook = (req, res) => {
  if (book === null) {
    books = [];
  }

  let newbook = new Book(req.body.title, req.body.type, req.body.author, req.body.price, req.body.photo, req.body.id_book, req.body.id_user);
  books.push(newbook);

  res.send("Libro añadido correctamente");
};


const putBook = (req, res) =>{

  let id_book = req.body.id_book; // Se asume que el ID del libro se pasa en el cuerpo de la solicitud
  let respuesta = books.findIndex(book => book.id_book === id_book);

  if (respuesta !== -1) {

    let updatedBook = {
      title: req.body.title || books[respuesta].title,
      type: req.body.type || books[respuesta].type,
      author: req.body.author || books[respuesta].author,
      price: req.body.price || books[respuesta].price,
      photo: req.body.photo || books[respuesta].photo,
      id_book: id_book,
      id_user: req.body.id_user || books[respuesta].id_user
    };

    books[respuesta] = updatedBook;
           
       respuesta = "libro actualizado correctamente";
  }
  
    res.send(respuesta);

};

const deleteBook = (req, res) => {
  
  let libroEncontrado = false;

  books.forEach((book, i) => {
    if (req.body.id_book == book.id_book) {
      books.splice(i, 1);
      libroEncontrado = true;
    }
  });

  if (libroEncontrado) {
    res.send("Libro eliminado correctamente");
  } else {
    res.status(404).send({error: true, codigo: 404, mensaje: 'Libro no encontrado'});
  }
        }

module.exports = {getBooks, getBook, postBook,putBook, deleteBook};

  