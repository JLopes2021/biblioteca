import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import books from './BooksData'; // Importe a constante books

const totalPages = books.reduce((total, book) => total + book.pageCount, 0);
const totalAvailableBooks = books.filter(book => book.id).length;

const Tab2: React.FC = () => {
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
        
      </div>

      </IonContent>
            </IonPage>
  );
};

export default Tab2;
