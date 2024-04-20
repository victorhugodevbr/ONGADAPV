-- CreateTable
CREATE TABLE "tb_endereco" (
    "end_id" SERIAL NOT NULL,
    "end_cep" TEXT NOT NULL,
    "end_rua" TEXT NOT NULL,
    "end_bairro" TEXT NOT NULL,
    "end_numero" INTEGER NOT NULL,
    "end_cidade" TEXT NOT NULL,
    "end_estado" TEXT NOT NULL,
    "end_complemento" TEXT NOT NULL,
    "pess_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_endereco_pkey" PRIMARY KEY ("end_id")
);

-- CreateTable
CREATE TABLE "tb_pessoa" (
    "pess_id" SERIAL NOT NULL,
    "pess_nome" TEXT NOT NULL,
    "pess_cpf" TEXT NOT NULL,
    "pess_rg" TEXT NOT NULL,
    "pess_nasc" TIMESTAMP(3) NOT NULL,
    "pess_nacion" TEXT NOT NULL,
    "pess_genero" TEXT NOT NULL,
    "pess_tel" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_pessoa_pkey" PRIMARY KEY ("pess_id")
);

-- CreateTable
CREATE TABLE "tb_voluntarios" (
    "vol_id" SERIAL NOT NULL,
    "pess_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_voluntarios_pkey" PRIMARY KEY ("vol_id")
);

-- CreateTable
CREATE TABLE "tb_animais" (
    "ani_id" SERIAL NOT NULL,
    "ani_nome" TEXT NOT NULL,
    "ani_nascimento" TEXT NOT NULL,
    "ani_raca" TEXT NOT NULL,
    "ani_sexo" TEXT NOT NULL,
    "ani_especie" TEXT NOT NULL,
    "ani_pelagem" TEXT NOT NULL,
    "ani_ester" TEXT NOT NULL,
    "ani_estado" TEXT NOT NULL,
    "ani_disponivel" TEXT NOT NULL,
    "ani_descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_animais_pkey" PRIMARY KEY ("ani_id")
);

-- CreateTable
CREATE TABLE "tb_adocao" (
    "ado_id" SERIAL NOT NULL,
    "pess_id" INTEGER NOT NULL,
    "ani_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_adocao_pkey" PRIMARY KEY ("ado_id")
);

-- CreateTable
CREATE TABLE "tb_empresas" (
    "emp_id" SERIAL NOT NULL,
    "emp_nome" TEXT NOT NULL,
    "emp_cnpj" TEXT NOT NULL,
    "emp_cep" TEXT NOT NULL,
    "emp_num" INTEGER NOT NULL,
    "emp_cidade" TEXT NOT NULL,
    "emp_estado" TEXT NOT NULL,
    "emp_rua" TEXT NOT NULL,
    "emp_bairro" TEXT NOT NULL,
    "emp_complemento" TEXT NOT NULL,
    "emp_telefone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_empresas_pkey" PRIMARY KEY ("emp_id")
);

-- CreateTable
CREATE TABLE "tb_atividades" (
    "atv_id" SERIAL NOT NULL,
    "atv_nome" TEXT NOT NULL,
    "atv_desc" TEXT NOT NULL,
    "atv_data" TIMESTAMP(3) NOT NULL,
    "vol_id" INTEGER NOT NULL,
    "emp_id" INTEGER NOT NULL,
    "pro_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_atividades_pkey" PRIMARY KEY ("atv_id")
);

-- CreateTable
CREATE TABLE "tb_projetos" (
    "pro_id" SERIAL NOT NULL,
    "pro_nome" TEXT NOT NULL,
    "pro_data" TIMESTAMP(3) NOT NULL,
    "pro_desc" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_projetos_pkey" PRIMARY KEY ("pro_id")
);

-- CreateTable
CREATE TABLE "tb_doacoes" (
    "doa_id" SERIAL NOT NULL,
    "doa_tipo" TEXT NOT NULL,
    "doa_desc" TEXT NOT NULL,
    "doa_qnt" DOUBLE PRECISION NOT NULL,
    "doa_doador" TEXT NOT NULL,
    "doa_cpf_cnpj" TEXT NOT NULL,
    "doa_rg" TEXT NOT NULL,
    "doa_data" TIMESTAMP(3) NOT NULL,
    "pess_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_doacoes_pkey" PRIMARY KEY ("doa_id")
);

-- CreateTable
CREATE TABLE "tb_eventos" (
    "even_id" SERIAL NOT NULL,
    "even_nome" TEXT NOT NULL,
    "even_descricao" TEXT NOT NULL,
    "even_local" TEXT NOT NULL,
    "even_dataInicio" TIMESTAMP(3) NOT NULL,
    "even_dataFinal" TIMESTAMP(3) NOT NULL,
    "ctrlEven_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_eventos_pkey" PRIMARY KEY ("even_id")
);

-- CreateTable
CREATE TABLE "tb_ctrlSaidaEvento" (
    "ctrlEven_id" SERIAL NOT NULL,
    "ctrlEven_desc" TEXT NOT NULL,
    "ctrlEven_estado" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "prodSaida_id" INTEGER NOT NULL,
    "prodSaida_qnt" INTEGER NOT NULL,
    "prodEntrada_id" INTEGER NOT NULL,
    "prodEntrada_qnt" INTEGER NOT NULL,
    "even_id" INTEGER NOT NULL,

    CONSTRAINT "tb_ctrlSaidaEvento_pkey" PRIMARY KEY ("ctrlEven_id")
);

-- CreateTable
CREATE TABLE "tb_produtos" (
    "prod_id" SERIAL NOT NULL,
    "prod_nome" TEXT NOT NULL,
    "prod_tipo" TEXT NOT NULL,
    "prod_desc" TEXT NOT NULL,
    "prod_qnt" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_produtos_pkey" PRIMARY KEY ("prod_id")
);

-- CreateTable
CREATE TABLE "tb_estoque" (
    "estoq_id" SERIAL NOT NULL,
    "prod_id" INTEGER NOT NULL,
    "doa_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_estoque_pkey" PRIMARY KEY ("estoq_id")
);

-- CreateTable
CREATE TABLE "tb_patrimonio" (
    "patrim_id" SERIAL NOT NULL,
    "patrim_saldo" DOUBLE PRECISION NOT NULL,
    "doa_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_patrimonio_pkey" PRIMARY KEY ("patrim_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_pessoa_pess_cpf_key" ON "tb_pessoa"("pess_cpf");

-- CreateIndex
CREATE UNIQUE INDEX "tb_pessoa_pess_rg_key" ON "tb_pessoa"("pess_rg");

-- CreateIndex
CREATE UNIQUE INDEX "tb_voluntarios_pess_id_key" ON "tb_voluntarios"("pess_id");

-- AddForeignKey
ALTER TABLE "tb_endereco" ADD CONSTRAINT "tb_endereco_pess_id_fkey" FOREIGN KEY ("pess_id") REFERENCES "tb_pessoa"("pess_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_voluntarios" ADD CONSTRAINT "tb_voluntarios_pess_id_fkey" FOREIGN KEY ("pess_id") REFERENCES "tb_pessoa"("pess_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_adocao" ADD CONSTRAINT "tb_adocao_pess_id_fkey" FOREIGN KEY ("pess_id") REFERENCES "tb_pessoa"("pess_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_adocao" ADD CONSTRAINT "tb_adocao_ani_id_fkey" FOREIGN KEY ("ani_id") REFERENCES "tb_animais"("ani_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_atividades" ADD CONSTRAINT "tb_atividades_vol_id_fkey" FOREIGN KEY ("vol_id") REFERENCES "tb_voluntarios"("vol_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_atividades" ADD CONSTRAINT "tb_atividades_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "tb_empresas"("emp_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_atividades" ADD CONSTRAINT "tb_atividades_pro_id_fkey" FOREIGN KEY ("pro_id") REFERENCES "tb_projetos"("pro_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_doacoes" ADD CONSTRAINT "tb_doacoes_pess_id_fkey" FOREIGN KEY ("pess_id") REFERENCES "tb_pessoa"("pess_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_ctrlSaidaEvento" ADD CONSTRAINT "tb_ctrlSaidaEvento_even_id_fkey" FOREIGN KEY ("even_id") REFERENCES "tb_eventos"("even_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_estoque" ADD CONSTRAINT "tb_estoque_doa_id_fkey" FOREIGN KEY ("doa_id") REFERENCES "tb_doacoes"("doa_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_estoque" ADD CONSTRAINT "tb_estoque_prod_id_fkey" FOREIGN KEY ("prod_id") REFERENCES "tb_produtos"("prod_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_patrimonio" ADD CONSTRAINT "tb_patrimonio_doa_id_fkey" FOREIGN KEY ("doa_id") REFERENCES "tb_doacoes"("doa_id") ON DELETE RESTRICT ON UPDATE CASCADE;
