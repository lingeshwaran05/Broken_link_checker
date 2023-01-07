<script>
import pro from './assets/Work_7.jpg'
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
        <h1>ABOUT US</h1>
        <h2>Solo programmer</h2>
        <h3>This project is Developed by <span id="underline">lingesh.</span></h3>
        <h3>Project idea credit goes to Winter intern <span id="underline"> IEEE Bombay Branch.</span></h3>
        <h3>Find me on <a href="https://twitter.com/Lingeshtwt">twitter</a></h3>
        <h3><a href="https://github.com/lingeshwaran05">Github </a></h3>

   </div>
        <div id="image">
            <img src={pro} id="ima" alt="">
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
    h1{
        font-size: 40px;
        font-weight: bolder;
        text-align: center;
        color:rgb(154, 96, 224) ;
        text-shadow: 0 1px black;
    }
    h2{
        font-size: 40px;
        font-weight: bolder;
        text-align: center;
        color: rgb(207, 159, 225);
        text-shadow: 0 1px black;
    }
    h3{
        font-size: 40px;
        font-weight: bolder;
        text-align: center;
        text-shadow: 0 1px black;
    }
    #underline{
        text-decoration: underline;
    }
</style>