import { date, valid } from "joi"
import { DateTime } from "luxon"

export class PessoaUtils{

    static nomeRegex: RegExp = /^[A-Z][a-z].* [A-Z][a-z].*$/
    static cpfRegex: RegExp = /^[0-9]{11}$/
    static rgRegex: RegExp = /^[0-9]{9}$/
    static nascRegex: RegExp = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    static nacionRegex: RegExp = /^[A-Z][a-z].*$/
    static generoRegex: RegExp = /^[A-Z][a-z].*$/
    static telRegex: RegExp = /^[0-9+]{13,14}$/

    static validarCPF(cpf: string): boolean {
        var Soma = 0
        var Resto
      
        var strCPF = String(cpf).replace(/[^\d]/g, '')
        
        if (strCPF.length !== 11)
           return false
        
        if ([
          '00000000000',
          '11111111111',
          '22222222222',
          '33333333333',
          '44444444444',
          '55555555555',
          '66666666666',
          '77777777777',
          '88888888888',
          '99999999999',
          ].indexOf(strCPF) !== -1)
          return false
      
        for (let i=1; i<=9; i++)
          Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      
        Resto = (Soma * 10) % 11
      
        if ((Resto == 10) || (Resto == 11)) 
          Resto = 0
      
        if (Resto != parseInt(strCPF.substring(9, 10)) )
          return false
      
        Soma = 0
      
        for (let i = 1; i <= 10; i++)
          Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
      
        Resto = (Soma * 10) % 11
      
        if ((Resto == 10) || (Resto == 11)) 
          Resto = 0
      
        if (Resto != parseInt(strCPF.substring(10, 11) ) )
          return false
      
        return this.cpfRegex.test(cpf)
      }

      static validarTel(tel: string): boolean{
        return this.telRegex.test(tel)
      }
      
      static validarNome(nome: string): boolean{
        return this.nomeRegex.test(nome)
      }

      static validarIdade(nascimento: any): boolean{
        const hoje = new Date().getFullYear()

        const data = nascimento.split('-')
        const ano = parseInt(data[0])
        const calcular = hoje - ano
        if(calcular < 18)
          return false
        else{
          return true
        }
      }
}
