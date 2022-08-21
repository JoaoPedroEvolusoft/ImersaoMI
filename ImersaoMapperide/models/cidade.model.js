module.exports = mongoose => {
    const Cidade = mongoose.model(
      "cidade",
      mongoose.Schema(
        {
          codigo: Numero,
          nome: Texto,
          uf: UnidadeFederativa,
          bairros: Bairro,
        },
        { timestamps: true }
      )
    );

    return Cidade;
};
