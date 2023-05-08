
import express from 'express';
import morgan from "morgan";
import fetch from 'node-fetch';
import cors from "cors"
const app = express();    //initializing server

const PORT = 3000;        //if already in use, change it
const HOST = "localhost"; //for hosting on local private network(wifi/hotspot) change to the device's private IPv4 address (try `ipconfig` in cmd on windows to check your PRIVATE IPv4 address or check the IP given to your device on wifi configuration). Remember its PRIVATE NOT PUBLIC

app.use(morgan('dev'));   //logs into the console of this program

// Testing endpoint, do HOST:PORT/funFact(in this case http://localhost:3000/funFact) on browser and this should show up. If not you got some debugging to do
app.get('/funFact', (req, res, next) => {
    res.send(`<preestyle="float:left;">                                                                                                                                                                                                        
                                                                                                                                                                                                    
               AAA                                                                                               iiii                                                                                   
              A:::A                                                                                             i::::i                                                                                  
             A:::::A                                                                                             iiii                                                                                   
            A:::::::A                                                                                                                                                                                   
           A:::::::::A           aaaaaaaaaaaaa  rrrrr   rrrrrrrrr   aaaaaaaaaaaaavvvvvvv           vvvvvvv     iiiiiii     ssssssssss           ggggggggg   ggggg aaaaaaaaaaaaayyyyyyy           yyyyyyy
          A:::::A:::::A          a::::::::::::a r::::rrr:::::::::r  a::::::::::::av:::::v         v:::::v      i:::::i   ss::::::::::s         g:::::::::ggg::::g a::::::::::::ay:::::y         y:::::y 
         A:::::A A:::::A         aaaaaaaaa:::::ar:::::::::::::::::r aaaaaaaaa:::::av:::::v       v:::::v        i::::i ss:::::::::::::s       g:::::::::::::::::g aaaaaaaaa:::::ay:::::y       y:::::y  
        A:::::A   A:::::A                 a::::arr::::::rrrrr::::::r         a::::a v:::::v     v:::::v         i::::i s::::::ssss:::::s     g::::::ggggg::::::gg          a::::a y:::::y     y:::::y   
       A:::::A     A:::::A         aaaaaaa:::::a r:::::r     r:::::r  aaaaaaa:::::a  v:::::v   v:::::v          i::::i  s:::::s  ssssss      g:::::g     g:::::g    aaaaaaa:::::a  y:::::y   y:::::y    
      A:::::AAAAAAAAA:::::A      aa::::::::::::a r:::::r     rrrrrrraa::::::::::::a   v:::::v v:::::v           i::::i    s::::::s           g:::::g     g:::::g  aa::::::::::::a   y:::::y y:::::y     
     A:::::::::::::::::::::A    a::::aaaa::::::a r:::::r           a::::aaaa::::::a    v:::::v:::::v            i::::i       s::::::s        g:::::g     g:::::g a::::aaaa::::::a    y:::::y:::::y      
    A:::::AAAAAAAAAAAAA:::::A  a::::a    a:::::a r:::::r          a::::a    a:::::a     v:::::::::v             i::::i ssssss   s:::::s      g::::::g    g:::::ga::::a    a:::::a     y:::::::::y       
   A:::::A             A:::::A a::::a    a:::::a r:::::r          a::::a    a:::::a      v:::::::v             i::::::is:::::ssss::::::s     g:::::::ggggg:::::ga::::a    a:::::a      y:::::::y        
  A:::::A               A:::::Aa:::::aaaa::::::a r:::::r          a:::::aaaa::::::a       v:::::v              i::::::is::::::::::::::s       g::::::::::::::::ga:::::aaaa::::::a       y:::::y         
 A:::::A                 A:::::Aa::::::::::aa:::ar:::::r           a::::::::::aa:::a       v:::v               i::::::i s:::::::::::ss         gg::::::::::::::g a::::::::::aa:::a     y:::::y          
AAAAAAA                   AAAAAAAaaaaaaaaaa  aaaarrrrrrr            aaaaaaaaaa  aaaa        vvv                iiiiiiii  sssssssssss             gggggggg::::::g  aaaaaaaaaa  aaaa    y:::::y           
                                                                                                                                                         g:::::g                     y:::::y            
                                                                                                                                             gggggg      g:::::g                    y:::::y             
                                                                                                                                             g:::::gg   gg:::::g                   y:::::y              
                                                                                                                                              g::::::ggg:::::::g                  y:::::y               
                                                                                                                                               gg:::::::::::::g                  yyyyyyy                
                                                                                                                                                 ggg::::::ggg                                           
                                                                                                                                                    gggggg                                              </pre>`);
});

/*app.use('', (req, res, next) => {
    if (req.headers.authorization==="{AUTH KEY}") { //add you authorisation key here if you host it online(or on public wifi) so that only you can you use it
        next();                                    //allows request to follow to next path(in this case /fetch)
    } else {                                      //funny pattern
        res.sendStatus(403);                     //block them bc they don't deserve your proxy(May block you too tho. maybe you don't deserve it)
        console.log('forbidden')
    }
});*/

app.get("/fetch",cors({origin:"http://localhost:5173"}) ,async (req, res) => { //idk why but .post doesnt work. If it does for you, do tell me by issuing this line
    const response = await fetch(req.query.url) //send your fetching url as a url query parameter(the ones that come after ?) as /?url=https://forbidden.site/69/420
    res.send(await response.text())// change the .text() if you want, I didn't
})

app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});