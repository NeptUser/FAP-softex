-- 1. Criando a tabela Autores:
CREATE TABLE Autores (
    AutorID INT PRIMARY KEY,
    Nome VARCHAR(50),
    Nacionalidade VARCHAR(50)
);

-- 2. Criando a tabela Livros:
CREATE TABLE Livros (
    LivroID INT PRIMARY KEY,
    Titulo VARCHAR(100),
    AnoPublicacao INT,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autores(AutorID)
);

-- ========================================================================

-- 1. Inserção de dados:

INSERT INTO Autores (AutorID, Nome, Nacionalidade) VALUES
(1, 'Stephen King', 'Estados Unidos'),
(2, 'Gabriel Garcia Marquez', 'Colômbia'),
(3, 'Machado de Assis', 'Brasil');

INSERT INTO Livros (LivroID, Titulo, AnoPublicacao, AutorID) VALUES
(1, 'It', 1986, 1),
(2, 'Cem Anos de Solidão', 1967, 2),
(3, 'Dom Casmurro', 1899, 3),
(4, 'O Amor nos Tempos do Cólera', 1985, 2),
(5, 'A Hora da Estrela', 1977, 3);

-- 2. Consulta simples:

SELECT Autores.Nome, Livros.Titulo
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- 3. Consulta com junção INNER JOIN:

SELECT Autores.Nome AS Autor, Livros.Titulo AS Livro
FROM Autores
INNER JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- 4. Consulta com junção LEFT JOIN:

SELECT Autores.Nome AS Autor, Livros.Titulo AS Livro
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;


-- 5. Consulta com filtro por nacionalidade:

SELECT Autores.Nome AS Autor, Livros.Titulo AS Livro
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'Brasil';


-- 6. Consulta agregada:

SELECT Autores.Nome AS Autor, COUNT(Livros.LivroID) AS QuantidadeLivros
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.Nome;
