# Sintaxis de MySQL con Explicaciones

```sql
-- ==========================================
-- 1. BASES DE DATOS (Estructura principal)
-- ==========================================

-- Crea una base de datos nueva solo si no existe una con el mismo nombre
CREATE DATABASE IF NOT EXISTS nombre_bd;

-- Elimina la base de datos por completo (borra todo lo que tiene adentro)
DROP DATABASE IF EXISTS nombre_bd;

-- Le dice al gestor cuál base de datos vas a empezar a usar para tus consultas
USE nombre_bd;


-- ==========================================
-- 2. TABLAS (Crear y modificar estructuras)
-- ==========================================

-- Crea una tabla con columnas, tipos de datos (INT, VARCHAR) y reglas de negocio
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT,                         -- Número que aumenta solo con cada registro nuevo
    nombre VARCHAR(50) NOT NULL,                    -- Texto de hasta 50 caracteres, obligatorio (no vacío)
    apellido VARCHAR(50) NULL,                      -- Texto que puede quedarse vacío si se desea
    correo VARCHAR(100) UNIQUE,                     -- Texto que no se puede repetir en ningún otro usuario
    edad INT CHECK (edad >= 18),                    -- Condición: no permite registrar menores de 18 años
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Guarda la fecha y hora exacta del registro automáticamente
    rol_id INT,                                     -- Columna que se conectará con otra tabla
    PRIMARY KEY (id),                               -- Define a "id" como el identificador único de esta tabla
    FOREIGN KEY (rol_id) REFERENCES roles(id) ON DELETE SET NULL -- Conecta "rol_id" con la tabla "roles". Si el rol se borra, aquí se pone NULL
);

-- ALTER TABLE se usa para cambiar la estructura de una tabla ya creada:
ALTER TABLE usuarios ADD COLUMN telefono VARCHAR(20);       -- Agrega una columna nueva llamada telefono
ALTER TABLE usuarios MODIFY COLUMN nombre VARCHAR(100) NOT NULL; -- Modifica el tamaño de la columna nombre a 100 caracteres
ALTER TABLE usuarios DROP COLUMN apellido;                  -- Borra definitivamente la columna apellido y sus datos

-- TRUNCATE borra todos los datos de la tabla de golpe y reinicia el contador del AUTO_INCREMENT a 1
TRUNCATE TABLE usuarios;

-- DROP TABLE elimina la tabla por completo de la base de datos (estructura y datos)
DROP TABLE IF EXISTS usuarios;


-- ==========================================
-- 3. MANIPULACIÓN DE DATOS (DML)
-- ==========================================

-- Inserta un solo registro nuevo especificando los valores para cada columna
INSERT INTO usuarios (nombre, correo, rol_id) VALUES ('Carlos', 'carlos@mail.com', 1);

-- Inserta múltiples registros al mismo tiempo separados por comas
INSERT INTO usuarios (nombre, correo, rol_id) VALUES ('Ana', 'ana@mail.com', 2), ('Luis', 'luis@mail.com', 3);

-- Modifica los datos de un registro ya existente usando el WHERE para filtrar cuál vas a cambiar
UPDATE usuarios SET nombre = 'Carlos Alberto', rol_id = 2 WHERE id = 1;

-- Borra uno o varios registros de la tabla que cumplan con la condición del WHERE
DELETE FROM usuarios WHERE id = 1;


-- ==========================================
-- 4. CONSULTAS Y UNIONES (DQL / JOINs)
-- ==========================================

-- Estructura completa para buscar datos, agruparlos, filtrarlos, ordenarlos y limitar el resultado
SELECT columna1, COUNT(columna2) AS total 
FROM tabla1 
INNER JOIN tabla2 ON tabla1.id = tabla2.tabla1_id 
WHERE columna1 = 'valor' 
GROUP BY columna1 
HAVING total > 5 
ORDER BY total DESC 
LIMIT 10 OFFSET 0;

-- INNER JOIN: Trae datos de ambas tablas solo si hay una coincidencia exacta en la conexión
SELECT * FROM usuarios u INNER JOIN roles r ON u.rol_id = r.id;

-- LEFT JOIN: Trae todos los usuarios, tengan o no tengan un rol asignado (si no tienen, muestra NULL)
SELECT * FROM usuarios u LEFT JOIN roles r ON u.rol_id = r.id;

-- RIGHT JOIN: Trae todos los roles, tengan o no tengan usuarios asignados
SELECT * FROM usuarios u RIGHT JOIN roles r ON u.rol_id = r.id;


-- ==========================================
-- 5. FUNCIONES DE CONTROL, NULOS Y CONDICIONALES
-- ==========================================

-- Si la columna telefono es NULL (vacía), la reemplaza por el texto 'Sin teléfono' en el resultado
SELECT IFNULL(telefono, 'Sin teléfono') FROM usuarios;

-- Evalúa varias columnas en orden y devuelve el primer valor que no sea NULL
SELECT COALESCE(columna1, columna2, 'Predeterminado') FROM usuarios;

-- Evalúa una condición rápida: si es verdadera devuelve 'Mayor', si es falsa devuelve 'Menor'
SELECT IF(edad >= 18, 'Mayor', 'Menor') FROM usuarios;

-- CASE funciona como un "if-else" múltiple para evaluar varias condiciones en una consulta
SELECT nombre, 
       CASE 
           WHEN edad < 18 THEN 'Menor' 
           WHEN edad >= 18 THEN 'Mayor' 
           ELSE 'N/A' 
       END AS tipo 
FROM usuarios;


-- ==========================================
-- 6. FUNCIONES DE TEXTO, FECHAS Y AGREGACIÓN
-- ==========================================

-- Une dos o más textos en una sola columna (ej. Nombre y Apellido)
SELECT CONCAT(nombre, ' ', apellido) AS completo FROM usuarios;

-- LOWER (minúsculas), UPPER (mayúsculas), LENGTH (tamaño en caracteres), SUBSTRING (recorta texto desde posición 1, toma 5 letras)
SELECT LOWER(nombre), UPPER(nombre), LENGTH(nombre), SUBSTRING(nombre, 1, 5) FROM usuarios;

-- NOW() y CURRENT_TIMESTAMP() devuelven fecha y hora actual. CURDATE() devuelve solo la fecha (año-mes-día)
SELECT NOW(), CURRENT_TIMESTAMP(), CURDATE();

-- Le suma una cantidad de tiempo a una fecha (en este ejemplo, le suma 7 días a la fecha actual)
SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);

-- Calcula la cantidad de días de diferencia que hay entre dos fechas distintas
SELECT DATEDIFF(fecha1, fecha2);

-- COUNT (cuenta filas), SUM (suma valores), AVG (saca promedio), MIN (valor más bajo), MAX (valor más alto)
SELECT COUNT(*), SUM(edad), AVG(edad), MIN(edad), MAX(edad) FROM usuarios;