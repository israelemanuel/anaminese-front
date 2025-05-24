export const form = [
  {
    section: "Identificação da Criança",
    areas: [
      {
        name: "Identificação",
        fields: [
          { label: "Nome", name: "nome_identificacao_crianca", type: "input", width: "col-span-1", value: null },
          { label: "Idade", name: "idade_identificacao_crianca", type: "input", width: "col-span-1", value: null },
          { label: "Nascimento", name: "nascimento_identificacao_crianca", type: "date", width: "col-span-1", value: null },
          { label: "CPF", name: "cpf_identificacao_crianca", type: "input", width: "col-span-1", value: null },
          { label: "Endereço", name: "endereco_identificacao_crianca", type: "input", width: "col-span-1", value: null },
          { label: "Religião", name: "religiao_identificacao_crianca", type: "input", width: "col-span-1", value: null },
          { label: "Acompanhamento Médico", name: "acomp_medico_identificacao_crianca", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Médico", name: "medico_identificacao_crianca", type: "input", width: "col-span-1", value: null },
          { label: "Tel.", name: "tel_identificacao_crianca", type: "input", width: "col-span-1", value: null },
          { label: "Faz uso de medicação", name: "uso_medicacao_identificacao_crianca", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Qual", name: "qual_medicacao_identificacao_crianca", type: "input", width: "col-span-1", value: null },
          { label: "Frequência", name: "frequencia_medicacao_identificacao_crianca", type: "input", width: "col-span-1", value: null }
        ]
      },
      {
        name: "Contatos",
        fields: [
          { label: "Fone Res.", name: "fone_res_contatos_identificacao_crianca", type: "input", width: "col-span-1", value: null },
          { label: "Cel Mãe", name: "cel_mae_contatos_identificacao_crianca", type: "input", width: "col-span-1", value: null },
          { label: "Cel Pai", name: "cel_pai_contatos_identificacao_crianca", type: "input", width: "col-span-1", value: null }
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
          { label: "Nome do pai", name: "nome_pai_dados_familiares", type: "input", width: "col-span-1", value: null },
          { label: "Grau de instrução do pai", name: "grau_instrucao_pai_dados_familiares", type: "input", width: "col-span-1", value: null },
          { label: "Profissão do pai", name: "profissao_pai_dados_familiares", type: "input", width: "col-span-1", value: null },
          { label: "Idade do pai", name: "idade_pai_dados_familiares", type: "input", width: "col-span-1", value: null },
          { label: "Naturalidade do pai", name: "naturalidade_pai_dados_familiares", type: "input", width: "col-span-1", value: null },
          { label: "Estado civil do pai", name: "estado_civil_pai_dados_familiares", type: "input", width: "col-span-1", value: null }
        ]
      },
      {
        name: "Mãe",
        fields: [
          { label: "Nome da mãe", name: "nome_mae_dados_familiares", type: "input", width: "col-span-1", value: null },
          { label: "Grau de instrução da mãe", name: "grau_instrucao_mae_dados_familiares", type: "input", width: "col-span-1", value: null },
          { label: "Profissão da mãe", name: "profissao_mae_dados_familiares", type: "input", width: "col-span-1", value: null },
          { label: "Idade da mãe", name: "idade_mae_dados_familiares", type: "input", width: "col-span-1", value: null },
          { label: "Naturalidade da mãe", name: "naturalidade_mae_dados_familiares", type: "input", width: "col-span-1", value: null },
          { label: "Estado civil da mãe", name: "estado_civil_mae_dados_familiares", type: "input", width: "col-span-1", value: null }
        ]
      },
      {
        name: "Demais",
        fields: [
          { label: "Religião dos pais", name: "religiao_pais_dados_familiares", type: "input", width: "col-span-1", value: null },
          { label: "Situação Conjugal", name: "situacao_conjugal_dados_familiares", type: "input", width: "col-span-1", value: null },
          { label: "Irmãos/Idade/Nome", name: "irmaos_idade_nome_dados_familiares", type: "input", width: "col-span-1", value: null },
          { label: "Como é o ambiente familiar?", name: "ambiente_familiar_dados_familiares", type: "textarea", width: "col-span-2", value: null },
          { label: "Com quem a criança costuma ficar?", name: "com_quem_crianca_fica_dados_familiares", type: "input", width: "col-span-1", value: null }
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
          { label: "Desde quando há o problema?", name: "desde_quando_problema_queixa", type: "input", width: "col-span-1", value: null },
          { label: "Já procurou outros especialistas? Quais?", name: "ja_procurou_especialistas_queixa", type: "input", width: "col-span-1", value: null },
          { label: "Está atualmente fazendo algum tipo de tratamento médico, psicológico, psiquiátrico ou neurológico etc..?", name: "tratamento_atual_queixa", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Por que?", name: "por_que_queixa", type: "textarea", width: "col-span-2", value: null }
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
          { label: "Escola", name: "escola_dados_escolares", type: "input", width: "col-span-1", value: null },
          { label: "Série", name: "serie_dados_escolares", type: "input", width: "col-span-1", value: null },
          { label: "Turno", name: "turno_dados_escolares", type: "input", width: "col-span-1", value: null },
          { label: "Nome do Professor(a)", name: "nome_professor_dados_escolares", type: "input", width: "col-span-1", value: null }
        ]
      },
      {
        name: "Comportamento escolar",
        fields: [
          { label: "A criança gosta de ir a escola?", name: "gosta_ir_escola_comportamento_escolar", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "É bem aceita pelos amigos ou é isolada?", name: "bem_aceita_amigos_comportamento_escolar", type: "input", width: "col-span-1", value: null },
          { label: "Já repetiu alguma série?", name: "ja_repetiu_serie_comportamento_escolar", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Por que?", name: "por_que_repetiu_serie_comportamento_escolar", type: "input", width: "col-span-1", value: null },
          { label: "Gosta de estudar?", name: "gosta_estudar_comportamento_escolar", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Tem o hábito de leitura?", name: "habito_leitura_comportamento_escolar", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Faz as lições que os professores passam?", name: "faz_licoes_professores_comportamento_escolar", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Os pais estudam com a criança?", name: "pais_estudam_crianca_comportamento_escolar", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Desempenho em matemática?", name: "desempenho_matematica_comportamento_escolar", type: "input", width: "col-span-1", value: null },
          { label: "Tem dificuldades de leitura e escrita?", name: "dificuldades_leitura_escrita_comportamento_escolar", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "É irrequieta na escola? Em que circunstância/ frequência?", name: "irrequieta_escola_comportamento_escolar", type: "input", width: "col-span-1", value: null },
          { label: "Quais as dificuldades enfrentadas na escola?", name: "dificuldades_enfrentadas_escola_comportamento_escolar", type: "textarea", width: "col-span-2", value: null },
          { label: "O que os professores relatam sobre o comportamento da criança?", name: "relato_professores_comportamento_escolar", type: "textarea", width: "col-span-2", value: null },
          { label: "Outras observações", name: "outras_observacoes_comportamento_escolar", type: "textarea", width: "col-span-2", value: null },
          { label: "A criança recebe algum tipo de orientação quanto aos deveres de casa?", name: "orientacao_deveres_casa_comportamento_escolar", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Quem oferece?", name: "quem_oferece_orientacao_comportamento_escolar", type: "input", width: "col-span-1", value: null },
          { label: "Durante quanto tempo?", name: "durante_quanto_tempo_orientacao_comportamento_escolar", type: "input", width: "col-span-1", value: null },
          { label: "A criança já estudou antes em outra escola?", name: "ja_estudou_outra_escola_comportamento_escolar", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Qual?", name: "qual_outra_escola_comportamento_escolar", type: "input", width: "col-span-1", value: null },
          { label: "Motivo da transferência", name: "motivo_transferencia_comportamento_escolar", type: "input", width: "col-span-1", value: null },
          { label: "Teve problemas em se adaptar à escola? Quais?", name: "problemas_adaptacao_escola_comportamento_escolar", type: "input", width: "col-span-1", value: null }
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
          { label: "Gestação / Expectativas", name: "gestacao_expectativas_historico_gestacional", type: "textarea", width: "col-span-2", value: null },
          { label: "Fez alguma transfusão de sangue durante a gravidez?", name: "transfusao_sangue_gravidez_historico_gestacional", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Levou algum tombo?", name: "levou_tombo_historico_gestacional", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Apresentou alguma doença durante a gravidez?", name: "doenca_gravidez_historico_gestacional", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Cesariana / Normal?", name: "cesariana_normal_historico_gestacional", type: "input", width: "col-span-1", value: null },
          { label: "Peso", name: "peso_historico_gestacional", type: "input", width: "col-span-1", value: null },
          { label: "Estatura", name: "estatura_historico_gestacional", type: "input", width: "col-span-1", value: null },
          { label: "Condições de saúde da mãe durante a gravidez", name: "condicoes_saude_mae_gravidez_historico_gestacional", type: "textarea", width: "col-span-2", value: null },
          { label: "Algum conflito e/ou episódio marcante durante a gestação?", name: "conflito_episodio_marcante_gestacao_historico_gestacional", type: "textarea", width: "col-span-2", value: null }
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
          { label: "Andou com quantos anos?", name: "andou_quantos_anos_linguagem_desenvolvimento", type: "input", width: "col-span-1", value: null },
          { label: "Engatinhou?", name: "engatinhou_linguagem_desenvolvimento", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Controle de Esfíncteres?", name: "controle_esfincteres_linguagem_desenvolvimento", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Controle de Enurese?", name: "controle_enurese_linguagem_desenvolvimento", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Controle de Encoprese?", name: "controle_encoprese_linguagem_desenvolvimento", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Falou com quantos anos?", name: "falou_quantos_anos_linguagem_desenvolvimento", type: "input", width: "col-span-1", value: null },
          { label: "Apresenta gagueira?", name: "apresenta_gagueira_linguagem_desenvolvimento", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Choro frequente?", name: "choro_frequente_linguagem_desenvolvimento", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Possui reações alérgicas?", name: "reacoes_alergicas_linguagem_desenvolvimento", type: "input", width: "col-span-1", value: null },
          { label: "Tem bronquite ou asma?", name: "bronquite_asma_linguagem_desenvolvimento", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Apresenta problemas de visão?", name: "problemas_visao_linguagem_desenvolvimento", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "E de audição?", name: "audicao_linguagem_desenvolvimento", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Dor de cabeça?", name: "dor_cabeca_linguagem_desenvolvimento", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Já desmaiou alguma vez?Quando?Como foi?", name: "ja_desmaiou_quando_como_linguagem_desenvolvimento", type: "textarea", width: "col-span-2", value: null },
          { label: "Teve ou tem convulsões?", name: "teve_convulsoes_linguagem_desenvolvimento", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Há alguém na família que apresenta problemas de desmaios, convulsões, ataques?", name: "problemas_desmaios_convulsoes_familia_linguagem_desenvolvimento", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Observações", name: "observacoes_linguagem_desenvolvimento", type: "textarea", width: "col-span-2", value: null }
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
          { label: "Como era como bebê?", name: "como_era_bebe_desenvolvimento_psicomotor", type: "textarea", width: "col-span-2", value: null },
          { label: "É lento para realizar alguma tarefa?", name: "lento_realizar_tarefa_desenvolvimento_psicomotor", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Veste-se sozinho?", name: "veste_se_sozinho_desenvolvimento_psicomotor", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Toma banho sozinho?", name: "toma_banho_sozinho_desenvolvimento_psicomotor", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Calça-se sozinho?", name: "calca_se_sozinho_desenvolvimento_psicomotor", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Sabe dar nó nos calçados?", name: "sabe_dar_no_calçados_desenvolvimento_psicomotor", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "É desastrado?", name: "desastrado_desenvolvimento_psicomotor", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Pratica esportes?", name: "pratica_esportes_desenvolvimento_psicomotor", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Quais?", name: "quais_esportes_desenvolvimento_psicomotor", type: "input", width: "col-span-1", value: null },
          { label: "Chupa o dedo?", name: "chupa_dedo_desenvolvimento_psicomotor", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null }
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
          { label: "Condições do nascimento", name: "condicoes_nascimento_antecedentes_patologicos", type: "textarea", width: "col-span-2", value: null },
          { label: "Teve alguma doença?", name: "teve_doenca_antecedentes_patologicos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Qual?", name: "qual_doenca_antecedentes_patologicos", type: "input", width: "col-span-1", value: null },
          { label: "Já foi submetido a cirurgia, internação?", name: "ja_submetido_cirurgia_internacao_antecedentes_patologicos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Qual?", name: "qual_cirurgia_antecedentes_patologicos", type: "input", width: "col-span-1", value: null },
          { label: "Quando?", name: "quando_cirurgia_antecedentes_patologicos", type: "input", width: "col-span-1", value: null },
          { label: "Por quê?", name: "por_que_cirurgia_antecedentes_patologicos", type: "input", width: "col-span-1", value: null },
          { label: "Tem alguma doença atualmente?", name: "tem_doenca_atualmente_antecedentes_patologicos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Qual?", name: "qual_doenca_atualmente_antecedentes_patologicos", type: "input", width: "col-span-1", value: null },
          { label: "Está sendo tratado?", name: "esta_sendo_tratado_antecedentes_patologicos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Teve perdas importantes, mortes ou abandonos?", name: "perdas_importantes_antecedentes_patologicos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Alcoolismo e/ou drogas na família?", name: "alcoolismo_drogas_familia_antecedentes_patologicos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null }
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
          { label: "Medo de dormir?", name: "medo_dormir_sono", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Sonambulismo", name: "sonambulismo_sono", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Terrores Noturnos", name: "terrores_noturnos_sono", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Hipersonia", name: "hipersonia_sono", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Pesadelos", name: "pesadelos_sono", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Insônia", name: "insonia_sono", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Dorme sozinha(o)?", name: "dorme_sozinha_sono", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Com quem?", name: "com_quem_dorme_sono", type: "input", width: "col-span-1", value: null },
          { label: "Observações", name: "observacoes_sono", type: "textarea", width: "col-span-2", value: null }
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
          { label: "Recebeu alguma educação sexual? De quem?", name: "recebeu_educacao_sexual_de_quem_sexualidade", type: "input", width: "col-span-1", value: null },
          { label: "O que foi orientado?", name: "o_que_foi_orientado_sexualidade", type: "textarea", width: "col-span-2", value: null },
          { label: "Tem curiosidade Sexual?", name: "tem_curiosidade_sexualidade", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Os pais conversam sobre sexualidade com a criança?", name: "pais_conversam_sexualidade", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null }
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
          { label: "Tem amigos?", name: "tem_amigos_sociabilidade", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Muitos ou poucos?", name: "muitos_poucos_amigos_sociabilidade", type: "input", width: "col-span-1", value: null },
          { label: "Como é o relacionamento com eles?", name: "relacionamento_amigos_sociabilidade", type: "textarea", width: "col-span-2", value: null },
          { label: "Como se comporta em ambientes diferentes?", name: "comportamento_ambientes_diferentes_sociabilidade", type: "textarea", width: "col-span-2", value: null },
          { label: "Prefere brincar em grupo ou sozinho?", name: "prefere_brincar_grupo_ou_sozinho_sociabilidade", type: "input", width: "col-span-1", value: null },
          { label: "Costuma destruir os brinquedos ou é cuidadoso com eles?", name: "destruir_brinquedos_cuidadoso_sociabilidade", type: "input", width: "col-span-1", value: null },
          { label: "De que gosta mais de brincar?", name: "gosta_mais_brincar_sociabilidade", type: "input", width: "col-span-1", value: null },
          { label: "Tem hábito de pegar o que é do outro?", name: "habito_pegar_que_e_do_outro_sociabilidade", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Como se comporta quando fica irritado?", name: "comportamento_irritado_sociabilidade", type: "textarea", width: "col-span-2", value: null }
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
          { label: "Como é sua alimentação?", name: "como_e_sua_alimentacao", type: "textarea", width: "col-span-2", value: null },
          { label: "Forçado a se alimentar?", name: "forcado_se_alimentar", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Come sem derrubar a comida?", name: "come_sem_derrubar_comida", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Recebe ajuda na alimentação?", name: "recebe_ajuda_alimentacao", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Foi amamentado?", name: "foi_amamentado", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Até que idade? (amamentação)", name: "ate_quando_amamentacao", type: "input", width: "col-span-1", value: null },
          { label: "Usou mamadeira?", name: "usou_mamadeira", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Até que idade? (mamadeira)", name: "ate_quando_mamadeira", type: "input", width: "col-span-1", value: null },
          { label: "Usou chupeta?", name: "usou_chupeta", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Até que idade? (chupeta)", name: "ate_quando_chupeta", type: "input", width: "col-span-1", value: null },
          { label: "Vômitos", name: "vomitos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Polifagia", name: "polifagia", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Fobia de alimentos", name: "fobia_alimentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Anorexia", name: "anorexia", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Comer demais", name: "comer_demasia", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Ruminação", name: "ruminacao", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Regurgitação", name: "regurgitacao", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null }
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
          { label: "Inquietação motora contínua: corridas, saltos, etc", name: "inquietacao_motora_continua_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Dificuldade motora em manter-se sentado", name: "dificuldade_motora_manter_se_sentado_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Mudança rápida de atividade", name: "mudanca_rapida_atividade_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Maneirismos motores fixos/tiques/manias/TOC", name: "maneirismos_motores_fixos_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Quais? (maneirismos)", name: "quais_maneirismos_apresenta_comportamentos", type: "input", width: "col-span-1", value: null },
          { label: "Rói unhas?", name: "roi_unhas_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Autolesão repetitiva", name: "autolesao_repetitiva_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Acessos de birra frequentes", name: "acessos_birra_frequentes_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Com frequência culpa os outros pelos seus próprios erros", name: "culpa_os_outros_erros_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Desafia regras", name: "desafia_regras_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "É sensível ou facilmente aborrecida pelos outros", name: "sensivel_facilmente_aborrecida_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Medos", name: "medos_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "De que? (medos)", name: "de_que_medos_apresenta_comportamentos", type: "input", width: "col-span-1", value: null },
          { label: "Sudorese nas mãos e pés", name: "sudorese_maos_pes_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Introversão", name: "introversao_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Extroversão", name: "extroversao_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "É curioso", name: "curioso_apresenta_comportamentos", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null }
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
          { label: "Como a criança é vista sob o ponto de vista emocional?", name: "como_crianca_vista_emocionalmente_caracteristicas_pessoais", type: "textarea", width: "col-span-2", value: null },
          { label: "Dentre as características abaixo, em que mais se enquadra?", name: "caracteristicas_em_que_se_enquadra_caracteristicas_pessoais", type: "input", width: "col-span-1", value: null },
          { label: "Como reage quando é contrariada?", name: "como_reage_contrariada_caracteristicas_pessoais", type: "textarea", width: "col-span-2", value: null },
          { label: "Atividades Preferidas", name: "atividades_preferidas_caracteristicas_pessoais", type: "input", width: "col-span-1", value: null }
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
          { label: "É comemorado aniversários/Datas importantes?", name: "comemorado_aniversarios_datas_importantes", type: "select", options: ["Sim", "Não"], width: "col-span-1", value: null },
          { label: "Como é dada advertência disciplinares/limites à criança? Quem dá?", name: "como_dada_advertencia_disciplinares_limites", type: "textarea", width: "col-span-2", value: null },
          { label: "Como a criança reage/comportamento?", name: "como_crianca_reage_comportamento", type: "textarea", width: "col-span-2", value: null },
          { label: "Descrição de interesses (reforços) e potencialidades da criança", name: "descricao_interesses_potencialidades_crianca", type: "textarea", width: "col-span-2", value: null },
          { label: "Descrição da Rotina da criança desde quando acorda até a hora de dormir", name: "descricao_rotina_crianca", type: "textarea", width: "col-span-2", value: null }
        ]
      }
    ]
  }
];

export default form;
