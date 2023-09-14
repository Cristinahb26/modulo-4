const Book = require('../models/book')

let book = null;

let books = [

  new Book("El Conde de Montecristo", "Tapa Blanda", "Alejandro Dumas", 15.99, "https://covers.alibrate.com/b/59872e92cba2bce50c1b7929/06d27f27-09cf-4135-a431-1d6f54c184e3/share", 301020, 0),
  new Book("El Elemento", "Tapa Blanda", "Ken Robinson", 12.99, "https://tecreolibreria.com/386-medium_default/el-elemento--ken-robinson.jpg", 301021, 0),
  new Book("El Poder de Confiar en Ti", "Tapa Blanda", "Curro Cañete", 16, "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2019/12/03/15753839869322.jpg", 301022, 0),
  new Book("El Ángel de la Ciudad", "Tapa Blanca", "Eva G. Sáenz de Urturi", 13.50, "https://i.blogs.es/5e4c0e/1366_2000-3-/450_1000.jpeg", 301023, 0)

];

const getBook = (req, res) => {
  res.send(books);
};


const postBook = (req, res) =>{

  let book = new Book(req.body.title, req.body.type, req.body.author, req.body.price, req.body.photo, req.body.id_book, req.body.id_user);
  books.push(book);

  res.send("Libro añadido correctamente");
};


const putBook = (req, res) =>{

  let respuesta

   if(books != null) { title = req.body.title, 
                      type= req.body.type, 
                      author= req.body.author, 
                      price= req.body.price,
                      photo= req.body.photo, 
                      id_book= req.body.id_book, 
                      id_user= req.body.id_user 
                  
                      respuesta = {error: false, codigo: 200, mensaje: 'Libro Actualizado correctamente', resultado: book};
  }
  else {

      respuesta = {error: true, codigo: 200, mensaje: 'Libro no existe', resultado: book}
  }

    res.send(respuesta);

};

const deleteBook = (req, res) => {

  books.forEach(element, (book, i) => {
     
      if (req.body.id_book == book.id_book) {
           books.splice(i, 1);
      }
  });
  res.send("Libro eliminado correctamente");
}

module.exports = {getBook, postBook,putBook, deleteBook};


  