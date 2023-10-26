import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import books from './BooksData'; // Importe a constante books
import './Tab1.css';

const Tab1: React.FC = () => {
  const history = useHistory();


  const goToReadBook = (bookId: string) => {
    history.push(`/ler-livro/${bookId}`);
  }

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biblioteca</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar placeholder="Pesquisar livros"></IonSearchbar>
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <ul>
                {books.map(book => (
                  <li key={book.id} onClick={() => goToReadBook(book.id)} className="book">
                    <div>
                      <div className="thumbnail-container">
                        <img src={book.imagem} alt={book.title} />
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
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
