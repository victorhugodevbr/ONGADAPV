export interface PessoaIn {
  pess_nome: string;
  pess_cpf: string;
  pess_rg: string;
  pess_nasc: Date;
  pess_nacion: string;
  pess_genero: string;
  pess_tel: string;
  pess_tipo: string;
}

export interface PessoaOut {
  pess_id: number;
  pess_nome: string;
  pess_cpf: string;
}