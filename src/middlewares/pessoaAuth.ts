import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { PessoaUtils } from '../utils/pessoaUtils';
import { manipulaErros } from '../controllers/ErrorController';
import { Atributo, HTTP_Codes, Tabela } from '../dtos/errorDTO';

const adicionaErros = new manipulaErros()

export const validandoPessoaUpdate = (req: Request, res:Response, next: NextFunction) => {
    const pessoaSchema = Joi.object({
        pess_nome: Joi.string().regex(PessoaUtils.nomeRegex).required(),
        pess_nasc: Joi.custom((value, helpers) => {
          if(!PessoaUtils.nascRegex.test(value)){
              return helpers.error('erro digitacao')
          }
          return value
      }).required(),
        pess_nacion: Joi.string().regex(PessoaUtils.nacionRegex).required(),
        pess_genero: Joi.string().regex(PessoaUtils.generoRegex).required(),
        pess_tipo: Joi.string().regex(PessoaUtils.tipoRegex).required(),
        pess_tel: Joi.string().regex(PessoaUtils.telRegex).required(),
        // pess_id: Joi.number().required(),
    })
    adicionaErros.clearErros()
    const pessoa = req.body;
    const resultado = pessoaSchema.validate(pessoa, {abortEarly: false});
    console.log(resultado)
    if(resultado.error) {
        resultado.error.details.forEach((objUsuario)=>{
            if(objUsuario.path.includes('pess_nome')){
                adicionaErros.adicionaErro(Tabela.Pessoa , Atributo.nome, HTTP_Codes.BadRequest, '')
                
            }

            if(objUsuario.path.includes('pess_tel')){
                adicionaErros.adicionaErro(Tabela.Pessoa , Atributo.telefone, HTTP_Codes.BadRequest, '')
                
            }

            if(objUsuario.path.includes('pess_nasc')){
                if(objUsuario.type.includes('erro digitacao')){
                    adicionaErros.adicionaErro(Tabela.Pessoa , Atributo.dataNasc, HTTP_Codes.BadRequest, '')
                }
                
            }
        })
        const listaErros = adicionaErros.getErros()
        return res.status(400).send({error: listaErros})

    }else{
        next()
    }

}

export const validandoPessoa = (req: Request, res:Response, next: NextFunction) => {
    const pessoaSchema = Joi.object({
        pess_nome: Joi.string().regex(PessoaUtils.nomeRegex).required(),
        pess_cpf: Joi.string().custom((pess_cpf, helpers) => {
          if(!PessoaUtils.validarCPF(pess_cpf)){
              return helpers.error('400')
          }
          return pess_cpf
  }).required(),
        pess_rg: Joi.string().regex(PessoaUtils.rgRegex).required(),
        pess_nacion: Joi.string().regex(PessoaUtils.nacionRegex).required(),
        pess_nasc: Joi.custom((value, helpers) => {
            if(!PessoaUtils.nascRegex.test(value)){
                return helpers.error('erro digitacao')
            }
            return value
        }).required(), 
        pess_tel: Joi.string().regex(PessoaUtils.telRegex).required(),
        pess_genero: Joi.string().regex(PessoaUtils.generoRegex).required(),
        pess_tipo: Joi.string().regex(PessoaUtils.tipoRegex).required(),

        
    })
    adicionaErros.clearErros()
    const pessoa = req.body;
    const resultado = pessoaSchema.validate(pessoa, {abortEarly: false});
    console.log(resultado)
    if(resultado.error) {
        resultado.error.details.forEach((objUsuario)=>{
            if(objUsuario.path.includes('pess_nome')){
                adicionaErros.adicionaErro(Tabela.Pessoa , Atributo.nome, HTTP_Codes.BadRequest, '')
            }
            if(objUsuario.path.includes('pess_cpf')){
                adicionaErros.adicionaErro(Tabela.Pessoa , Atributo.cpf, HTTP_Codes.BadRequest, '')
            }
            if(objUsuario.path.includes('pess_rg')){
                adicionaErros.adicionaErro(Tabela.Pessoa , Atributo.rg, HTTP_Codes.BadRequest, '')
            }
            if(objUsuario.path.includes('pess_nasc')){
                adicionaErros.adicionaErro(Tabela.Pessoa , Atributo.dataNasc, HTTP_Codes.BadRequest, '')
            }
            if(objUsuario.path.includes('pess_nacion')){
                adicionaErros.adicionaErro(Tabela.Pessoa , Atributo.nacionalidade, HTTP_Codes.BadRequest, '')
                }
            if(objUsuario.path.includes('pess_genero')){
                adicionaErros.adicionaErro(Tabela.Pessoa, Atributo.genero, HTTP_Codes.BadRequest, '')
                }
            if(objUsuario.path.includes('pess_tel')){
              adicionaErros.adicionaErro(Tabela.Pessoa, Atributo.telefone, HTTP_Codes.BadRequest, '')
              }
            if(objUsuario.path.includes('pess_tipo')){
              adicionaErros.adicionaErro(Tabela.Pessoa, Atributo.tipoDePessoa, HTTP_Codes.BadRequest, '')
              }
        })
        const listaErros = adicionaErros.getErros()
        return res.status(400).send({error: listaErros})
    }else{
        next()
    }

}