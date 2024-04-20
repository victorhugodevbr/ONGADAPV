import { Request, Response } from "express";
import PessoaModel from "../models/pessoaModel";
import { PessoaIn, PessoaOut } from "../dtos/pessoaDTO";

const pessoaModel = new PessoaModel();

export default class PessoaController {
  create = async (req: Request, res: Response) => {
    try {
      const pessoa: PessoaIn = req.body;
      const newPessoa: PessoaOut = await pessoaModel.create(pessoa);
      pessoa.pess_nasc = new Date(pessoa.pess_nasc)
      res.status(201).json(newPessoa);
    } catch (e) {
      console.log("Failed to create user", e);
      res.status(500).send({
        error: "USR-01",
        message: "Failed to create user",
      });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const pess_id: number = parseInt(req.params.id);
      const newPessoa: PessoaOut | null = await pessoaModel.get(pess_id);

      if (newPessoa) {
        res.status(200).json(newPessoa);
      } else {
        res.status(404).json({
          error: "USR-06",
          message: "Pessoa not found.",
        });
      }
    } catch (e) {
      console.log("Failed to get pessoa", e);
      res.status(500).send({
        error: "USR-02",
        message: "Failed to get pessoa",
      });
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const pessoas: PessoaOut[] | null = await pessoaModel.getAll();
      res.status(200).json(pessoas);
    } catch (e) {
      console.log("Failed to get all pessoas", e);
      res.status(500).send({
        error: "USR-03",
        message: "Failed to get all pessoas",
      });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const pess_id: number = parseInt(req.params.id);
      const updatePessoa: PessoaIn = req.body;
      const pessoaUpdated: PessoaOut | null = await pessoaModel.update(
        pess_id,
        updatePessoa
      );

      if (pessoaUpdated) {
        res.status(200).json(pessoaUpdated);
      } else {
        res.status(404).json({
          error: "USR-06",
          message: "Pessoa not found.",
        });
      }
    } catch (e) {
      console.log("Failed to update pessoa", e);
      res.status(500).send({
        error: "USR-04",
        message: "Failed to update pessoa",
      });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const pess_id: number = parseInt(req.params.id);
      const pessoaDeleted = await pessoaModel.delete(pess_id);
      res.status(204).json(pessoaDeleted);
    } catch (e) {
      console.log("Failed to delete pessoa", e);
      res.status(500).send({
        error: "USR-05",
        message: "Failed to delete pessoa",
      });
    }
  };
}
