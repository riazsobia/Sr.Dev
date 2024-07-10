

export const getItemsByName = (name , data) => {

    if(name.length === 0){
        return []
    }

    name = name.toLowerCase();

    return data.filter( data => data.title.toLocaleLowerCase().includes(name));
  }