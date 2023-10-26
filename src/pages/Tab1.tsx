import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import books from './BooksData'; // Importe a constante books
import './Tab1.css';

const Tab1: React.FC = () => {
  const history = useHistory();

  const goToReadBook = (bookId: string) => {
    history.push(`/ler-livro/${bookId}`);
  }
  const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biblioteca</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <div className="content">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <ul>
                {sortedBooks.map(book => (
                  <li key={book.id} onClick={() => goToReadBook(book.id)} className="book">
                    <div>
                      <div className="thumbnail-container">
                        <img src={book.image} alt={book.title} />
                      </div>
                      <div className="title">{book.title}</div>
                      <div className="author">{book.author}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonContent>    </IonPage>
  );
};

export default Tab1;
