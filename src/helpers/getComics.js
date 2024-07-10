export  const  getComics = async (params) => {

    const url = `https://gateway.marvel.com/v1/public/${params}?limit=100&apikey=29e170bbab53f5393b36519ae7ba4ae4&hash=00dac7b96043a74bdf0d2e78cd9d94da&ts=1`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const {results} = data;
    const comics = results.map(comic => {
      return {
        id: comic.id,
        title: comic.title,
        thumbnail : comic.thumbnail.path + '.' + comic.thumbnail.extension,
        creators : comic.creators.items.map(creator => creator.name),
        text : comic.textObjects.map(text => text.text),
      }
    })
    return comics;
    
  }