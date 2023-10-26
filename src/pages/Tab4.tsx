import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 4</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <h1>Sobre o App</h1>
          <p>Bem-vindo ao nosso aplicativo de gerenciamento de biblioteca! Nossa missão é tornar a experiência de gerenciar uma biblioteca mais fácil e eficiente para todos os usuários.</p>

          <h2>Funcionalidades Principais</h2>
          
            <li>Adicionar Livros: Você pode facilmente adicionar novos livros à sua biblioteca com apenas alguns cliques.</li>
            <li>Reservar Livros: Agora você pode reservar livros para garantir que estejam disponíveis quando você precisar deles.</li>
            <li>Busca Avançada: A busca avançada facilita encontrar os livros que você está procurando.</li>
          
          <h2>Equipe</h2>
          <p>Somos uma equipe apaixonada por bibliotecas e tecnologia. Trabalhamos incansavelmente para desenvolver e aprimorar este aplicativo, com o objetivo de tornar a gestão de bibliotecas mais intuitiva e eficaz.</p>
          <ul>
            <li>Jefferson Lopes - Desenvolvedor Full Stack</li>
            {/* Adicione outros membros da equipe, se houver */}
          </ul>

          <h2>Contato</h2>
          <p>Se você tiver alguma dúvida, sugestão ou feedback, não hesite em entrar em contato conosco.</p>
          <ul>
            <li>Email: <a href="mailto:jeffinho.je8@gmail.com">jeffinho.je8@gmail.com</a></li>
            {/* Adicione links para redes sociais, se aplicável */}
          </ul>

          <p>Esperamos que você aproveite o nosso aplicativo!</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
