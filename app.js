const http = require( 'http' ); //Para configurar server
const fs = require( 'fs' ); //Para manipular archivos
																					//Estos dos argumentos son nesesarios
const server = http.createServer(function( request, response ){
    console.log('client request URL: ', request.url);

	if( request.url === "/cars" ){
		fs.readFile('./views/cars.html', 'utf-8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'} );
				response.write( contents );
				response.end();
		})
	}
    else if(request.url === '/image1') {
        fs.readFile('./images/Cars-2-Wallpaper-Tokio-drift-Walt-Disney-Pixar-animated-film-racing-sport-Owen-Wilson-FILEminimizer', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/image2') {
        fs.readFile('./images/26962_9104011630.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    


    else if(request.url === '/stylesheets/styles.css') {
        fs.readFile('./stylesheets/styles.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }

    else if( request.url === "/cats" ){
		fs.readFile('./views/cats.html', 'utf-8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'} );
				response.write( contents );
				response.end();
		})
	}
/*
    else if( request.url === "/cars/new" ){
		fs.readFile('dojos.html', 'utf-8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'} );
				response.write( contents );
				response.end();
		})
	}
*/
	else{
		response.writeHead( 404 );
		response.end( "Route Not Found!" );
	}
    
})

server.listen( 7077 );

console.log("Running in localhost at port 7077");