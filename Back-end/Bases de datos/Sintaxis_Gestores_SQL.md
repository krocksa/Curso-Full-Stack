# Comparativa de Sintaxis: T-SQL, PostgreSQL, MySQL y Oracle

Documento de referencia rápida sobre la sintaxis, funciones, estructuras de control y tipos de datos en **T-SQL (SQL Server)**, **PostgreSQL**, **MySQL** y **Oracle Database**.

---

## 1. Tipos de Datos Principales

| Elemento / Tipo | T-SQL (SQL Server) | PostgreSQL | MySQL | Oracle |
| :--- | :--- | :--- | :--- | :--- |
| **Entero estándar** | `INT` / `INTEGER` | `INT` / `INTEGER` | `INT` / `INTEGER` | `NUMBER(10)` / `INTEGER` |
| **Entero pequeño** | `SMALLINT` | `SMALLINT` | `SMALLINT` | `NUMBER(5)` / `SMALLINT` |
| **Entero grande** | `BIGINT` | `BIGINT` | `BIGINT` | `NUMBER(19)` |
| **Decimal / Exacto** | `DECIMAL(p,s)` / `NUMERIC(p,s)` | `DECIMAL(p,s)` / `NUMERIC(p,s)` | `DECIMAL(p,s)` / `NUMERIC(p,s)` | `NUMBER(p,s)` |
| **Flotante / Aproximado** | `FLOAT` / `REAL` | `DOUBLE PRECISION` / `REAL` | `FLOAT` / `DOUBLE` | `BINARY_FLOAT` / `BINARY_DOUBLE` |
| **Texto de longitud fija** | `CHAR(n)` | `CHAR(n)` | `CHAR(n)` | `CHAR(n)` |
| **Texto variable** | `VARCHAR(n)` | `VARCHAR(n)` | `VARCHAR(n)` | `VARCHAR2(n)` |
| **Texto Unicode (UTF-8/16)** | `NVARCHAR(n)` | `VARCHAR(n)` *(UTF-8 por defecto)* | `VARCHAR(n)` *(UTF-8 por defecto)* | `NVARCHAR2(n)` |
| **Texto largo (LOB)** | `VARCHAR(MAX)` | `TEXT` | `LONGTEXT` / `TEXT` | `CLOB` |
| **Booleano** | `BIT` *(0 o 1)* | `BOOLEAN` *(TRUE / FALSE)* | `TINYINT(1)` / `BOOLEAN` | `NUMBER(1)` *(o `BOOLEAN` en 23c+)* |
| **Fecha (solo fecha)** | `DATE` | `DATE` | `DATE` | `DATE` *(incluye hora)* / `ANSI DATE` |
| **Fecha y Hora** | `DATETIME2` | `TIMESTAMP` | `DATETIME` / `TIMESTAMP` | `TIMESTAMP` |
| **UUID / GUID** | `UNIQUEIDENTIFIER` | `UUID` | `VARCHAR(36)` / `BINARY(16)` | `RAW(16)` / `VARCHAR2(36)` |
| **Binario largo (LOB)** | `VARBINARY(MAX)` | `BYTEA` | `LONGBLOB` / `BLOB` | `BLOB` |
| **JSON** | `NVARCHAR(MAX)` *(con JSON check)* | `JSONB` / `JSON` | `JSON` | `JSON` / `CLOB` |
| **Autoincremento** | `IDENTITY(1,1)` | `SERIAL` / `GENERATED ALWAYS AS IDENTITY` | `AUTO_INCREMENT` | `GENERATED ALWAYS AS IDENTITY` |

---

## 2. Consultas Básicas (DML)

| Operación / Clausula | T-SQL (SQL Server) | PostgreSQL | MySQL | Oracle |
| :--- | :--- | :--- | :--- | :--- |
| **Selección simple** | `SELECT * FROM tabla;` | `SELECT * FROM tabla;` | `SELECT * FROM tabla;` | `SELECT * FROM tabla;` |
| **Filtro** | `WHERE col = 10;` | `WHERE col = 10;` | `WHERE col = 10;` | `WHERE col = 10;` |
| **Agrupación** | `GROUP BY col;` | `GROUP BY col;` | `GROUP BY col;` | `GROUP BY col;` |
| **Filtro de grupo** | `HAVING COUNT(*) > 1;` | `HAVING COUNT(*) > 1;` | `HAVING COUNT(*) > 1;` | `HAVING COUNT(*) > 1;` |
| **Ordenamiento** | `ORDER BY col ASC;` | `ORDER BY col ASC;` | `ORDER BY col ASC;` | `ORDER BY col ASC;` |
| **Inserción** | `INSERT INTO t VALUES (1);` | `INSERT INTO t VALUES (1);` | `INSERT INTO t VALUES (1);` | `INSERT INTO t VALUES (1);` |
| **Actualización** | `UPDATE t SET col = 1 WHERE id = 1;` | `UPDATE t SET col = 1 WHERE id = 1;` | `UPDATE t SET col = 1 WHERE id = 1;` | `UPDATE t SET col = 1 WHERE id = 1;` |
| **Eliminación** | `DELETE FROM t WHERE id = 1;` | `DELETE FROM t WHERE id = 1;` | `DELETE FROM t WHERE id = 1;` | `DELETE FROM t WHERE id = 1;` |
| **Consulta vacía/Dual** | `SELECT 1;` | `SELECT 1;` | `SELECT 1;` | `SELECT 1 FROM DUAL;` |

---

## 3. Paginación y Limitación de Resultados

| Operación | T-SQL (SQL Server) | PostgreSQL | MySQL | Oracle |
| :--- | :--- | :--- | :--- | :--- |
| **Primeras N filas** | `SELECT TOP (10) * FROM t;` | `SELECT * FROM t LIMIT 10;` | `SELECT * FROM t LIMIT 10;` | `SELECT * FROM t FETCH FIRST 10 ROWS ONLY;` |
| **Paginación (Saltar M, tomar N)** | `SELECT * FROM t ORDER BY id OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY;` | `SELECT * FROM t ORDER BY id LIMIT 10 OFFSET 20;` | `SELECT * FROM t ORDER BY id LIMIT 20, 10;` | `SELECT * FROM t ORDER BY id OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY;` |

---

## 4. Uniones de Tablas (Joins)

| Tipo de Join | T-SQL (SQL Server) | PostgreSQL | MySQL | Oracle |
| :--- | :--- | :--- | :--- | :--- |
| **Inner Join** | `FROM a INNER JOIN b ON a.id = b.id` | `FROM a INNER JOIN b ON a.id = b.id` | `FROM a INNER JOIN b ON a.id = b.id` | `FROM a INNER JOIN b ON a.id = b.id` |
| **Left Join** | `FROM a LEFT JOIN b ON a.id = b.id` | `FROM a LEFT JOIN b ON a.id = b.id` | `FROM a LEFT JOIN b ON a.id = b.id` | `FROM a LEFT JOIN b ON a.id = b.id` |
| **Right Join** | `FROM a RIGHT JOIN b ON a.id = b.id` | `FROM a RIGHT JOIN b ON a.id = b.id` | `FROM a RIGHT JOIN b ON a.id = b.id` | `FROM a RIGHT JOIN b ON a.id = b.id` |
| **Full Outer Join** | `FROM a FULL JOIN b ON a.id = b.id` | `FROM a FULL JOIN b ON a.id = b.id` | *(Simulado con UNION de LEFT y RIGHT)* | `FROM a FULL JOIN b ON a.id = b.id` |
| **Cross Join** | `FROM a CROSS JOIN b` | `FROM a CROSS JOIN b` | `FROM a CROSS JOIN b` | `FROM a CROSS JOIN b` |

---

## 5. Manejo de Cadenas de Texto

| Operación | T-SQL (SQL Server) | PostgreSQL | MySQL | Oracle |
| :--- | :--- | :--- | :--- | :--- |
| **Concatenación** | `col1 + col2` / `CONCAT(c1, c2)` | `col1 \|\| col2` / `CONCAT(c1, c2)` | `CONCAT(col1, col2)` | `col1 \|\| col2` / `CONCAT(c1, c2)` |
| **Longitud (caracteres)** | `LEN(col)` | `LENGTH(col)` / `CHAR_LENGTH(col)` | `LENGTH(col)` / `CHAR_LENGTH(col)` | `LENGTH(col)` |
| **Subcadena** | `SUBSTRING(col, pos, len)` | `SUBSTRING(col FROM pos FOR len)` | `SUBSTRING(col, pos, len)` | `SUBSTR(col, pos, len)` |
| **Mayúsculas** | `UPPER(col)` | `UPPER(col)` | `UPPER(col)` | `UPPER(col)` |
| **Minúsculas** | `LOWER(col)` | `LOWER(col)` | `LOWER(col)` | `LOWER(col)` |
| **Eliminar espacios** | `TRIM(col)` / `LTRIM` / `RTRIM` | `TRIM(col)` / `LTRIM` / `RTRIM` | `TRIM(col)` / `LTRIM` / `RTRIM` | `TRIM(col)` / `LTRIM` / `RTRIM` |
| **Reemplazo** | `REPLACE(col, 'a', 'b')` | `REPLACE(col, 'a', 'b')` | `REPLACE(col, 'a', 'b')` | `REPLACE(col, 'a', 'b')` |

---

## 6. Funciones de Fecha y Hora

| Operación | T-SQL (SQL Server) | PostgreSQL | MySQL | Oracle |
| :--- | :--- | :--- | :--- | :--- |
| **Fecha y hora actual** | `GETDATE()` / `SYSDATETIME()` | `NOW()` / `CURRENT_TIMESTAMP` | `NOW()` / `CURRENT_TIMESTAMP` | `SYSDATE` / `CURRENT_TIMESTAMP` |
| **Sumar tiempo** | `DATEADD(day, 7, col)` | `col + INTERVAL '7 days'` | `DATE_ADD(col, INTERVAL 7 DAY)` | `col + 7` / `col + INTERVAL '7' DAY` |
| **Diferencia de fechas** | `DATEDIFF(day, f1, f2)` | `f2 - f1` *(días)* | `DATEDIFF(f1, f2)` | `f1 - f2` *(días)* |
| **Extraer parte** | `YEAR(col)` / `MONTH(col)` | `EXTRACT(YEAR FROM col)` | `YEAR(col)` / `MONTH(col)` | `EXTRACT(YEAR FROM col)` |

---

## 7. Manejo de Valores Nulos

| Operación | T-SQL (SQL Server) | PostgreSQL | MySQL | Oracle |
| :--- | :--- | :--- | :--- | :--- |
| **Reemplazar NULL** | `ISNULL(col, 0)` | `COALESCE(col, 0)` | `IFNULL(col, 0)` | `NVL(col, 0)` |
| **Primer no NULO** | `COALESCE(c1, c2, 0)` | `COALESCE(c1, c2, 0)` | `COALESCE(c1, c2, 0)` | `COALESCE(c1, c2, 0)` |
| **Convertir a NULL si igual** | `NULLIF(col1, col2)` | `NULLIF(col1, col2)` | `NULLIF(col1, col2)` | `NULLIF(col1, col2)` |
| **Cadena vacía (`''`)** | Evaluada como `''` | Evaluada como `''` | Evaluada como `''` | Evaluada como `NULL` |

---

## 8. Conversión de Tipos (Casting)

| Operación | T-SQL (SQL Server) | PostgreSQL | MySQL | Oracle |
| :--- | :--- | :--- | :--- | :--- |
| **Cast Estándar** | `CAST(col AS INT)` | `CAST(col AS INT)` / `col::INT` | `CAST(col AS SIGNED)` | `CAST(col AS NUMBER)` |
| **Convertir / Formatear** | `CONVERT(VARCHAR, col, 103)` | `TO_CHAR(col, 'DD/MM/YYYY')` | `DATE_FORMAT(col, '%d/%m/%Y')` | `TO_CHAR(col, 'DD/MM/YYYY')` |
| **Texto a Fecha** | `CAST('2026-01-01' AS DATE)` | `TO_DATE('2026-01-01', 'YYYY-MM-DD')` | `STR_TO_DATE('2026-01-01', '%Y-%m-%d')` | `TO_DATE('2026-01-01', 'YYYY-MM-DD')` |

---

## 9. Programación Procedural (Variables, Condicionales y Bucles)

| Concepto | T-SQL (SQL Server) | PostgreSQL (PL/pgSQL) | MySQL (Procedural) | Oracle (PL/SQL) |
| :--- | :--- | :--- | :--- | :--- |
| **Declarar Variable** | `DECLARE @x INT;` | `v_x INTEGER;` | `DECLARE v_x INT;` | `v_x NUMBER;` |
| **Asignar Valor** | `SET @x = 10;` / `SELECT @x = 10;` | `v_x := 10;` | `SET v_x = 10;` | `v_x := 10;` |
| **Estructura IF** | `IF @x > 5 BEGIN ... END ELSE BEGIN ... END` | `IF v_x > 5 THEN ... ELSE ... END IF;` | `IF v_x > 5 THEN ... ELSE ... END IF;` | `IF v_x > 5 THEN ... ELSE ... END IF;` |
| **Bucle WHILE** | `WHILE @x < 10 BEGIN ... END` | `WHILE v_x < 10 LOOP ... END LOOP;` | `WHILE v_x < 10 DO ... END WHILE;` | `WHILE v_x < 10 LOOP ... END LOOP;` |
| **Manejo de Errores** | `BEGIN TRY ... END TRY BEGIN CATCH ... END CATCH` | `BEGIN ... EXCEPTION WHEN OTHERS THEN ... END;` | `DECLARE HANDLER FOR SQLEXCEPTION ...` | `BEGIN ... EXCEPTION WHEN OTHERS THEN ... END;` |
