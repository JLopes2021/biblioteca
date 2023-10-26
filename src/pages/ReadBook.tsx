import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';
import books from './BooksData';

const ReadBook: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  
  // Encontre o livro correspondente com base no ID
  const selectedBook = books.find(book => book.id === id);

  if (!selectedBook) {
    return <div>Livro não encontrado</div>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Leitura do Livro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>{selectedBook.title}</h2>
        <p>Autor: {selectedBook.author}</p>
        <p>Descrição: {selectedBook.description}</p>
        <p>Gênero: {selectedBook.genre}</p>
        <p>Ano de Publicação: {selectedBook.publicationYear}</p>
        <p>Idioma: {selectedBook.language}</p>
        <p>Número de Páginas: {selectedBook.pageCount}</p>
      </IonContent>
    </IonPage>
  );
};

export default ReadBook;
