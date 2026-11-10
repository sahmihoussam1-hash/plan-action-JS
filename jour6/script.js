const loisirs = ['football', 'salle de sport', 'tennis', 'cyclisme'];


const conteneur = document.getElementById('conteneur-liste');


const maListe = document.createElement('ul');


for (let i = 0; i < loisirs.length; i++) {

    const li = document.createElement('li');
    
   
    li.textContent = loisirs[i];
    
  
    li.classList.add('element-liste');
    
   
    li.style.margin = '5px 0';
    
  
    maListe.append(li);
}


conteneur.append(maListe);