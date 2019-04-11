(function(){
    "use strict";
    //para recuperar solo se necesita el nombre del módulo
     angular.module("newsWikiApp")
         //nombre del controlador y la función que va a definir mi controlador

         .controller("NewsCtrl",
             //se dwefine un array donde todos los primeros elementos son los parámetros que pueda recibir el controller
             //y después al último será la definición de  mi controlador
             ["newsResource",NewsCtrl]);

    //variable scope solo sirve de mecanismo de comunicación
    // entre la vista y el controlador
    // scope no es el modelo, el modelo va a ser mis noticias y mis categorias
     /* Version 0.1 de la función NewsCtrl
     function NewsCtrl($scope){
        $scope.mensaje = "Hola curso Angular JS";

     }
     */
// Version 0.2 de la función NewsCtrl
//min-safe array
function NewsCtrl(newsResource){
   //this: es el ámbito inmediato
   var me = this;


   // 1era versión fr news
/*
   me.news = [
       {
           "idNoticia": 1,
           "codigoNoticia": "NWD-9838",
           "tituloNoticia": "Peru envio nota diplomatica a Chile",
           "descripcionNoticia": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolor,eos laborum quaerat quam quos rerum!" +
               "Expedita itaque optio praesentium quo sequi soluta voluptatem! At eos est fuga illum iusto necessitatibus " +
               "bcaecati quia tempora ullam. Commodi doloribus error ex fugiat laborum magni, officiis ratione reiciendis sunt" +
               "velit voluptas voluptates. Culpa deleniti dolore, excepturi fugit id in sed vitae voluptates. Tenetur.",
           "fechaPublicacion": new Date(),
           "banner" : "http://cde.3.elcomercio.pe/ima/0/1/2/3/4/1234815/base_image.jpg",
           "destacado": true,
           "categoria": "Politica",
           "tags": ["peru", "politica", "guerra"]
       },
       {
           "idNoticia": 2,
           "codigoNoticia": "NFK-1275",
           "tituloNoticia": "Alan Garcia cuestiona ofertas laborales",
           "descripcionNoticia": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Al quaerat quam quos rerum!" +
               "Expedita itaque Commodi doloribus error ex fugiat laborum mag At eos est fuga illum iusto necessitatibus " +
               "bcaecati quia tempora ullam. Commodi doloribus error ex fugiat laborum magni, officiis ratione reiciendis sunt" +
               "velit voluptas voluptates. Dst fuga illum iusto necessita in sed vitae voluptates. Tenetur.",
           "fechaPublicacion": new Date(2015,0,1),
           "banner" : "http://cde.3.elcomercio.pe/ima/0/1/2/3/5/1235147/base_image.jpg",
           "destacado": true,
           "categoria": "Politica",
           "tags": ["alan garcia", "politica"]
       },
       {
           "idNoticia": 3,
           "codigoNoticia": "TFH-1455",
           "tituloNoticia": "Mestiza, la marca de Gamarra que compite en Brasil",
           "descripcionNoticia": "Loryade laborum magni, officiis ratione reiciendis sunt aque Commodi doloribus error ex fuos est fuga illum iusto ne" +
               "velit voluptas voluptates. Dst fuga illum iusto necessita in sed vitae voluptates. Tenetur giat laborum mag At e",
           "fechaPublicacion": new Date(2015,7,30),
           "banner" : "http://cde.3.elcomercio.pe/ima/0/1/2/3/4/1234368.jpg",
           "destacado": false,
           "categoria": "Economia",
           "tags": ["mestiza", "gamarra"]
       },
       {
           "idNoticia": 4,
           "codigoNoticia": "TFS-7890",
           "tituloNoticia": "Esta semana continua el torneo Clausura",
           "descripcionNoticia": "Loryade laborum magni, officiis ratione reiciendis sunt aque Commodi doloribus error ex fuos est fuga illum iusto ne" +
               "velit voluptas voluptates. Dst fuga illum iusto necessita in sed vitae voluptates. Tenetur giat laborum mag At e",
           "fechaPublicacion": new Date(2015,10,2),
           "banner" : "http://cde.3.elcomercio.pe/ima/0/1/2/3/5/1235138/base_image.jpg",
           "destacado": false,
           "categoria": "Deportes",
           "tags": ["futbol", "clausura"]
       },
       {
           "idNoticia": 5,
           "codigoNoticia": "JNQ-4564",
           "tituloNoticia": "Avion ruso que cayo en Egipto se despedazo",
           "descripcionNoticia": "Loryade laborum magni, officiis ratione reiciendis sunt aque Commodi doloribus error ex fuos est fuga illum iusto ne" +
               "velit voluptas voluptates. Dst fuga illum iusto necessita in sed vitae voluptates. Tenetur giat laborum mag At e",
           "fechaPublicacion": new Date(2015,10,3),
           "banner" : "http://cde.3.elcomercio.pe/ima/0/1/2/3/5/1235130/base_image.jpg",
           "destacado": false,
           "categoria": "Mundo",
           "tags": ["avion", "accidente"]
       },
       {
           "idNoticia": 6,
           "codigoNoticia": "NRR-6002",
           "tituloNoticia": "Los primeros dias del LifWeek",
           "descripcionNoticia": "Loryade laborum magni, officiis ratione reiciendis sunt aque Commodi doloribus error ex fuos est fuga illum iusto ne" +
               "velit voluptas voluptates. Dst fuga illum iusto necessita in sed vitae voluptates. Tenetur giat laborum mag At e",
           "fechaPublicacion": new Date(2015,10,2),
           "banner" : "http://cde.3.elcomercio.pe/ima/0/1/2/3/4/1234337.jpg",
           "destacado": false,
           "categoria": "Moda",
           "tags": ["lifweek", "moda"]
       }
   ];
    */
    newsResource.query(function(data){
        me.news = data;
    });

    me.onCategoryClick = function(category){
        if(category) {
            me.filterCategory = category;
        }else{
            me.filterCategory = "";
        }
    };

}

}());