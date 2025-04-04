import { useEffect, useState } from 'react';

const AmiiboList = () => {
  interface Amiibo {
    tail: string;
    name: string;
    character: string;
    image: string;
  }

  const [amiibos, setAmiibos] = useState<Amiibo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Requisição à API ao montar o componente
    fetch('https://www.amiiboapi.com/api/amiibo/')
      .then((response) => response.json())
      .then((data) => {
        setAmiibos(data.amiibo); // Salva os dados recebidos
        setLoading(false);       // Finaliza o carregamento
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
        setLoading(false);
      });
  }, []); // Executa apenas uma vez quando o componente é montado

  return (
    <div>
      <h2>Lista de Amiibos</h2>
      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        <ul>
          {amiibos.slice(0, 20).map((item) => (
            <li key={item.tail}>
              <img src={item.image} alt={item.name} width="60" />
              <strong> {item.name}</strong> ({item.character})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AmiiboList;
