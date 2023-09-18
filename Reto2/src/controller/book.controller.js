const Book = require('../models/book');

let book = null;

const getBook = (req, res)=>{
   
    let respuesta;

    if (book != null)
      respuesta = book;

    else 
         respuesta = {error: true, codigo: 200, mensaje: "No hay libros"}

    res.send(respuesta);   

};


const postBook = (req, res) =>{

    if (book == null) {
        book = [];
    }

    let newbook = new Book(req.body.title, req.body.type, req.body.author, req.body.price, req.body.photo, req.body.id_book, req.body.id_user);
    book.push(newbook);

    res.send("Libro añadido correctamente");
};


const putBook = (req, res) =>{

    let respuesta

     if(book != null) { title = req.body.title, 
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

       let respuesta 

       if(book != null){

        book  = null;

          respuesta  = {error: false, codigo: 200, mensaje: 'Libro Borrado', resultado: book};
       }
       else {
         
         respuesta   = {error: true, codigo: 200, mensaje: 'Libro no existe', resultado: book}
       }
        
       res.send(respuesta);

}

module.exports = {getBook, postBook, putBook, deleteBook};
