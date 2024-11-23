const adviceId = document.getElementById("span")
const generate = document.getElementById("generate")
const btn = document.getElementById("dice")
const url = "https://api.adviceslip.com/advice"

async function getAdvice() {
  const res = await fetch(url);
  const {slip : {id,advice } } = await res.json()

  adviceId.innerText = id;
  generate.innerText = `"${advice}"`
  
}
getAdvice()

fetch(url).then(result => {
console.log(result)
let myData = result.json()
console.log(myData)
return myData
}).then((myData => {
  console.log(myData.advice)
}))