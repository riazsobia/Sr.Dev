export  const  getCharacters = async (params) => {

    const url = `https://gateway.marvel.com/v1/public/${params}?limit=100&apikey=29e170bbab53f5393b36519ae7ba4ae4&hash=00dac7b96043a74bdf0d2e78cd9d94da&ts=1`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const {results} = data;
    const characters = results.map(character => {
      return {
        id: character.id,
        title: character.name,
        thumbnail : character.thumbnail.path + '.' + character.thumbnail.extension,
        comics : character.comics.items.map(comic => comic.name),
      }
    })
    return characters;
    
  }