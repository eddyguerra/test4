const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const header = document.querySelector('header ul');
    

    burger.addEventListener('click', () =>{
        header.classList.toggle('nav-active');
        burger.classList.toggle('menu');
        burger.classList.toggle('list');
      
        
    
        });

   

    

}

navSlide();