import { PrismaClient } from '@prisma/client';
import { PessoaIn } from '../dtos/pessoaDTO';

const prisma = new PrismaClient();

export default class PessoaModel {

  create = async (pessoa: PessoaIn) => {
    return await prisma.tb_pessoa.create({
      data: {
        pess_nome: pessoa.pess_nome,
        pess_cpf: pessoa.pess_cpf,
        pess_rg: pessoa.pess_rg,
        pess_nasc: pessoa.pess_nasc + "T00:00:00.000Z",
        pess_nacion: pessoa.pess_nacion,
        pess_genero: pessoa.pess_genero,
        pess_tel: pessoa.pess_tel
      }
    });
  }


  getAll = async () => {
    return await prisma.tb_pessoa.findMany();
  }

  get = async (pess_id: number) => {
    return await prisma.tb_pessoa.findUnique({
      where: {
        pess_id
      }
    });
  }

  delete = async (pess_id: number) => {
    return await prisma.tb_pessoa.delete({
      where: {
        pess_id
      }
    })
  }

  update = async (pess_id: number, pessoa: PessoaIn) => {
    return await prisma.tb_pessoa.update({
      where: {
        pess_id
      },
      data: {
        ...pessoa
      }
    })
  }
};