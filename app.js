const express = require( "express" );

const path    = require( "path" );

const app = express();

const PORT    = 3014;

app.use( express.static( path.join( __dirname, `./public` ) ) );

app.listen( process.env.PORT || PORT, () => { console.log( `Express arriba en port ${PORT}` ) } );

//app.get( "/", (req,res) => { res.send( "Express arriba " ) } );

app.get( "/", (req,res) => { res.sendFile( path.resolve( __dirname, "./views/index.html" ) ) } );
app.get( "/registro", (req,res) => { res.sendFile( path.resolve( __dirname, "./views/registro.html" ) ) } );
app.get( "/login", (req,res) => { res.sendFile( path.resolve( __dirname, "./views/login.html" ) ) } );



