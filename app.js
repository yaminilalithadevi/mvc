// // const http=require('http');
 
// // const server= http.createServer((req,res)=>{
// // res.writeHead(200);
// // res.end('hello world.and ths is hshxsh')

// // console.log(req.url,req.headers,req.method)

// //  });
// //  server.listen(3000,()=>{
// // console.log('i am running in the port 3000')
// //  })


// // ==============================================================================
// // ===============================================================================

// const http=require('http')
// const fs=require('fs')
// const url=require('url')

// const myserver=http.createServer((req,res)=>{
//     if(req.url === './favicon.ico') return res.end();
//     const log=`${new Date()}; ${req.url}:New Requests \n`

//    // const log=`${Date.now()}; ${req.url}:New Requests \n`
// const myurl=url.parse(req.url,true);

// console.log(myurl)

//     fs.appendFile("log.txt",log,(err,data)=>{

//         switch(myurl.pathname){
//         case "/":
//             res.end("Home Page")
//             break;
//         case "/about":
         
//           const username=myurl.query.myname
//              res.end(`Hello,This is ${username}`)    ;

//              //url= http://localhost:8000/about?myname=yamini
//              //output= Hello,This is yamini

//             break;
//          case "/search" :
//             const search=myurl.query.search_query
//             res.end("Here are the results for"+ search)   ;
// //url= http://localhost:8000/search?search_query=javascript_tic+tac+toe
// //output= Here are the results forjavascript_tic tac toe
//          default :
//          res.end("404 error found")  

//         }
//         // res.end("hello from server")
//     });
// })

// myserver.listen(8000,()=>
//     console.log("this is 8000")
// )