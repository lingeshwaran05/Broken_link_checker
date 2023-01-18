<script>
import bg from './assets/7741849_3747371.jpg'
import logo from './assets/ll.png'
import About from './About.svelte';
import Contact from './Contact.svelte';
import Aboutus from './Aboutus.svelte';
import Docs from './Docs.svelte';
//import { im } from './output';

let siteURL="Enter URL to check ";

</script>

<main>
 <nav> <ul>  
    <li><a href="#aboutus">About Us</a></li>
    <li><a href="#contact">Contact Us</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#docs">Docs</a></li>
    <li id="home"><a href="#MAIN"><img src={logo} width="20" alt=""> Link Checker</a></li>
  </ul>
</nav>
<section id="MAIN" >
<p id="p">404 IS <span id="bad"><u>BAD</u> </span>FOR BUSINESS 😓 .</p>
<div id="bg">
  <img src={bg} alt="" class="center">
</div>
<div class="url">
  <input type="text" class="center" bind:value={siteURL}>
</div>
<br>
<p class="center" id="display">Website URL : 👉  {siteURL} </p>
<br>
<br>
<p></p>
<button>Submit</button>

</section>
<p>output</p>
<br>
<br>
<br>
<section id="about">
  <About/>
</section>
<br>
<br>
<br>

<section id="docs">
  <Docs/>
</section>
<br>
<br>
<br>

<section id="aboutus">
  <Aboutus/>
</section>
<br>
<br>
<br>

<section id="contact">
  <Contact/>
 </section>
 <br>
 <br>
 <br>
<footer>
  <p class="cp-text">
    © Copyright 2023 linkchecker. All rights reserved.
  </p>
</footer>
</main>

<style>
#bad{
  color: red;
}
#display{
text-shadow: #111;
font-size: large;
font-weight: bolder;
}
footer{
  background-color: #111;
  color: aliceblue;
   text-align: center;
  padding: 2px 3px;
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
}
button{  
display: block;
margin: 0 auto;
color: rgb(255, 255, 255);
border-color:blue ;
background-color: #111;
font-size: 20px;
transition: all 2s ease-out;
}  
button:hover{
  position: relative;
  top: -3px;
  box-shadow: -6px 14px 12px 2px rgba(90, 90, 90, .12);
}
input{
  color: gray;
  font-size: 20px;
  background-color: rgb(251, 245, 236);
  border-radius: 5px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
#p{
 text-align: center;
 font-size: 40px;
}
#home{
  float: left ;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  font-size: large;
}

li {
  float: right;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
button{
  border: 0;
  border-radius: 10px;
  padding: 10px 15px;
}
</style>
