const http = require( 'http' ); //Para configurar server
const fs = require( 'fs' ); //Para manipular archivos
																					//Estos dos argumentos son nesesarios
const server = http.createServer(function( request, response ){
    console.log('client request URL: ', request.url);

	if( request.url === "/cars" ){
		fs.readFile('cars.html', 'utf-8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'} );
				response.write( contents );
				response.end();
		})
	}

    else if( request.url === "/cats" ){
		fs.readFile('cats.html', 'utf-8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'} );
				response.write( contents );
				response.end();
		})
	}

    else if( request.url === "/cars/new" ){
		fs.readFile('dojos.html', 'utf-8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'} );
				response.write( contents );
				response.end();
		})
	}

	else{
		response.writeHead( 404 );
		response.end( "Route Not Found!" );
	}
    
})

server.listen( 7077 );

console.log("Running in localhost at port 8080");