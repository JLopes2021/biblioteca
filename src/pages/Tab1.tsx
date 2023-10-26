import React, { useState } from 'react';
import { IonContent, IonFooter,IonBadge, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButtons, IonMenuButton, IonButton, IonIcon } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import books from './BooksData'; // Importe a constante books
import './App.css';
import { search, person } from 'ionicons/icons'; // Importando os ícones
import DataTime from '../components/DataTime';

const Tab1: React.FC = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));

  const goToReadBook = (bookId: string) => {
    history.push(`/ler-livro/${bookId}`);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="terciary">
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Biblioteca</IonTitle>
          <IonButtons slot="end">
            <div className="search-container">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar livros..."
              />
            </div>
            <IonButton routerLink="/profile">
              <IonIcon slot="icon-only" icon={person}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="content">
          <IonGrid>
            <IonRow>
              <IonCol size="12">

                <ul>
                  {sortedBooks
                    .filter(book =>
                      book.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(book => (
                      <li key={book.id} onClick={() => goToReadBook(book.id)} className="book">
                        <div>
                          <div className="thumbnail-container">
                            <img src={book.image} alt={book.title} />
                          </div>
                          <div className="title">{book.title}</div>
                          <div className="author">{book.author}</div>
                          <IonBadge slot="start">{book.id}</IonBadge>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <IonFooter>
        <IonToolbar>
          <div>
            <h1>Footer</h1>
          </div>
        </IonToolbar>
      </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;


