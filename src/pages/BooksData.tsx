
const books = [
    { 
      id: '1', 
      title: 'Pride and Prejudice', 
      author: 'Jane Austen', 
      imagem: 'https://covers.openlibrary.org/b/id/5142616-L.jpg',
      description: 'Pride and Prejudice is a novel by Jane Austen, first published in 1813. The story follows the main character, Elizabeth Bennet, as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of early 19th-century England. Elizabeth is the second of five daughters of a country gentleman, Mr. Bennet, living in Longbourn.',
      genre: 'Classic Literature',
      publicationYear: '1813',
      language: 'English',
      pageCount: 432
    },
    { 
      id: '2', 
      title: 'Moby Dick', 
      author: 'Herman Melville', 
      imagem: 'https://covers.openlibrary.org/b/id/7954280-L.jpg',
      description: 'Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael\'s narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on a giant white sperm whale, Moby Dick, which on a previous voyage destroyed his ship and severed his leg at the knee.',
      genre: 'Adventure',
      publicationYear: '1851',
      language: 'English',
      pageCount: 624
    },
    { 
      id: '3', 
      title: 'The Adventures of Sherlock Holmes', 
      author: 'Arthur Conan Doyle', 
      imagem: 'https://covers.openlibrary.org/b/id/7793509-L.jpg',
      description: 'The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle, first published on 14 October 1892. It contains the earliest short stories featuring the consulting detective Sherlock Holmes, which had been published in twelve monthly issues of The Strand Magazine from July 1891 to June 1892.',
      genre: 'Mystery',
      publicationYear: '1892',
      language: 'English',
      pageCount: 339
    },
    { 
      id: '4', 
      title: 'Jane Eyre', 
      author: 'Charlotte Brontë', 
      imagem: 'https://covers.openlibrary.org/b/id/7866048-L.jpg',
      description: 'Jane Eyre is a novel by English writer Charlotte Brontë, published under the pen name "Currer Bell", on 16 October 1847, by Smith, Elder & Co. of London. The first American edition was published the following year by Harper & Brothers of New York. Jane Eyre is a Bildungsroman which follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall.',
      genre: 'Gothic Fiction',
      publicationYear: '1847',
      language: 'English',
      pageCount: 610
    },
    { 
      id: '5', 
      title: 'The Picture of Dorian Gray', 
      author: 'Oscar Wilde', 
      imagem: 'https://covers.openlibrary.org/b/id/7952251-L.jpg',
      description: 'The Picture of Dorian Gray is a Gothic and philosophical novel by Oscar Wilde, first published complete in the July 1890 issue of Lippincott\'s Monthly Magazine. Fearing the story was indecent, the magazine\'s editor deleted roughly five hundred words before publication without Wilde\'s knowledge. Despite that censorship, The Picture of Dorian Gray offended the moral sensibilities of British book reviewers, some of whom said that Oscar Wilde merited prosecution for violating the laws guarding the public morality. In response, Wilde aggressively defended his novel and art in correspondence with the British press.',
      genre: 'Gothic Fiction',
      publicationYear: '1890',
      language: 'English',
      pageCount: 254
    },
    { 
      id: '6', 
      title: 'Frankenstein', 
      author: 'Mary Shelley', 
      imagem: 'https://covers.openlibrary.org/b/id/7973086-L.jpg',
      description: 'Frankenstein; or, The Modern Prometheus is a novel written by English author Mary Shelley (1797–1851) that tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment. Shelley started writing the story when she was 18, and the first edition was published anonymously in London on January 1, 1818. Her name first appeared in the second edition, published in France in 1823.',
      genre: 'Gothic Fiction',
      publicationYear: '1818',
      language: 'English',
      pageCount: 280
    },
    { 
      id: '7', 
      title: 'Dracula', 
      author: 'Bram Stoker', 
      imagem: 'https://covers.openlibrary.org/b/id/7961534-L.jpg',
      description: 'Dracula is an 1897 Gothic horror novel by Irish author Bram Stoker. It introduced the character of Count Dracula and established many conventions of subsequent vampire fantasy. The novel tells the story of Dracula\'s attempt to move from Transylvania to England so that he may find new blood and spread the undead curse, and of the battle between Dracula and a small group of people led by Professor Abraham Van Helsing.',
      genre: 'Gothic Fiction',
      publicationYear: '1897',
      language: 'English',
      pageCount: 418
    },
    { 
      id: '8', 
      title: 'Great Expectations', 
      author: 'Charles Dickens', 
      imagem: 'https://covers.openlibrary.org/b/id/7966940-L.jpg',
      description: 'Great Expectations is the thirteenth novel by Charles Dickens and his penultimate completed novel, which depicts the education of an orphan nicknamed Pip (the book is a bildungsroman, a coming-of-age story). It is Dickens\'s second novel, after David Copperfield, to be fully narrated in the first person. The novel was first published as a serial in Dickens\'s weekly periodical All the Year Round, from 1 December 1860 to August 1861. In October 1861, Chapman and Hall published the novel in three volumes.',
      genre: 'Classic Literature',
      publicationYear: '1861',
      language: 'English',
      pageCount: 505
    },
    { 
      id: '9', 
      title: 'Little Women', 
      author: 'Louisa May Alcott', 
      imagem: 'https://covers.openlibrary.org/b/id/8161250-L.jpg',
      description: 'Little Women is a novel by American author Louisa May Alcott (1832–1888), which was originally published in two volumes in 1868 and 1869. Alcott wrote the books over several months at the request of her publisher. Following the lives of the four March sisters—Meg, Jo, Beth and Amy—the novel details their passage from childhood to womanhood and is loosely based on the author and her three sisters.',
      genre: 'Coming-of-Age Fiction',
      publicationYear: '1868',
      language: 'English',
      pageCount: 449
    },
    { 
      id: '10', 
      title: 'War and Peace', 
      author: 'Leo Tolstoy', 
      imagem: 'https://covers.openlibrary.org/b/id/7884945-L.jpg',
      description: 'War and Peace is a novel by the Russian author Leo Tolstoy, published serially, then in its entirety in 1869. It is regarded as one of Tolstoy\'s finest works and as one of the greatest novels ever written. War and Peace is complete in four books. The story moves between Russia, France, and Austria and follows the life of five aristocratic families over a time period of fifteen years, from 1805 to 1820.',
      genre: 'Historical Fiction',
      publicationYear: '1869',
      language: 'Russian',
      pageCount: 1225
    },
  
    { 
      id: '11', 
      title: 'The Catcher in the Rye', 
      author: 'J.D. Salinger', 
      imagem: 'https://covers.openlibrary.org/b/id/7890527-L.jpg',
      description: 'The Catcher in the Rye is a novel by J.D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world\'s major languages. Around 1 million copies are sold each year, with total sales of more than 65 million books. The novel\'s protagonist and antihero, Holden Caulfield, has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.',
      genre: 'Coming-of-Age Fiction',
      publicationYear: '1951',
      language: 'English',
      pageCount: 277
    },
    { 
      id: '12', 
      title: 'One Hundred Years of Solitude', 
      author: 'Gabriel García Márquez', 
      imagem: 'https://covers.openlibrary.org/b/id/8160071-L.jpg',
      description: 'One Hundred Years of Solitude is a landmark 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founds the town of Macondo, a fictitious town in the country of Colombia. The magical realist style and thematic substance of One Hundred Years of Solitude established it as an important representative novel of the literary Latin American Boom of the 1960s and 1970s, which was stylistically influenced by Modernism (European and North American) and the Cuban Vanguardia (Avant-Garde) literary movement.',
      genre: 'Magical Realism',
      publicationYear: '1967',
      language: 'Spanish',
      pageCount: 448
    },
    { 
      id: '13', 
      title: '1984', 
      author: 'George Orwell', 
      imagem: 'https://covers.openlibrary.org/b/id/7222243-L.jpg',
      description: '1984 is a dystopian social science fiction novel and cautionary tale written by the English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell\'s ninth and final book completed in his lifetime. Thematically, 1984 centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society. Orwell, himself a democratic socialist, modelled the totalitarian government in the novel after Stalinist Russia and Nazi Germany.',
      genre: 'Dystopian Fiction',
      publicationYear: '1949',
      language: 'English',
      pageCount: 328
    },
    { 
      id: '14', 
      title: 'To Kill a Mockingbird', 
      author: 'Harper Lee', 
      imagem: 'https://covers.openlibrary.org/b/id/7984913-L.jpg',
      description: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize. The plot and characters are loosely based on Lee\'s observations of her family, her neighbours and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was 10 years old.',
      genre: 'Legal Drama',
      publicationYear: '1960',
      language: 'English',
      pageCount: 324
    },
    { 
      id: '15', 
      title: 'The Odyssey', 
      author: 'Homer', 
      imagem: 'https://covers.openlibrary.org/b/id/8043984-L.jpg',
      description: 'The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is, in part, a sequel to the Iliad, the other Homeric epic. The Odyssey is a fundamental work in the modern Western canon, being the oldest extant piece of Western literature, and has been translated into numerous languages.',
      genre: 'Epic Poetry',
      publicationYear: '8th century BC',
      language: 'Ancient Greek',
      pageCount: 384
    },
    { 
      id: '16', 
      title: 'Crime and Punishment', 
      author: 'Fyodor Dostoevsky', 
      imagem: 'https://covers.openlibrary.org/b/id/7957177-L.jpg',
      description: 'Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. It is the second of Dostoevsky\'s full-length novels following his return from ten years of exile in Siberia. Crime and Punishment is considered the first great novel of his "mature" period of writing.',
      genre: 'Psychological Fiction',
      publicationYear: '1866',
      language: 'Russian',
      pageCount: 671
    },
    { 
      id: '17', 
      title: 'Brave New World', 
      author: 'Aldous Huxley', 
      imagem: 'https://covers.openlibrary.org/b/id/7998680-L.jpg',
      description: 'Brave New World is a dystopian social science fiction novel by English author Aldous Huxley, written in 1931 and published in 1932. Largely set in a futuristic World State, inhabited by genetically modified citizens and an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning, that are combined to make a dystopian society which is challenged by only a single individual: the story\'s protagonist.',
      genre: 'Dystopian Fiction',
      publicationYear: '1932',
      language: 'English',
      pageCount: 268
    },
    { 
      id: '18', 
      title: 'The Iliad', 
      author: 'Homer', 
      imagem: 'https://covers.openlibrary.org/b/id/7988222-L.jpg',
      description: 'The Iliad is an ancient Greek epic poem traditionally attributed to Homer. Set during the Trojan War, the ten-year siege of the city of Troy (Ilium) by a coalition of Greek states, it tells of the battles and events during the weeks of a quarrel between King Agamemnon and the warrior Achilles.',
      genre: 'Epic Poetry',
      publicationYear: '8th century BC',
      language: 'Ancient Greek',
      pageCount: 683
    },
    { 
      id: '19', 
      title: 'The Grapes of Wrath', 
      author: 'John Steinbeck', 
      imagem: 'https://covers.openlibrary.org/b/id/7897324-L.jpg',
      description: 'The Grapes of Wrath is an American realist novel written by John Steinbeck and published in 1939. The book won the National Book Award and Pulitzer Prize for Fiction, and it was cited prominently when Steinbeck was awarded the Nobel Prize in 1962.',
      genre: 'Social Commentary',
      publicationYear: '1939',
      language: 'English',
      pageCount: 464
    },
    { 
      id: '20', 
      title: 'The Divine Comedy', 
      author: 'Dante Alighieri', 
      imagem: 'https://covers.openlibrary.org/b/id/7900736-L.jpg',
      description: 'The Divine Comedy is a long Italian narrative poem by Dante Alighieri, begun c. 1308 and completed in 1320, a year before his death in 1321. It is widely considered to be one of the greatest works of world literature. The poem\'s imaginative vision of the afterlife is representative of the medieval world-view as it had developed in the Western Church by the 14th century. It helped establish the Tuscan dialect in which it is written as the Italian standard. It is divided into three parts: Inferno, Purgatorio, and Paradiso.',
      genre: 'Epic Poetry',
      publicationYear: '1320',
      language: 'Italian',
      pageCount: 798
    },
    { 
      id: '21', 
      title: 'Dom Casmurro', 
      author: 'Machado de Assis', 
      imagem: 'https://covers.openlibrary.org/b/id/7894091-L.jpg',
      description: 'Dom Casmurro is a novel written by Brazilian author Machado de Assis. It was first published in 1899. The novel is written in the first person and tells the story of Bento Santiago, an introspective scholar in Rio de Janeiro. He narrates the story of his youth, his family and especially his mysterious love, Capitu. The title character\'s name is a reference to an orthographic mistake, and is properly called "Dom Castramurro" (Bumblebee Monk).',
      genre: 'Realism',
      publicationYear: '1899',
      language: 'Portuguese',
      pageCount: 176
    },
    { 
      id: '22', 
      title: 'Memórias Póstumas de Brás Cubas', 
      author: 'Machado de Assis', 
      imagem: 'https://covers.openlibrary.org/b/id/7898009-L.jpg',
      description: 'The Posthumous Memoirs of Bras Cubas is a novel by Machado de Assis, first published in 1881. It is also known in English as Epitaph of a Small Winner. The novel is written in a dead serious tone and is a sharp lampoon on the social mores of the time, but is also a mordant satire on the literary style popular in Brazil of the time, the so-called "Indianist" school.',
      genre: 'Satire',
      publicationYear: '1881',
      language: 'Portuguese',
      pageCount: 160
    },
    { 
      id: '23', 
      title: 'Iracema', 
      author: 'José de Alencar', 
      imagem: 'https://covers.openlibrary.org/b/id/7913062-L.jpg',
      description: 'Iracema is one of the three indigenous novels by José de Alencar. It was first published in 1865. The novel has been described as one of the most important works of Brazilian Romanticism and one of the works of Brazilian literature most commented by literary critics.',
      genre: 'Romanticism',
      publicationYear: '1865',
      language: 'Portuguese',
      pageCount: 258
    },
    { 
      id: '24', 
      title: 'O Guarani', 
      author: 'José de Alencar', 
      imagem: 'https://covers.openlibrary.org/b/id/7983786-L.jpg',
      description: 'O Guarani is a novel written by Brazilian author José de Alencar. It was first published in 1857. The novel has been adapted into two operas by Carlos Gomes, and is considered one of the most important books of Brazilian literature.',
      genre: 'Romanticism',
      publicationYear: '1857',
      language: 'Portuguese',
      pageCount: 295
    },
    { 
      id: '25', 
      title: 'Senhora', 
      author: 'José de Alencar', 
      imagem: 'https://covers.openlibrary.org/b/id/7973116-L.jpg',
      description: 'Senhora is a novel written by Brazilian author José de Alencar. It was first published in 1875. The novel has been adapted into a telenovela and a movie. It is one of the most important books of Brazilian literature.',
      genre: 'Romanticism',
      publicationYear: '1875',
      language: 'Portuguese',
      pageCount: 280
    },
    { 
      id: '26', 
      title: 'O Primo Basílio', 
      author: 'José Maria de Eça de Queirós', 
      imagem: 'https://covers.openlibrary.org/b/id/7946750-L.jpg',
      description: 'O Primo Basílio is one of the most famous novels written by the Portuguese author José Maria de Eça de Queirós. The novel denounces the hypocrisy of the bourgeoisie of the time. The novel was made into several films. It is one of the most important books of Portuguese literature.',
      genre: 'Realism',
      publicationYear: '1878',
      language: 'Portuguese',
      pageCount: 327
    },
    { 
      id: '27', 
      title: 'O Guarani', 
      author: 'José de Alencar', 
      imagem: 'https://covers.openlibrary.org/b/id/7983786-L.jpg',
      description: 'O Guarani is a novel written by Brazilian author José de Alencar. It was first published in 1857. The novel has been adapted into two operas by Carlos Gomes, and is considered one of the most important books of Brazilian literature.',
      genre: 'Romanticism',
      publicationYear: '1857',
      language: 'Portuguese',
      pageCount: 295
    },
    { 
      id: '28', 
      title: 'Memórias Póstumas de Brás Cubas', 
      author: 'Machado de Assis', 
      imagem: 'https://covers.openlibrary.org/b/id/7898009-L.jpg',
      description: 'The Posthumous Memoirs of Bras Cubas is a novel by Machado de Assis, first published in 1881. It is also known in English as Epitaph of a Small Winner. The novel is written in a dead serious tone and is a sharp lampoon on the social mores of the time, but is also a mordant satire on the literary style popular in Brazil of the time, the so-called "Indianist" school.',
      genre: 'Satire',
      publicationYear: '1881',
      language: 'Portuguese',
      pageCount: 160
    },
    { 
      id: '29', 
      title: 'O Cortiço', 
      author: 'Aluísio Azevedo', 
      imagem: 'https://covers.openlibrary.org/b/id/7995459-L.jpg',
      description: 'O Cortiço is one of the most important works of Brazilian naturalism. The novel was adapted into a movie. It is one of the most important books of Brazilian literature.',
      genre: 'Naturalism',
      publicationYear: '1890',
      language: 'Portuguese',
      pageCount: 392
    },
    { 
      id: '30', 
      title: 'A Moreninha', 
      author: 'Joaquim Manuel de Macedo', 
      imagem: 'https://covers.openlibrary.org/b/id/7983409-L.jpg',
      description: 'A Moreninha is one of the first Brazilian novels. It was first published in 1844. The novel has been adapted into several movies and a telenovela. It is one of the most important books of Brazilian literature.',
      genre: 'Romanticism',
      publicationYear: '1844',
      language: 'Portuguese',
      pageCount: 208
    },

  ];    

  
  
export default books;
