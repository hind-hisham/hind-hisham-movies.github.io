let cards=document.querySelectorAll('.movie-card');
let c=document.querySelector('.close');
cards.forEach(function(e){
  e.children[0].classList.add('img-cover');
}); 

cards.forEach(function(e){
  e.addEventListener("mouseenter",function(e){
  cards.forEach(function(e){
    e.classList.remove('card-hover')
  })  
  this.classList.add('card-hover')
  });
  
});

cards.forEach(function(e){
    e.addEventListener('click',function(){
      c.classList.add('show-c')
      cards.forEach(function(e){
        e.classList.remove('shrenk');
        e.children[4].classList.remove('show');
        e.children[0].classList.remove('img-hover');
      })
    
     this.classList.toggle('shrenk');
     this.children[4].classList.toggle('show');
     this.children[0].classList.toggle('img-hover');
   
    });
    
});
c.addEventListener('click',function(e){
  cards.forEach(function(e){
    e.classList.remove('shrenk');
    e.children[4].classList.remove('show');
    e.children[0].classList.remove('img-hover');
  })
  c.classList.remove('show-c')
})