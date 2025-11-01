const boutoAjouter = document.getElementById("boutoAjouter")
const list = document.getElementById("list")
const inputNom = document.getElementById("inputNom")
boutoAjouter.addEventListener("click", function ajouterNom(){
     let valeurInput=inputNom.value
     let nouvelList=document.createElement('li')
     nouvelList.textContent=` ${valeurInput}`
     list.appendChild(nouvelList)})

     const choiNom=getElementById(choiNom)
     choiNom.addEventListener("click" ,function choiseNom(){
          let lengthList=list.children.length
     randomList=Math.floor(Math.random()*lengthList)
     const selectedItem =randomList[]

     alert(`le nom select ${randomList}`)

     })
     console.log(randomList)
     


