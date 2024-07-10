export  const  getStories = async (params) => {

    const url = `https://gateway.marvel.com/v1/public/${params}?limit=100&apikey=29e170bbab53f5393b36519ae7ba4ae4&hash=00dac7b96043a74bdf0d2e78cd9d94da&ts=1`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const {results} = data;
    const stories = results.map(story => {
      return {
        id: story.id,
        title: story.title,
        comics : story.comics.items.map(item =>  item.name),
        creators : story.creators.items.map(creator => creator.name),
      }
    })
    
    return stories;
    
  }