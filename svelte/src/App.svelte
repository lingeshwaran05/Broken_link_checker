<script>
import bg from './assets/7741849_3747371.jpg'
import logo from './assets/ll.png'
</script>

<main>
 <nav> <ul>  
    <li><a href="about.asp">About Us</a></li>
    <li><a href="contact.asp">Contact Us</a></li>
    <li><a href="news.asp">Docs</a></li>
    <li id="home"><a href="default.asp"><img src={logo} width="20" alt=""> Link Checker</a></li>
  </ul>
</nav>
<p id="p">404 IS <span id="bad"><u>BAD</u> </span>FOR BUSINESS.</p>
<div id="bg">
  <img src={bg} alt="" class="center">
</div>
<div class="url">
  <input type="text" class="center" value="Enter URL to check">
</div>
<button>Submit</button>
</main>

<style>
#bad{
  color: red;
}
input{
  color: gray;
  font-size: 20px;
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
