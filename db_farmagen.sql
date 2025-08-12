CREATE DATABASE db_farmagen;

USE db_farmagen;

-- Sugestão de categorias para se preencher
INSERT INTO tb_categorias (categoria_nome, descricao, precisaReceita, data_criacao, data_atualizacao) VALUES
('Analgésicos', 'Medicamentos para aliviar dores e reduzir febre, geralmente de venda livre.', 0, NOW(), NOW()),
('Antibióticos', 'Medicamentos usados para tratar infecções bacterianas. Necessitam de receita médica.', 1, NOW(), NOW()),
('Vitaminas e Suplementos', 'Produtos para complementar a dieta e fornecer nutrientes essenciais.', 0, NOW(), NOW()),
('Dermocosméticos', 'Produtos para cuidados com a pele, cabelos e unhas, com foco em saúde e beleza.', 0, NOW(), NOW()),
('Higiene Pessoal', 'Produtos de uso diário para higiene e limpeza corporal.', 0, NOW(), NOW()),
('Cardiológicos', 'Medicamentos para tratar doenças do coração e do sistema circulatório. Requerem receita médica.', 1, NOW(), NOW()),
('Controlados', 'Medicamentos sujeitos a regulamentação especial, como ansiolíticos. Venda com retenção de receita.', 1, NOW(), NOW());

-- Sugestão de produtos para se preencher
INSERT INTO tb_produtos (nome, descricao, estoque, principioAtivo, unidadeMedida, codigoDeBarras, validadeDidas, dataCadastro, dataAlteracao, categoria_id) VALUES
('Dipirona 500mg', 'Analgésico e antitérmico para dores leves a moderadas e febre.', 150, 'Dipirona Sódica', 'Comprimidos', '7891234560011', '2027-12-31', NOW(), NOW(), 1),
('Amoxicilina 500mg', 'Antibiótico indicado para infecções bacterianas.', 80, 'Amoxicilina', 'Comprimidos', '7891234560028', '2026-06-30', NOW(), NOW(), 2),
('Vitamina C 1g', 'Suplemento vitamínico para fortalecer o sistema imunológico.', 200, 'Ácido Ascórbico', 'Efervescente', '7891234560035', '2028-03-15', NOW(), NOW(), 3),
('Protetor Solar FPS 30', 'Protetor solar facial e corporal com alta proteção UVA/UVB.', 120, 'Óxido de Zinco', 'Frasco', '7891234560042', '2027-10-20', NOW(), NOW(), 4),
('Shampoo Anticaspa', 'Shampoo para tratamento e prevenção da caspa.', 90, 'Piritionato de Zinco', 'Frasco', '7891234560059', '2026-11-05', NOW(), NOW(), 5),
('Losartana 50mg', 'Medicação para controle da pressão arterial.', 65, 'Losartana Potássica', 'Comprimidos', '7891234560066', '2028-05-20', NOW(), NOW(), 6),
('Clonazepam 2mg', 'Ansiolítico e anticonvulsivante de uso controlado.', 40, 'Clonazepam', 'Comprimidos', '7891234560073', '2026-09-10', NOW(), NOW(), 7),
('Ibuprofeno 400mg', 'Anti-inflamatório e analgésico, para alívio de dores diversas.', 175, 'Ibuprofeno', 'Cápsulas', '7891234560080', '2027-08-01', NOW(), NOW(), 1),
('Cefalexina 500mg', 'Antibiótico da classe das cefalosporinas.', 70, 'Cefalexina', 'Cápsulas', '7891234560097', '2026-04-12', NOW(), NOW(), 2),
('Polivitamínico AZ', 'Suplemento completo com vitaminas e minerais.', 130, 'Diversos', 'Comprimidos', '7891234560103', '2028-01-25', NOW(), NOW(), 3),
('Creme Hidratante Facial', 'Creme com ácido hialurônico para hidratação intensa da pele.', 110, 'Ácido Hialurônico', 'Frasco', '7891234560110', '2027-09-09', NOW(), NOW(), 4),
('Escova de Dentes Macia', 'Escova de dentes com cerdas macias para higiene bucal.', 250, 'Nenhum', 'Unidade', '7891234560127', '2030-01-01', NOW(), NOW(), 5),
('Atenolol 25mg', 'Betabloqueador para o tratamento da hipertensão arterial.', 55, 'Atenolol', 'Comprimidos', '7891234560134', '2028-07-18', NOW(), NOW(), 6),
('Rivotril 0.5mg', 'Ansiolítico e relaxante muscular, da família dos benzodiazepínicos.', 30, 'Clonazepam', 'Comprimidos', '7891234560141', '2026-08-22', NOW(), NOW(), 7),
('Paracetamol 750mg', 'Analgésico e antitérmico popular.', 180, 'Paracetamol', 'Comprimidos', '7891234560158', '2027-11-10', NOW(), NOW(), 1),
('Azitromicina 500mg', 'Antibiótico de amplo espectro para infecções respiratórias.', 60, 'Azitromicina', 'Comprimidos', '7891234560165', '2026-05-05', NOW(), NOW(), 2),
('Colágeno Hidrolisado', 'Suplemento para saúde da pele, unhas e articulações.', 95, 'Colágeno', 'Pó', '7891234560172', '2028-11-30', NOW(), NOW(), 3),
('Sabonete Líquido Neutro', 'Sabonete para uso diário, hipoalergênico.', 140, 'Glicerina', 'Frasco', '7891234560189', '2029-04-15', NOW(), NOW(), 5),
('Metformina 850mg', 'Medicamento para controle da diabetes tipo 2.', 75, 'Metformina', 'Comprimidos', '7891234560196', '2027-03-20', NOW(), NOW(), 6),
('Fluoxetina 20mg', 'Antidepressivo da classe dos ISRSs.', 50, 'Fluoxetina', 'Cápsulas', '7891234560202', '2026-10-28', NOW(), NOW(), 7);

-- DROP DATABASE db_farmagen;