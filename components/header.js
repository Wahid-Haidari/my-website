class Header extends HTMLElement {
	constructor(){
		super();
	}


  connectedCallback(){
  	this.innerHTML = `
  	
      <style>
      body{
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      font-family: Arial;
      }

      .zone{
      cursor:pointer;
        border-radius:4px;
        transition: all 0.3s linear;
      }

      .main-nav {
        display: flex;
        list-style: none;
        margin: 0;
        font-size: 1.3em;
        background-color: #2c7ee8;
      }

      .push {
        margin-left: auto;
      }

      li {
        padding: 20px;
      }

      a {
        color: white;
        text-decoration: none;
      }

      .sticky{
      position: fixed;
      height: 10px;
      width: 100%;
      }

      .main-nav:hover{
      -webkit-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
          -moz-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
          -o-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
        box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
      }

      a:hover{
      color: #929fb3;
      }

    </style>
    <header>
      <nav class="zone sticky">
        <ul class="main-nav">
          <li><a href="index.html"> HOME</a></li>
          <li><a href="about.html"> ABOUT</a></li>
          <li><a href="projects.html"> PROJECTS</a></li>
          <li class="push"><a href="contact.html">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  	`;
  }
}

customElements.define('header-component' , Header);