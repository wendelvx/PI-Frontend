class MobileNavbar {
    constructor(mobilemenu, navlist, navLinks) {
        this.mobileMenu = document.querySelector(mobilemenu);
        this.navList = document.querySelector(navlist);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

    
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass); 
    }

    addClickEvent() {
       
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent(); 
        }
        return this;
    }
}


const mobileNavbar = new MobileNavbar(
    ".mobilemenu", 
    ".navlist",    
    ".navlist li"  
);
mobileNavbar.init();
