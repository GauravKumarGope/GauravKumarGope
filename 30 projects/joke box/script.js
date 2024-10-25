const jokesBox= document.querySelector('.jokes');

form.addEventListener('submit',async (e) =>{
    e.preventDefault();
    console.log("in function")
    const joke= await axios.get(`https://v2.jokeapi.dev/joke/Any?format=txt`);
    jokesBox.innerHTML=joke.data;
    console.log(joke.data);

})