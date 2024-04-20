import "dotenv/config";
import express from "express";
import animalRoute from "./routes/animalRoute";
import adocaoRoute from "./routes/adocaoRoute";
import atividadeRoute from "./routes/atividadeRoute";
import ctrlSaidaEventoRoute from "./routes/ctrlSaidaEventoRoute";
import pessoaRoute from "./routes/pessoaRoute";
import produtoRoute from "./routes/produtoRoute";
import voluntarioRoute from "./routes/voluntarioRoute";
import doacoesRoute from "./routes/doacoesRoute";
import empresaRoute from "./routes/empresaRoute";
import enderecoRoute from "./routes/enderecoRoute";
import estoqueRoute from "./routes/estoqueRoute";
import eventosRoute from "./routes/eventosRoute";
import patrimonioRoute from "./routes/patrimonioRoute";
import projetosRoute from "./routes/projetosRoute";

import { authentication } from "./middlewares/auth";
import { DateTime } from "luxon";

DateTime.local().setZone("America/Sao_Paulo");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  return res.send("Hello World");
});
app.use("/animal", authentication, animalRoute);
app.use("/adocao", authentication, adocaoRoute);
app.use("/atividade", authentication, atividadeRoute);
app.use("/ctrlSaidaEvento", authentication, ctrlSaidaEventoRoute);
app.use("/pessoa", authentication, pessoaRoute);
app.use("/produto", authentication, produtoRoute);
app.use("/voluntario", authentication, voluntarioRoute);
app.use("/doacoes", authentication, doacoesRoute);
app.use("/empresa", authentication, empresaRoute);
app.use("/endereco", authentication, enderecoRoute);
app.use("/estoque", authentication, estoqueRoute);
app.use("/eventos", authentication, eventosRoute);
app.use("/patrimonio", authentication, patrimonioRoute);
app.use("/projetos", authentication, projetosRoute);

app.listen(process.env.PORT || 5000);
