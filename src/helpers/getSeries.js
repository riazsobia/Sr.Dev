export  const  getSeries = async (params) => {

    const url = `https://gateway.marvel.com/v1/public/${params}?limit=100&apikey=29e170bbab53f5393b36519ae7ba4ae4&hash=00dac7b96043a74bdf0d2e78cd9d94da&ts=1`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const {results} = data;
    const series = results.map(serie => {
      return {
        id: serie.id,
        title: serie.title,
        thumbnail : serie.thumbnail.path + '.' + serie.thumbnail.extension,
        creators : serie.creators.items.map(creator => creator.name),
        type : serie.type,
      }
    })
    return series;
    
  }