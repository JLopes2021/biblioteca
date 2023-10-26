// Tab2.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Tab2.css';
import books from './BooksData'; // Importe a constante books

const totalPages = books.reduce((total, book) => total + book.pageCount, 0);
const totalAvailableBooks = books.filter(book => book.id).length;

const availableGenres = Array.from(new Set(books.map(book => book.genre)));

const Tab2: React.FC = () => {
  const history = useHistory();

  const getBooksByGenre = (genre: string) => {
    return books.filter(book => book.genre === genre && book.id);
  }

  const goToReadBook = (bookId: string) => {
    history.push(`/ler-livro/${bookId}`);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Estatísticas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="tela2">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 2</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div>
            <h1>Total de Páginas dos Livros:</h1>
            <p>{totalPages} páginas</p>
          </div>
          <div>
            <h1>Total de Livros Disponíveis:</h1>
            <p>{totalAvailableBooks} livros</p>
          </div>
          {availableGenres.map(genre => (
            <div key={genre}>
              <h1>Livros de {genre}:</h1>
              <ul>
                {getBooksByGenre(genre).map(book => (
                  <li key={book.id} onClick={() => goToReadBook(book.id)} className="book">{book.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
