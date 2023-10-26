import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';
import books from './BooksData';

const ReadBook: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  let { author } = useParams<{ author: string }>();
  
  // Agora 'id' contém o ID do livro que foi passado na URL

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Leitura do Livro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Você está lendo o livro com o ID: {id}</p>
        <p>Você está lendo o livro com o Autor: {author}</p>

        <ul>
        </ul>
           
      </IonContent>
    </IonPage>
  );
};

export default ReadBook;
