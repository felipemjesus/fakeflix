import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default () => {
  const valoresIniciais = { nome: '', cor: '', descricao: '' };
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(valoresIniciais);

  function setValor(campo, valor) {
    setCategoria({
      ...categoria,
      [campo]: valor,
    });
  }

  function handleChange(e) {
    const { value } = e.target;
    setValor(e.target.getAttribute('name'), value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      categoria,
    ]);
    setCategoria(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {categoria.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={categoria.cor}
          onChange={handleChange}
        />
        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={categoria.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={categoria.descricao}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((item) => (
          <li key={`${item.nome}`}>
            {item.nome}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
};
