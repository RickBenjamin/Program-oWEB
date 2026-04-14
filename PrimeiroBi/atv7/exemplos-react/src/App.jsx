import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  const post = {
    titulo: "Descobrindo as Praias do Nordeste",
    autor: "Maria Silva",
    data: "15 de agosto de 2025",
    conteudo: `O Nordeste brasileiro guarda alguns dos trechos de litoral mais bonitos 
    do planeta. Areias branquinhas, águas mornas em tons de turquesa e coqueiros 
    balançando ao vento formam um cenário que parece ter saído de um cartão-postal.`
  };

  return (
    <>
      <Header />
      <Navigation />
      <Article
        titulo={post.titulo}
        autor={post.autor}
        data={post.data}
        conteudo={post.conteudo}
      />
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;