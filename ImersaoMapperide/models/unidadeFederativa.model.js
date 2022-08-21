module.exports = mongoose => {
    const UnidadeFederativa = mongoose.model(
      "unidadeFederativa",
      mongoose.Schema(
        {
          sigla: Texto,
          nome: Texto,
        },
        { timestamps: true }
      )
    );

    return UnidadeFederativa;
};
