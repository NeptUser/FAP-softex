-- Seleção de dados
SELECT 
    ID AS 'ID Transacao',
    Data AS 'Data',
    Valor AS 'Valor'
FROM transacoes;

-- Filtragem com a cláusula WHERE
SELECT 
    ID AS 'ID Transacao',
    Data AS 'Data',
    Valor AS 'Valor'
FROM transacoes
WHERE Valor > 100.00;

-- Ordenação com a cláusula ORDER BY
SELECT 
    ID AS 'ID Transacao',
    Data AS 'Data',
    Valor AS 'Valor'
FROM transacoes
ORDER BY Valor DESC;

-- Agregação com funções SQL
SELECT 
    AVG(Valor) AS 'Média de Valor',
    MAX(Valor) AS 'Valor Máximo',
    MIN(Valor) AS 'Valor Mínimo',
    COUNT(*) AS 'Total de Transações'
FROM transacoes;

-- Agrupamento com a cláusula GROUP BY
SELECT 
    Produto,
    AVG(Valor) AS 'Média de Valor por Produto'
FROM transacoes
GROUP BY Produto;

-- Consulta combinada
SELECT 
    Produto,
    COUNT(*) AS 'Quantidade de Produtos Vendidos',
    SUM(Valor) AS 'Valor Total das Vendas',
    AVG(Valor) AS 'Média de Valor por Transação'
FROM transacoes
GROUP BY Produto;
