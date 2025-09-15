CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    fotoPerfil VARCHAR(100),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
	);
    
CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT UNSIGNED,
    imagen VARCHAR(200),
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
	);
    
CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    producto_id INT UNSIGNED,
    usuario_id INT UNSIGNED,
    comentario TEXT NOT NULL, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES producto(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
	);

INSERT INTO usuarios (email, password, fotoPerfil) VALUES
('diribarren@udesa.edu.ar', 'progra2', 'delfi.png'),
('sanchezma@udesa.edu.ar', 'udesa2025', 'magui.png'),
('halfie@udesa.edu.ar', 'digitalhouse', 'hannah.png'),
('bgomez@digitalhouse.comr', 'DH2025', 'brian.png'),
('valentin.varela@digitalhouse.com', 'profeDH', 'valentin.png');

INSERT INTO productos (usuario_id, imagen, nombre, descripcion) VALUES
(1, '/images/products/termo1.jpg', 'Termo Quencher 30OZ', 'El Stanley Quencher 30 oz es un vaso térmico de acero inoxidable, con tapa giratoria, pajita, asa y gran capacidad para mantener bebidas frías o calientes por horas.'),
(1, '/images/products/termo2.jpg', 'Termo Classic Flip', 'El Stanley Classic Flip es un vaso térmico de acero inoxidable con pajita abatible a prueba de derrames, asa plegable y aislamiento al vacío que mantiene bebidas frías hasta 12 h y con hielo hasta 2 días.'),
(2, '/images/products/termo3.jpg', 'Termo Mate System', 'El Stanley Mate System es un termo con tapón preciso y tapa-mate, ideal para cebar, que mantiene el agua a temperatura por horas gracias a su aislamiento al vacío.'),
(2, '/images/products/mate1.jpg', 'Mate Classic', 'Es un mate de acero inoxidable 18/8, libre de BPA y doble pared, que mantiene por más tiempo la temperatura y resulta práctico, higiénico y duradero.'),
(3, '/images/products/botella1.jpg', 'Botella Térmica AeroLight', 'La Stanley AeroLight es una botella térmica ultraliviana, de acero inoxidable, que mantiene bebidas calientes 8 h, frías 12 h y con hielo hasta 40 h.'),
(3, '/images/products/taza1.jpg', 'Taza Térmica', 'Es una taza de acero inoxidable con doble pared aislante que mantiene tu bebida caliente por horas, duradera y apta para el uso diario.'),
(4, '/images/products/tarro1.jpg', 'Food Jar', 'Es un recipiente de acero inoxidable con aislamiento al vacío, hermético y durable, que conserva tus comidas calientes o frías durante horas.'),
(4, '/images/products/botella2.jpg', 'Botella Térmica Allday Slim', 'Es una botella térmica de acero inoxidable con aislamiento al vacío, tapa a prueba de fugas y cuerpo delgado que se abre en el hombro para facilitar el llenado con hielo.'),
(5, '/images/products/beer.jpg', 'Beer Pin Classic', 'Es un vaso tipo pint de acero inoxidable 18/8 con doble aislamiento al vacío, tapa de boca ancha froth-friendly, abrebotellas incorporado, y mantiene tu cerveza fría varias horas.'),
(5, '/images/products/termo4.jpg', 'Termo Clásico', 'Es un termo de acero inoxidable 18/8 con doble aislamiento al vacío, tapa que también funciona como taza y asa plegable, capaz de mantener bebidas calientes o frías hasta 24 h, famoso por su resistencia legendaria y construcción confiable.');


INSERT INTO comentarios (producto_id, usuario_id, comentario) VALUES
(1, 2, 'Me encanta, mantiene el agua fría toda la tarde y la pajita es súper práctica.'),
(1, 3, 'Muy resistente, se nota la calidad y entra perfecto en el portavasos.'),
(1, 4, 'Lo uso en la oficina todos los días, aguanta muchísimo.');

INSERT INTO comentarios (producto_id, usuario_id, comentario) VALUES
(2, 2, 'Lo uso en el auto, mantiene el agua fría por horas.'),
(2, 4, 'Es liviano y el asa plegable es muy práctica.'),
(2, 5, 'La pajita no gotea nada, ideal para la mochila.');

INSERT INTO comentarios (producto_id, usuario_id, comentario) VALUES
(3, 1, 'El pico es perfecto para cebar, no se chorrea.'),
(3, 2, 'La tapa-mate es muy cómoda y fácil de usar.'),
(3, 5, 'El agua se mantiene a temperatura ideal todo el día.');

INSERT INTO comentarios (producto_id, usuario_id, comentario) VALUES
(4, 3, 'Muy resistente, lo llevo a todos lados.'),
(4, 5, 'No toma olor y es fácil de limpiar.'),
(4, 1, 'Mantiene la temperatura justa para el mate.');

INSERT INTO comentarios (producto_id, usuario_id, comentario) VALUES
(5, 4, 'Liviana y no pierde nada de agua.'),
(5, 2, 'La llevo en la bici, mantiene fría el agua.'),
(5, 1, 'Resistente y fácil de transportar.');

INSERT INTO comentarios (producto_id, usuario_id, comentario) VALUES
(6, 2, 'El té se mantiene caliente por horas.'),
(6, 3, 'No quema en la mano y es muy práctica.'),
(6, 5, 'Perfecta para usar en la oficina.');

INSERT INTO comentarios (producto_id, usuario_id, comentario) VALUES
(7, 1, 'Lo uso para ensaladas, mantiene la frescura.'),
(7, 2, 'La comida se mantiene caliente hasta el mediodía.'),
(7, 4, 'Muy resistente y fácil de limpiar.');

INSERT INTO comentarios (producto_id, usuario_id, comentario) VALUES
(8, 3, 'Entra perfecto en el portabotellas del gym.'),
(8, 5, 'Mantiene fría el agua durante toda la rutina.'),
(8, 1, 'El diseño es muy cómodo para llevar.');

INSERT INTO comentarios (producto_id, usuario_id, comentario) VALUES
(9, 4, 'La cerveza se mantiene fría hasta el último sorbo.'),
(9, 2, 'Resistente, ideal para camping.'),
(9, 5, 'El abrebotellas incorporado es un golazo.');

INSERT INTO comentarios (producto_id, usuario_id, comentario) VALUES
(10, 1, 'Un clásico de verdad, mantiene el agua caliente todo el día.'),
(10, 3, 'Muy resistente, lo llevo siempre al trabajo.'),
(10, 4, 'La tapa que funciona como taza es lo mejor.');