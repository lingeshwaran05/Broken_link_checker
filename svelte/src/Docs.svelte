<script>
import doc from './assets/4751965.jpg'
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
            <h1>DOCS</h1>
            <h2>TOOLS AND FRAMEWORK USED</h2>
            <ul><li>Front-end : Svelte</li>
            <li>Back-end : Node JS </li>
            <li>Hosting : </li>
            <li><p><a href="https://github.com/lingeshwaran05/Broken_link_checker">GitHub link</a></p></li>
            </ul>
       </div>
            <div id="image">
                <img src={doc} id="ima" alt="">
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
           
            color:rgb(234, 97, 115) ;
            text-shadow: 0 1px black;
        }
        h2{
        font-size: 40px;
        font-weight: bolder;
        text-align: center;
        color: rgb(198, 166, 209);
        text-shadow: 0 1px black;
    }
    ul{
        font-size:  30px;
        margin: 5em;
    }
    p{
        font-size: 35px;
        text-align: center;
    }
       
    </style>