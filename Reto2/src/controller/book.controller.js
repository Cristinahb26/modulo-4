const Book = require('../models/book');

let book = null;

const getBook = (req, res)=>{
   
    let respuesta;

    if (book != null)
      respuesta = book;

    else 
         respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"}

    res.send(respuesta);   

};


const postBook = (req, res) =>{

    let book = new Book(req.body.title, req.body.type, req.body.author, req.body.price, req.body.photo, req.body.id_book, req.body.id_user);
    book.push(book);

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

      //  let respuesta 

      //  if(book != null){

      //     book       = null;

      //     respuesta  = {error: false, codigo: 200, mensaje: 'Libro Borrado', resultado: book};
      //  }
      //  else {
         
      //    respuesta   = {error: true, codigo: 200, mensaje: 'Libro no existe', resultado: book}
      //  }
        
      //  res.send(respuesta);

    book.forEach(element, (book, i) => {
       
        if (req.body.id_book == book.id_book) {
             book.splice(i, 1);
        }
    });
    res.send("Libro eliminado correctamente");
}

module.exports = {getBook, postBook,putBook, deleteBook};
