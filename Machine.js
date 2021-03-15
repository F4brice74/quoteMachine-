const {Grid} = MaterialUI
const {Paper} = MaterialUI
const {Button} = MaterialUI

function Machine() {
  
const [error, setError] = React.useState(null);
const [items, setItems] = React.useState();  
const [num, setNum] = React.useState(0); 
  
React.useEffect(() => {
fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=10", {
      mode: 'cors'
    })
      .then(res => res.json())
      .then(
        (result) => {          
          setItems(result.quotes);
        },
        (error) => {         
          setError(error);
        }
      )
  },[]);
  console.log("items :", items)
  
  function handleClick(){
    setNum(Math.floor(Math.random() * Math.floor(items.length)))
  }
  console.log("num", num)
  
  return (
    items ? <div> 
    <Grid container 
    container
    direction="row"
    justify="center"
    alignItems="center">
      <Grid item container xs={6} id="quote-box" justify="center" alignItems="center">
        <Grid item xs={10} id="card" >    
           <p id="text">"{items[num].text}"</p>
          <div id="author">{items[num].author}</div>           
          <a href='https://twitter.com/intent/tweet' target="_blank" id="tweet-quote">Tweet</a>
           </Grid>
          <Grid item xs={5} justify="center">
          <button id="new-quote" onClick={handleClick}> New quote</button>
          </Grid>
         </Grid>        
      </Grid>
  </div> 
     : <h1>loading</h1>      
  )
}
 
ReactDOM.render(
  <Machine />, document.getElementById("root")

)
