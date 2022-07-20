class Header {
   iconMenu = document.querySelector(".icon-menu");
   menuBody = document.querySelector(".header__nav");
   welcome = document.querySelector(".welcome");
   br = 1200;

   onIconMenuClick = () => {
      this.iconMenu.classList.toggle("_active");
      this.menuBody.classList.toggle("_active");
      this.welcome.classList.toggle("_active");
   }
   
   onMenuBodyClick = (event) => {
   
      if (document.documentElement.clientWidth > this.br) return;
   
      const target = event.target.closest('.nav__item>a');
   
      if (!target) return;
   
      this.menuBody.classList.remove("_active");
      this.iconMenu.classList.remove("_active");
      this.welcome.classList.remove("_active");
   }
   
   onResize = () => {
   
      if (!this.menuBody.classList.contains("_active")) return;
   
      if (document.documentElement.clientWidth > this.br) {
   
         this.menuBody.classList.remove("_active");
         this.iconMenu.classList.remove("_active");
         this.welcome.classList.remove("_active");
      }
   }
   
   onClickOutside = (event) => {
   
      const target = event.target.closest('.header');
   
      if (!target) {
         this.menuBody.classList.remove("_active");
         this.iconMenu.classList.remove("_active");
         this.welcome.classList.remove("_active");
      }
   }
   constructor(){
      this.initEventListeners();
   }

   initEventListeners() {
     this.iconMenu.addEventListener("click", this.onIconMenuClick);
     this.menuBody.addEventListener("click", this.onMenuBodyClick)
     window.addEventListener("resize", this.onResize);
     document.addEventListener('click', this.onClickOutside)
   }
}
 
const header = new Header;

