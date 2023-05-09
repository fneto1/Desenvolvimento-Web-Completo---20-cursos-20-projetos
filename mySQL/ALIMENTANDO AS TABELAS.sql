INSERT INTO tb_produtos(produto, valor) VALUES ('Notebook Dell Inspiron Ultrafino Intel Core i7, 16GB RAM e 240GB SSD', 3500.00);

INSERT INTO tb_produtos(produto, valor) VALUES ('Smart TV LED 40" Samsung Full HD 2 HDMI 1 USB Wi-Fi Integrado', 1475.54);

INSERT INTO tb_produtos(produto, valor) VALUES ('Smartphone LG K10 Dual Chip Android 7.0 4G Wi-Fi Câmera de 13MP', 629.99);


INSERT INTO tb_descricoes_tecnicas(id_produto, descricao_tecnica) VALUES (1, 'O novo Inspiron Dell oferece um design elegante e tela infinita que amplia seus sentidos, mantendo a sofisticação e medidas compactas...');

INSERT INTO tb_descricoes_tecnicas(id_produto, descricao_tecnica) VALUES (2, 'A smart TV da Samsung possui tela de 40" e oferece resolução Full HD, imagens duas vezes melhores que TVs HDs padrão...');

INSERT INTO tb_descricoes_tecnicas(id_produto, descricao_tecnica) VALUES (3, 'Saia da mesmice. O smartphone LG está mais divertido, rápido, fácil, cheio de selfies e com tela HD de incríveis 5,3"...');

SELECT * FROM tb_produtos;

SELECT * FROM tb_descricoes_tecnicas;

INSERT INTO TB_IMAGENS(ID_PRODUTO, URL_IMAGEM) VALUES (1, 'notebook_1.jpg'), (1, 'notebook_2.jpg'), (1, 'notebook_3.jpg');

INSERT INTO TB_IMAGENS(ID_PRODUTO, URL_IMAGEM) VALUES (2, 'smarttv_1.jpg'), (2, 'smarttv_2.jpg');

INSERT INTO TB_IMAGENS(ID_PRODUTO, URL_IMAGEM) VALUES (3, 'smartphone_1.jpg');

SELECT * FROM tb_imagens;

INSERT INTO TB_CLIENTES(NOME, IDADE) VALUES ('Jorge', 29);

INSERT INTO TB_PEDIDOS(ID_CLIENTE) VALUE (1);

INSERT INTO TB_PEDIDOS_PRODUTOS(ID_PEDIDO, ID_PRODUTO) VALUES (1, 2);
INSERT INTO TB_PEDIDOS_PRODUTOS(ID_PEDIDO, ID_PRODUTO) VALUES (1, 3);

INSERT INTO TB_PEDIDOS(ID_CLIENTE) VALUE (1);

INSERT INTO TB_PEDIDOS_PRODUTOS(ID_PEDIDO, ID_PRODUTO) VALUES (2, 3);

INSERT INTO TB_CLIENTES(NOME, IDADE) VALUES ('Jamilton', 30);

INSERT INTO TB_PEDIDOS(ID_CLIENTE) VALUE (2);

INSERT INTO TB_PEDIDOS_PRODUTOS(ID_PEDIDO, ID_PRODUTO) VALUES (3, 1);

INSERT INTO TB_CLIENTES(NOME, IDADE) VALUES ('Cobra', 27);
