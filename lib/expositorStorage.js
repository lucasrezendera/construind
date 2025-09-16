// Sistema de armazenamento para expositores
const expositores = [
  {
    id: 1,
    numeroStand: "01",
    nome: "Construtora ABC",
    categoria: "Construção Civil",
    endereco: "Rua das Flores, 123 - Centro",
    localizacaoStand: "Stand A1 - Entrada Principal",
    telefone: "01",
    redesSociais: {
      facebook: "https://facebook.com/construtoraabc",
      instagram: "https://instagram.com/construtoraabc",
      linkedin: "https://linkedin.com/company/construtoraabc",
      website: "https://construtoraabc.com.br"
    },
    logo: "/assets/images/team/team-v2-img1.png",
    ativo: true
  },
  {
    id: 2,
    numeroStand: "02", 
    nome: "Materiais XYZ",
    categoria: "Materiais de Construção",
    endereco: "Av. Industrial, 456 - Distrito Industrial",
    localizacaoStand: "Stand A2 - Corredor Central",
    telefone: "02",
    redesSociais: {
      facebook: "https://facebook.com/materiaisxyz",
      instagram: "https://instagram.com/materiaisxyz",
      linkedin: "https://linkedin.com/company/materiaisxyz",
      website: "https://materiaisxyz.com.br"
    },
    logo: "/assets/images/team/team-v2-img2.png",
    ativo: true
  },
  {
    id: 3,
    numeroStand: "03",
    nome: "Decoração & Design",
    categoria: "Acabamentos e Decoração",
    endereco: "Rua da Arte, 789 - Vila Nova",
    localizacaoStand: "Stand B1 - Área de Design",
    telefone: "03",
    redesSociais: {
      facebook: "https://facebook.com/decoracaodesign",
      instagram: "https://instagram.com/decoracaodesign",
      linkedin: "https://linkedin.com/company/decoracaodesign",
      website: "https://decoracaodesign.com.br"
    },
    logo: "/assets/images/team/team-v2-img3.png",
    ativo: true
  }
];

// Funções para gerenciar expositores
export const getExpositores = () => {
  return expositores.filter(expositor => expositor.ativo).sort((a, b) => 
    parseInt(a.numeroStand) - parseInt(b.numeroStand)
  );
};

export const getExpositorById = (id) => {
  return expositores.find(expositor => expositor.id === id);
};

export const searchExpositores = (termo) => {
  const termoLower = termo.toLowerCase();
  return expositores.filter(expositor => 
    expositor.ativo && (
      expositor.nome.toLowerCase().includes(termoLower) ||
      expositor.categoria.toLowerCase().includes(termoLower) ||
      expositor.endereco.toLowerCase().includes(termoLower) ||
      expositor.localizacaoStand.toLowerCase().includes(termoLower)
    )
  ).sort((a, b) => parseInt(a.numeroStand) - parseInt(b.numeroStand));
};

export const addExpositor = (expositor) => {
  const novoId = expositores.length > 0 ? Math.max(...expositores.map(e => e.id)) + 1 : 1;
  const novoExpositor = {
    ...expositor,
    id: novoId,
    ativo: true
  };
  expositores.push(novoExpositor);
  return novoExpositor;
};

export const updateExpositor = (id, dadosAtualizados) => {
  const index = expositores.findIndex(expositor => expositor.id === id);
  if (index !== -1) {
    expositores[index] = { ...expositores[index], ...dadosAtualizados };
    return expositores[index];
  }
  return null;
};

export const deleteExpositor = (id) => {
  const index = expositores.findIndex(expositor => expositor.id === id);
  if (index !== -1) {
    expositores[index].ativo = false;
    return true;
  }
  return false;
};

export const getCategorias = () => {
  const categorias = [...new Set(expositores.map(e => e.categoria))];
  return categorias.sort();
};
