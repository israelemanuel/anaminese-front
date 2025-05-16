export const form = [
  {
    section: "Identificação da Criança",
    areas: [
      {
        name: "Identificação",
        fields: [
          { label: "Nome", type: "input", width: "col-span-1" },
          { label: "Idade", type: "input", width: "col-span-1" },
          { label: "Nascimento", type: "date", width: "col-span-1" },
          { label: "CPF", type: "input", width: "col-span-1" },
          { label: "Endereço", type: "input", width: "col-span-1" },
          { label: "Religião", type: "input", width: "col-span-1" },
          { label: "Acompanhamento Médico", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Médico", type: "input", width: "col-span-1" },
          { label: "Tel.", type: "input", width: "col-span-1" },
          { label: "Faz uso de medicação", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Qual", type: "input", width: "col-span-1" },
          { label: "Frequência", type: "input", width: "col-span-1" }
        ]
      },
      {
        name: "Contatos",
        fields: [
          { label: "Fone Res.", type: "input", width: "col-span-1" },
          { label: "Cel Mãe", type: "input", width: "col-span-1" },
          { label: "Cel Pai", type: "input", width: "col-span-1" }
        ]
      }
    ]
  },
  {
    section: "Dados Familiares",
    areas: [
      {
        name: "Pai",
        fields: [
          { label: "Nome do pai", type: "input", width: "col-span-1" },
          { label: "Grau de instrução do pai", type: "input", width: "col-span-1" },
          { label: "Profissão do pai", type: "input", width: "col-span-1" },
          { label: "Idade do pai", type: "input", width: "col-span-1" },
          { label: "Naturalidade do pai", type: "input", width: "col-span-1" },
          { label: "Estado civil do pai", type: "input", width: "col-span-1" }
        ]
      },
      {
        name: "Mãe",
        fields: [
          { label: "Nome da mãe", type: "input", width: "col-span-1" },
          { label: "Grau de instrução da mãe", type: "input", width: "col-span-1" },
          { label: "Profissão da mãe", type: "input", width: "col-span-1" },
          { label: "Idade da mãe", type: "input", width: "col-span-1" },
          { label: "Naturalidade da mãe", type: "input", width: "col-span-1" },
          { label: "Estado civil da mãe", type: "input", width: "col-span-1" }
        ]
      },
      {
        name: "Demais",
        fields: [
          { label: "Religião dos pais", type: "input", width: "col-span-1" },
          { label: "Situação Conjugal", type: "input", width: "col-span-1" },
          { label: "Irmãos/Idade/Nome", type: "input", width: "col-span-1" },
          { label: "Como é o ambiente familiar?", type: "textarea", width: "col-span-2" },
          { label: "Com quem a criança costuma ficar?", type: "input", width: "col-span-1" }
        ]
      }
    ]
  },
  {
    section: "Queixa/motivo da consulta",
    areas: [
      {
        name: "",
        fields: [
          { label: "Desde quando há o problema?", type: "input", width: "col-span-1" },
          { label: "Já procurou outros especialistas? Quais?", type: "input", width: "col-span-1" },
          { label: "Está atualmente fazendo algum tipo de tratamento médico, psicológico, psiquiátrico ou neurológico etc..?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Por que?", type: "textarea", width: "col-span-2" }
        ]
      }
    ]
  },
  {
    section: "Escolarização",
    areas: [
      {
        name: "Dados escolares",
        fields: [
          { label: "Escola", type: "input", width: "col-span-1" },
          { label: "Série", type: "input", width: "col-span-1" },
          { label: "Turno", type: "input", width: "col-span-1" },
          { label: "Nome do Professor(a)", type: "input", width: "col-span-1" }
        ]
      },
      {
        name: "Comportamento escolar",
        fields: [
          { label: "A criança gosta de ir a escola?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "É bem aceita pelos amigos ou é isolada?", type: "input", width: "col-span-1" },
          { label: "Já repetiu alguma série?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Por que?", type: "input", width: "col-span-1" },
          { label: "Gosta de estudar?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Tem o hábito de leitura?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Faz as lições que os professores passam?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Os pais estudam com a criança?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Desempenho em matemática?", type: "input", width: "col-span-1" },
          { label: "Tem dificuldades de leitura e escrita?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "É irrequieta na escola? Em que circunstância/ frequência?", type: "input", width: "col-span-1" },
          { label: "Quais as dificuldades enfrentadas na escola?", type: "textarea", width: "col-span-2" },
          { label: "O que os professores relatam sobre o comportamento da criança?", type: "textarea", width: "col-span-2" },
          { label: "Outras observações", type: "textarea", width: "col-span-2" },
          { label: "A criança recebe algum tipo de orientação quanto aos deveres de casa?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Quem oferece?", type: "input", width: "col-span-1" },
          { label: "Durante quanto tempo?", type: "input", width: "col-span-1" },
          { label: "A criança já estudou antes em outra escola?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Qual?", type: "input", width: "col-span-1" },
          { label: "Motivo da transferência", type: "input", width: "col-span-1" },
          { label: "Teve problemas em se adaptar à escola? Quais?", type: "input", width: "col-span-1" }
        ]
      }
    ]
  },
  {
    section: "Histórico Gestacional",
    areas: [
      {
        name: "",
        fields: [
          { label: "Gestação / Expectativas", type: "textarea", width: "col-span-2" },
          { label: "Fez alguma transfusão de sangue durante a gravidez?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Levou algum tombo?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Apresentou alguma doença durante a gravidez?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Cesariana / Normal?", type: "input", width: "col-span-1" },
          { label: "Peso", type: "input", width: "col-span-1" },
          { label: "Estatura", type: "input", width: "col-span-1" },
          { label: "Condições de saúde da mãe durante a gravidez", type: "textarea", width: "col-span-2" },
          { label: "Algum conflito e/ou episódio marcante durante a gestação?", type: "textarea", width: "col-span-2" }
        ]
      }
    ]
  },
  {
    section: "Linguagem e Desenvolvimento",
    areas: [
      {
        name: "",
        fields: [
          { label: "Andou com quantos anos?", type: "input", width: "col-span-1" },
          { label: "Engatinhou?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Controle de Esfíncteres?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Controle de Enurese?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Controle de Encoprese?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Falou com quantos anos?", type: "input", width: "col-span-1" },
          { label: "Apresenta gagueira?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Choro frequente?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Possui reações alérgicas?", type: "input", width: "col-span-1" },
          { label: "Tem bronquite ou asma?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Apresenta problemas de visão?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "E de audição?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Dor de cabeça?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Já desmaiou alguma vez?Quando?Como foi?", type: "textarea", width: "col-span-2" },
          { label: "Teve ou tem convulsões?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Há alguém na família que apresenta problemas de desmaios, convulsões, ataques?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Observações", type: "textarea", width: "col-span-2" }
        ]
      }
    ]
  },
  {
    section: "Desenvolvimento psicomotor",
    areas: [
      {
        name: "",
        fields: [
          { label: "Como era como bebê?", type: "textarea", width: "col-span-2" },
          { label: "É lento para realizar alguma tarefa?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Veste-se sozinho?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Toma banho sozinho?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Calça-se sozinho?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Sabe dar nó nos calçados?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "É desastrado?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Pratica esportes?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Quais?", type: "input", width: "col-span-1" },
          { label: "Chupa o dedo?", type: "select", options: ["Sim", "Não"], width: "col-span-1" }
        ]
      }
    ]
  },
  {
    section: "Antecedentes Patológicos",
    areas: [
      {
        name: "",
        fields: [
          { label: "Condições do nascimento", type: "textarea", width: "col-span-2" },
          { label: "Teve alguma doença?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Qual?", type: "input", width: "col-span-1" },
          { label: "Já foi submetido a cirurgia, internação?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Qual?", type: "input", width: "col-span-1" },
          { label: "Quando?", type: "input", width: "col-span-1" },
          { label: "Por quê?", type: "input", width: "col-span-1" },
          { label: "Tem alguma doença atualmente?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Qual?", type: "input", width: "col-span-1" },
          { label: "Está sendo tratado?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Teve perdas importantes, mortes ou abandonos?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Alcoolismo e/ou drogas na família?", type: "select", options: ["Sim", "Não"], width: "col-span-1" }
        ]
      }
    ]
  },
  {
    section: "Sono",
    areas: [
      {
        name: "",
        fields: [
          { label: "Medo de dormir?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Sonambulismo", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Terrores Noturnos", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Hipersonia", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Pesadelos", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Insônia", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Dorme sozinha(o)?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Com quem?", type: "input", width: "col-span-1" },
          { label: "Observações", type: "textarea", width: "col-span-2" }
        ]
      }
    ]
  },
  {
    section: "Sexualidade",
    areas: [
      {
        name: "",
        fields: [
          { label: "Recebeu alguma educação sexual? De quem?", type: "input", width: "col-span-1" },
          { label: "O que foi orientado?", type: "textarea", width: "col-span-2" },
          { label: "Tem curiosidade Sexual?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Os pais conversam sobre sexualidade com a criança?", type: "select", options: ["Sim", "Não"], width: "col-span-1" }
        ]
      }
    ]
  },
  {
    section: "Sociabilidade",
    areas: [
      {
        name: "",
        fields: [
          { label: "Tem amigos?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Muitos ou poucos?", type: "input", width: "col-span-1" },
          { label: "Como é o relacionamento com eles?", type: "textarea", width: "col-span-2" },
          { label: "Como se comporta em ambientes diferentes?", type: "textarea", width: "col-span-2" },
          { label: "Prefere brincar em grupo ou sozinho?", type: "input", width: "col-span-1" },
          { label: "Costuma destruir os brinquedos ou é cuidadoso com eles?", type: "input", width: "col-span-1" },
          { label: "De que gosta mais de brincar?", type: "input", width: "col-span-1" },
          { label: "Tem hábito de pegar o que é do outro?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Como se comporta quando fica irritado?", type: "textarea", width: "col-span-2" }
        ]
      }
    ]
  },
  {
    section: "Alimentação",
    areas: [
      {
        name: "",
        fields: [
          { label: "Como é sua alimentação?", type: "textarea", width: "col-span-2" },
          { label: "Forçado a se alimentar?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Come sem derrubar a comida?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Recebe ajuda na alimentação?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Foi amamentado?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Até que idade? (amamentação)", type: "input", width: "col-span-1" },
          { label: "Usou mamadeira?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Até que idade? (mamadeira)", type: "input", width: "col-span-1" },
          { label: "Usou chupeta?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Até que idade? (chupeta)", type: "input", width: "col-span-1" },
          { label: "Vômitos", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Polifagia", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Fobia de alimentos", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Anorexia", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Comer demais", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Ruminação", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Regurgitação", type: "select", options: ["Sim", "Não"], width: "col-span-1" }
        ]
      }
    ]
  },
  {
    section: "Apresenta os comportamentos",
    areas: [
      {
        name: "",
        fields: [
          { label: "Inquietação motora contínua: corridas, saltos, etc", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Dificuldade motora em manter-se sentado", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Mudança rápida de atividade", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Maneirismos motores fixos/tiques/manias/TOC", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Quais? (maneirismos)", type: "input", width: "col-span-1" },
          { label: "Rói unhas?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Autolesão repetitiva", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Acessos de birra frequentes", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Com frequência culpa os outros pelos seus próprios erros", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Desafia regras", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "É sensível ou facilmente aborrecida pelos outros", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Medos", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "De que? (medos)", type: "input", width: "col-span-1" },
          { label: "Sudorese nas mãos e pés", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Introversão", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Extroversão", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "É curioso", type: "select", options: ["Sim", "Não"], width: "col-span-1" }
        ]
      }
    ]
  },
  {
    section: "Características pessoais e afetivo-emocionais",
    areas: [
      {
        name: "",
        fields: [
          { label: "Como a criança é vista sob o ponto de vista emocional?", type: "textarea", width: "col-span-2" },
          { label: "Dentre as características abaixo, em que mais se enquadra?", type: "input", width: "col-span-1" },
          { label: "Como reage quando é contrariada?", type: "textarea", width: "col-span-2" },
          { label: "Atividades Preferidas", type: "input", width: "col-span-1" }
        ]
      }
    ]
  },
  {
    section: "Outras informações relevantes",
    areas: [
      {
        name: "",
        fields: [
          { label: "É comemorado aniversários/Datas importantes?", type: "select", options: ["Sim", "Não"], width: "col-span-1" },
          { label: "Como é dada advertência disciplinares/limites à criança? Quem dá?", type: "textarea", width: "col-span-2" },
          { label: "Como a criança reage/comportamento?", type: "textarea", width: "col-span-2" },
          { label: "Descrição de interesses (reforços) e potencialidades da criança", type: "textarea", width: "col-span-2" },
          { label: "Descrição da Rotina da criança desde quando acorda até a hora de dormir", type: "textarea", width: "col-span-2" }
        ]
      }
    ]
  }
];

export default form;
