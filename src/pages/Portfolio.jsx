import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Meus Projetos</h2>
      <div className="projects-list">
        {projetos.map((projeto, index) => (
          <div key={index} className="project-item">
            <img src={projeto.image} alt={projeto.name} />
            <h3>{projeto.name}</h3>
            <p>{projeto.description}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

  const projetos = [
    {
      name: "Pokedex",
    description: "É uma enciclopédia virtual que contém todas as espécies de Pokémon",
    image: "https://media.discordapp.net/attachments/748745210799849502/1312080597732294666/pokedex2.png?ex=674b31c7&is=6749e047&hm=27702a9beaabb6671abea2b8f82beb8cb1869a0d8d3e71c1c916cdcb0acad9c3&=&format=webp&quality=lossless&width=550&height=268",
    link: "https://github.com/AlexandreLeonez/pokedex.alexandre",
    },
    {
      name: "ToDo list",
    description: "É uma ferramenta simples e eficaz para organizar tarefas",
    image: "https://media.discordapp.net/attachments/748745210799849502/1312080459710075010/to_do_list2.png?ex=674b31a6&is=6749e026&hm=2069dd7a8ee4a851b5980d3cfd403296bbbeaa37b2155e647962cad0640017d4&=&format=webp&quality=lossless&width=430&height=350",
    link: "https://github.com/AlexandreLeonez/lista-de-tarefas-react",
    },
    {
      name: 'Atletas do Brasil',
      description: 'Um site para pesquisa de nomes de atletas brasileiros',
      image: 'https://media.discordapp.net/attachments/748745210799849502/1312080195858993293/Captura_de_tela_2024-11-29_1221192.png?ex=674b3167&is=6749dfe7&hm=72c902f6a9598f204afbbadb351c51f888bfa88771f5c87b6d3ce3cf9aaede56&=&format=webp&quality=lossless',
      link: 'https://github.com/AlexandreLeonez/Atividade-Front',
    },
  ];

  
export default Portfolio;