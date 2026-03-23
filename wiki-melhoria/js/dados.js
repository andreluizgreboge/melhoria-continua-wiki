/* ═══════════════════════════════════════════════════════════════
   dados.js — Fonte única de dados da Wiki de Melhoria Contínua
   Edite apenas este arquivo para adicionar conteúdo novo.
═══════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────
// AUTOR — edite aqui
// ─────────────────────────────────────────────────────────────
const AUTOR = {
  nome: "André L. Greboge",
  cargo: "Finance Analyst · Systems-oriented AI Builder",
  bio: "Designing intelligent systems with creative structure and analytical rigor. Educational content",
  linkedin: "https://www.linkedin.com/in/andregreboge/",
  github: "https://github.com/andreluizgreboge",
  emoji: "👤"
};

// ─────────────────────────────────────────────────────────────
// THEME MAP — cores por nome
// ─────────────────────────────────────────────────────────────
const THEME = {
  blue:   { bg: '#eff6ff', text: '#1d4ed8', accent: '#3b82f6' },
  red:    { bg: '#fef2f2', text: '#b91c1c', accent: '#ef4444' },
  green:  { bg: '#f0fdf4', text: '#15803d', accent: '#22c55e' },
  yellow: { bg: '#fefce8', text: '#a16207', accent: '#eab308' },
  purple: { bg: '#faf5ff', text: '#7e22ce', accent: '#a855f7' },
  violet: { bg: '#f5f3ff', text: '#5b21b6', accent: '#7c3aed' },
  orange: { bg: '#fff7ed', text: '#c2410c', accent: '#f97316' },
  teal:   { bg: '#f0fdfa', text: '#0f766e', accent: '#14b8a6' },
  slate:  { bg: '#f8fafc', text: '#334155', accent: '#64748b' },
  indigo: { bg: '#eef2ff', text: '#4338ca', accent: '#6366f1' },
  pink:   { bg: '#fdf2f8', text: '#be185d', accent: '#ec4899' },
};

// ─────────────────────────────────────────────────────────────
// METODOLOGIAS — Wiki principal (index.html)
// ─────────────────────────────────────────────────────────────
const METODOLOGIAS = [
  // ─── MAPEAMENTO ───
  {
    id: "sipoc", titulo: "SIPOC", categoria: "Mapeamento",
    tldr: "O Google Maps do seu processo. Veja o macro antes de mergulhar no micro.",
    o_que_e: "Ferramenta de visualização de alto nível para entender as fronteiras de um processo.",
    explicacao: "O acrônimo SIPOC (Suppliers, Inputs, Process, Outputs, Customers) é uma técnica de mapeamento linear que define o escopo rigoroso de um sistema. Ele isola o processo para identificar quem fornece os dados/materiais, quais são os gatilhos de entrada, as 5 a 7 etapas macro do processamento, o produto final gerado e quem é o consumidor desse output. É essencial para evitar o 'scope creep' e garantir que todos os stakeholders concordem onde o processo começa e termina.",
    exemplo_generico: "Mapeamento de Integração de IA: O provedor de dados fornece o dataset (S/I), o modelo processa via inferência local (P), gera um arquivo JSON estruturado (O) para o dashboard do usuário final (C).",
    pros: ["Alinhamento de fronteiras de sistema", "Identifica entradas críticas"],
    cons: ["Abstrai a complexidade lógica interna", "Não lida com condicionais (if/else)"],
    cor_tema: "blue"
  },
  {
    id: "vsm", titulo: "Value Stream Map (VSM)", categoria: "Mapeamento",
    tldr: "O raio-x do desperdício. Diferencie o que agrega valor do que é apenas ruído.",
    o_que_e: "Mapeamento de fluxo de valor que rastreia materiais e informações do início ao fim.",
    explicacao: "O VSM vai além do fluxo de etapas; ele analisa o fluxo de informações e o tempo (Lead Time vs. Value-Add Time). A técnica consiste em desenhar o estado atual identificando gargalos, estoques intermediários e filas de espera. O objetivo é calcular o 'Takt Time' (ritmo de demanda) e redesenhar o sistema para que o fluxo seja contínuo, eliminando atividades que consomem recursos mas não transformam o produto sob a perspectiva do cliente.",
    exemplo_generico: "Fechamento Contábil: Mapear desde a recepção da nota até o lançamento. Identificar que 80% do tempo o documento está 'parado' aguardando aprovação manual.",
    pros: ["Visão clara de gargalos temporais", "Foco em eficiência sistêmica"],
    cons: ["Curva de aprendizado alta para leitura", "Pode se tornar obsoleto rapidamente se o processo mudar"],
    cor_tema: "blue"
  },
  {
    id: "bpmn",
    titulo: "BPMN",
    categoria: "Mapeamento",
    tldr: "A sintaxe universal dos processos. Se o SIPOC é o mapa, o BPMN é o algoritmo.",
    o_que_e: "Notação padrão para modelagem de processos de negócio.",
    explicacao: "O BPMN (Business Process Model and Notation) fornece uma linguagem gráfica para especificar fluxos de trabalho com precisão lógica. Diferente de um fluxograma simples, ele possui semântica rigorosa para lidar com paralelismo (gateways), eventos temporais e tratamento de exceções. É a base para a automação: um modelo BPMN bem desenhado pode ser convertido em lógica de execução ou importado para um BPMS, funcionando como o 'backend' que orquestra as tarefas e integra APIs.",
    exemplo_generico: "Orquestração de IA: Um evento de recebimento de e-mail dispara um gateway que decide se envia o anexo para o OCR local ou para análise de fraude via LLM.",
    pros: ["Ambiguidade zero para desenvolvedores", "Suporta lógica complexa e exceções"],
    cons: ["Curva de aprendizado para a sintaxe completa", "Pode se tornar excessivamente denso (spaghetti)"],
    cor_tema: "blue"
  },
  // ─── ANÁLISE (DEBUG) ───
  {
    id: "ishikawa", titulo: "Ishikawa (6M)", categoria: "Diagnóstico",
    tldr: "O 'Debug' de processos. Encontre a causa raiz, não o sintoma.",
    o_que_e: "Diagrama de causa e efeito para categorização de falhas sistêmicas.",
    explicacao: "Também conhecido como Espinha de Peixe, o diagrama organiza as hipóteses de falha em 6 dimensões (Método, Máquina, Medida, Meio Ambiente, Mão de Obra e Material). Em um contexto técnico, funciona como um 'stack trace' visual: você parte do efeito indesejado (o bug) e retrocede sistematicamente em cada categoria para entender se a falha é de infraestrutura (Máquina), de algoritmo (Método) ou de integridade de dados (Material).",
    exemplo_generico: "Falha na automação de relatórios: O script quebrou (Método), o servidor local ficou sem RAM (Máquina) ou o CSV veio corrompido (Material)?",
    pros: ["Estrutura o pensamento analítico", "Evita focar apenas no óbvio"],
    cons: ["Não quantifica a relevância de cada causa", "Depende de brainstorm de qualidade"],
    cor_tema: "red"
  },
  {
    id: "5-porques", titulo: "5 Porquês", categoria: "Diagnóstico",
    tldr: "Drilldown profundo. Não pare na superfície do erro.",
    o_que_e: "Técnica de investigação iterativa para chegar à causa fundamental.",
    explicacao: "A técnica consiste em perguntar 'por que' diante de um problema, usando a resposta anterior como base para a próxima pergunta. O objetivo é ultrapassar as causas imediatas (que geralmente são falhas humanas ou acidentais) para encontrar as causas sistêmicas (falhas de design ou política). Embora o nome sugira 'cinco', o ciclo continua até que a remoção da causa impeça a reincidência do erro.",
    exemplo_generico: "Erro no banco de dados: Por que caiu? Sem memória. Por que? O script não fechou a conexão. Por que? Não havia tratamento de erro no loop. Por que? Falta de padrão de código.",
    pros: ["Extremamente simples e eficaz", "Foca em soluções permanentes"],
    cons: ["Pode levar a conclusões lineares demais", "Risco de parar na 'culpa' e não no 'sistema'"],
    cor_tema: "red"
  },
  {
    id: "pareto", titulo: "Gráfico de Pareto (80/20)", categoria: "Diagnóstico",
    tldr: "Priorização Matemática. Foque nos 20% das causas que geram 80% dos problemas.",
    o_que_e: "Ferramenta estatística baseada no princípio de que a maioria dos efeitos vem de poucas causas.",
    explicacao: "O Diagrama de Pareto organiza as ocorrências por frequência em ordem decrescente, permitindo identificar a 'curva de acumulação'. Em sistemas de alta complexidade, é impossível (e ineficiente) debugar tudo ao mesmo tempo. O Pareto fornece o embasamento numérico para decidir qual gargalo atacar primeiro. Se 80% do tempo de processamento da sua IA local é gasto em apenas um tipo de query ou carregamento de modelo, é ali que a otimização deve ocorrer, ignorando as causas triviais que consomem pouco recurso.",
    exemplo_generico: "Análise de Erros em Notas Fiscais: Identificar que 80% das rejeições são causadas por apenas 2 tipos de erros de preenchimento (os 'poucos vitais').",
    pros: ["Evita desperdício de esforço em problemas irrelevantes", "Gera foco total no impacto"],
    cons: ["Exige coleta de dados quantitativos prévia", "Pode ocultar problemas raros mas catastróficos"],
    cor_tema: "red"
  },

  // ─── EXECUÇÃO (LOOPS) ───
  {
    id: "pdca", titulo: "Ciclo PDCA", categoria: "Execução",
    tldr: "O loop 'while(true)' da melhoria. Planeje, faça, teste e ajuste.",
    o_que_e: "Método iterativo de quatro passos para controle e melhoria contínua.",
    explicacao: "É o algoritmo fundamental da melhoria contínua. 1. Plan: Estabelecer objetivos e processos baseados no gap atual. 2. Do: Implementar o plano e coletar dados (fase de teste). 3. Check: Comparar os resultados reais com os objetivos esperados (monitoramento de métricas). 4. Act: Se o resultado foi positivo, padroniza-se a solução; se não, reinicia-se o ciclo com os novos aprendizados. É a base para qualquer implementação de IA ou automação resiliente.",
    exemplo_generico: "Refinamento de Prompt: Planejar o prompt, rodar o script (Do), medir a assertividade (Check), ajustar o contexto (Act).",
    pros: ["Garante aprendizado contínuo", "Reduz riscos de grandes falhas"],
    cons: ["Pode ser burocrático em startups", "Exige disciplina rigorosa de dados"],
    cor_tema: "green"
  },
  {
  id: "bpms",
  titulo: "BPMS",
  categoria: "Execução",
  tldr: "O motor que faz o processo rodar. Onde o desenho do BPMN ganha vida e vira um software executável.",
  o_que_e: "Business Process Management Suite (Suíte de Gestão de Processos de Negócio).",
  explicacao: "O BPMS é a ferramenta tecnológica que executa o processo modelado em BPMN. Ele gerencia as instâncias do processo, controla quem deve fazer o quê (Worklist), armazena dados e integra sistemas via conectores/APIs. Em uma visão moderna de TI, o BPMS atua como a camada de orquestração: ele pode chamar um script Python para processar dados, aguardar uma aprovação humana no Teams e então atualizar um banco de dados legado, mantendo o histórico de cada etapa (auditabilidade).",
  exemplo_generico: "Fluxo de Reembolso: O BPMS recebe o pedido, aciona uma IA Local para ler a nota fiscal e, se estiver tudo certo, libera o pagamento automaticamente.",
  pros: ["Execução fiel ao modelo desenhado", "Geração automática de KPIs (Dashboards)"],
  cons: ["Custo de licenciamento costuma ser alto", "Exige integração técnica com sistemas legados"],
  cor_tema: "green"
  },
  {
    id: "kaizen", titulo: "Kaizen", categoria: "Execução",
    tldr: "Melhoria de 1% todo dia. O poder dos ganhos compostos no sistema.",
    o_que_e: "Filosofia de melhoria incremental e contínua envolvendo todos os níveis.",
    explicacao: "O Kaizen foca na eliminação de 'Muda' (desperdício) através de pequenas mudanças constantes, em vez de grandes revoluções arriscadas. No contexto de automação, trata-se de refatorar pequenos trechos de código, otimizar uma única query SQL ou reduzir 2 segundos em um processo de carga de dados. Ao longo de meses, essas pequenas otimizações geram um ganho de eficiência massivo sem necessidade de Capex elevado.",
    exemplo_generico: "Otimização de Hardware Local: Ajustar os parâmetros de quantização de um modelo Qwen para rodar 5% mais rápido no Ryzen 7000.",
    pros: ["Baixo custo de implementação", "Cria cultura de dono no time"],
    cons: ["Resultados podem demorar a aparecer", "Exige persistência a longo prazo"],
    cor_tema: "green"
  },
  {
    id: "gemba-walk", titulo: "Gemba Walk", categoria: "Execução",
    tldr: "Vá onde o dado nasce. A verdade não está no dashboard, está na ponta.",
    o_que_e: "Prática de observar o processo real no local onde o valor é criado.",
    explicacao: "Em japonês, 'Gemba' significa 'o lugar real'. No contexto de sistemas e finanças, o Gemba Walk não é apenas andar pela fábrica, mas sentar ao lado do analista que opera o legado ou observar o hardware executando a tarefa. É essencial para descobrir as 'gambiarras' (workarounds) que não aparecem no mapeamento oficial. Para um AI Builder, o Gemba é entender como o usuário final interage com o prompt ou onde a latência do hardware local realmente atrapalha a experiência do usuário.",
    exemplo_generico: "Observar um analista financeiro conciliando extratos para entender por que ele ignora a automação atual e prefere o Excel manual.",
    pros: ["Revela a realidade nua e crua", "Gera empatia com o usuário final"],
    cons: ["Exige tempo e observação passiva", "Pode intimidar quem está sendo observado"],
    cor_tema: "green"
  },
  {
    id: "5s", titulo: "5S", categoria: "Execução",
    tldr: "A base da estabilidade. Se o ambiente (físico ou digital) está um caos, o processo também está.",
    o_que_e: "Programa de gestão de qualidade focado na organização, limpeza e disciplina.",
    explicacao: "O 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke) é a técnica japonesa para criar 'estabilidade básica'. Em sistemas, o 5S é aplicado na higienização de dados e na arquitetura de diretórios: 1. Seiri (Senso de Utilização): Eliminar bibliotecas e arquivos mortos. 2. Seiton (Organização): Cada arquivo em seu 'path' lógico. 3. Seiso (Limpeza): Refatoração de código e deleção de logs desnecessários. 4. Seiketsu (Padronização): Uso de linters, formatadores e convenções de nomenclatura. 5. Shitsuke (Disciplina): Manter o rigor técnico no longo prazo. Sem 5S, o custo cognitivo de manutenção de um sistema escala exponencialmente.",
    exemplo_generico: "Organização de Laboratório de IA: Padronizar nomes de modelos quantizados (.gguf), documentar versões de drivers e limpar datasets temporários para evitar estouro de disco local.",
    pros: ["Reduz erro por distração", "Aumenta a velocidade de resposta (retrieval time)"],
    cons: ["Frequentemente subestimado como 'faxina'", "Exige mudança cultural contínua"],
    cor_tema: "green"
  },

  // ─── FILOSOFIAS (STACK) ───
  {
    id: "lean", titulo: "Lean", categoria: "Estratégia",
    tldr: "Fazer mais com menos. Elimine o desperdício obsessivamente.",
    o_que_e: "Filosofia focada na maximização do valor e eliminação total de desperdícios.",
    explicacao: "O Lean identifica 8 grandes desperdícios: superprodução, espera, transporte, excesso de processamento, inventário, movimentação, defeitos e talento subutilizado. Em sistemas de informação, o Lean se traduz em 'Zero-Dependency', código limpo e arquiteturas que não consomem mais RAM/CPU do que o estritamente necessário para entregar o valor ao usuário final.",
    exemplo_generico: "Arquitetura Local-First: Rodar processamento pesado no edge (cliente) para eliminar latência e custos de servidor cloud desnecessários.",
    pros: ["Extrema agilidade operacional", "Redução drástica de custos"],
    cons: ["Pode tornar o sistema 'frágil' por falta de redundância", "Exige alta competência técnica"],
    cor_tema: "purple"
  },
  {
  id: "cbok",
  titulo: "BPM CBOK®",
  categoria: "Estratégia",
  tldr: "A 'Bíblia' da Gestão de Processos. O guia de conhecimentos que padroniza o que é ser um analista de processos.",
  o_que_e: "Corpo Comum de Conhecimento para a Gestão de Processos de Negócio.",
  explicacao: "O CBOK (Guide to the Business Process Management Common Body of Knowledge) é o referencial global da ABPMP. Ele define as nove áreas de domínio, desde o Gerenciamento de Processos até a Transformação Digital. Ter o CBOK como norte significa que a Wiki não é baseada em 'achismos', mas em padrões internacionais de modelagem, análise, desenho, medição de desempenho e governança. É o fundamento teórico que garante que o BPMN e o BPMS funcionem de forma profissional e escalável.",
  exemplo_generico: "Aplicação de Governança: Definir quem é o 'Dono do Processo' (Process Owner) conforme as diretrizes do CBOK para evitar que processos fiquem órfãos.",
  pros: ["Padronização internacional de termos", "Cobre o ciclo de vida completo do processo"],
  cons: ["Extremamente denso e teórico", "Requer estudo constante para certificação"],
  cor_tema: "amber"
  },
  {
    id: "six-sigma", titulo: "Six Sigma (DMAIC)", categoria: "Estratégia",
    tldr: "Guerra à variabilidade. Estatística aplicada para erro quase zero.",
    o_que_e: "Metodologia quantitativa para reduzir defeitos e variabilidade em processos.",
    explicacao: "Focada no desvio padrão ($\sigma$), o objetivo é atingir 3,4 defeitos por milhão de oportunidades. Utiliza o método DMAIC (Define, Measure, Analyze, Improve, Control). É o rigor analítico puro: utiliza testes de hipóteses, ANOVA e regressão para provar que uma mudança no sistema realmente causou a melhoria. Em Finanças e IA, o Six Sigma é aplicado para garantir a confiabilidade dos outputs e a integridade dos dados, eliminando 'alucinações' sistêmicas através de controle estatístico.",
    exemplo_generico: "Reduzir a variação no tempo de resposta de uma API local de IA, garantindo que 99,9% das requisições terminem em menos de 2 segundos.",
    pros: ["Decisões baseadas em dados estatísticos", "Redução drástica de desperdício por erro"],
    cons: ["Complexidade estatística elevada", "Pode ser excessivamente rígido para processos criativos"],
    cor_tema: "purple"
  },
  {
    id: "agile", titulo: "Agile (Scrum/Kanban)", categoria: "Estratégia",
    tldr: "Iterações curtas e feedback constante. O oposto do 'Waterfall'.",
    o_que_e: "Mentalidade de desenvolvimento iterativo focada em entrega de valor incremental.",
    explicacao: "O Agile prioriza indivíduos e interações sobre processos e ferramentas. No desenvolvimento de sistemas de IA, manifesta-se em Sprints onde se busca um MVP (Produto Mínimo Viável) funcional a cada 2 semanas. O foco é responder rapidamente a mudanças de requisitos. O Kanban ajuda na visualização do fluxo ('Work in Progress'), enquanto o Scrum estrutura os ritos de inspeção e adaptação.",
    exemplo_generico: "Desenvolver um buscador de documentos local: Sprint 1 (Indexação), Sprint 2 (Busca Semântica), Sprint 3 (Interface UI).",
    pros: ["Alta adaptabilidade", "Entrega valor mais rápido"],
    cons: ["Risco de perder a visão do todo", "Exige time altamente colaborativo"],
    cor_tema: "purple"
  },
  {
    id: "wcm", titulo: "WCM (World Class Manufacturing)", categoria: "Estratégia",
    tldr: "O estado da arte da produção. Integração total de pilares técnicos.",
    o_que_e: "Sistema de gestão focado em zero acidentes, zero defeitos e zero quebras.",
    explicacao: "O WCM organiza a melhoria em pilares (Manutenção Autônoma, Manutenção Profissional, Melhoria Focada, etc.). É uma evolução do Lean que foca intensamente na redução de custos através da eliminação de perdas identificadas no 'Cost Deployment' (Matriz de Perdas). Para um builder, o WCM ensina a importância da manutenção preventiva do hardware (seu Ryzen/GPU) e da robustez do código para evitar 'quebras' em produção.",
    exemplo_generico: "Aplicar o pilar de 'Melhoria Focada' para eliminar o custo de processamento redundante em um script de extração de dados financeiros.",
    pros: ["Visão holística da organização", "Forte foco em redução de custos reais"],
    cons: ["Extremamente complexo de implementar", "Requer mudança cultural profunda"],
    cor_tema: "purple"
  },


  // ─── CONTROLE (MONITOR) ───
  {
    id: "poka-yoke", titulo: "Poka-Yoke", categoria: "Controle",
    tldr: "À prova de erros. Desenhe o sistema para que o erro seja impossível.",
    o_que_e: "Mecanismo físico ou lógico que impede a ocorrência de erros humanos.",
    explicacao: "Originário da Toyota, o Poka-Yoke visa 'error-proofing'. Em software e automação, isso se traduz em validações de esquema (JSON Schema), tipagem estática, testes unitários automatizados ou travas em formulários que impedem o envio de dados inconsistentes. O objetivo é que o sistema recuse o input incorreto antes mesmo de tentar processá-lo, evitando o reprocessamento posterior.",
    exemplo_generico: "Validador de Script: Um decorador em Python que verifica se o arquivo de entrada tem o cabeçalho correto antes de iniciar a análise de IA.",
    pros: ["Elimina erro humano na fonte", "Reduz custos de inspeção"],
    cons: ["Pode tornar o sistema rígido demais", "Exige antecipação de todos os erros possíveis"],
    cor_tema: "yellow"
  },
  {
    id: "kpis", titulo: "KPIs & Dashboards", categoria: "Controle",
    tldr: "O que não é medido não é gerenciado. Visibilidade total dos sinais vitais.",
    o_que_e: "Indicadores-chave de desempenho usados para monitorar a saúde do processo.",
    explicacao: "KPIs (Key Performance Indicators) são métricas quantificáveis que refletem o sucesso de um processo. Um bom sistema de controle não apenas coleta dados, mas os visualiza em dashboards que permitem identificar tendências, desvios padrão e outliers em tempo real. Nas finanças, isso significa monitorar margens e variações; na IA local, significa monitorar tokens por segundo (TPS) e precisão do output.",
    exemplo_generico: "Dashboard de Performance: Monitorar a economia mensal gerada pela automação vs. o custo de energia/hardware da infraestrutura local.",
    pros: ["Tomada de decisão baseada em fatos", "Identificação precoce de problemas"],
    cons: ["Risco de medir as métricas erradas (vanity metrics)", "Exige qualidade de dados impecável"],
    cor_tema: "yellow"
  },
  {
    id: "okr", titulo: "OKR", categoria: "Controle",
    tldr: "Direcionamento estratégico. Onde queremos chegar e como medimos?",
    o_que_e: "Framework de definição de metas focado em Objetivos e Resultados-Chave.",
    explicacao: "Diferente de KPIs (que medem a saúde), OKRs focam em mudança e crescimento. Um Objetivo (O) é qualitativo e inspirador; os Key Results (KRs) são métricas quantitativas que provam que você chegou lá. É a conexão entre o 'porquê' fazemos algo e o 'como' o sistema deve performar para atingir o sucesso. No seu laboratório, um OKR define a evolução da sua stack técnica.",
    exemplo_generico: "Objetivo: Tornar a análise financeira 100% local. KR1: Migrar 5 fluxos do Cloud para o Gemma. KR2: Reduzir tempo de resposta em 40%.",
    pros: ["Alinhamento de propósito", "Foco em resultados, não em tarefas"],
    cons: ["Pode gerar frustração se os KRs forem irreais", "Confundido facilmente com lista de afazeres"],
    cor_tema: "yellow"
  }

];

// ─────────────────────────────────────────────────────────────
// CASOS PRÁTICOS — Livraria de Soluções (index.html)
// ─────────────────────────────────────────────────────────────
const CASOS_PRATICOS = [
  {
    id: "automacao-financeira-local",
    titulo: "Arquitetura de Consolidação de Dados de Filiais",
    setor: "Finanças & Controladoria",
    problema: "Alta variabilidade nos inputs das filiais e latência no processamento manual (Lead Time de 3 dias).",
    jornada: [
      {
        ordem: 1, metodologia: "SIPOC", cor: "blue", icone: "S",
        acao: "Mapeamento de Fronteiras",
        resultado: "Identificado que o 'Input' (arquivos das filiais) não possuía contrato de interface (schema fixo), gerando quebras no 'Process' (consolidação)."
      },
      {
        ordem: 2, metodologia: "Ishikawa (6M)", cor: "red", icone: "6M",
        acao: "Diagnóstico de Erros",
        resultado: "A categoria 'Método' era a causa raiz: a falta de validação prévia permitia que dados corrompidos entrassem no sistema, exigindo reprocessamento cíclico."
      },
      {
        ordem: 3, metodologia: "Poka-Yoke + Python", cor: "violet", icone: "PY",
        acao: "Script de Validação Local",
        resultado: "Desenvolvimento de um validador (schema validation) em Python. O sistema agora recusa arquivos fora do padrão antes da tentativa de consolidação."
      },
      {
        ordem: 4, metodologia: "IA Local (Qwen/Deepseek/Ollama)", cor: "orange", icone: "AI",
        acao: "Classificação de Transações",
        resultado: "Implementação de modelo local para categorizar descritivos de despesas não estruturados, reduzindo a classificação manual de exceções."
      }
    ],
    as_is: ["Envio descentralizado via e-mail", "Triagem manual de erros", "Tratamento de exceções por humano", "Consolidação em lote"],
    to_be: ["Upload em diretório monitorado", "Validação automática (Poka-Yoke)", "Enriquecimento via IA Local", "Output estruturado para Dashboard"],
    impacto_final: "Redução drástica no reprocessamento. O fluxo tornou-se previsível, com tempo de ciclo (Lead Time) estimado em poucas horas após o recebimento dos dados."
  },
  {
    id: "compliance-normativo-sac",
    titulo: "Monitoramento de Conformidade em Respostas de SAC",
    setor: "Compliance & Ouvidoria",
    problema: "Risco de sanções regulatórias por respostas ao SAC que não citam as normas vigentes ou prazos legais obrigatórios.",
    jornada: [
      {
        ordem: 1, metodologia: "BPMN 2.0", cor: "blue", icone: "B",
        acao: "Modelagem do Fluxo de Resposta",
        resultado: "Mapeado que o ponto de falha era o 'handover' entre o técnico que resolve o problema e o atendente que redige a resposta final."
      },
      {
        ordem: 2, metodologia: "5 Porquês", cor: "red", icone: "5W",
        acao: "Análise de Erro Normativo",
        resultado: "Causa Raiz: O atendente não consultava o normativo atualizado por ser um PDF de 200 páginas difícil de navegar durante o atendimento."
      },
      {
        ordem: 3, metodologia: "RAG Local (Local-first AI)", cor: "orange", icone: "RAG",
        acao: "Indexação de Normas",
        resultado: "Criação de um sistema de busca semântica local (RAG) que sugere o parágrafo da norma relevante para cada tipo de reclamação detectada no texto."
      }
    ],
    as_is: ["Atendente redige livremente", "Supervisor revisa por amostragem", "Risco alto de autuação", "Retrabalho após auditoria"],
    to_be: ["Draft gerado pelo atendente", "IA local valida contra normas indexadas", "Alerta de 'falta citação obrigatória'", "Envio seguro"],
    impacto_final: "Mitigação de riscos regulatórios e maior precisão técnica nas respostas oficiais da cooperativa."
  },
  {
    id: "fluxo-renegociacao-agencia",
    titulo: "Otimização do Fluxo de Formalização de Crédito",
    setor: "Operações & Agências",
    problema: "Cooperado aguardando mais de 40 minutos na agência para assinar termos de renegociação devido à desorganização documental.",
    jornada: [
      {
        ordem: 1, metodologia: "Gemba Walk", cor: "green", icone: "GW",
        acao: "Observação em Agência",
        resultado: "Percebeu-se que o gerente perdia aprox. 15 minutos procurando quais documentos eram obrigatórios para cada tipo de linha de crédito no manual interno."
      },
      {
        ordem: 2, metodologia: "Kaizen (Melhoria de Interface)", cor: "purple", icone: "K",
        acao: "Matriz de Documentos Dinâmica",
        resultado: "Substituição do manual em PDF por uma ferramenta simples de 'Checklist Dinâmico'. O gerente seleciona o produto e o sistema lista apenas o necessário."
      },
      {
        ordem: 3, metodologia: "Lean (Eliminação de Espera)", cor: "blue", icone: "L",
        acao: "Paralelização de Tarefas",
        resultado: "Reestruturação do fluxo: enquanto o cooperado toma café, o backoffice valida os documentos digitalizados em tempo real, em vez de esperar o fim do atendimento."
      }
    ],
    as_is: ["Gerente busca manual", "Imprime tudo (mesmo o desnecessário)", "Cooperado assina", "Backoffice recusa por falta de assinatura em 1 via"],
    to_be: ["Checklist sistêmico", "Impressão direcionada", "Validação em tempo real durante o atendimento", "Fluxo contínuo"],
    impacto_final: "Redução do tempo de espera do cooperado em 50%. Melhoria na experiência de atendimento e redução de custos com papel e retrabalho."
  },
  {
    id: "gestao-liquidez-tesouraria",
    titulo: "Otimização do Fluxo de Caixa e Liquidez Projetada",
    setor: "Tesouraria & Gestão de Riscos",
    problema: "Divergência entre o saldo projetado e o realizado, forçando captações de emergência com custo elevado para cobrir o fechamento do dia.",
    jornada: [
      {
        ordem: 1, metodologia: "SIPOC", cor: "blue", icone: "S",
        acao: "Mapeamento de Entradas de Caixa",
        resultado: "Identificado que grandes resgates de aplicações de livre admissão não eram 'avisados' sistemicamente à tesouraria, entrando como ruído imprevisível no fluxo."
      },
      {
        ordem: 2, metodologia: "Gráfico de Pareto", cor: "red", icone: "P",
        acao: "Análise de Volatilidade",
        resultado: "O cálculo mostrou que 85% da variação de liquidez vinha de apenas 4 grandes cooperados PJ. O restante da base seguia uma distribuição normal previsível."
      },
      {
        ordem: 3, metodologia: "Six Sigma (Controle Estatístico)", cor: "purple", icone: "6σ",
        acao: "Cálculo de Limites de Exposição",
        resultado: "Implementação de 'Bandas de Flutuação' (LSC/LIC). Se a projeção de saída ultrapassa 2 desvios padrão da média histórica, o sistema dispara um alerta de 'Gatilho de Liquidez'."
      },
      {
        ordem: 4, metodologia: "Poka-Yoke (Automação Python)", cor: "violet", icone: "PY",
        acao: "Script de Varredura de Boletos",
        resultado: "Script que lê a fila de compensação futura e antecipa em T-1 a necessidade de caixa, cruzando com os vencimentos de títulos públicos na carteira própria."
      }
    ],
    as_is: ["Tesouraria olha o saldo às 16h", "Tenta captar no mercado interfinanceiro às pressas", "Paga spread alto", "Risco de desenquadramento normativo"],
    to_be: ["Monitoramento em tempo real (D+1/D+7)", "Alertas estatísticos de volatilidade", "Captação planejada ou aplicação de excedente otimizada", "Conformidade com política de risco"],
    impacto_final: "Redução do custo de captação de emergência e maior rentabilidade sobre o patrimônio líquido (PL) parado. Estabilidade nos indicadores de liquidez perante o órgão regulador."
  }
];

// ─────────────────────────────────────────────────────────────
// FUNDAMENTOS — conceitos básicos (fundamentos.html)
// ─────────────────────────────────────────────────────────────
const FUNDAMENTOS_AULAS = [
  {
    id: "nivelamento",
    titulo: "Nivelamento e Definições",
    subtitulo: "A base conceitual da gestão e melhoria de processos.",
    emoji: "🏗️",
    conteudo: `
      <p class="prose-text">Para começar: <strong>Processo não é um desenho de fluxograma.</strong> O desenho é apenas a <em>documentação</em> de algo que já acontece ou deveria acontecer. Entender processos é entender como o trabalho flui através das fronteiras da empresa.</p>
      
      <p class="section-label" style="margin-top:1.5rem">O que é um Processo?</p>
      <p class="prose-text">Tecnicamente, é um conjunto de atividades inter-relacionadas que transformam <strong>entradas</strong> (dados, materiais, solicitações) em <strong>saídas</strong> (produtos, serviços, decisões) que agregam valor ao cliente ou cooperado.</p>
      
      <p class="section-label" style="margin-top:1.5rem">A Hierarquia do Trabalho</p>
      <p class="prose-text">Nem todo processo tem o mesmo tamanho. Para melhorar algo, você precisa saber em qual nível está mexendo:</p>
      <ul class="prose-text" style="list-style: none; padding-left: 0;">
        <li style="margin-bottom: 8px;">🚀 <strong>Macroprocesso:</strong> Conjunto de processos que impactam a estratégia (ex: Gestão de Crédito).</li>
        <li style="margin-bottom: 8px;">⚙️ <strong>Processo:</strong> Fluxo fim-a-fim com início e fim claros (ex: Empréstimo Pessoal).</li>
        <li style="margin-bottom: 8px;">🧩 <strong>Subprocesso:</strong> Uma parte complexa do processo (ex: Análise de Garantias).</li>
        <li style="margin-bottom: 8px;">📝 <strong>Atividade:</strong> Ação executada por uma pessoa ou sistema (ex: Conferir Documentação).</li>
        <li style="margin-bottom: 8px;">⌨️ <strong>Tarefa:</strong> O passo-a-passo operacional (ex: Digitar CPF no sistema).</li>
      </ul>

      <div class="example-block" style="margin: 1.5rem 0;">
        <strong>Exemplo Prático na Cooperativa:</strong><br>
        O <strong>Macroprocesso</strong> de Crédito contém o <strong>Processo</strong> de Financiamento de Veículos. Uma <strong>Atividade</strong> desse processo é a análise de risco, que pode ser automatizada via <strong>RPA</strong> para reduzir o tempo de resposta.
      </div>

      <p class="section-label">Evolução e Disciplinas</p>
      <p class="prose-text">A gestão de processos não é estática. Ela evoluiu conforme a tecnologia avançou:</p>
      <ul class="prose-text">
        <li><strong>Taylorismo/Fordismo (1920-1960):</strong> Foco em especialização e produção em massa (o início de tudo).</li>
        <li><strong>Toyotismo (Lean, 1950 - atualmente):</strong> Foco em eliminar o que não agrega valor (desperdício). É aqui que nasce a cultura de Melhoria Contínua.</li>
        <li><strong>BPM - Business Process Management (2000 - atualmente):</strong> A disciplina moderna que une gestão e tecnologia para orquestrar o fluxo de forma cíclica.</li>
        <li><strong>Hiperautomação (2019 - atual/Futuro):</strong> Onde estamos agora. Uso de IA, agentes, RPA e Low-code para que o processo se auto-otimize.</li>
      </ul>

      <p class="prose-text" style="background: #fffbeb; padding: 15px; border-radius: 8px; border: 1px solid #fef3c7;">
        <strong>Insight para o Fazedor:</strong> Melhoria contínua não é sobre "trabalhar mais", é sobre entender essa engrenagem para fazer o trabalho fluir com menos atrito e mais inteligência.
      </p>
    `,
    proximo_id: "cadeia-valor",
    proximo_titulo: "Cadeia de Valor de Porter"
  },
  {
    id: "cadeia-valor",
    titulo: "Cadeia de Valor de Porter",
    subtitulo: "A visão estratégica: onde o valor é realmente gerado?",
    emoji: "🎯",
    conteudo: `
      <p class="prose-text">A Cadeia de Valor não é apenas um organograma; é um modelo de <strong>análise de vantagem competitiva</strong>. Introduzida por Michael Porter em 1985, ela permite que a gente decomponha a organização em atividades menores e analise quais delas estão gerando custo excessivo e quais estão criando o diferencial que o cooperado percebe. No nosso contexto, entender isso é a diferença entre automatizar um processo inútil ou otimizar o coração da geração de receita.</p>
      
      <p class="section-label" style="margin-top:1.5rem">O Diagrama Visual de Porter</p>
      
      <!-- ESQUEMA VISUAL DA CADEIA DE VALOR (Fiel ao Original) -->
      <div style="display: flex; gap: 4px; margin: 2rem 0; font-family: 'DM Sans', sans-serif;">
        
        <!-- Bloco de Atividades (Apoio em cima, Primárias embaixo) -->
        <div style="display: flex; flex-direction: column; gap: 4px; flex: 1;">
          
          <!-- Atividades de Apoio (Empilhadas) -->
          <div style="display: flex; flex-direction: column; gap: 2px; background: #f8fafc; padding: 4px; border: 1px solid #e2e8f0; border-radius: 8px 0 0 0;">
            <div style="background: #fff; border: 1px solid #cbd5e1; padding: 8px; font-size: 0.75rem; text-align: left; font-weight: 600; padding-left: 15px;">Infraestrutura da Empresa</div>
            <div style="background: #fff; border: 1px solid #cbd5e1; padding: 8px; font-size: 0.75rem; text-align: left; font-weight: 600; padding-left: 15px;">Gestão de Recursos Humanos</div>
            <div style="background: #fff; border: 1px solid #cbd5e1; padding: 8px; font-size: 0.75rem; text-align: left; font-weight: 600; padding-left: 15px;">Desenvolvimento Tecnológico</div>
            <div style="background: #fff; border: 1px solid #cbd5e1; padding: 8px; font-size: 0.75rem; text-align: left; font-weight: 600; padding-left: 15px;">Aquisição e Compras</div>
          </div>

          <!-- Atividades Primárias -->
          <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 4px; background: #eff6ff; padding: 4px; border: 1px solid #bfdbfe; border-radius: 0 0 0 8px; height: 120px;">
            <div style="background: #3b82f6; color: white; padding: 5px; font-size: 0.7rem; text-align: center; font-weight: 600; display: flex; align-items: center; justify-content: center; line-height: 1.2;">Logística Interna</div>
            <div style="background: #3b82f6; color: white; padding: 5px; font-size: 0.7rem; text-align: center; font-weight: 600; display: flex; align-items: center; justify-content: center; line-height: 1.2;">Operações (Core)</div>
            <div style="background: #3b82f6; color: white; padding: 5px; font-size: 0.7rem; text-align: center; font-weight: 600; display: flex; align-items: center; justify-content: center; line-height: 1.2;">Logística Externa</div>
            <div style="background: #3b82f6; color: white; padding: 5px; font-size: 0.7rem; text-align: center; font-weight: 600; display: flex; align-items: center; justify-content: center; line-height: 1.2;">Marketing e Vendas</div>
            <div style="background: #3b82f6; color: white; padding: 5px; font-size: 0.7rem; text-align: center; font-weight: 600; display: flex; align-items: center; justify-content: center; line-height: 1.2;">Serviços</div>
          </div>
        </div>

        <!-- A Seta da Margem (Agora cobrindo a altura TOTAL do container acima) -->
        <div style="width: 60px; background: #1e293b; color: white; display: flex; align-items: center; justify-content: center; clip-path: polygon(0% 0%, 50% 0%, 100% 50%, 50% 100%, 0% 100%); font-size: 0.8rem; font-weight: 800; text-align: center; writing-mode: vertical-lr; padding-right: 15px;">MARGEM</div>
      </div>
      </div>

      <p class="section-label" style="margin-top:1.5rem">Atividades Primárias (A Operação Fim-a-Fim)</p>
      <p class="prose-text">Representam o fluxo físico e informativo do produto/serviço. Para nós:</p>
      <ul class="prose-text">
        <li><strong>Logística Interna:</strong> Gestão dos fundos, captação de liquidez e entrada de documentos para cadastro.</li>
        <li><strong>Operações:</strong> O "motor" de análise de crédito, compensação de boletos e processamento de seguros.</li>
        <li><strong>Logística Externa:</strong> Entrega do valor via App, Internet Banking e rede de caixas eletrônicos.</li>
        <li><strong>Marketing e Vendas:</strong> Relacionamento, prospecção e a oferta consultiva de produtos financeiros.</li>
        <li><strong>Serviços:</strong> O suporte pós-contratação, as ouvidorias e o atendimento presencial nas agências.</li>
      </ul>

      <p class="section-label" style="margin-top:1.5rem">Atividades de Apoio (O Alicerce)</p>
      <p class="prose-text">Estas atividades atravessam as primárias. Exemplo: O <strong>Desenvolvimento Tecnológico</strong> não é uma etapa do crédito, mas uma ferramenta que deve estar presente desde a captação dos dados até o pós-venda.</p>

      <div class="example-block" style="margin: 1.5rem 0; border-left: 4px solid #3b82f6;">
        <strong>Conexão com a Melhoria:</strong><br>
        Muitas vezes, o gargalo não está na <em>Operação</em> (Primária), mas na <em>Infraestrutura</em> (Apoio). Identificar se a dor do cooperado vem de um processo core lento ou de um suporte burocrático é o que define o sucesso de um projeto de IA ou RPA.
      </div>
    `,
    proximo_id: "as-is-to-be",
    proximo_titulo: "Mapeamento AS-IS e TO-BE"
  },
  {
    id: "as-is-to-be",
    titulo: "Mapeamento AS-IS e TO-BE",
    subtitulo: "A ponte entre a realidade atual e a eficiência desejada.",
    emoji: "🔄",
    conteudo: `
      <p class="prose-text">O mapeamento de processos não é um exercício de desenho, mas de <strong>diagnóstico e prognóstico</strong>. Sem entender o 'AS-IS' (Como é), você corre o risco de automatizar a ineficiência. Sem o 'TO-BE' (Como será), você não tem um norte para a mudança.</p>
      
      <p class="section-label" style="margin-top:1.5rem">1. AS-IS: O Olhar Clínico sobre o Caos</p>
      <p class="prose-text">Mapear o <strong>AS-IS</strong> significa documentar a realidade "nua e crua", com todas as suas falhas, gargalos e "gambiarras" operacionais. É aqui que descobrimos o <em>Shadow IT</em> (planilhas paralelas) e as tarefas duplicadas.</p>
      <ul class="prose-text">
        <li><strong>Foco:</strong> Identificar gargalos, desperdícios (Lean) e pontos de fricção.</li>
        <li><strong>Erro Comum:</strong> Desenhar o processo "como ele deveria ser" em vez de "como ele é". Se o funcionário anota o dado num post-it, o AS-IS deve mostrar o post-it.</li>
      </ul>

      <p class="section-label" style="margin-top:1.5rem">2. TO-BE: A Visão de Futuro Otimizada</p>
      <p class="prose-text">O <strong>TO-BE</strong> é o desenho do processo após a aplicação de melhorias, tecnologias (RPA, IA) e eliminação de burocracias. Ele deve ser aspiracional, mas tecnicamente viável.</p>
      <ul class="prose-text">
        <li><strong>Foco:</strong> Agregação de valor, redução de Lead Time e escalabilidade.</li>
        <li><strong>Diretriz:</strong> "Como podemos entregar o mesmo resultado com 50% menos esforço manual?"</li>
      </ul>

      <p class="section-label" style="margin-top:1.5rem">Comparativo de Transição</p>
      
      <div style="overflow-x: auto; margin: 1.5rem 0; border: 1px solid #e2e8f0; border-radius: 12px; font-family: 'DM Sans', sans-serif;">
        <table style="width: 100%; border-collapse: collapse; background: white; font-size: 0.9rem;">
          <thead>
            <tr style="background: #f8fafc; border-bottom: 2px solid #e2e8f0;">
              <th style="padding: 12px; text-align: left; color: #64748b;">Característica</th>
              <th style="padding: 12px; text-align: left; color: #ef4444; background: #fef2f2;">Estado AS-IS (Atual)</th>
              <th style="padding: 12px; text-align: left; color: #10b981; background: #ecfdf5;">Estado TO-BE (Futuro)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px; font-weight: 600;">Execução</td>
              <td style="padding: 12px;">Manual, reativa e dependente de pessoas.</td>
              <td style="padding: 12px;">Automatizada, proativa e sistêmica.</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px; font-weight: 600;">Dados</td>
              <td style="padding: 12px;">Silos de informação (planilhas, e-mails).</td>
              <td style="padding: 12px;">Base única, íntegra e acessível (Real-time).</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px; font-weight: 600;">Conhecimento</td>
              <td style="padding: 12px;">Tácito (está na cabeça de quem faz).</td>
              <td style="padding: 12px;">Explícito (documentado e padronizado).</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: 600;">Gargalos</td>
              <td style="padding: 12px;">Invisíveis até que o erro ocorra.</td>
              <td style="padding: 12px;">Monitorados via KPI e Dashboards.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="section-label" style="margin-top:1.5rem">A Peça Chave: Gap Analysis (Análise de Lacunas)</p>
      <p class="prose-text">A distância entre o AS-IS e o TO-BE é o que chamamos de <strong>GAP</strong>. O seu plano de ação (projetos de melhoria) nasce justamente para fechar esse buraco. Se o AS-IS tem digitação manual e o TO-BE tem RPA, o seu GAP é a "necessidade de automação de entrada de dados".</p>

      <div class="example-block" style="margin: 1.5rem 0; border-left: 4px solid #f59e0b;">
        <strong>Dica de apresentação:</strong><br>
        Ao apresentar para a diretoria, gaste 20% do tempo no AS-IS (apenas para validar a dor) e 80% no TO-BE + Plano de Ação. Mostrar que você conhece os problemas traz confiança, mas mostrar que você sabe como resolvê-los traz o investimento.
      </div>

      <p class="prose-text" style="background: #f1f5f9; padding: 15px; border-radius: 8px; font-style: italic;">
        "O AS-IS é o espelho do agora. O TO-BE é o mapa do amanhã. A Melhoria Contínua é o caminho entre os dois."
      </p>
    `,
    proximo_id: "ciclo-pdca",
    proximo_titulo: "Ciclo PDCA: O Motor da Melhoria"
  },
  {
    id: "ciclo-pdca",
    titulo: "Ciclo PDCA: O Motor da Melhoria",
    subtitulo: "A metodologia iterativa para gestão e controle de processos.",
    emoji: "⚙️",
    conteudo: `
      <p class="prose-text">O PDCA (Plan-Do-Check-Act) não é uma ferramenta que você usa uma vez e guarda. É um <strong>ciclo iterativo</strong>. O fim de um ciclo é, obrigatoriamente, o começo do próximo, elevando o patamar de qualidade da organização a cada volta.</p>

      <p class="section-label" style="margin-top:1.5rem">As Quatro Fases do Sucesso</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 1.5rem 0;">
        <div style="padding: 15px; border: 1px solid #3b82f6; border-left: 5px solid #3b82f6; background: #eff6ff; border-radius: 8px;">
          <strong style="color: #1e40af;">P - Plan (Planejar)</strong><br>
          <span style="font-size: 0.85rem;">Defina o problema, estabeleça metas (SMART) e crie um plano de ação (5W2H). <strong>Aqui é onde 70% do esforço deve estar.</strong></span>
        </div>
        <div style="padding: 15px; border: 1px solid #ef4444; border-left: 5px solid #ef4444; background: #fef2f2; border-radius: 8px;">
          <strong style="color: #991b1b;">D - Do (Executar)</strong><br>
          <span style="font-size: 0.85rem;">Coloque o plano em prática. É a fase de coleta de dados e treinamento da equipe para a nova forma de trabalhar.</span>
        </div>
        <div style="padding: 15px; border: 1px solid #f59e0b; border-left: 5px solid #f59e0b; background: #fffbeb; border-radius: 8px;">
          <strong style="color: #92400e;">C - Check (Verificar)</strong><br>
          <span style="font-size: 0.85rem;">Compare o resultado com a meta. Os indicadores (KPIs) melhoraram? Se não, entenda o porquê. Não mascare os dados.</span>
        </div>
        <div style="padding: 15px; border: 1px solid #10b981; border-left: 5px solid #10b981; background: #ecfdf5; border-radius: 8px;">
          <strong style="color: #065f46;">A - Act (Agir/Ajustar)</strong><br>
          <span style="font-size: 0.85rem;">Se funcionou, <strong>padronize</strong>. Se não, analise as causas e gire o ciclo novamente. O erro aqui é o maior aprendizado.</span>
        </div>
      </div>

      <p class="section-label" style="margin-top:1.5rem">PDCA vs. SDCA: O Segredo da Estabilidade</p>
      <p class="prose-text">Um erro comum é tentar melhorar um processo que nem sequer é estável. Para isso existe o <strong>SDCA</strong> (Standardize-Do-Check-Act):</p>
      <ul class="prose-text">
        <li><strong>SDCA:</strong> Serve para <strong>manter</strong> o nível atual (Estabilização).</li>
        <li><strong>PDCA:</strong> Serve para <strong>elevar</strong> o nível (Melhoria).</li>
      </ul>

      <p class="section-label" style="margin-top:1.5rem">Aplicação Prática (Exemplo: Tempo de Espera)</p>
      <p class="prose-text">Imagine que o tempo médio de abertura de conta na cooperativa está em 48h.
      <br><strong>Plan:</strong> Analisar a causa raiz (Ishikawa) e definir meta de 24h.
      <br><strong>Do:</strong> Implementar assinatura digital em fase de teste.
      <br><strong>Check:</strong> Medir por 15 dias. O tempo caiu para 26h.
      <br><strong>Act:</strong> Ajustar o fluxo da assinatura e oficializar o novo padrão para todas as agências.</p>

      <div class="example-block" style="margin: 1.5rem 0; border-left: 4px solid #10b981;">
        <strong>Conceito de 'Cunha de Padronização':</strong><br>
        O ciclo PDCA é como uma roda subindo uma ladeira. A <strong>Padronização (Act)</strong> é a cunha que você coloca atrás da roda para que ela não role de volta para o caos anterior. Sem padronizar, a melhoria é temporária.
      </div>
    `,
    proximo_id: "metodologia-lean",
    proximo_titulo: "Lean: Eliminando Desperdícios"
  },
  {
    id: "revisao-integracao",
    titulo: "O que vimos até aqui: Sincronizando os conceitos",
    subtitulo: "Conectando as peças: do Macro ao Micro na prática.",
    emoji: "🧩",
    conteudo: `
      <p class="prose-text">Até agora, você aprendeu os pilares da <strong>Gestão de Processos (BPM)</strong>. Para consolidar esse conhecimento, vamos aplicar tudo o que vimos em um desafio real e comum em instituições financeiras: <strong>A Jornada de Entrega do Cartão de Crédito</strong>.</p>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; margin: 2rem 0;">
        <h3 style="margin-top:0; color:var(--text-primary); font-size:1.1rem">📖 O Cenário</h3>
        <p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.6;">O cooperado solicita um cartão, mas o tempo médio entre o pedido e o desbloqueio está em 15 dias. Há muitas reclamações no SAC e o uso do cartão (que gera receita) demora a acontecer.</p>
      </div>

      <!-- TIMELINE DE INTEGRAÇÃO -->
      <div style="display: flex; flex-direction: column; gap: 24px; margin: 2.5rem 0;">
        
        <!-- Passo 1 -->
        <div style="display: flex; gap: 20px;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #1e293b; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800;">1</div>
          <div>
            <h4 style="margin: 0 0 8px 0; color: #1e293b;">Localizando na Cadeia de Valor</h4>
            <p style="font-size: 0.9rem; margin-bottom: 8px;">Onde isso dói na empresa?</p>
            <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 12px; border-radius: 8px; font-size: 0.85rem;">
              <strong>Análise:</strong> A entrega do cartão é uma atividade de <strong>Operações (Atividade Primária)</strong>. Se o processo é lento, a <strong>Margem</strong> cai porque o custo administrativo sobe e a receita do uso do cartão não entra. O suporte (SAC) fica sobrecarregado, gastando recursos da <strong>Infraestrutura</strong>.
            </div>
          </div>
        </div>

        <!-- Passo 2 -->
        <div style="display: flex; gap: 20px;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #1e293b; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800;">2</div>
          <div>
            <h4 style="margin: 0 0 8px 0; color: #1e293b;">Nivelamento de Processos</h4>
            <p style="font-size: 0.9rem; margin-bottom: 8px;">O que estamos olhando?</p>
            <div style="background: #f1f5f9; border: 1px solid #cbd5e1; padding: 12px; border-radius: 8px; font-size: 0.85rem;">
              <strong>Análise:</strong> "Solicitar Cartão" é o <strong>Processo</strong> (fim-a-fim). "Imprimir etiqueta de correio" é apenas uma <strong>Atividade</strong>. "Clicar em confirmar" é uma <strong>Tarefa</strong>. Ao focar no <em>processo</em>, percebemos que não adianta imprimir a etiqueta rápido se o cartão fica parado esperando assinatura.
            </div>
          </div>
        </div>

        <!-- Passo 3 -->
        <div style="display: flex; gap: 20px;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #1e293b; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800;">3</div>
          <div>
            <h4 style="margin: 0 0 8px 0; color: #1e293b;">Mapeamento AS-IS (O Choque de Realidade)</h4>
            <p style="font-size: 0.9rem; margin-bottom: 8px;">Como é hoje de verdade?</p>
            <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 12px; border-radius: 8px; font-size: 0.85rem;">
              <strong>A Descoberta:</strong> Você notou que o cartão fica <strong>3 dias parado</strong> em uma caixa física esperando o gestor assinar um termo de liberação. Isso é o conhecimento tácito negativo: "sempre foi assim". O AS-IS revelou o gargalo invisível.
            </div>
          </div>
        </div>

        <!-- Passo 4 -->
        <div style="display: flex; gap: 20px;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #1e293b; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800;">4</div>
          <div>
            <h4 style="margin: 0 0 8px 0; color: #1e293b;">Desenho do TO-BE (O Futuro Eficiente)</h4>
            <p style="font-size: 0.9rem; margin-bottom: 8px;">Como pode ser melhor?</p>
            <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 12px; border-radius: 8px; font-size: 0.85rem;">
              <strong>A Proposta:</strong> Eliminar a caixa física e a assinatura manual. Implementar <strong>assinatura digital</strong> automática no fluxo e disparar um <strong>WhatsApp</strong> para o cooperado com o código de rastreio assim que o cartão sair. Meta: Reduzir de 15 para 5 dias.
            </div>
          </div>
        </div>

        <!-- Passo 5 -->
        <div style="display: flex; gap: 20px;">
          <div style="flex-shrink: 0; width: 40px; height: 40px; background: #1e293b; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800;">5</div>
          <div>
            <h4 style="margin: 0 0 8px 0; color: #1e293b;">Giro do Ciclo PDCA</h4>
            <p style="font-size: 0.9rem; margin-bottom: 8px;">Como garantimos que vai funcionar?</p>
            <div style="background: #fffbeb; border: 1px solid #fde68a; padding: 12px; border-radius: 8px; font-size: 0.85rem;">
              <strong>Execução:</strong> No <strong>Do (Executar)</strong>, testamos com 100 cooperados. No <strong>Check (Verificar)</strong>, notamos que o WhatsApp falhou em 10% porque os números estavam desatualizados. No <strong>Act (Ajustar)</strong>, criamos um passo anterior de "Confirmação de Dados" e agora o processo está blindado.
            </div>
          </div>
        </div>

      </div>

      <p class="section-label" style="margin-top:2.5rem">Conclusão do Bloco de Fundamentos</p>
      <p class="prose-text">Você acaba de passar pela fase de <strong>Análise e Diagnóstico</strong>. Daqui para frente, vamos aprender a técnica de 'limpeza' (Lean) e a 'estatística de precisão' (Six Sigma). O que você viu até aqui te deu a base para saber <em>onde</em> e <em>o que</em> melhorar; o que vem a seguir vai te ensinar <em>como</em> extrair o máximo de eficiência possível.</p>

      <div class="example-block" style="margin: 1.5rem 0; border-left: 4px solid #1e293b; background: #f8fafc;">
        <strong>Resumo para o seu 'Guia de Bolso':</strong><br>
        1. <strong>Cadeia de Valor:</strong> Estratégia (Onde?).<br>
        2. <strong>Nivelamento:</strong> Organização (O quê?).<br>
        3. <strong>AS-IS/TO-BE:</strong> Transformação (De onde para onde?).<br>
        4. <strong>PDCA:</strong> Gestão (Como manter e melhorar?).
      </div>
    `,
    proximo_id: "metodologia-lean",
    proximo_titulo: "Metodologia Lean: O Pensamento Enxuto"
  },
  {
    id: "metodologia-lean",
    titulo: "Metodologia Lean: O Pensamento Enxuto",
    subtitulo: "A arte de gerar valor eliminando o que não importa.",
    emoji: "🍃",
    conteudo: `
      <p class="prose-text">A essência do Lean é simples, mas profunda: <strong>Maximizar o valor para o cliente minimizando o desperdício.</strong> No contexto de uma cooperativa, o 'valor' é o que o cooperado realmente deseja (ex: crédito na conta), e o 'desperdício' é tudo o que acontece entre o pedido e a entrega que não contribui para isso.</p>

      <p class="section-label" style="margin-top:1.5rem">1. Os 5 Princípios Fundamentais do Lean</p>
      <p class="prose-text">Para aplicar o Lean, seguimos uma sequência lógica de raciocínio:</p>
      <ol class="prose-text">
        <li><strong>Valor:</strong> Defina o que é valor sob a ótica do cliente/cooperado.</li>
        <li><strong>Fluxo de Valor:</strong> Mapeie todas as etapas (como vimos na Cadeia de Valor) e identifique o que não agrega valor.</li>
        <li><strong>Fluxo Contínuo:</strong> Faça as etapas fluírem sem interrupções, estoques de processos ou esperas.</li>
        <li><strong>Produção Puxada:</strong> Nada é feito antes que o próximo processo (ou o cliente) solicite. Evita o excesso de trabalho.</li>
        <li><strong>Perfeição (Kaizen):</strong> A busca incessante pela melhoria. Nunca está "bom o suficiente".</li>
      </ol>

      <p class="section-label" style="margin-top:1.5rem">2. Os 8 Desperdícios (Onde o dinheiro "foge")</p>
      <p class="prose-text">No Lean Office (escritório/serviços), os desperdícios são invisíveis. O ideal é perceber:</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 1.5rem 0; font-size: 0.85rem;">
        <div style="padding: 10px; background: #f1f5f9; border-radius: 6px;"><strong>1. Superprodução:</strong> Criar relatórios que ninguém lê ou pedir assinaturas desnecessárias.</div>
        <div style="padding: 10px; background: #f1f5f9; border-radius: 6px;"><strong>2. Espera:</strong> E-mails parados na caixa de entrada ou aguardando aprovação de comitê.</div>
        <div style="padding: 10px; background: #f1f5f9; border-radius: 6px;"><strong>3. Transporte:</strong> Movimentação inútil de documentos físicos ou arquivos entre pastas.</div>
        <div style="padding: 10px; background: #f1f5f9; border-radius: 6px;"><strong>4. Processamento Excessivo:</strong> Usar uma planilha complexa para algo que um campo no sistema resolveria.</div>
        <div style="padding: 10px; background: #f1f5f9; border-radius: 6px;"><strong>5. Estoque:</strong> Pilhas de processos pendentes ou "backlog" acumulado no sistema.</div>
        <div style="padding: 10px; background: #f1f5f9; border-radius: 6px;"><strong>6. Movimentação:</strong> Pessoas perdendo tempo procurando informações em sistemas mal organizados.</div>
        <div style="padding: 10px; background: #f1f5f9; border-radius: 6px;"><strong>7. Defeitos:</strong> Erros de digitação, propostas recusadas por falta de dados ou retrabalho.</div>
        <div style="padding: 10px; background: #f1f5f9; border-radius: 6px;"><strong>8. Talento Subutilizado:</strong> Usar um profissional qualificado para tarefas manuais e repetitivas.</div>
      </div>

      <p class="section-label" style="margin-top:1.5rem">3. Ferramenta Chave: O Kaizen</p>
      <p class="prose-text"><strong>Kaizen</strong> significa "mudança para melhor". É a prática de pequenas melhorias diárias. No Lean, não esperamos por um grande projeto de 1 milhão de reais; resolvemos pequenos gargalos hoje que, somados, geram um impacto gigante no final do ano.</p>

      <div class="example-block" style="margin: 1.5rem 0; border-left: 4px solid #3b82f6;">
        <strong>Exemplo Prático na Cooperativa:</strong><br>
        Se um analista gasta 10 minutos por dia procurando um formulário atualizado, em um ano ele perdeu ~40 horas. O <strong>Lean</strong> resolve isso criando um repositório centralizado (Fluxo Contínuo) e eliminando a busca (Desperdício de Movimentação).
      </div>

      <p class="prose-text" style="background: #1e293b; color: #fff; padding: 20px; border-radius: 8px; margin-top: 2rem;">
        <strong>Mentalidade Lean:</strong> "Não é sobre trabalhar mais duro, é sobre remover os obstáculos que impedem você de trabalhar de forma inteligente."
      </p>
    `,
    proximo_id: "six-sigma",
    proximo_titulo: "Six Sigma: A Ciência da Precisão"
  },
  {
    id: "six-sigma",
    titulo: "Six Sigma: A Ciência da Precisão",
    subtitulo: "Reduzindo a variabilidade e alcançando a excelência estatística.",
    emoji: "🎯",
    conteudo: `
      <p class="prose-text">Enquanto o <strong>Lean</strong> foca na velocidade e na eliminação de desperdícios, o <strong>Six Sigma</strong> foca na qualidade e na consistência. Criado pela Motorola e consolidado pela GE, seu objetivo central é reduzir a variabilidade dos processos, garantindo que o resultado seja sempre o mesmo: a perfeição.</p>

      <p class="section-label" style="margin-top:1.5rem">1. O Conceito Estatístico</p>
      <p class="prose-text">Alcançar o nível Seis Sigma significa operar com apenas <strong>3,4 defeitos por milhão de oportunidades</strong>. Em uma instituição financeira, isso representa um nível de segurança e precisão onde erros de processamento, transações falhas ou cadastros incorretos tornam-se eventos raríssimos.</p>

      <p class="section-label" style="margin-top:1.5rem">2. O Método DMAIC</p>
      <p class="prose-text">O Six Sigma utiliza um roteiro rigoroso para resolver problemas complexos e reduzir erros, dividido em cinco etapas:</p>
      
      <div style="display: flex; flex-direction: column; gap: 8px; margin: 1.5rem 0;">
        <div style="padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; align-items: center; gap: 15px;">
          <strong style="color: #3b82f6; width: 85px; flex-shrink: 0; font-family: 'DM Mono';">Define</strong>
          <span style="font-size: 0.85rem;"><strong>Definir:</strong> Qual é o problema específico e o impacto financeiro do erro? Quem é o cliente impactado?</span>
        </div>
        <div style="padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; align-items: center; gap: 15px;">
          <strong style="color: #3b82f6; width: 85px; flex-shrink: 0; font-family: 'DM Mono';">Measure</strong>
          <span style="font-size: 0.85rem;"><strong>Medir:</strong> Coletar dados históricos. Qual a taxa de erro atual? Onde os dados mostram a falha?</span>
        </div>
        <div style="padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; align-items: center; gap: 15px;">
          <strong style="color: #3b82f6; width: 85px; flex-shrink: 0; font-family: 'DM Mono';">Analyze</strong>
          <span style="font-size: 0.85rem;"><strong>Analisar:</strong> Identificar a causa raiz. A falha é humana, sistêmica ou de treinamento?</span>
        </div>
        <div style="padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; align-items: center; gap: 15px;">
          <strong style="color: #3b82f6; width: 85px; flex-shrink: 0; font-family: 'DM Mono';">Improve</strong>
          <span style="font-size: 0.85rem;"><strong>Melhorar:</strong> Desenhar e implementar soluções que eliminem definitivamente a causa da variação.</span>
        </div>
        <div style="padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; align-items: center; gap: 15px;">
          <strong style="color: #3b82f6; width: 85px; flex-shrink: 0; font-family: 'DM Mono';">Control</strong>
          <span style="font-size: 0.85rem;"><strong>Controlar:</strong> Monitorar o novo processo para garantir que a melhoria seja sustentável e o erro não retorne.</span>
        </div>
      </div>

      <p class="section-label" style="margin-top:1.5rem">3. A Sinergia: Lean Six Sigma (LSS)</p>
      <p class="prose-text">No mercado moderno, as duas metodologias trabalham juntas. O <strong>Lean</strong> remove a complexidade e a gordura do processo, enquanto o <strong>Six Sigma</strong> ataca a variação e os defeitos no que restou. O resultado é um fluxo veloz e livre de erros.</p>

      <div class="example-block" style="margin: 1.5rem 0; border-left: 4px solid #3b82f6; background: #f8fafc;">
        <strong>Exemplo Prático: Concessão de Crédito</strong><br>
        Se 15% das propostas de crédito são devolvidas por falta de documentos, o Six Sigma analisaria os dados para descobrir o perfil exato dessas falhas e criaria uma trava sistêmica (validação de dados) para impedir que a proposta avance com erro, economizando o tempo do analista.
      </div>

      <p class="prose-text" style="font-size: 0.85rem; color: #64748b; font-style: italic; margin-top: 2.5rem; border-top: 1px solid #f1f5f9; padding-top: 1rem;">
        Nota Técnica: A implementação do Six Sigma requer uma cultura orientada a fatos. Decisões baseadas em intuição dão lugar a decisões baseadas em evidências estatísticas.
      </p>
    `,
    proximo_id: "indicadores-kpi",
    proximo_titulo: "Gestão por Indicadores (KPIs)"
  },
  {
    id: "indicadores-kpi",
    titulo: "Gestão por Indicadores (KPIs)",
    subtitulo: "A bússola da gestão: transformando dados em decisões estratégicas.",
    emoji: "📊",
    conteudo: `
      <p class="prose-text">Os <strong>KPIs</strong> (<em>Key Performance Indicators</em>) são as métricas críticas que traduzem o desempenho de um processo em números objetivos. Em uma gestão profissional, eles deixam de ser apenas dados em uma planilha e passam a ser a "voz" do processo, indicando se ele está saudável ou se precisa de intervenção imediata.</p>

      <div style="background: #f1f5f9; border-left: 4px solid #1e293b; padding: 15px; margin: 1.5rem 0;">
        <p style="margin: 0; font-size: 0.9rem; line-height: 1.6;">
          <strong>Por que eles são vitais?</strong><br>
          Sem indicadores, as melhorias são baseadas em percepções subjetivas ("eu sinto que melhorou"). Com KPIs, as melhorias são baseadas em fatos. Eles servem para validar se o desenho do seu <strong>TO-BE</strong> realmente resolveu as dores encontradas no <strong>AS-IS</strong>, permitindo comparar o antes e o depois com precisão matemática.
        </p>
      </div>

      <p class="section-label" style="margin-top:1.5rem">1. A Regra de Ouro: Metas SMART</p>
      <p class="prose-text">Um indicador só tem utilidade se houver uma meta clara. Para evitar métricas vagas, utilizamos o padrão <strong>SMART</strong>:</p>
      <ul class="prose-text">
        <li><strong>S (Specific):</strong> Específica. "Reduzir o tempo de espera" é vago. "Reduzir o Lead Time da entrega de cartões" é específico.</li>
        <li><strong>M (Measurable):</strong> Mensurável. Você precisa de uma fonte de dados confiável para extrair esse número.</li>
        <li><strong>A (Achievable):</strong> Atingível. Metas impossíveis desmotivam a equipe e perdem a credibilidade.</li>
        <li><strong>R (Relevant):</strong> Relevante. O indicador deve estar alinhado aos objetivos estratégicos da cooperativa (ex: satisfação do cooperado).</li>
        <li><strong>T (Time-bound):</strong> Prazo. "Reduzir em 20% até o final do segundo trimestre".</li>
      </ul>

      <p class="section-label" style="margin-top:1.5rem">2. Eficiência vs. Eficácia</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 1.5rem 0;">
        <div style="padding: 15px; background: #fdf2f8; border-left: 5px solid #db2777; border-radius: 4px;">
          <strong style="color: #9d174d;">Indicadores de Eficiência</strong><br>
          <span style="font-size: 0.85rem;">Focam na produtividade e no uso de recursos. <em>"Fazer as coisas do jeito certo"</em>. Ex: Custo operacional por processo.</span>
        </div>
        <div style="padding: 15px; background: #f0fdf4; border-left: 5px solid #16a34a; border-radius: 4px;">
          <strong style="color: #14532d;">Indicadores de Eficácia</strong><br>
          <span style="font-size: 0.85rem;">Focam no resultado final e no valor gerado. <em>"Fazer as coisas certas"</em>. Ex: Percentual de metas atingidas.</span>
        </div>
      </div>

      <p class="section-label" style="margin-top:1.5rem">3. Métricas Essenciais de Fluxo (Tempo)</p>
      <p class="prose-text">Para quem trabalha com processos, estes três nomes definem o sucesso da operação:</p>
      
      <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; margin: 1rem 0; border: 1px solid #e2e8f0;">
        <thead>
          <tr style="background: #1e293b; color: #ffffff; text-align: left;">
            <th style="padding: 12px; border: 1px solid #334155;">Termo</th>
            <th style="padding: 12px; border: 1px solid #334155;">O que mede?</th>
            <th style="padding: 12px; border: 1px solid #334155;">Impacto no Negócio</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: #ffffff;">
            <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Lead Time</strong></td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Tempo total do pedido até a entrega.</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Satisfação do cliente/cooperado.</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Cycle Time</strong></td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Tempo de execução de uma etapa.</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Produtividade da equipe.</td>
          </tr>
          <tr style="background: #ffffff;">
            <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Throughput</strong></td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Volume de entregas por período.</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Capacidade de escala da operação.</td>
          </tr>
        </tbody>
      </table>

      <div class="example-block" style="margin: 2rem 0; border-left: 4px solid #f59e0b; background: #fffbeb;">
        <strong>Dashboard vs. Relatório:</strong><br>
        Em uma gestão moderna, o <strong>Dashboard (Painel)</strong> é dinâmico e mostra o "hoje" (ex: gargalos em tempo real). O <strong>Relatório</strong> é estático e olha para o "ontem" (ex: fechamento mensal). Para agir rápido, o gestor precisa de Dashboards.
      </div>
    `,
    proximo_id: "automacao-governanca",
    proximo_titulo: "Automação e Governança (BPM)"
  },
  {
    id: "automacao-governanca",
    titulo: "Automação e Governança (BPM)",
    subtitulo: "Sustentando a melhoria com tecnologia e controle.",
    emoji: "🤖",
    conteudo: `
      <p class="prose-text">Muitas empresas cometem o erro de "automatizar a bagunça". No BPM profissional, primeiro otimizamos o processo (Lean/Sigma) e só depois aplicamos tecnologia. A <strong>Automação</strong> traz escala, enquanto a <strong>Governança</strong> garante que o processo não se perca com o tempo.</p>

      <p class="section-label" style="margin-top:1.5rem">1. O Espectro da Automação</p>
      <p class="prose-text">Não existe apenas uma forma de automatizar. Dependendo da complexidade, escolhemos a ferramenta certa:</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 1.5rem 0;">
        <div style="padding: 15px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
          <strong style="color: #3b82f6;">RPA (Robotic Process Automation)</strong><br>
          <span style="font-size: 0.85rem;">"Robôs" que imitam o clique humano. Ideal para tarefas repetitivas em sistemas legados que não têm integração fácil.</span>
        </div>
        <div style="padding: 15px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
          <strong style="color: #3b82f6;">IA e Machine Learning</strong><br>
          <span style="font-size: 0.85rem;">Usada para tomadas de decisão complexas, como análise de crédito ou leitura inteligente de documentos (OCR).</span>
        </div>
        <div style="padding: 15px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
          <strong style="color: #3b82f6;">BPMS</strong><br>
          <span style="font-size: 0.85rem;">Sistemas que gerenciam o fluxo de trabalho de ponta a ponta, orquestrando tarefas entre pessoas e outros sistemas.</span>
        </div>
        <div style="padding: 15px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
          <strong style="color: #3b82f6;">Low-Code / No-Code</strong><br>
          <span style="font-size: 0.85rem;">Ferramentas que permitem criar soluções rápidas de automação sem a necessidade de codificação pesada.</span>
        </div>
      </div>

      <p class="section-label" style="margin-top:1.5rem">2. Governança de Processos: O Dono do Processo</p>
      <p class="prose-text">Governança é o conjunto de regras que garante que o processo <strong>TO-BE</strong> continue sendo seguido. Sem governança, as pessoas tendem a voltar silenciosamente para o modo antigo (AS-IS).</p>
      <ul class="prose-text">
        <li><strong>Process Owner (Dono do Processo):</strong> É a figura responsável por garantir o desempenho do processo e autorizar mudanças.</li>
        <li><strong>Documentação Viva:</strong> Manuais e fluxogramas devem ser atualizados sempre que o processo mudar. Documentação parada é documentação morta.</li>
        <li><strong>Auditoria de Processos:</strong> Verificações periódicas para garantir que os padrões de qualidade e segurança estão sendo mantidos.</li>
      </ul>

      <p class="section-label" style="margin-top:1.5rem">3. A Matriz de Decisão para Automação</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; margin: 1rem 0; border: 1px solid #e2e8f0;">
        <thead>
          <tr style="background: #1e293b; color: #ffffff; text-align: left;">
            <th style="padding: 12px; border: 1px solid #334155;">Critério</th>
            <th style="padding: 12px; border: 1px solid #334155;">Alta Prioridade para Automatizar</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: #ffffff;">
            <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Volume</strong></td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Tarefas executadas centenas de vezes ao dia.</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Padronização</strong></td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Tarefas baseadas em regras claras (Se X, então Y).</td>
          </tr>
          <tr style="background: #ffffff;">
            <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Estabilidade</strong></td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Processos que não mudam a cada semana.</td>
          </tr>
        </tbody>
      </table>

      <div class="example-block" style="margin: 2rem 0; border-left: 4px solid #10b981; background: #ecfdf5;">
        <strong>Exemplo Prático:</strong><br>
        Em vez de um funcionário conferir manualmente se um documento foi assinado (Tarefa), um <strong>RPA</strong> verifica o status no sistema e um <strong>fluxo de BPMS</strong> já encaminha para a próxima etapa automaticamente. Isso elimina o "tempo de espera" entre as mesas.
      </div>

      <p class="prose-text" style="background: #1e293b; color: #fff; padding: 20px; border-radius: 8px; margin-top: 2rem;">
        <strong>Conceito Final:</strong> A automação serve para liberar o ser humano de ser um "robô" e permitir que ele foque na análise, no relacionamento com o cooperado e na estratégia.
      </p>
    `,
    proximo_id: "conclusao-roteiro",
    proximo_titulo: "Resumo Prático: Como aplicar no dia a dia"
  },
  {
    id: "conclusao-roteiro",
    titulo: "Resumo Prático: Como aplicar no dia a dia",
    subtitulo: "Um passo a passo simples para iniciar qualquer melhoria.",
    emoji: "🏁",
    conteudo: `
      <p class="prose-text">Chegamos ao final desta introdução à Gestão de Processos. O objetivo não é decorar todas as siglas, mas saber qual ferramenta usar quando um problema aparecer na sua frente. Este roteiro serve como um guia de consulta rápida para os seus primeiros projetos.</p>

      <p class="section-label" style="margin-top:1.5rem">1. O Roteiro de 5 Passos para a Melhoria</p>
      <p class="prose-text">Sempre que identificar algo que poderia funcionar melhor, siga esta sequência lógica:</p>
      
      <div style="display: flex; flex-direction: column; gap: 12px; margin: 1.5rem 0;">
        <div style="padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #1e293b; border-radius: 4px;">
          <strong>Passo 1: Localize o Processo</strong><br>
          <span style="font-size: 0.85rem;">Entenda onde ele se encaixa na <strong>Cadeia de Valor</strong>. Isso ajuda a explicar por que ele é importante para a empresa.</span>
        </div>
        <div style="padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #1e293b; border-radius: 4px;">
          <strong>Passo 2: Desenhe o Agora (AS-IS)</strong><br>
          <span style="font-size: 0.85rem;">Liste as etapas atuais. Procure pelos <strong>8 Desperdícios do Lean</strong> (esperas, retrabalhos, papelada inútil).</span>
        </div>
        <div style="padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #1e293b; border-radius: 4px;">
          <strong>Passo 3: Proponha o Futuro (TO-BE)</strong><br>
          <span style="font-size: 0.85rem;">Desenhe como seria o processo ideal. Use a <strong>Automação</strong> para tarefas chatas e repetitivas onde for possível.</span>
        </div>
        <div style="padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #1e293b; border-radius: 4px;">
          <strong>Passo 4: Defina como medir (KPIs)</strong><br>
          <span style="font-size: 0.85rem;">Escolha um indicador (ex: <strong>Lead Time</strong>) para provar que a sua ideia realmente funcionou.</span>
        </div>
        <div style="padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #1e293b; border-radius: 4px;">
          <strong>Passo 5: Gire o Ciclo (PDCA)</strong><br>
          <span style="font-size: 0.85rem;">Coloque em prática em escala menor, veja o que deu errado (Check) e ajuste (Act).</span>
        </div>
      </div>

      <p class="section-label" style="margin-top:1.5rem">2. Tabela de Consulta Rápida: Ferramenta x Problema</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; margin: 1rem 0; border: 1px solid #e2e8f0;">
        <thead>
          <tr style="background: #1e293b; color: #ffffff; text-align: left;">
            <th style="padding: 12px; border: 1px solid #334155;">Se o problema é...</th>
            <th style="padding: 12px; border: 1px solid #334155;">Use esta abordagem:</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: #ffffff;">
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Muita burocracia e demora.</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Lean</strong> (Eliminar desperdícios).</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Muitos erros e falta de padrão.</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Six Sigma</strong> (Reduzir variação).</td>
          </tr>
          <tr style="background: #ffffff;">
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Não sabemos se o processo vai bem.</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>KPIs</strong> (Criar indicadores).</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 10px; border: 1px solid #e2e8f0;">As pessoas esquecem de fazer as etapas.</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Automação / Governança</strong>.</td>
          </tr>
        </tbody>
      </table>

      <div class="example-block" style="margin: 2rem 0; border-left: 4px solid #1e293b; background: #f1f5f9; padding: 15px;">
        <strong>Lembrete final:</strong><br>
        O melhor processo não é o mais complexo, mas aquele que as pessoas conseguem executar com facilidade e que gera valor para o cooperado. Comece pequeno, resolva uma dor real e o conhecimento virá com a prática.
      </div>

      <p class="prose-text" style="text-align: center; font-style: italic; color: #64748b; margin-top: 3rem;">
        "A jornada da melhoria contínua não tem linha de chegada."
      </p>
    `,
    proximo_id: null,
    proximo_titulo: null
  } 
];
/* ═══════════════════════════════════════════════════════════════
   CONTEÚDO DINÂMICO: CASE SEMÁFORO INTELIGENTE
   Objetivo: Demonstrar visão técnica + gestão de processos
═══════════════════════════════════════════════════════════════ */

const CASE_SEMAFORO = {
  "intro": {
    "titulo": "A Gênese do Projeto: O Insight do Negócio",
    "subtitulo": "Transformando uma dúvida casual em solução estratégica",
    "html": `
      <p class="prose-text">Durante um bate-papo, surgiu o questionamento: <em>"Por que não temos algo que veja se os cruzamentos estão livres para liberar o fluxo?"</em></p>
      <p class="prose-text">Este projeto nasce para validar que a <strong>IA não é um fim, mas um meio</strong> para atingir a eficiência operacional. Aqui, aplicamos os fundamentos de BPM para estruturar uma solução de Visão Computacional Local.</p>
      <div class="example-block" style="margin-top:1.5rem">
        <strong>Status:</strong> Protótipo em Vibe Coding (Python + YOLOv8).<br>
        <strong>Hardware:</strong> Execução 100% local (Asus VivoBook / Ryzen 5).
      </div>
    `
  },
  "as-is": {
    "titulo": "Diagnóstico AS-IS (Situação Atual)",
    "subtitulo": "O processo de temporização fixa e suas limitações",
    "html": `
      <p class="prose-text">Atualmente, o controle de tráfego opera sob uma lógica de <strong>ciclo fixo</strong>, independente da demanda real de veículos.</p>
      <div class="flow-diagram" style="margin: 1.5rem 0">
        <div class="flow-block as-is">Início do Ciclo</div>
        <div class="flow-block as-is">Tempo Verde Fixo (30s)</div>
        <div class="flow-block as-is">Espera Ociosa (se vazio)</div>
      </div>
      <p class="prose-text"><strong>Gargalo Identificado:</strong> O sistema "empurra" o fluxo (Push System) sem considerar a "puxada" (Pull) da demanda real, gerando filas artificiais.</p>
    `
  },
  "lean": {
    "titulo": "Ótica Lean: Eliminando Desperdícios",
    "subtitulo": "Identificando os 8 desperdícios no cruzamento",
    "html": `
      <p class="prose-text">Sob a ótica Lean, um semáforo mal sincronizado gera pelo menos 3 grandes desperdícios:</p>
      <ul style="list-style: none; padding: 0;">
        <li class="con-item"><strong>Espera:</strong> Motoristas parados em cruzamentos vazios.</li>
        <li class="con-item"><strong>Movimentação:</strong> Frenagens e acelerações desnecessárias.</li>
        <li class="con-item"><strong>Defeitos:</strong> Atrasos que impactam o Lead Time do trajeto.</li>
      </ul>
      <div class="impact-pill" style="margin-top:1rem">Meta: Reduzir o tempo de espera não-valor (NVA) em 40%.</div>
    `
  },
  "sixsigma": {
    "titulo": "Ótica Six Sigma: Reduzindo a Variabilidade",
    "subtitulo": "Estabilidade e previsibilidade do fluxo",
    "html": `
      <p class="prose-text">O Six Sigma foca na consistência. Um semáforo inteligente utiliza a <strong>Ciência da Precisão</strong> para garantir que o desvio padrão do tempo de espera seja o menor possível.</p>
      <div class="example-block">
        <strong>DMAIC aplicado:</strong><br>
        - Measure: Coleta de logs de ocupação via OpenCV.<br>
        - Analyze: Correlação entre horário e densidade de veículos.
      </div>
    `
  },
  "kpi": {
    "titulo": "Gestão por Indicadores (KPIs)",
    "subtitulo": "Como mediremos o sucesso do protótipo",
    "html": `
      <table style="width:100%; font-size:0.85rem; border-collapse: collapse; margin-top:1rem">
        <tr style="border-bottom: 2px solid var(--border)">
          <th style="text-align:left; padding:8px">Indicador</th>
          <th style="text-align:left; padding:8px">Definição</th>
        </tr>
        <tr>
          <td style="padding:8px"><strong>Average Wait Time</strong></td>
          <td style="padding:8px">Média de segundos que um veículo permanece imóvel.</td>
        </tr>
        <tr>
          <td style="padding:8px"><strong>Throughput Rate</strong></td>
          <td style="padding:8px">Veículos processados por ciclo de verde.</td>
        </tr>
      </table>
    `
  },
  "to-be": {
    "titulo": "Solução TO-BE: O Futuro com IA",
    "subtitulo": "Implementação do Semáforo Adaptativo",
    "html": `
      <p class="prose-text">A proposta final substitui a decisão baseada em tempo pela decisão baseada em <strong>dados de imagem em tempo real</strong>.</p>
      <div class="flow-diagram" style="margin: 1.5rem 0">
        <div class="flow-block to-be">Captura Webcam</div>
        <div class="flow-block to-be">Inferência YOLOv8</div>
        <div class="flow-block to-be">Ajuste Dinâmico</div>
      </div>
      <p class="prose-text">A automação inteligente (RPA de hardware) garante que o processo seja resiliente e auto-ajustável.</p>
    `
  }
};
const DATA_CBOK = {
  "visao_geral": {
    "titulo": "O que é o CBOK® 4.0?",
    "html": `
      <p>O <strong>Guide to the Business Process Management Common Body of Knowledge</strong> é o framework fundamental para quem deseja profissionalizar a gestão de processos.</p>
      <p>A versão 4.0 traz um foco maior em <strong>Transformação Digital</strong> e como o BPM se integra com tecnologias emergentes (IA e RPA).</p>
      <div class="example-block" style="border-left-color: #a855f7">
        <strong>Nota de Estudo:</strong> BPM não é uma ferramenta, é uma disciplina de gerenciamento que foca em resultados de ponta a ponta.
      </div>
    `
  },
  "modelagem": {
    "titulo": "Domínio: Modelagem de Processos",
    "html": `
      <p>Modelar é criar uma representação da realidade. No CBOK, isso envolve entender as notações (BPMN) e os níveis de detalhamento.</p>
      <ul style="list-style: none; padding: 0;">
        <li class="pro-item">✅ <strong>Mapa:</strong> Visão rápida e alto nível.</li>
        <li class="pro-item">✅ <strong>Diagrama:</strong> Fluxo principal e decisões.</li>
        <li class="pro-item">✅ <strong>Modelo:</strong> Dados completos para execução/automação.</li>
      </ul>
    `
  },
  "tecnologia": {
    "titulo": "Domínio: Tecnologia e BPMS",
    "html": `
      <p>Explora como as ferramentas de <strong>BPMS (Business Process Management Suites)</strong> permitem que o modelo desenhado se torne um software executável.</p>
      <p>Aqui entra a conexão com minha base técnica: como APIs e automações via Python podem acelerar a governança de processos dentro de uma cooperativa.</p>
    `
  }
};