<script>
import con from './assets/10780041_19197471.jpg'  
import ph from './assets/phone-call.png'  
import em from './assets/email.png'
import loc from './assets/placeholder.png'
</script>

<main>
    <div id="container">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        
    <div id="text">
        <h1>QUESTIONS❓</h1>
        <h2>CONTACT<br>US</h2>
        <h4><img src={ph} id="phh" alt="">  Phone : +910123456789</h4>
        <h4><img src={em} id="phh" alt="">  Email: Example@gmail.com</h4>
        <h4><img src={loc} id="phh" alt=""> Location: Chennai,India.</h4>
   </div>
        <div id="image">
            <img src={con} id="ima" alt="">
        </div>
    </div>
</main>

<style>
 #container{
        box-shadow: 1px 25px 50px 1px black;
        border-radius: 50px;
        padding: 10px 50px 150px 10px;
        display: flex;
        align-items: center; 
        justify-content: center;
        margin: auto;
    }
    #ima{
        float: right;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 650px;
        border-radius: 70px;
    }
    #phh{
        width: 25px;
        height: 25px;
    }
    h1{
        font-size: 50px;
        font-weight: bolder;
        text-align: center;
        line-height: 150px;
        color:rgb(156, 96, 224) ;
        text-shadow: 0 1px black;
    }
    h2{
        font-size: 40px ;
        color: rgb(255, 200, 0);
        text-shadow: 1px 1px black;
    }
    h4{
        color: rgb(0,149,255);
        text-shadow: 0 0.5px black;
    }
</style>