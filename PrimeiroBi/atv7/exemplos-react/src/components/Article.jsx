function Article({ titulo, data, conteudo }) {
  return (
    <main>
      <article>
        <h2>{titulo}</h2>
        <time>{data}</time>
        <p>{conteudo}</p>
      </article>
    </main>
  );
}

export default Article;