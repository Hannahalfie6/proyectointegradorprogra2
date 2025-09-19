let data = {
    usuario: {
        nombreUsuario: 'Magdalena Sanchez',
        emailUsuario: 'ms@gmail.com',
        contraUsuario: '1234',
        fotoUsuario: '/images/users/usuario1.jpg'

    },

    productos: [
        {
            nombre: 'Termo Quencher 30OZ',
            imagen: '/images/products/termo1.jpg',
            descripcion: 'El Stanley Quencher 30 oz es un vaso térmico de acero inoxidable, con tapa giratoria, pajita, asa y gran capacidad para mantener bebidas frías o calientes por horas.',
            comentarios: [
                {
                    nombre: 'Mariana López',
                    texto: 'Me encanta, mantiene el agua fría toda la tarde y la pajita es súper práctica. Lo uso todos los días en la oficina.',
                    foto: '/images/users/usuario1.jpg'
                },
                {
                    nombre: 'Carlos Fernández',
                    texto: 'Muy resistente, se nota la calidad. El asa hace que sea fácil de llevar y entra perfecto en el portavasos del auto.',
                    foto: '/images/users/usuario2.jpg'
                },

            ]
        },
        {
            nombre: 'Termo Classic Flip',
            imagen: '/images/products/termo2.jpg',
            descripcion: 'El Stanley Classic Flip es un vaso térmico de acero inoxidable con pajita abatible a prueba de derrames, asa plegable y aislamiento al vacío que mantiene bebidas frías hasta 12 h y con hielo hasta 2 días.',
            comentarios: [
                {
                    nombre: 'Diego Torres',
                    texto: 'Lo uso en la oficina y en el auto, mantiene el agua bien fría por horas. Además es fácil de limpiar.',
                    foto: '/images/users/usuario3.jpg'
                },
                {
                    nombre: 'Valentina Pérez',
                    texto: 'Me encanta lo liviano que es y el asa plegable es práctica. Lo llevo todos los días al gimnasio.',
                    foto: '/images/users/usuario4.jpg'
                },
                {
                    nombre: 'Sofía Martínez',
                    texto: 'La pajita abatible es súper cómoda, no gotea nada y me resulta ideal para llevar en la mochila sin preocupaciones.',
                    foto: '/images/users/usuario5.jpg'
                }
            ]
        },
        {
            nombre: 'Termo Mate System',
            imagen: '/images/products/termo3.jpg',
            descripcion: 'El Stanley Mate System es un termo con tapón preciso y tapa-mate, ideal para cebar, que mantiene el agua a temperatura por horas gracias a su aislamiento al vacío.',
            comentarios: [
                {
                    nombre: 'Juan Pablo González',
                    texto: 'El pico es perfecto para cebar, no se chorrea nada y el agua sale justa. ¡Un lujo para los materos!',
                    foto: '/images/users/usuario6.jpg'
                }
            ]
        },
        {
            nombre: 'Mate Classic',
            imagen: '/images/products/mate1.jpg',
            descripcion: 'Es un mate de acero inoxidable 18/8, libre de BPA y doble pared, que mantiene por más tiempo la temperatura y resulta práctico, higiénico y duradero .',
            comentarios: [
                {
                    nombre: 'Martín Herrera',
                    texto: 'Muy resistente y práctico, lo llevo a todos lados. Además no toma olor como los mates de otros materiales.',
                    foto: '/images/users/usuario7.jpg'
                },
                {
                    nombre: 'Florencia Álvarez',
                    texto: 'El mate mantiene la temperatura ideal, no quema en la mano y es súper fácil de limpiar.',
                    foto: '/images/users/usuario8.jpg'
                }
            ]
        },
        {
            nombre: 'Botella termica aerolight',
            imagen: '/images/products/botella1.jpg',
            descripcion: 'La Stanley AeroLight es una botella térmica ultraliviana, de acero inoxidable, que mantiene bebidas calientes 8 h, frías 12 h y con hielo hasta 40 h.',
            comentarios: [
                {
                    nombre: 'Federico Díaz',
                    texto: 'La uso en el trabajo y en la bici, es liviana, no pierde ni una gota y el agua se mantiene fría todo el día.',
                    foto: '/images/users/usuario9.jpg'
                }
            ]
        },
        {
            nombre: 'Taza termica',
            imagen: '/images/products/taza1.jpg',
            descripcion: 'Es una taza de acero inoxidable con doble pared aislante que mantiene tu bebida caliente por horas, duradera y apta para el uso diario.',
            comentarios: [
                {
                    nombre: 'Mariana Suárez',
                    texto: 'Me encanta, el té se mantiene caliente durante horas y no se pasa la temperatura a la mano. Súper práctica.',
                    foto: '/images/users/usuario10.jpg'
                }
            ]
        },
        {
            nombre: 'Food Jar',
            imagen: '/images/products/tarro1.jpg',
            descripcion: 'Es un recipiente de acero inoxidable con aislamiento al vacío, hermético y durable, que conserva tus comidas calientes o frías durante horas.',
            comentarios: [
                {
                    nombre: 'Carolina Vega',
                    texto: 'Lo uso para frutas y ensaladas, mantiene la frescura por horas y no pierde nada de líquido. ¡Me encanta!',
                    foto: '/images/users/usuario11.jpg'
                },
                {
                    nombre: 'Gabriel Mendoza',
                    texto: 'Ideal para llevar la comida al trabajo, la sopa llega todavía caliente al mediodía. Muy resistente.',
                    foto: '/images/users/usuario12.jpg'
                }
            ]
        },
        {
            nombre: 'Botella Termica Allday Slim',
            imagen: '/images/products/botella2.jpg',
            descripcion: 'Es una botella térmica de acero inoxidable con aislamiento al vacío, tapa a prueba de fugas y cuerpo delgado que se abre en el “hombro” para facilitar el llenado con hielo. Ideal para llevar a todos lados y mantener bebidas frías varias horas.',
            comentarios: [
                {
                    nombre: 'Matías Correa',
                    texto: 'La llevo siempre al gimnasio, entra perfecta en el portabotellas y mantiene el agua fría hasta el final de la rutina.',
                    foto: '/images/users/usuario13.jpg'
                }
            ]
        },
        {
            nombre: 'Beer Pin Classic',
            imagen: '/images/products/beer.jpg',
            descripcion: 'Es un vaso tipo pint de acero inoxidable 18/8 con doble aislamiento al vacío, tapa de boca ancha “froth-friendly”, abrebotellas incorporado, y mantiene tu cerveza fría varias horas.',
            comentarios: [
                {
                        nombre: 'Paula Giménez',
                        texto: 'Me encantó, es práctico y resistente. Ideal para usar en el patio o de camping.',
                        foto: '/images/users/usuario14.jpg'
                },
                {
                        nombre: 'Ricardo Benítez',
                        texto: 'La cerveza se mantiene fría hasta el último sorbo, incluso al aire libre. Muy buena calidad.',
                        foto: '/images/users/usuario15.jpg'
                },
                {
                        nombre: 'Nicolás Figueroa',
                        texto: 'El abrebotellas incorporado es un detalle genial, lo llevo a todas las juntadas con amigos.',
                        foto: '/images/users/usuario16.jpg'
                }
            ]
        },
        {
            nombre: 'Termo Clasico',
            imagen: '/images/products/termo4.jpg',
            descripcion: 'Es un termo de acero inoxidable 18/8 con doble aislamiento al vacío, tapa que también funciona como taza y asa plegable, capaz de mantener bebidas calientes o frías hasta 24 h, famoso por su resistencia legendaria y construcción confiable.',
            comentarios: [
                {
                    nombre: 'Hernán Aguilar',
                    texto: 'Un clásico de verdad, lo uso hace meses para el trabajo y el mate, mantiene el agua caliente todo el día sin problemas.',
                    foto: '/images/users/usuario17.jpg'
                }
            ]
        },

    ]
}

module.exports = data;