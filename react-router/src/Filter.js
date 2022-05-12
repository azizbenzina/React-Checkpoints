import { useEffect} from "react";   

function Filter({list,SeFiltredList}) {
    const filtredTitle=()=> {
        const newlist=list.sort((a, b) => a.title.localeCompare(b.title));
        SeFiltredList(newlist);
        
    }
    const filtredRating=()=> {
        const newlist=list.sort((b, a) => a.rating -b.rating);
        SeFiltredList(newlist);
        
    }
    useEffect(()=>{

    },[list])
   
    return (
      <div className="Filter">
       <button onClick={()=>filtredTitle()}>Title</button>
       <button onClick={()=>filtredRating()}>Rating</button>

      </div>
    );
  }
  
  export default Filter;