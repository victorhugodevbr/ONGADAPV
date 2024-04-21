
export enum HTTP_Codes {
    BadRequest = 400,
    Unaythorized = 401,
    ServerError = 500,
    Ok = 200,
    NotFound = 404
}

export enum Tabela {
    Adocao = "adocao",
    Animal = "animal",
    Atividade = "atividade",
    CtrlSaidaEvento = "controle de saida de evento",
    Doacoes = "doacoes",
    Empresa = "empresa",
    Endereco = "endereco",
    Estoque = "estoque",
    Evento = "evento",
    Patrimonio = "patrimonio",
    Pessoa = "pessoa",
    Produto = "produto",
    Projeto = "projeto",
    Voluntario = "voluntario"
}

export enum Atributo {
    id = "id",
    nome = "Nome",
    telefone = "Telefone",
    cpf = "CPF",
    rg = "RG",
    dataNasc = "Data de Nascimento",
    nacionalidade = "Nacionalidade",
    genero = "Genero",
    cep = "CEP",
    rua = "Rua",
    num = 'Numero',
    complem = 'Complemento',
    bairro = 'Bairro',
    cidade = 'Cidade',
    uf = 'UF',
    contaBanc_senhatransacao = 'Senha Transacional',
    contaBanc_tipo = 'Tipo de conta',
    contaBanc_saldo = 'Saldo',
    trans_valor = 'Valor',
    trans_metodo = 'Metodo',
    trans_descricao = 'Descricao',
    usuId_destinatario = 'CPF de Destinatario',
    usu_senhanova = 'Senha nova',
    contaBanc_senhatransacaonova = 'Senha Transacional nova'
}

export interface Erro {
    atributo: Atributo;
    tabela: Tabela;
    codigo: HTTP_Codes;
    mensagem: string;
}