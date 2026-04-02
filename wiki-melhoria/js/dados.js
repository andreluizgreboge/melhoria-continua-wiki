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
    exemplo_generico: "Otimização de Hardware Local: Ajustar os parâmetros de quantização de um modelo Qwen para rodar 5% mais rápido em um processador de notebook.",
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
  {
    id: "5w2h", 
    titulo: "5W2H", 
    categoria: "Execução",
    tldr: "O plano de ação definitivo. Transforme intenção em tarefa executável sem deixar pontas soltas.",
    o_que_e: "Checklist administrativo para definição de responsabilidades e prazos de um projeto.",
    explicacao: "É uma ferramenta de execução que não deixa margem para dúvidas. O acrônimo cobre: What (O que), Why (Por que), Where (Onde), When (Quando), Who (Quem), How (Como) e How Much (Quanto custa). Na Melhoria Contínua, ele é usado logo após um Kaizen ou uma análise de causa raiz para garantir que a solução proposta tenha um dono, um prazo e um orçamento definidos.",
    exemplo_generico: "Implementação de Poka-Yoke: O quê (Trava física no sensor), Por quê (Evitar refugo), Onde (Linha 02), Quando (Até dia 20), Quem (Engenharia), Como (Impressão 3D de gabarito), Quanto (R$ 200,00).",
    pros: ["Elimina ambiguidades de responsabilidade", "Fácil de comunicar e acompanhar"],
    cons: ["Pode se tornar burocrático para tarefas triviais", "Não substitui um cronograma complexo (Gantt)"],
    cor_tema: "green"
  },

  // ─── FILOSOFIAS (STACK) ───
  {
    id: "lean", 
    titulo: "Lean Thinking", 
    categoria: "Estratégia",
    tldr: "O pensamento enxuto. Maximize o valor para o cliente eliminando o que não agrega.",
    o_que_e: "Filosofia de gestão focada na redução de desperdícios e fluxo contínuo.",
    explicacao: "O Lean é fundamentado em 5 princípios: Valor, Fluxo de Valor, Fluxo Contínuo, Produção Puxada e Perfeição. O foco é identificar e eliminar os 8 desperdícios (DOWNTIME): Defeitos, Superprodução, Espera, Talento não utilizado, Transporte, Inventário, Movimentação e Processamento excessivo. Diferente de apenas 'cortar custos', o Lean busca criar um sistema onde o trabalho flua sem interrupções, focado estritamente no que o cliente está disposto a pagar.",
    exemplo_generico: "Redução de Lead Time: Analisar um processo de aprovação que leva 10 dias. Identificar que o documento fica 8 dias parado em 'espera' (desperdício) e redesenhar o fluxo para aprovação imediata ou automática.",
    pros: ["Aumento drástico da produtividade", "Melhora a satisfação do cliente final"],
    cons: ["Exige mudança profunda de cultura organizacional", "Baixa tolerância a falhas na cadeia de suprimentos"],
    cor_tema: "purple"
  },
  {
    id: "bsc", 
    titulo: "Balanced Scorecard (BSC)", 
    categoria: "Estratégia",
    tldr: "O painel de controle 360°. Alinhe a operação diária com a visão de longo prazo.",
    o_que_e: "Metodologia que traduz a estratégia em indicadores através de quatro perspectivas interconectadas.",
    explicacao: "Criado por Kaplan e Norton, o BSC evita a 'miopia' de olhar apenas para o caixa. Ele estabelece relações de causa e efeito entre: 1. Aprendizado e Crescimento (Pessoas/Cultura), 2. Processos Internos (Eficiência/Qualidade), 3. Clientes (Satisfação/Valor) e 4. Financeira (Lucro/ROI). É o framework que garante que a melhoria de um processo interno tenha um objetivo final claro para o negócio.",
    exemplo_generico: "Fluxo de Valor: Treinar a equipe em IA (Aprendizado) reduz o tempo de resposta do suporte (Processos), o que aumenta o NPS (Clientes) e, consequentemente, eleva o LTV e a receita (Financeira).",
    pros: ["Visão holística e equilibrada do negócio", "Conecta o chão de fábrica ao board executivo"],
    cons: ["Exige disciplina na coleta de dados variados", "Risco de excesso de indicadores (KPI overload)"],
    cor_tema: "purple"
  },
  {
    id: "porter", 
    titulo: "5 Forças de Porter", 
    categoria: "Estratégia",
    tldr: "O radar do mercado. Entenda as pressões externas antes de ajustar o motor interno.",
    o_que_e: "Modelo de análise competitiva para identificar a atratividade e os riscos de um setor.",
    explicacao: "Desenvolvido por Michael Porter, o framework analisa cinco vetores: a rivalidade entre concorrentes, o poder de barganha dos fornecedores, o poder dos clientes, a ameaça de novos entrantes e a ameaça de produtos substitutos. Para a Melhoria Contínua, é o diagnóstico que diz se o processo precisa focar em redução radical de custo ou em diferenciação técnica para sobreviver ao ambiente externo.",
    exemplo_generico: "SaaS de IA: 1. Rivalidade: Guerra de preços entre startups. 2. Novos Entrantes: Baixa barreira técnica (APIs prontas). 3. Substitutos: Modelos Open Source locais. 4. Fornecedores: Alto poder da NVIDIA/Cloud (custo de GPU). 5. Clientes: Alta barganha (fácil trocar de app). Resultado: Exige processos ultra-enxutos para manter a margem.",
    pros: ["Visão macro do ambiente de negócios", "Auxilia na tomada de decisão de longo prazo"],
    cons: ["Modelo estático em mercados muito voláteis", "Não foca na execução operacional direta"],
    cor_tema: "purple"
  },
  {
    id: "swot", 
    titulo: "Matriz SWOT (FOFA)", 
    categoria: "Estratégia",
    tldr: "O GPS da estratégia. Cruze o que você tem de bom com o que o mundo oferece.",
    o_que_e: "Ferramenta de diagnóstico que cruza o ambiente interno (Forças/Fraquezas) com o externo (Oportunidades/Ameaças).",
    explicacao: "A análise SWOT permite uma visão binocular do negócio. Internamente, identifica Forças (pontos fortes) e Fraquezas (gargalos). Externamente, mapeia Oportunidades (tendências de mercado) e Ameaças (riscos/concorrência). Na Melhoria Contínua, ela é usada para priorizar projetos: você usa uma 'Força' para aproveitar uma 'Oportunidade' ou aplica um 'Lean/Six Sigma' para mitigar uma 'Fraqueza' antes que uma 'Ameaça' se concretize.",
    exemplo_generico: "Upgrade Tecnológico: Força (Equipe domina Python) + Oportunidade (Crescimento de IA) - Fraqueza (Infraestrutura legada) - Ameaça (Concorrentes globais). Estratégia: Automatizar processos internos com IA local.",
    pros: ["Simplicidade e rapidez de execução", "Facilita a visualização de cenários complexos"],
    cons: ["Pode ser subjetiva se não houver dados reais", "Não gera um plano de ação por si só (exige um 5W2H)"],
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
    explicacao: "O WCM organiza a melhoria em pilares (Manutenção Autônoma, Manutenção Profissional, Melhoria Focada, etc.). É uma evolução do Lean que foca intensamente na redução de custos através da eliminação de perdas identificadas no 'Cost Deployment' (Matriz de Perdas). Para um builder, o WCM ensina a importância da manutenção preventiva do hardware e da robustez do código para evitar 'quebras' em produção.",
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


const DATA_CBOK = {
  // --- FUNDAMENTOS (CAP. 3) ---
"cap_3_1_definicao": {
    "titulo": "Cap. 3.1 - Definição e Princípios de BPM",
    "html": `
      <p>A Gestão por Processos de Negócio (BPM) é uma disciplina de gerenciamento que trata os processos de negócio como ativos de valor da organização. Ela pressupõe que os objetivos estratégicos são alcançados através da definição, engenharia, controle e melhoria contínua dos processos interfuncionais.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Âmbito e Conceitos Fundamentais</h3>
      <p>As iniciativas de BPM podem variar em escopo, desde projetos isolados de melhoria até sistemas holísticos de gestão corporativa:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;"><strong>Business Process Improvement (BPI):</strong> Iniciativa singular focada em alinhar o desempenho de um processo específico às expectativas dos clientes e à estratégia. Envolve análise, desenho e implementação de melhorias.</li>
        <li style="margin-bottom: 10px;"><strong>Enterprise Process Management (EPM):</strong> Aplicação sistêmica dos princípios de BPM em toda a organização. Fornece um modelo de governança e assegura que o portfólio de processos esteja alinhado à arquitetura corporativa.</li>
        <li style="margin-bottom: 10px;"><strong>Melhoria Contínua:</strong> Abordagem sustentada para monitorar o desempenho operacional, aplicando sistemas de controle e feedback simultâneo para garantir eficiência e agilidade.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Princípios Orientadores</h3>
      <p>A prática de BPM deve ser regida por diretrizes centrais que orientam a mudança organizacional:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>A mudança nos negócios deve ser abordada de fora para dentro (<em>outside-in</em>), priorizando a perspectiva do cliente.</li>
        <li>Os processos devem ser gerenciados de forma holística, transcendendo silos departamentais.</li>
        <li>A mudança é um processo contínuo e cíclico (uma jornada), não um evento com destino final único.</li>
        <li>O alinhamento deve ser absoluto entre a estratégia corporativa e os planos operacionais de métricas.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Nota Técnica:</strong> O foco na orientação "ponta a ponta" (end-to-end) é o que diferencia o BPM da gestão funcional tradicional, permitindo que a organização visualize como o valor é efetivamente criado e entregue ao destinatário final.
      </div>
    `
  },

  "cap_3_5_ciclo_vida": {
    "titulo": "Cap. 3.1.5 - A Estrutura do Ciclo de Vida BPM",
    "html": `
      <p>O gerenciamento de processos segue um ciclo de vida composto por atividades integradas e iterativas. Este ciclo garante que as mudanças sejam estruturadas e mensuráveis.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem;">Fases do Ciclo de Vida</h3>
      
      <p><strong>1. Alinhamento com a Estratégia e Objetivos:</strong> Inicia-se com a compreensão da proposta de valor da organização. Define a direção para o alinhamento dos processos e identifica quais funções são críticas para o atendimento das metas operacionais e do cliente.</p>
      
      <p><strong>2. Mudanças de Arquitetura:</strong> Envolve o trabalho técnico de modelagem, análise e desenho. Utiliza-se de informações de planos estratégicos e medições de desempenho atuais para projetar novas funções que agreguem valor real, contextualizando os processos no estado desejado.</p>
      
      <p><strong>3. Desenvolver Iniciativas:</strong> Fase dedicada à criação dos planos de implementação. Inclui o planejamento de formação em processos, gestão da mudança, mudanças tecnológicas e planos de realização de benefícios.</p>
      
      <p><strong>4. Implementar Mudanças:</strong> Execução dos planos desenvolvidos, coordenada por patrocinadores e gestores de projeto. Envolve cronogramas estruturados de tarefas, atividades com dependências e a fase de estabilização pós-implementação (<em>Go-Live</em>).</p>
      
      <p><strong>5. Medir o Sucesso:</strong> Monitorização contínua e avaliação dos benefícios em relação ao plano original. Os dados são armazenados em repositórios de processos e a responsabilidade é transferida para o dono do processo para garantir a melhoria contínua.</p>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Observação de Governança:</strong> A transição da Fase 5 para um modelo permanente de gestão corporativa é o que assegura que os ganhos de eficiência não se percam após o encerramento formal dos projetos de melhoria.
      </div>
    `
  },
"cap_3_6_tipos_processo": {
    "titulo": "Cap. 3.1.6 - Tipos de Processos",
    "html": `
      <p>O Guia CBOK classifica os processos de negócio em três categorias fundamentais, baseando-se na sua finalidade e na forma como entregam valor à organização e ao cliente final. Esta distinção é crucial para a definição de governança e priorização de investimentos.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Processos Primários (Processos de Negócio)</h3>
      <p>São processos de ponta a ponta, interfuncionais, que entregam valor diretamente ao cliente externo. Eles representam as atividades essenciais que cumprem a missão da organização e compõem a cadeia de valor. Exemplos genéricos incluem desde a recepção de um pedido até a entrega do produto ou serviço final.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Processos de Suporte</h3>
      <p>Estes processos são projetados para prover os recursos e a infraestrutura necessários para que os processos primários possam ser executados. Embora não entreguem valor direto ao cliente externo, são indispensáveis para a continuidade operacional. Envolvem áreas como gestão de recursos humanos, gestão de tecnologia da informação e infraestrutura física.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Processos de Gerenciamento</h3>
      <p>São utilizados para medir, monitorar e controlar as atividades de negócio. Estes processos garantem que os processos primários e de suporte atendam às metas operacionais, estratégicas, regulatórias e de conformidade. Eles não agregam valor direto ao cliente, mas são fundamentais para a eficácia e eficiência da gestão organizacional.</p>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Nota de Arquitetura:</strong> A compreensão destas categorias permite ao analista identificar quais fluxos exigem maior resiliência (Primários) e quais são candidatos à padronização rigorosa para redução de custos operacionais (Suporte).
      </div>
    `
  },

  "cap_3_7_atividades": {
    "titulo": "Cap. 3.1.7 - Atividades, Tarefas e Agregação de Valor",
    "html": `
      <p>A análise de processos exige uma decomposição hierárquica para que se possa compreender como o trabalho é efetivamente realizado. O CBOK define uma estrutura que vai do nível macro ao nível atômico da execução.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Hierarquia de Decomposição</h3>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;"><strong>Processo:</strong> Um fluxo completo de atividades que atravessa diversas áreas funcionais para entregar um resultado final.</li>
        <li><strong>Subprocesso:</strong> Um conjunto de atividades que possui um objetivo lógico e específico dentro de um processo maior.</li>
        <li style="margin-top: 10px;"><strong>Atividade:</strong> Trabalho executado por membros da organização ou por sistemas. É o nível onde geralmente se aplicam as instruções de trabalho.</li>
        <li><strong>Tarefa:</strong> O nível mais baixo de detalhamento; um passo atômico e específico dentro de uma atividade que não justifica maior decomposição para fins de modelagem.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Conceito de Agregação de Valor</h3>
      <p>Para o BPM, uma atividade agrega valor quando contribui positivamente para o resultado esperado pelo cliente ou pela organização. O CBOK estabelece que uma atividade agrega valor se atender a três critérios simultâneos:</p>
      <ol style="line-height: 1.8;">
        <li>O cliente está disposto a pagar pela atividade (ou ela é essencial para o resultado final).</li>
        <li>A atividade transforma fisicamente ou logicamente o serviço ou produto.</li>
        <li>A atividade é realizada corretamente na primeira vez (ausência de retrabalho).</li>
      </ol>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Análise de Eficiência:</strong> Atividades que não atendem a estes critérios são classificadas como "atividades que não agregam valor" e devem ser alvos primários de eliminação ou simplificação durante a fase de desenho de processos.
      </div>
    `
  },

  // --- MODELAGEM TÉCNICA (CAP. 4) ---
"cap_4_1_estatico_dinamico": {
    "titulo": "Cap. 4.1.3 - Identificação e Natureza dos Modelos de Processos",
    "html": `
      <p>A modelagem de processos não deve ser confundida com representações visuais genéricas. O Guia CBOK estabelece critérios rigorosos para diferenciar um <strong>Modelo de Processos</strong> de um simples diagrama ou mapa de processos.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Modelo vs. Diagrama/Mapa</h3>
      <p>Um verdadeiro modelo de processos possui características técnicas que permitem análise profunda e execução. As principais distinções incluem:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 8px;"><strong>Precisão e Notação:</strong> Modelos utilizam convenções padronizadas (como BPMN) com ícones objetivamente definidos, enquanto diagramas podem ser ambíguos ou vagos.</li>
        <li style="margin-bottom: 8px;"><strong>Conectividade:</strong> Modelos apresentam ligações verticais e horizontais, mostrando relacionamentos entre diferentes níveis de processos e um repositório centralizado.</li>
        <li style="margin-bottom: 8px;"><strong>Capacidade de Execução:</strong> Um modelo pode ser importado para sistemas de gestão (BPMS) e permite simulações automáticas, ao passo que mapas são "fotografias únicas" de difícil automação.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Modelos Estáticos vs. Dinâmicos</h3>
      <p>A natureza do modelo pode variar conforme o objetivo da análise, sendo comum a combinação de ambas as abordagens para obter resultados mais precisos.</p>
      
      <p><strong>Representações Estáticas:</strong> São utilizadas para estabelecer linhas de base (<em>Baselines</em>), documentar etapas do processo, descrever estados futuros com base em riscos ou metas, e gerir a mudança organizacional. Elas representam um estado único ou elementos fixos do processo de negócio.</p>
      
      <p><strong>Representações Dinâmicas:</strong> São projetadas para permitir a interação com o usuário ou demonstrar o desenvolvimento de tendências ao longo do tempo. Elas permitem observar como o processo se comporta sob condições variáveis.</p>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Simulação e Ferramentas</h3>
      <p>O uso de ferramentas adequadas permite a transição da modelagem estática para a dinâmica. A simulação pode ser manual ou automatizada, sendo essencial para:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>Testar o comportamento de processos na fase "To-Be" antes da implementação real.</li>
        <li>Alimentar dados de amostra para prever gargalos e comportamentos do fluxo.</li>
        <li>Produzir <em>snapshots</em> estáticos a partir de ciclos de execução dinâmica para análise de auditoria e conformidade.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Conclusão Técnica:</strong> A escolha entre modelos estáticos ou dinâmicos depende do nível de maturidade do projeto. Enquanto modelos estáticos garantem a documentação e o controle, os modelos dinâmicos são os capacitadores para a otimização preditiva e a automação via BPMS.
      </div>
    `
  },
"cap_4_5_bpmn": {
    "titulo": "Cap. 4.5.2 - Notações e o Padrão BPMN 2.0",
    "html": `
      <p>Uma notação em BPM é um conjunto padronizado de símbolos e regras que orientam a representação de processos de negócio. A adoção de padrões universais permite que profissionais de diferentes áreas compartilhem uma linguagem comum, garantindo consistência, capacidade de importação/exportação entre ferramentas e, em estágios avançados, a transformação de modelos em linguagens de execução.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Principais Notações de Mercado</h3>
      <p>O CBOK identifica diversas técnicas de modelagem, cada uma com aplicações específicas conforme a maturidade e o objetivo do projeto:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;"><strong>BPMN 2.0:</strong> Norma mantida pelo OMG (Object Management Group). É a notação mais robusta, com mais de 100 ícones, adequada para múltiplos públicos e execução técnica.</li>
        <li style="margin-bottom: 10px;"><strong>EPC (Event-driven Process Chain):</strong> Focada em eventos como gatilhos (triggers) ou resultados. Comum na arquitetura ARIS e útil para fluxos altamente complexos.</li>
        <li style="margin-bottom: 10px;"><strong>Flowcharting (Fluxogramas):</strong> Conjunto simples e não padronizado de símbolos. Útil para capturas rápidas e informais, mas limitado para análise profunda.</li>
        <li style="margin-bottom: 10px;"><strong>UML (Unified Modeling Language):</strong> Utilizada primordialmente para descrever requisitos de sistemas de informação e arquitetura de software.</li>
        <li style="margin-bottom: 10px;"><strong>Value Stream Mapping (VSM):</strong> Proveniente do Lean Manufacturing. Foca na eficiência, adicionando métricas de tempo e custo de recursos ao fluxo.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">O Padrão BPMN 2.0</h3>
      <p>O BPMN 2.0 é considerado o padrão <em>de facto</em> para modelagem de processos globalmente. Ele se destaca pela precisão técnica e pela capacidade de representar múltiplos aspectos da operação.</p>
      
      <p><strong>Características Técnicas:</strong></p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>Diferenciação clara entre eventos (iniciais, intermediários e finais).</li>
        <li>Representação de atividades, fluxos de mensagens e fluxos de dados.</li>
        <li>Suporte a comunicações intracorporativas e colaborações interempresariais (Coreografia).</li>
      </ul>

      <p style="margin-top:10px;"><strong>Aplicações e Limitações:</strong></p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Quando usar:</strong> Para simular processos com motores de execução, apresentar modelos a audiências técnicas e de negócio simultaneamente, ou executar processos via BPMS.</li>
        <li><strong>Desvantagens:</strong> Requer curva de aprendizado elevada e experiência para uso correto de todo o conjunto de símbolos. Pode haver variações de suporte à notação entre diferentes fornecedores de ferramentas.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Conclusão sobre Padronização:</strong> A escolha da notação deve considerar o estágio do projeto. Enquanto fluxogramas atendem a ideias iniciais, o BPMN 2.0 é indispensável para organizações que buscam a automação e a integração técnica de seus processos de ponta a ponta.
      </div>
    `
  },
"cap_4_6_niveis": {
    "titulo": "Cap. 4.6 - Níveis e Hierarquia do Modelo de Processos",
    "html": `
      <p>A modelagem de processos exige a organização de informações em diferentes níveis de detalhe. O CBOK estabelece que essa hierarquia é fundamental para manter o alinhamento entre a estratégia corporativa e a execução operacional, permitindo a decomposição técnica do fluxo 'ponta a ponta'.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Ontologia e Alinhamento</h3>
      <p>Para evitar conflitos de nomenclatura e redundâncias, é essencial estabelecer uma <strong>ontologia</strong> (vocabulário padronizado do domínio). O alinhamento garante que:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>Informações de níveis inferiores forneçam detalhes adicionais aos níveis superiores.</li>
        <li>Lacunas de informação sejam identificadas ao cruzar as perspectivas funcionais com a hierarquia macro.</li>
        <li>A visibilidade seja mantida através de um <strong>Repositório de Processos</strong>.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">As Quatro Perspectivas de Modelagem</h3>
      <p>Embora a nomenclatura varie entre organizações, o guia sugere quatro níveis integradores baseados nos papéis e responsabilidades:</p>
      
      <table style="width:100%; border-collapse: collapse; margin-top: 10px; font-size: 0.9rem;">
        <thead>
          <tr style="background-color: #f1f5f9; text-align: left;">
            <th style="padding: 8px; border: 1px solid var(--border);">Nível</th>
            <th style="padding: 8px; border: 1px solid var(--border);">Perspectiva</th>
            <th style="padding: 8px; border: 1px solid var(--border);">Responsabilidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 8px; border: 1px solid var(--border);"><strong>Corporativo</strong></td>
            <td style="padding: 8px; border: 1px solid var(--border);">Executiva</td>
            <td style="padding: 8px; border: 1px solid var(--border);">Alinhamento estratégico e visão global interfuncional.</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid var(--border);"><strong>Negócio</strong></td>
            <td style="padding: 8px; border: 1px solid var(--border);">Dono do Processo</td>
            <td style="padding: 8px; border: 1px solid var(--border);">Desempenho de processos ponta a ponta e subprocessos.</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid var(--border);"><strong>Fluxo de Trabalho</strong></td>
            <td style="padding: 8px; border: 1px solid var(--border);">Operações</td>
            <td style="padding: 8px; border: 1px solid var(--border);">Supervisão e execução de atividades reais.</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid var(--border);"><strong>Passos das Tarefas</strong></td>
            <td style="padding: 8px; border: 1px solid var(--border);">Pessoal/TI</td>
            <td style="padding: 8px; border: 1px solid var(--border);">Nível atômico: como o trabalho é feito e suportado por sistemas.</td>
          </tr>
        </tbody>
      </table>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Modelos Corporativos e Frameworks</h3>
      <p>O modelo corporativo fornece o plano organizacional de alto nível. Ele é utilizado para priorizar recursos e mapear indicadores-chave (KPIs). Para iniciar esta modelagem, o CBOK sugere o uso de estruturas consagradas:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 8px;">🔹 <strong>Cadeia de Valor de Porter:</strong> Foca em logística, operações, marketing e serviços.</li>
        <li style="margin-bottom: 8px;">🔹 <strong>SCOR:</strong> Referência para operações de cadeia de suprimentos.</li>
        <li style="margin-bottom: 8px;">🔹 <strong>PCF (APQC):</strong> Ideal para categorizar processos de suporte e gestão.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Melhores Práticas:</strong> A modelagem interna deve conformar-se às ferramentas utilizadas (como as capacidades do BPMN 2.0 em suítes BPMS). O nível de detalhe deve ser "suficientemente baixo" para entender a agregação de valor, mas "suficientemente alto" para não perder a visão do resultado final da unidade de negócio.
      </div>
    `
  },
"cap_4_11_simulacao": {
    "titulo": "Cap. 4.11 - Validação e Simulação de Processos",
    "html": `
      <p>A validação é o mecanismo técnico para garantir que um processo seja capaz de entregar resultados consistentes e de qualidade. A simulação, como forma avançada de validação, utiliza modelos matemáticos para prever o comportamento dinâmico do fluxo ao longo do tempo sob diferentes condições.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Utilização da Simulação</h3>
      <p>Para que uma simulação seja eficaz, é necessário um volume de dados suficiente que permita a execução de múltiplos cenários. As principais aplicações incluem:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Validação de Modelos:</strong> Verificar se o modelo digital replica as características de desempenho do processo real.</li>
        <li><strong>Previsão de Desempenho:</strong> Testar o desenho do processo variando o volume de transações (carga) e a disponibilidade de recursos (equipe).</li>
        <li><strong>Análise de Sensibilidade:</strong> Determinar quais variáveis (gargalos, automações, decisões) possuem maior impacto no resultado final.</li>
        <li><strong>Comparação de Cenários:</strong> Avaliar diferentes desenhos de processos (As-Is vs. To-Be) sob as mesmas circunstâncias de estresse.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Ensaios e Ambientes de Simulação</h3>
      <p>As simulações não se restringem ao ambiente eletrônico; elas podem ser conduzidas de forma manual ou automatizada:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;"><strong>Ensaios Manuais:</strong> Pequenas equipes multifuncionais executam transações simuladas ponta a ponta. Esta prática é vital para identificar falhas de comunicação, exceções não mapeadas e problemas em <em>handoffs</em> (passagens de bastão).</li>
        <li style="margin-bottom: 10px;"><strong>Simulação Eletrônica:</strong> Utiliza ferramentas de modelagem de alto nível para gerar grandes conjuntos de dados, permitindo análises de custo, tempo de ciclo e distribuição de carga.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Análise de Carga e Animação</h3>
      <p>Ferramentas avançadas permitem a análise de carga para prever o impacto de picos de transação no sistema. A simulação gera dados para análises típicas como:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>Utilização de recursos e identificação de ociosidade.</li>
        <li>Cálculo preciso de tempos de ciclo e identificação de gargalos.</li>
        <li>Análise de custos operacionais por transação.</li>
      </ul>
      <p style="margin-top:10px;">Algumas ferramentas oferecem <strong>animações das simulações</strong>, facilitando a identificação visual de fenômenos de congestionamento que poderiam passar despercebidos em relatórios puramente estatísticos.</p>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Diretriz de Engenharia:</strong> A simulação é o estágio final da modelagem técnica. Uma demonstração bem-sucedida em ambiente simulado deve ser um pré-requisito para o teste ou implementação de novos processos, reduzindo drasticamente o risco de falhas em ambiente de produção.
      </div>
    `
  },

  // --- ANÁLISE PROFUNDA (CAP. 5) ---
"cap_5_1_execucao": {
    "titulo": "Cap. 5.1.8 - Execução da Análise de Processos",
    "html": `
      <p>A execução da análise é um processo investigativo rigoroso cujo objetivo é garantir que as conclusões sobre o funcionamento da organização sejam baseadas em fatos extrapolados de dados, e não em rumores ou generalizações. Esta fase aplica-se tanto a processos existentes (As-Is) quanto ao desenho de novos fluxos.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Contexto de Negócio e Estratégia</h3>
      <p>A análise deve primeiro situar o processo dentro da cadeia de valor da organização, questionando sua razão de existência e criticidade:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Propósito:</strong> O que se pretende alcançar e por que o processo foi criado originalmente.</li>
        <li><strong>Adaptabilidade:</strong> Quão bem o processo opera no ambiente atual e qual sua resiliência frente a mudanças externas ou riscos internos.</li>
        <li><strong>Sustentabilidade Tecnológica:</strong> Avaliação dos sistemas que suportam o processo e sua viabilidade a longo prazo.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Contexto Cultural e Humano</h3>
      <p>BPM reconhece que a cultura influencia diretamente os resultados. Mudanças em processos podem gerar consequências não intencionais se as "regras não escritas" forem ignoradas:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 8px;">🔹 <strong>Liderança:</strong> Grau de comprometimento dos líderes com a mudança e como os incentivos recompensam os resultados.</li>
        <li style="margin-bottom: 8px;">🔹 <strong>Aceitação e Impacto:</strong> Como a mudança afetará a retenção de talentos e o clima organizacional.</li>
        <li style="margin-bottom: 8px;">🔹 <strong>Envolvimento Humano:</strong> Distinção entre atividades automatizadas (consistentes) e atividades manuais (que envolvem julgamento e variabilidade).</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Medição de Desempenho e Capacidade</h3>
      <p>Identificar lacunas entre o desempenho atual e as metas estratégicas através da <strong>análise de causa raiz</strong>. Os pontos-chave incluem:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Métricas Auditáveis:</strong> Definição de indicadores que monitorem precisão, tempo de resposta e custo.</li>
        <li><strong>Interação com o Cliente:</strong> Avaliação de quantas vezes o cliente interage com o processo; a premissa é que, geralmente, menos interações aumentam a satisfação.</li>
        <li><strong>Escalabilidade:</strong> Determinar em que ponto o processo se decompõe se o volume aumentar e qual o custo do processo em estado de ociosidade.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">4. Restrições: Gargalos, Variação e Custos</h3>
      <p>A eficiência é alcançada ao identificar e mitigar constrangimentos operacionais:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 8px;">⚠️ <strong>Gargalos:</strong> Identificar se o bloqueio é por falta de recursos, regras obsoletas ou silos organizacionais.</li>
        <li style="margin-bottom: 8px;">⚠️ <strong>Variação:</strong> Em processos de alta escala, a variação é prejudicial. A automação deve ser considerada para reduzir desvios e economizar tempo de ciclo.</li>
        <li style="margin-bottom: 8px;">💰 <strong>Custo:</strong> Divisão do custo total em alocações menores para priorizar onde melhorias tecnológicas trarão maior retorno financeiro.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">5. Controles de Processo</h3>
      <p>Diferenciação crítica entre <strong>Controle de Processo</strong> (a obrigação legal ou regulamentar, ex: uma assinatura) e <strong>Processo de Controle</strong> (os passos executados para obter esse controle).</p>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Conclusão da Análise:</strong> Uma análise bem executada transforma rumores em métricas acionáveis. Ela deve questionar não apenas o "como" o trabalho é feito, mas o "porquê" das regras existirem, visando eliminar o que não agrega valor e escalar o que é crítico para a estratégia.
      </div>
    `
  },
"cap_5_1_sistemas": {
    "titulo": "Cap. 5.1.11 - Análise dos Sistemas de Informação",
    "html": `
      <p>A análise dos sistemas de informação observa a tecnologia e os sistemas existentes sob a ótica de sua associação com os processos de negócio. Por basear-se em fatos técnicos e registros de software, esta análise tende a ser mais direta e menos sujeita a opiniões do que as análises de cunho organizacional ou cultural.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Análise do Fluxo de Dados</h3>
      <p>Técnica utilizada para mapear o trânsito das informações através de um sistema, permitindo entender como cada ponto do processo interage com os dados. Seus principais objetivos são:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>Identificar o volume e a complexidade das transações processadas.</li>
        <li>Descobrir gargalos, filas ou lotes desnecessários que não agregam valor.</li>
        <li>Revelar regras de negócio implícitas que podem ser convertidas em automações padrão ou processos de exceção.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Regras de Negócio e "Hard-Coding"</h3>
      <p>Muitos sistemas incorporam regras de negócio de forma explícita (configurações) ou implícita (algoritmos fixos/<em>hard-coded</em>). O CBOK alerta para o risco do <strong>conhecimento institucional perdido</strong>: quando as regras não estão documentadas e as pessoas que as conheciam deixam a organização, o sistema torna-se a única "evidência" da regra.</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">🔹 <strong>Desafio de Descoberta:</strong> Colaboração estreita entre analistas de processos e suporte técnico para extrair lógicas escondidas em configurações.</li>
        <li style="margin-bottom: 10px;">🔹 <strong>Engenharia Reversa:</strong> Necessidade de reconstruir a lógica funcional a partir do comportamento do sistema e do código, especialmente em ambientes sem controle de mudanças rigoroso.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Mineração de Processos (Process Mining)</h3>
      <p>Método avançado para descobrir, monitorar e melhorar fluxos através da extração de dados de <strong>registros de eventos</strong> (<em>logs</em>) dos sistemas de informação. A mineração permite confrontar o processo "idealizado" com a execução "real" registrada pelos sistemas, fornecendo uma base científica para a análise de conformidade e desempenho.</p>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">4. Documentação e Adequação</h3>
      <p>A análise deve avaliar a disponibilidade de diagramas de fluxo e interfaces de fornecedores. Na ausência destes, a engenharia reversa baseada no uso real do sistema é o único caminho para assegurar que o desenho do processo reflita a realidade tecnológica da organização.</p>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Insight de Integração:</strong> A análise de sistemas remove a "caixa-preta" tecnológica. Ao entender como os dados fluem e onde as regras estão codificadas, o analista pode distinguir o que é uma restrição real do sistema do que é apenas um processo obsoleto que sobreviveu por falta de documentação.
      </div>
    `
  },
"cap_5_1_causa_raiz": {
    "titulo": "Cap. 5.1.12 - Métodos de Análise: Causa Raiz, Custos e Sensibilidade",
    "html": `
      <p>A análise de processos utiliza métodos analíticos para extrair informações objetivas sobre o desempenho operacional. A escolha da técnica depende do objetivo da iniciativa, seja ele a redução de gastos, a eliminação de falhas ou a otimização do tempo de resposta.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Análise da Causa Raiz (RCA)</h3>
      <p>A RCA é um método sistemático para identificar a origem de problemas, visando a prevenção em vez de apenas a correção de sintomas. Os principais métodos incluem:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">🔹 <strong>5 Porquês:</strong> Técnica de inspeção por camadas que investiga a causa de um problema através da repetição da pergunta "por que" até que a causa fundamental seja revelada.</li>
        <li style="margin-bottom: 10px;">🔹 <strong>Diagrama de Ishikawa (Espinha de Peixe):</strong> Forma sistemática de examinar a relação entre causas e efeitos, categorizando os fatores que contribuem para um determinado resultado.</li>
        <li style="margin-bottom: 10px;">🔹 <strong>Análise de Pareto:</strong> Técnica estatística baseada no princípio de que 80% dos problemas originam-se de 20% das causas críticas, permitindo priorizar esforços.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Análise de Custos (Activity Based Costing)</h3>
      <p>Consiste no levantamento do custo real por atividade para totalizar o custo do processo. O foco é identificar valores gastos "escondidos" e comparar a eficiência entre o processo atual e o proposto.</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>Examina atributos como duração e FTE (Equivalente de Trabalho Pleno) ao nível da atividade.</li>
        <li>Identifica gargalos financeiros em interações com sistemas automatizados.</li>
        <li>Avalia o custo por transação como métrica fundamental da saúde do processo.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Análise do Tempo de Ciclo</h3>
      <p>Também chamada de análise de duração, mede o tempo decorrido desde a entrada (input) até a criação da saída (output) de cada atividade, incluindo os tempos de espera entre elas.</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Objetivo:</strong> Reduzir o tempo total do processo e eliminar atividades que não agregam valor.</li>
        <li><strong>Aplicações:</strong> Essencial no mapeamento Lean e na análise de Fluxo de Valor (Value Stream) para identificar gargalos operacionais.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">4. Análise de Sensibilidade (What-If)</h3>
      <p>Método que simula os efeitos de mudanças em parâmetros ou atividades para compreender a capacidade de resposta e a variabilidade do processo.</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>Avalia como o fluxo lida com o aumento ou diminuição súbita de entradas (demanda).</li>
        <li>Identifica em que ponto o processo atinge sua saturação ou onde novos gargalos surgirão sob estresse.</li>
        <li>Analisa a previsibilidade dos resultados diante de alterações nas variáveis de controle.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Diretriz do Analista:</strong> A aplicação combinada destas técnicas permite uma visão 360º. Por exemplo, a Análise de Pareto pode indicar qual gargalo atacar primeiro, enquanto a RCA descobre como resolvê-lo e a Análise de Sensibilidade prevê o impacto da solução no sistema global.
      </div>
    `
  },
"cap_5_1_tempo_ciclo": {
    "titulo": "Cap. 5.1.12.3 - Análise do Tempo de Ciclo (Duração)",
    "html": `
      <p>A análise do tempo de ciclo, também referida como análise de duração, é o método quantitativo para mensurar a eficiência temporal de um processo. Ela consiste em cronometrar cada atividade individualmente para entender o impacto de cada etapa no prazo de entrega final.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Mecânica de Medição</h3>
      <p>A medição é realizada de forma contínua, abrangendo o intervalo desde o recebimento da entrada (<em>input</em>) até a entrega da saída (<em>output</em>) correspondente. Um fator crítico nesta análise é a inclusão do tempo de espera entre o término de uma atividade e o início da subsequente, onde frequentemente residem as maiores ineficiências.</p>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Objetivos e Aplicações Técnicas</h3>
      <p>A análise de duração é fundamental para iniciativas de otimização estruturada, apresentando os seguintes benefícios:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Redução do Lead Time:</strong> Identificação de caminhos críticos para diminuir o tempo total de resposta ao cliente.</li>
        <li><strong>Detecção de Gargalos:</strong> Localização exata de etapas onde o trabalho se acumula por falta de capacidade ou excesso de burocracia.</li>
        <li><strong>Identificação de Desperdícios:</strong> Revelação de atividades que não agregam valor e que consomem tempo sem contribuir para o resultado final.</li>
      </ul>

      <p style="margin-top:10px;">Esta técnica é um pilar das metodologias <strong>Lean</strong> e do <strong>Mapeamento do Fluxo de Valor (VSM)</strong>, servindo como base para o cálculo da capacidade produtiva da organização.</p>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Nota de Análise:</strong> O tempo total do processo é a soma das durações de todas as atividades, mas a eficiência real é medida pela proporção entre o tempo de processamento ativo e o tempo total de ciclo (incluindo filas e esperas).
      </div>
    `
  },
"cap_5_1_interacao_humana": {
    "titulo": "Cap. 5.1.13 - Análise das Interações Humanas",
    "html": `
      <p>Muitos processos dependem do envolvimento humano direto para sua progressão. Por envolverem julgamento e competências que nem sempre estão documentadas, essas interações exigem técnicas de análise qualitativa e observacional para revelar a realidade da operação.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Observação Direta e o Efeito Hawthorne</h3>
      <p>Consiste em observar os executantes em ação. Como especialistas, eles costumam criar métodos eficientes dentro das restrições impostas. No entanto, o analista deve estar atento ao <strong>Efeito Hawthorne</strong>: a alteração do comportamento do indivíduo pelo simples fato de estar sendo observado.</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>Deve-se selecionar executantes com desempenho típico (médio), e não apenas os de alta performance.</li>
        <li>O foco deve ser descobrir se o executante compreende o impacto de sua tarefa no processo ponta a ponta.</li>
        <li>É essencial identificar tarefas baseadas em conhecimento tácito que não constam em manuais.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Aprendizagem do Principiante e Simulação</h3>
      <p>Técnicas que visam aprofundar a compreensão através da experimentação:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">🔹 <strong>Aprendizagem do Principiante:</strong> O analista executa a tarefa orientado pelo especialista. O ato de ensinar força o executante a verbalizar passos subconscientes.</li>
        <li style="margin-bottom: 10px;">🔹 <strong>Percurso de Grupo (Walkthrough):</strong> Representantes de cada etapa do processo discutem o fluxo em uma sala. Permite observar <em>handoffs</em> (transferências) e garantir que todas as entradas necessárias cheguem à atividade seguinte.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Layout do Local de Trabalho e Recursos</h3>
      <p>Análise física e lógica de como os ativos são utilizados:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Layout Físico:</strong> Inspirada nos conceitos Lean, foca na redução de deslocamentos, tempos de espera e transporte desnecessário de materiais ou documentos.</li>
        <li><strong>Alocação de Recursos:</strong> Questiona se o tempo de execução é fruto da falta de competência/treinamento (Capacidade) ou de restrições de ferramentas/equipamentos (Quantidade).</li>
        <li><strong>Gargalos Ocultos:</strong> Muitas vezes, a ineficiência não está no desenho do processo, mas na subutilização ou má alocação dos recursos humanos e técnicos.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">4. Motivação e Recompensas</h3>
      <p>Fator frequentemente negligenciado que investiga o que impulsiona o executante (bônus, promoções, satisfação emocional). Sistemas de recompensa desalinhados com o processo podem criar estrangulamentos invisíveis ou resistência à adoção de novos fluxos de trabalho.</p>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Conclusão Técnica:</strong> A análise humana revela a diferença entre o processo "no papel" e o processo "na prática". Sem compreender as motivações e os movimentos físicos dos executantes, qualquer tentativa de redesenho corre o risco de falhar por não aderir à realidade biopsicossocial da organização.
      </div>
    `
  },
"cap_5_1_maturidade": {
    "titulo": "Cap. 5.1.15 - Avaliação da Maturidade dos Processos",
    "html": `
      <p>A maturidade de um processo de negócio indica o quão próximo ele está de sua excelência operacional. Para ser considerado maduro, um processo deve ser completo em sua utilidade, automatizado, confiável em termos de dados e estar inserido em um ciclo de melhoria contínua.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">A Importância da Curva de Maturidade</h3>
      <p>Entender o posicionamento dos processos em uma curva de maturidade é essencial por três razões estratégicas:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Magnitude da Mudança:</strong> Ajuda a determinar a dificuldade da transição e qual abordagem de desenho (<em>Redesenho</em> ou <em>Reengenharia</em>) é recomendada.</li>
        <li><strong>Governança:</strong> Define o grau de propriedade (<em>Ownership</em>) necessário e as capacidades de gestão para manter o desempenho a longo prazo.</li>
        <li><strong>Plataformas Tecnológicas:</strong> Orienta a organização sobre quais ferramentas de automação e controle inteligente (BPMS) são adequadas para o estágio atual.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Níveis de Progressão</h3>
      <p>Embora existam modelos complexos (como o CMMI), o CBOK simplifica a visão de maturidade destacando que a maioria das organizações oscila entre os níveis 1 e 3:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">📉 <strong>Nível Inicial/Ad-hoc:</strong> Processos não documentados, dependentes de heróis individuais e resultados imprevisíveis.</li>
        <li style="margin-bottom: 10px;">📊 <strong>Nível Definido/Gerenciado:</strong> Processos interfuncionais documentados e com desempenho monitorado ativamente.</li>
        <li style="margin-bottom: 10px;">🚀 <strong>Nível Otimizado:</strong> Uso de tecnologias inteligentes para controle preventivo e foco total em inovação e melhoria.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Conexão com TI:</strong> O modelo de maturidade serve como um roteiro para a adoção de tecnologia. Tentar implementar automação complexa em processos de nível 1 costuma resultar em "automatizar o caos". A maturidade garante que a fundação documental e cultural esteja pronta para a escalabilidade digital.
      </div>
    `
  },
"cap_5_1_paralisia": {
    "titulo": "Cap. 5.1.16 - Fatores Críticos e a Paralisia por Análise",
    "html": `
      <p>A conclusão da fase de análise exige atenção a fatores que transcendem a técnica, focando na viabilidade política e operacional do projeto. O sucesso depende do apoio executivo e da capacidade da equipe de manter o foco no que é essencial para a tomada de decisão.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Liderança e Ganhos Rápidos (Quick Wins)</h3>
      <p>O apoio direto da liderança executiva é o fator de sucesso mais importante. Para garantir este patrocínio em organizações menos maduras, recomenda-se:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>Demonstrar benefícios através de <strong>pequenos projetos</strong> iniciais.</li>
        <li>Provar e sustentar ganhos ao longo do tempo para obter suporte a transformações maiores.</li>
        <li>Utilizar a maturidade dos processos como <em>input</em> para o roteiro de investimentos tecnológicos.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. O "Parque de Estacionamento" de Ideias</h3>
      <p>Um erro comum é tentar desenhar soluções antes de concluir a análise. O CBOK sugere separar esses momentos:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">🚫 <strong>Evitar o desenho prematuro:</strong> Projetar soluções durante a análise é como construir um edifício com apenas parte da planta pronta.</li>
        <li style="margin-bottom: 10px;">🅿️ <strong>Parking Lot:</strong> Criar um repositório para capturar sugestões de melhoria sem desviar o foco da investigação atual, tratando-as no momento oportuno do redesenho (To-Be).</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Paralisia por Análise (Analysis Paralysis)</h3>
      <p>O excesso de detalhamento em atividades insignificantes pode levar à perda de interesse da equipe e impaciência da gestão. A análise deve ser:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Suficiente:</strong> Documentar apenas o necessário para decidir como o processo deve ser alterado.</li>
        <li><strong>Rápida:</strong> O progresso deve ser visível para manter o engajamento dos patrocinadores.</li>
        <li><strong>Gerenciável:</strong> Manter o escopo pequeno o bastante para não exaurir os recursos.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">4. Alocação de Recursos Críticos</h3>
      <p>Os profissionais que mais conhecem os processos são geralmente os mais requisitados em suas funções diárias. O analista deve:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>Garantir que os especialistas tenham tempo liberado de suas tarefas rotineiras.</li>
        <li>Entender que consultores externos podem facilitar o método, mas <strong>não substituem</strong> os donos e executantes do processo.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Conclusão da Fase:</strong> A análise termina quando temos dados suficientes para redesenhar. Mais importante que a perfeição documental é a agilidade em transformar a descoberta em ação, mantendo o alinhamento com a estratégia e a cultura organizacional.
      </div>
    `
  },

  // --- DESENHO E FUTURO (CAP. 6) ---
"cap_6_1_valor": {
    "titulo": "Cap. 6.1 - O Que é e o Valor do Desenho de Processos",
    "html": `
      <p>O desenho de processos é a criação de especificações para processos novos ou modificados. Ele define tanto o <strong>desenho lógico</strong> (quais atividades são realizadas) quanto o <strong>desenho físico</strong> (como são realizadas), integrando fluxos de trabalho, plataformas tecnológicas e controles operacionais.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Definição Funcional</h3>
      <p>Um processo é a combinação de todas as atividades necessárias para entregar um produto ou serviço, independentemente de onde a tarefa é executada. O desenho coloca essas atividades em sequência para fornecer uma visão clara do fluxo de valor.</p>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">O Valor do Desenho (Estudo McKinsey)</h3>
      <p>O impacto financeiro de um desenho de processos robusto é quantificável. Segundo o <em>McKinsey Design Index (MDI)</em>, empresas líderes em desenho superam o crescimento de seus setores em uma proporção de <strong>dois para um</strong>. Os temas-chave identificados incluem:</p>
      
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">📊 <strong>Liderança Analítica:</strong> O desempenho do desenho deve ser medido com o mesmo rigor que receitas e custos, saindo do campo subjetivo para o métrico.</li>
        <li style="margin-bottom: 10px;">👥 <strong>Experiência do Utilizador (UX):</strong> O desenho centrado no usuário é responsabilidade de todos, eliminando a visão de "silo" departamental.</li>
        <li style="margin-bottom: 10px;">🔄 <strong>Iteração Contínua (Agile):</strong> O desenvolvimento deve ser incremental, utilizando testes constantes e <em>feedback</em> dos usuários finais para mitigar riscos.</li>
        <li>🌐 <strong>Interfuncionalidade:</strong> Quebra de barreiras entre o desenho físico, digital e de serviço para uma entrega coesa.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Conclusão Técnica:</strong> Projetar processos é um exercício de arquitetura organizacional. O sucesso financeiro está diretamente ligado à capacidade da empresa em transformar o desenho em uma competência estratégica mensurável, em vez de uma tarefa meramente operacional.
      </div>
    `
  },
"cap_6_1_infra_ti": {
    "titulo": "Cap. 6.1.4.4 - Análise e Projeto de Infraestrutura de TI",
    "html": `
      <p>A Tecnologia da Informação desempenha um papel fundamental no desenho de processos, atuando como o principal facilitador para a melhoria do desempenho. Dado que a maioria dos fluxos modernos envolve algum nível de automação, o envolvimento precoce das equipes de TI é crítico para garantir a viabilidade técnica e a integridade dos dados.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">TI como Veículo de Melhoria</h3>
      <p>O foco da colaboração entre analistas de processos e profissionais de TI deve ser a criação de um ecossistema onde os dados fluam sem fricção entre sistemas e atividades. O projeto de infraestrutura deve responder a perguntas estratégicas para evitar falhas de implementação:</p>
      
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Adequação Sistêmica:</strong> Quais softwares ou sistemas atendem melhor aos requisitos lógicos do novo processo?</li>
        <li><strong>Limitações Técnicas:</strong> Existem restrições na infraestrutura atual (hardware, rede, licenças) que impedem o desenho ideal?</li>
        <li><strong>Velocidade e Implementação:</strong> O projeto pode ser executado rapidamente ou requer uma abordagem faseada (incremental)?</li>
        <li><strong>Impacto Organizacional:</strong> Como as decisões tecnológicas afetarão a operação diária e qual o custo total de propriedade (incluindo treinamento)?</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Integração de Dados e Sistemas</h3>
      <p>Um desenho de processo robusto prevê a automação do fluxo de informação para eliminar redundâncias e erros manuais. A análise de infraestrutura deve considerar a interoperabilidade entre sistemas internos e a possível contratação de fornecedores externos para acelerar a entrega da solução tecnológica.</p>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Conexão com Dev & IA:</strong> Para líderes de IA, este ponto é crucial: a infraestrutura deve ser capaz de suportar o volume de dados necessário para modelos preditivos e garantir que a saída da IA seja consumível pelas atividades subsequentes do processo sem intervenção humana desnecessária.
      </div>
    `
  },
"cap_6_1_principios": {
    "titulo": "Cap. 6.1.5 - Princípios de Desenho de Processos",
    "html": `
      <p>Os princípios de desenho são diretrizes fundamentais que orientam a criação de processos eficazes. Eles não devem substituir o senso comum, mas servem como base para garantir que o novo desenho (<em>To-Be</em>) esteja alinhado às necessidades estratégicas e do mercado.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Desenho a partir do Exterior (Outside-In)</h3>
      <p>Este princípio estabelece que o processo deve ser desenhado começando pelas interações com o Cliente. A qualidade percebida é a soma de todos os pontos de contato (<em>touchpoints</em>).</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Visão Holística:</strong> Não basta otimizar o processo de venda se o suporte ou a logística falharem; a frustração em um ponto contamina toda a experiência.</li>
        <li><strong>Processos de Suporte:</strong> Embora o cliente não os veja diretamente, os processos internos (<em>Back Office</em>) são os pilares que sustentam a qualidade da entrega final.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Foco em Atividades que Agregam Valor</h3>
      <p>O redesenho deve identificar e priorizar as etapas que transformam informação ou material para satisfazer as exigências do cliente — ou seja, aquilo pelo qual o cliente estaria disposto a pagar.</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">🔹 <strong>Abstração de Funções:</strong> No início do desenho, deve-se focar no <strong>O QUÊ</strong> deve ser feito, e não no <strong>QUEM</strong> fará. Discutir cargos ou departamentos precocemente limita a criatividade e gera resistências políticas.</li>
        <li style="margin-bottom: 10px;">🔹 <strong>Flexibilidade Organizacional:</strong> Para um processo verdadeiramente novo, as descrições de cargos e locais de trabalho devem ser tratadas como variáveis, não como restrições fixas.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Estratégia de Otimização vs. Eliminação</h3>
      <p>Diferente de abordagens que focam agressivamente na "caça ao desperdício", o CBOK sugere uma abordagem tática para reduzir a resistência cultural:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>Em vez de dizer que uma tarefa "não agrega valor" (o que pode gerar animosidade com quem a executa), o foco deve ser <strong>otimizar as atividades de valor agregado</strong>.</li>
        <li>Ao fortalecer e acelerar as tarefas que importam, as atividades desnecessárias perdem sua razão de ser e tendem a se dissolver naturalmente durante a implementação.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Conclusão Técnica:</strong> O bom desenho é orientado pelo valor externo e desapegado da estrutura interna atual. Ao focar na jornada do cliente e na eficiência da transformação, o analista evita "pavimentar o caminho das vacas" (automatizar processos ineficientes) e cria soluções disruptivas.
      </div>
    `
  },
"cap_6_1_handoffs": {
    "titulo": "Cap. 6.1.5.3 - Otimização de Fluxo: Handoffs e Pontos de Contato",
    "html": `
      <p>A eficiência de um processo está diretamente ligada à fluidez de suas transições. O redesenho deve focar na eliminação de barreiras que fragmentam o trabalho e geram latência ou perda de informação.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Minimização de Handoffs</h3>
      <p>Um <strong>handoff</strong> ocorre quando a propriedade de uma atividade ou informação é transferida entre indivíduos ou departamentos. Eles são pontos críticos de ruptura onde dados podem ser perdidos ou mal interpretados.</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Risco:</strong> Quanto maior o número de transferências, maior a distorção da informação e o tempo total de ciclo.</li>
        <li><strong>Solução:</strong> Simplificar o fluxo e, sempre que possível, utilizar a tecnologia para automatizar a passagem de bastão, garantindo integridade e velocidade.</li>
        <li><strong>Flexibilidade de Papéis:</strong> O desenho não deve ser limitado pelas funções atuais. Se necessário, novas funções (como um "engenheiro generalista") devem ser criadas para evitar handoffs desnecessários.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Ponto de Contato Único (Single Point of Contact)</h3>
      <p>Evita a fragmentação da experiência do cliente e a confusão interna. Um ponto de contato único pode ser um gestor dedicado, um representante de atendimento ou um repositório digital centralizado (como uma Intranet), garantindo que a informação seja consistente e acessível.</p>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Segmentação por Clusters (Agrupamentos)</h3>
      <p>Tentar tratar todas as variações em um único processo gera lentidão. Se as entradas variam significativamente em complexidade ou volume, o processo deve ser ramificado logo no início:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">🛒 <strong>Exemplo do Supermercado:</strong> Caixas rápidos para poucos itens vs. caixas normais para grandes compras. Cada cluster recebe um tratamento (e recursos) adequado à sua natureza.</li>
        <li style="margin-bottom: 10px;">🚀 <strong>Eficiência:</strong> Embora introduza mais ramificações, a especialização dos fluxos aumenta drasticamente a velocidade e a satisfação do cliente final.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">4. Fluxo Contínuo e Valor (Lean)</h3>
      <p>Nada deve impedir ou retardar o <strong>Fluxo de Valor</strong>. Em serviços ou manufatura, a sequência principal de atividades que o cliente paga para receber deve fluir sem interrupções. Atividades de suporte existem apenas para viabilizar essa sequência principal.</p>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Insight de Automação:</strong> Ao redesenhar para IA, a redução de handoffs humanos é o maior ganho. Automatizar o cluster de "casos simples" permite que os especialistas humanos foquem apenas nas exceções complexas, garantindo o fluxo contínuo.
      </div>
    `
  },
"cap_6_1_lote": {
    "titulo": "Cap. 6.1.5.8 - Redução do Tamanho do Lote",
    "html": `
      <p>O processamento em lotes é uma prática comum que, embora pareça eficiente isoladamente, gera grandes tempos de espera e acúmulo de inventário (estoque de trabalho) ao longo do fluxo. A redução do tamanho do lote é essencial para criar um fluxo contínuo e previsível.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">O Problema dos Lotes</h3>
      <p>Quando o trabalho é agrupado em lotes, os itens que terminam primeiro precisam esperar que todo o restante do lote seja processado antes de seguirem para a próxima etapa. Isso causa:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Aumento do Inventário (WIP):</strong> Mais itens "em mãos" aguardando conclusão.</li>
        <li><strong>Latência no Feedback:</strong> Erros cometidos no início do lote só são descobertos após o processamento de todo o grupo.</li>
        <li><strong>Fluxo Interrompido:</strong> Alternância entre picos de carga de trabalho e períodos de ociosidade.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">O Estado Ideal: Fluxo Unitário</h3>
      <p>O objetivo final do desenho de processos moderno é o <strong>Tamanho de Lote Um</strong>. No contexto de serviços e tecnologia, isso se traduz no processamento de transações em tempo real.</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">🔹 <strong>Fluxo Suave:</strong> O trabalho flui de forma constante, reduzindo gargalos e pressões sobre os recursos humanos.</li>
        <li style="margin-bottom: 10px;">🔹 <strong>Agilidade:</strong> A capacidade de responder a uma única entrada do cliente sem depender do acúmulo de outras demandas.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Aplicação em Automação:</strong> Em projetos de IA e integração de sistemas, substituir rotinas de processamento noturno (Batch) por gatilhos em tempo real (Event-driven) é a materialização deste princípio, garantindo que o valor seja entregue ao cliente no instante da necessidade.
      </div>
    `
  },
"cap_6_1_redesenho_auto": {
    "titulo": "Cap. 6.1.5.12 - Redesenhar antes de Automatizar",
    "html": `
      <p>Um dos erros mais críticos em projetos de transformação é a aplicação de tecnologia sobre um fluxo de trabalho ineficiente ("as-is"). A automação sem o devido redesenho prévio é contraproducente por dois motivos principais:</p>
      
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Custo Desnecessário:</strong> Soluções tecnológicas podem ser onerosas, enquanto mudanças no desenho do processo ou treinamento poderiam resolver o problema com baixo investimento.</li>
        <li><strong>Amplificação do Problema:</strong> Automatizar um processo falho não o corrige; apenas faz com que ele execute erros e gere desperdícios de forma mais rápida e em maior escala.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">A Ordem de Precedência</h3>
      <p>Antes de introduzir TI, o analista deve aplicar o pensamento <strong>Lean</strong>, <em>benchmarking</em> e os princípios de desenho para simplificar o fluxo. O objetivo é garantir que o processo seja eficaz antes de torná-lo eficiente através da máquina.</p>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Colaboração com TI</h3>
      <p>A conversa com a equipe de Tecnologia da Informação deve ocorrer após a definição da visão do novo processo. Nesse momento, as capacidades de TI são confrontadas com as necessidades do desenho para identificar as <strong>ferramentas facilitadoras</strong> que permitirão a inovação e o controle do novo fluxo.</p>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Conexão com IA:</strong> No contexto de inteligência artificial, este princípio é vital: alimentar um modelo de IA com dados provenientes de um processo caótico resultará em "Garbage In, Garbage Out". O redesenho limpa a lógica do negócio para que a automação e a IA possam extrair o máximo valor.
      </div>
    `
  },
"cap_6_1_regras": {
    "titulo": "Cap. 6.1.7 - Regras de Processos e Complexidade",
    "html": `
      <p>As regras de negócio são as diretrizes lógicas que determinam <strong>como</strong> e <strong>quando</strong> uma atividade deve ser executada. Elas funcionam como mecanismos de controle que orientam o fluxo do processo com base em condições específicas (ex: limites de alçada financeira ou critérios de desconto).</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">A Armadilha da Complexidade</h3>
      <p>Uma tendência comum nas organizações é criar regras extremamente detalhadas para tentar eliminar qualquer margem de dúvida ou reforçar o controle. No entanto, o CBOK adverte:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Efeito Cascata:</strong> Regras complexas geram processos complexos.</li>
        <li><strong>Risco de Falha:</strong> Quanto maior a complexidade da lógica, maior a probabilidade de erros na execução, exceções não tratadas e gargalos operacionais.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Melhores Práticas de Aplicação</h3>
      <p>As regras de negócio devem ser aplicadas de forma criteriosa e estratégica para:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">⚖️ <strong>Conformidade:</strong> Reforçar políticas internas e regulamentos externos obrigatórios.</li>
        <li style="margin-bottom: 10px;">🛡️ <strong>Qualidade:</strong> Reduzir a incidência de erros humanos durante o processo.</li>
        <li style="margin-bottom: 10px;">⚡ <strong>Agilidade:</strong> Automatizar decisões rotineiras para acelerar a execução (ex: aprovações automáticas dentro de limites pré-estabelecidos).</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Insight para Desenvolvedores:</strong> Em sistemas de BPM e IA, as regras de negócio devem ser externalizadas do código sempre que possível (usando motores de regras ou BRMS). Isso permite que o negócio altere a lógica (ex: mudar o valor de uma alçada) sem necessidade de um novo deploy de software.
      </div>
    `
  },
"cap_6_1_sucesso": {
    "titulo": "Cap. 6.1.10 - Fatores Críticos de Sucesso no Desenho",
    "html": `
      <p>O sucesso na fase de desenho de processos depende de uma combinação de apoio político, estrutura organizacional e incentivos corretos. Ignorar estes fatores transforma o projeto de melhoria em uma "armadilha" de baixa adesão e resultados efêmeros.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Pilares do Sucesso no To-Be</h3>
      <p>Para garantir que o novo desenho seja implementado e sustentado, os seguintes fatores devem ser monitorados:</p>
      
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">👑 <strong>Liderança Executiva:</strong> O patrocínio de alto nível é essencial para romper silos e autorizar as mudanças estruturais propostas pelo redesenho.</li>
        <li style="margin-bottom: 10px;">🎯 <strong>Alinhamento Estratégico:</strong> O processo redesenhado deve contribuir diretamente para as metas globais da organização (ex: redução de custo, aumento de NPS).</li>
        <li style="margin-bottom: 10px;">👤 <strong>Propriedade do Processo (Ownership):</strong> Deve haver uma definição clara de quem é o "dono" do processo ponta a ponta, garantindo a governança após a implementação.</li>
        <li style="margin-bottom: 10px;">🤝 <strong>Equipas Interfuncionais:</strong> O desenho deve ser construído por pessoas de diferentes áreas, evitando que o processo atenda apenas a um departamento em detrimento do fluxo de valor.</li>
        <li style="margin-bottom: 10px;">💰 <strong>Compromisso de Investimento:</strong> O redesenho muitas vezes exige aportes em tecnologia, infraestrutura e treinamento para sair do papel.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Cultura e Sustentação</h3>
      <p>A sustentação do novo fluxo depende de mecanismos que incentivem o comportamento desejado:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Incentivos e Recompensas:</strong> O sistema de bônus e promoções deve estar alinhado às novas métricas de desempenho do processo.</li>
        <li><strong>Melhoria Contínua:</strong> O desenho não é estático; deve prever mecanismos para ajustes futuros conforme o mercado ou a tecnologia evoluem.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Conclusão da Seção:</strong> O desenho técnico (fluxogramas e regras) é apenas 50% do trabalho. Os outros 50% consistem em garantir que a organização tenha a vontade política e a estrutura de incentivos necessária para adotar a nova forma de trabalhar.
      </div>
    `
  },

  // --- MEDIÇÃO E DESEMPENHO (CAP. 7) ---
"cap_7_1_metricas": {
    "titulo": "Cap. 7.1 - Medição do Desempenho de Processos",
    "html": `
      <p>A medição do desempenho é a monitorização formal da execução para determinar a <strong>eficácia</strong> (atingir o objetivo) e a <strong>eficiência</strong> (uso otimizado de recursos). Sem medição, não há gestão real, apenas intuição.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Hierarquia da Informação: Medida, Métrica e Indicador</h3>
      <p>Para evitar confusões terminológicas comuns, o CBOK define:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">📏 <strong>Medição (Measurement):</strong> Quantificação bruta de dados em um padrão aceitável (ex: 10 erros, 50 minutos, 100 reais). Requer precisão e atualidade.</li>
        <li style="margin-bottom: 10px;">🧮 <strong>Métrica (Metric):</strong> Um cálculo derivado ou extrapolação de medidas (ex: <em>Número de erros / Produção total</em>). É aqui que avaliamos Tempo, Custo, Capacidade e Qualidade.</li>
        <li style="margin-bottom: 10px;">🚦 <strong>Indicador (Indicator):</strong> Representação intuitiva que facilita a interpretação em relação a uma meta (ex: Status Verde/Vermelho, ponteiros de Dashboard).</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Categorias de Métricas</h3>
      <table style="width:100%; border-collapse: collapse; margin-bottom: 15px;">
        <tr style="background-color: #f1f5f9;">
          <th style="border: 1px solid #cbd5e1; padding: 8px;">Categoria</th>
          <th style="border: 1px solid #cbd5e1; padding: 8px;">Foco</th>
          <th style="border: 1px solid #cbd5e1; padding: 8px;">Exemplos</th>
        </tr>
        <tr>
          <td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>Produto</strong></td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Características da saída</td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Tamanho, Qualidade, Design</td>
        </tr>
        <tr>
          <td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>Processo</strong></td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Resultados do fluxo</td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Satisfação do Cliente, Tempo Médio entre Falhas (MTTF)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>Projeto</strong></td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Execução da iniciativa</td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Custo do projeto, Produtividade da equipe, Cronograma</td>
        </tr>
      </table>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Alinhamento em Três Níveis (Rummler-Brache)</h3>
      <p>O sucesso do BPM depende de ligar as métricas em toda a pirâmide organizacional:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Nível Corporativo (C-Suite):</strong> Foco em Quota de Mercado (Market Share), Receita e Lucro.</li>
        <li><strong>Nível de Processo (Interfuncional):</strong> Foco no Tempo de Ciclo de ponta a ponta (ex: do Pedido ao Pagamento).</li>
        <li><strong>Nível de Atividade (Individual):</strong> Foco na exatidão da tarefa e pontualidade (ex: precisão no preenchimento de formulários).</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Estudo de Caso ABC:</strong> Uma queda no Market Share (Corporativo) foi causada por um Ciclo de 9 dias (Processo), que por sua vez foi gerado por erros de digitação e acúmulo de lotes semanais nas vendas (Atividade). Sem métricas de processo, a empresa atacaria apenas os sintomas financeiros, ignorando a causa raiz operacional.
      </div>
    `
  },
"cap_7_3_voz_processo": {
    "titulo": "Cap. 7.3.1.2 - A Voz do Processo e Controle Estatístico",
    "html": `
      <p>A <strong>Voz do Processo</strong> é o desempenho real e mensurável de um fluxo operacional. Um processo é considerado "capaz" quando está sob controle estatístico, operando dentro de limites previsíveis de tempo, custo e qualidade.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Variabilidade: Causas Comuns vs. Atribuíveis</h3>
      <p>Walter Shewhart definiu duas fontes de variação que todo analista de BPM deve distinguir:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Causa Comum (Aleatória):</strong> Inerente ao processo, como pequenas flutuações naturais. É o "ruído" do sistema. Se o processo só tem causas comuns, ele é <strong>estável e previsível</strong>.</li>
        <li><strong>Causa Atribuível (Especial):</strong> Provocada por fatores externos ou falhas específicas (ex: queda de energia, erro humano, quebra de máquina). Pode ser <strong>transitória</strong> (rara) ou <strong>persistente</strong> (frequente em ambientes precários).</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Gráficos de Controle (Cartas de Shewhart)</h3>
      <p>São ferramentas visuais que plotam o desempenho ao longo do tempo entre o Limite Superior (UCL) e Inferior (LCL) de controle (geralmente ±3 sigma). Os principais modelos incluem:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>XmR (Individuais e Alcance Móvel):</strong> Ideal para dados contínuos.</li>
        <li><strong>Gráficos de Média (X-barra) e Desvio Padrão (S):</strong> Para monitorar a estabilidade da média e a dispersão.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Testes de Execução (Run Tests)</h3>
      <p>Para detectar padrões não naturais (causas atribuíveis), aplicam-se quatro testes fundamentais:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 8px;">🚩 <strong>Teste 1:</strong> Um único ponto fora dos limites de 3 sigma.</li>
        <li style="margin-bottom: 8px;">🚩 <strong>Teste 2:</strong> 2 de 3 pontos sucessivos além de 2 sigma no mesmo lado.</li>
        <li style="margin-bottom: 8px;">🚩 <strong>Teste 3:</strong> 4 de 5 pontos sucessivos além de 1 sigma no mesmo lado.</li>
        <li style="margin-bottom: 8px;">🚩 <strong>Teste 4:</strong> 8 pontos sucessivos do mesmo lado da linha central (média).</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Regra de Ouro:</strong> O objetivo final é remover todas as causas atribuíveis. Quando isso ocorre, a variação total é igual à variação de causa comum, resultando em um processo maduro. Como diz o CBOK: <em>"Nunca pare o gráfico de controle"</em>, pois ele é o termômetro da saúde operacional.
      </div>
    `
  },
"cap_7_3_bsc": {
    "titulo": "Cap. 7.3.3 - Balanced Scorecard (BSC)",
    "html": `
      <p>O <strong>Balanced Scorecard (BSC)</strong> é uma metodologia de gestão estratégica que permite medir o progresso de uma organização além das métricas financeiras tradicionais. Ele busca o equilíbrio entre indicadores de curto e longo prazo, financeiros e não financeiros.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Os 4 Pilares do Equilíbrio</h3>
      <p>O BSC organiza a estratégia em quatro perspectivas integradas:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Financeira:</strong> Como os acionistas nos veem? (Lucro, ROI, Receita).</li>
        <li><strong>Clientes:</strong> Como os clientes nos veem? (Satisfação, Retenção, Market Share).</li>
        <li><strong>Processos Internos:</strong> Em que processos devemos ser excelentes para satisfazer clientes e acionistas? (Qualidade, Ciclo, Inovação).</li>
        <li><strong>Aprendizado e Crescimento (Pessoas):</strong> Como sustentamos nossa capacidade de mudar e melhorar? (Treinamento, Cultura, Sistemas de Informação).</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Indicadores de Tendência vs. Resultado</h3>
      <p>Uma das funções vitais do BSC é equilibrar dois tipos de métricas:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 8px;">🚀 <strong>Leading Indicators (Principais):</strong> Indicadores de tendência que antecipam resultados futuros (ex: horas de treinamento da equipe).</li>
        <li style="margin-bottom: 8px;">📉 <strong>Lagging Indicators (Desfasados):</strong> Indicadores de resultados que mostram o que já aconteceu (ex: faturamento do mês passado).</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Princípios de Execução</h3>
      <p>Para que o BSC não seja apenas um quadro estático, o CBOK destaca cinco princípios:</p>
      <ol style="padding-left: 20px;">
        <li>Traduzir a estratégia para termos operacionais (o que o dev ou o analista faz no dia a dia).</li>
        <li>Alinhar a Organização com a estratégia.</li>
        <li>Fazer da estratégia o trabalho de todos (democratização do objetivo).</li>
        <li>Fazer da estratégia um processo contínuo.</li>
        <li>Mobilizar a mudança através da liderança executiva.</li>
      </ol>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Crítica Técnica:</strong> O excesso de métricas pode gerar distração. A recomendação do CBOK é focar apenas nos dados suficientes para uma imagem completa. Em contextos de IA, o BSC ajuda a garantir que a automação não foque apenas em reduzir custo (Financeiro), mas também melhore a Experiência do Cliente e a Capacidade da Equipe.
      </div>
    `
  },

  // --- TECNOLOGIA E ARQUITETURA (CAP. 8) ---
"cap_8_1_transf_digital": {
    "titulo": "Cap. 8.1 - O Negócio e a Transformação Digital",
    "html": `
      <p>A transformação digital não é apenas sobre tecnologia; é um repensar radical de como as organizações utilizam pessoas, processos e sistemas para mudar o desempenho e a entrega de valor ao cliente.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Os Três Níveis de Transformação (HBR)</h3>
      <p>O impacto da mudança varia conforme a profundidade do foco organizacional:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Operacional:</strong> Fazer o que já fazemos, mas de forma mais rápida e barata. É a receita para a sobrevivência a curto prazo.</li>
        <li><strong>Modelo Operacional:</strong> Mudar a forma fundamental de execução e as métricas de sucesso (ex: Netflix migrando do DVD para o Streaming).</li>
        <li><strong>Estratégica:</strong> Mudar a própria essência da organização e seu conjunto competitivo (ex: Amazon passando de varejista para gigante de Cloud/AWS).</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. O Conceito de Gêmeos Digitais (Digital Twins)</h3>
      <p>Uma tendência emergente na transformação digital é a criação de representações digitais de sistemas físicos, incluindo pessoas e processos:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">🏢 <strong>Duplicação:</strong> Quanto mais fiel o gêmeo digital for ao objeto físico, mais fácil encontrar eficiências via simulação.</li>
        <li style="margin-bottom: 10px;">🔄 <strong>Metodologia:</strong> Primeiro documenta-se o processo físico, depois decide-se entre reimaginar ou apenas digitalizar (se o processo já agregar valor).</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Pilares para o Sucesso</h3>
      <p>A gestão de topo deve priorizar os seguintes elementos para evitar falhas na jornada digital:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Pessoas em Primeiro Lugar:</strong> Focar em funções, aptidões e competências necessárias para a mudança.</li>
        <li><strong>Equipes de Aptidões Mistas:</strong> Ambientes colaborativos que encorajam o pensamento "fora da caixa".</li>
        <li><strong>BPM como Fundação:</strong> O BPM fornece os métodos para criar e gerir os processos que os sistemas digitais irão suportar.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Nota sobre Inovação Tecnológica:</strong> O conceito de "Gêmeo Digital" (*Digital Twin*) de processos representa o estágio avançado da convergência entre BPM e IA. Ao espelhar fluxos de trabalho em um ambiente digital, é possível aplicar modelos preditivos para antecipar gargalos ou simular cenários de mudança antes da implementação física. A transformação estratégica ocorre quando a tecnologia é utilizada para redesenhar a proposta de valor do negócio, e não apenas para automatizar tarefas existentes.
      </div>
    `
  },
"cap_8_3_canvas_porter": {
    "titulo": "Cap. 8.3.3 - Arquitetura de Negócio e Alinhamento",
    "html": `
      <p>A Arquitetura de Negócio é o principal condutor para os outros domínios da organização. Ela funciona como a documentação formal que define as cadeias de valor, processos centrais e as funções de apoio necessárias para a execução da estratégia.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. O Binômio Negócio-Dados</h3>
      <p>Um conceito fundamental desta seção é a indissociabilidade entre processos e dados. Eles devem ser projetados simultaneamente, pois:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>O dado é a <strong>entrada (input)</strong> que aciona ou alimenta uma atividade.</li>
        <li>O dado é a <strong>saída (output)</strong> que registra o resultado ou gera valor para a próxima etapa.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Objetivos da Arquitetura de Negócio</h3>
      <p>A arquitetura não é apenas um diagrama, mas uma ferramenta de gestão utilizada para:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 8px;">🎯 <strong>Alinhamento:</strong> Conectar a capacidade real dos processos aos objetivos estratégicos da C-Suite.</li>
        <li style="margin-bottom: 8px;">📚 <strong>Padronização:</strong> Estabelecer princípios orientadores e um repositório corporativo para reutilização de processos.</li>
        <li style="margin-bottom: 8px;">📊 <strong>Medição:</strong> Fornecer a base para o desempenho operacional e <em>benchmarking</em>.</li>
        <li style="margin-bottom: 8px;">📢 <strong>Comunicação:</strong> Educar e formar colaboradores sobre como o trabalho se encaixa no todo.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Metodologia de Fases</h3>
      <p>O desenvolvimento dessa arquitetura geralmente segue duas fases principais:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Fase 1:</strong> Definição da visão de arquitetura baseada na estratégia corporativa.</li>
        <li><strong>Fase 2:</strong> Detalhamento dos processos, funções e responsabilidades (quem faz o quê).</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Nota sobre Arquitetura de Dados:</strong> A Arquitetura de Negócio é o alicerce para a definição dos <em>requisitos de dados</em> em sistemas inteligentes. Projetar o processo e a estrutura de dados de forma simultânea garante que a captura de informações ocorra diretamente na fonte. Isso evita a necessidade de intervenções posteriores em sistemas legados para extrair métricas que não foram previstas no desenho original do fluxo.
      </div>
    `
  },
"cap_8_5_ibpms_regras": {
    "titulo": "Cap. 8.5 - iBPMS e Motores de Regras (BRMS)",
    "html": `
      <p>As <strong>iBPMS</strong> (Intelligent Business Process Management Suites) são evoluções do BPMS tradicional que integram analítica avançada e inteligência artificial para criar ambientes de execução dinâmicos e adaptáveis.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Capacidades das iBPMS</h3>
      <p>Além das funções básicas de modelagem e execução, as suítes inteligentes oferecem:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Analítica Avançada & IA:</strong> Descoberta autônoma de padrões, previsões e geração de recomendações.</li>
        <li><strong>Process Mining:</strong> Análise de logs de eventos para identificar o processo real vs. o desenhado.</li>
        <li><strong>Gestão Dinâmica de Casos:</strong> Capacidade de lidar com exceções <em>ad-hoc</em> sem regras rígidas pré-definidas.</li>
        <li><strong>IoT e Blockchain:</strong> Integração com sensores físicos e contratos inteligentes para execução automática de obrigações.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Motores de Regras (BRMS) e DMN</h3>
      <p>As regras de negócio são a "lógica da organização". O CBOK recomenda o uso de <strong>BRMS</strong> (Business Rule Management Systems) para externalizar essa lógica do código-fonte.</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;">⚖️ <strong>Externalização:</strong> Permite que gestores alterem regras (ex: limites de crédito) sem necessidade de novos <em>deploys</em> de software.</li>
        <li style="margin-bottom: 10px;">📋 <strong>Tipos de Regras:</strong> Incluem restrições obrigatórias, orientações, capacitadores de ação (Se-Então) e algoritmos de computação.</li>
        <li style="margin-bottom: 10px;">🏗️ <strong>DMN (Decision Model and Notation):</strong> Padrão complementar ao BPMN para modelar a lógica de decisão de forma visual e intercambiável.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Evolução dos Dados: NoSQL e iDB</h3>
      <p>Para suportar Big Data e IoT, as iBPMS utilizam bases de dados <strong>NoSQL</strong> (orientadas a documentos, grafos ou objetos), focando em escalabilidade e performance para dados não estruturados, enquanto o SQL tradicional permanece para transações críticas.</p>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Nota sobre Arquitetura de Decisão:</strong> A integração da notação <strong>DMN</strong> em arquiteturas de automação permite a coexistência de lógicas determinísticas e probabilísticas. Tabelas de decisão tratam regras de negócio rígidas, enquanto modelos de IA podem ser invocados para decisões complexas. Essa abordagem híbrida assegura a explicabilidade e a auditabilidade do processo automatizado.
      </div>
    `
  },
"cap_8_6_rpa_falhas": {
    "titulo": "Cap. 8.6.1.10 - Cinco Razões de Falha em Projetos de RPA",
    "html": `
      <p>Embora o RPA prometa eficiência rápida, muitos projetos estagnam após a fase piloto. As falhas geralmente não decorrem da tecnologia em si, mas de uma execução que ignora o ecossistema corporativo.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">As 5 Armadilhas da Automação Robótica</h3>
      
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;">🚫 <strong>1. Hesitação da Gestão:</strong> O RPA é disruptivo. Gestores que temem "perturbar o negócio" ou que não estão dispostos a lidar com a mudança cultural acabam boicotando a escala da solução.</li>
        
        <li style="margin-bottom: 12px;">🎓 <strong>2. Falta de Formação Ampla:</strong> O fracasso ocorre quando o conhecimento fica restrito a um pequeno grupo. Para ser sustentável, a organização precisa investir na capacitação de uma base maior de pessoal.</li>
        
        <li style="margin-bottom: 12px;">🎯 <strong>3. Casos de Uso Incorretos:</strong> Tentar automatizar processos complexos demais logo de início ou processos que não geram ROI claro. O segredo é o equilíbrio: "começar pequeno, mas começar inteligente" para garantir o fator "UAU" e o retorno financeiro.</li>
        
        <li style="margin-bottom: 12px;">🛡️ <strong>4. Exclusão de TI e Segurança:</strong> Automatizar sem o suporte da TI cria soluções frágeis ("Shadow IT"). A TI é indispensável para a manutenção da infraestrutura, segurança dos dados e sustentabilidade dos bots a longo prazo.</li>
        
        <li style="margin-bottom: 12px;">💻 <strong>5. Exclusão dos Desenvolvedores (App Owners):</strong> Se a equipe que mantém os sistemas legados não estiver envolvida, o bot quebrará na primeira mudança de interface ou atualização de software, pois o controle de mudanças não estará alinhado.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Insight para o Dev & IA Lead:</strong> O RPA deve ser visto como uma extensão do desenvolvimento de software, não como um substituto. Como você dirige projetos de IA, o ponto 4 e 5 são vitais: um bot de RPA sem governança de TI é apenas uma dívida técnica futura esperando para acontecer.
      </div>
    `
  },

  // --- CULTURA E GOVERNANÇA (CAP. 9) ---
"cap_9_4_organizacao_matriz": {
    "titulo": "Cap. 9.4.1 - Matriz de Desempenho (Rummler-Brache)",
    "html": `
      <p>A Matriz de Desempenho, baseada nos conceitos de Geary Rummler, visualiza a organização como um sistema vivo onde os processos interfuncionais são o "tecido conjuntivo" que une a estratégia à execução.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">Os 3 Níveis de Desempenho</h3>
      <p>A matriz integra três níveis críticos para garantir que o trabalho tenha propósito:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Nível Organizacional:</strong> Foco na empresa como um todo, sua relação com o mercado e metas globais.</li>
        <li><strong>Nível de Processos:</strong> Foco nos fluxos específicos que cruzam departamentos para entregar valor.</li>
        <li><strong>Nível de Trabalho (Atividade):</strong> Foco nas tarefas concretas executadas por pessoas e sistemas.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">As 9 Variáveis de Desempenho</h3>
      <p>Para cada nível, a organização deve gerenciar três dimensões fundamentais, criando uma matriz 3x3:</p>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: #f1f5f9;">
          <th style="border: 1px solid #cbd5e1; padding: 8px;">Nível</th>
          <th style="border: 1px solid #cbd5e1; padding: 8px;">Metas e Medidas</th>
          <th style="border: 1px solid #cbd5e1; padding: 8px;">Desenho e Implantação</th>
          <th style="border: 1px solid #cbd5e1; padding: 8px;">Gestão</th>
        </tr>
        <tr>
          <td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>Organizacional</strong></td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Estratégia e métricas de sucesso da empresa.</td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Estrutura e recursos da organização.</td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Governança executiva.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>Processo</strong></td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Objetivos do fluxo (ex: tempo de ciclo).</td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Lógica do fluxo e conexão entre áreas.</td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Gestão do "dono" do processo.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>Trabalho</strong></td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Metas individuais e do executante.</td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Treinamento, ferramentas e ergonomia.</td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Feedback e suporte ao colaborador.</td>
        </tr>
      </table>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Insight para Projetos de IA:</strong> Esta matriz impede que a automação seja um "fim em si mesma". Ao desenhar um bot ou modelo de IA no <em>Nível de Trabalho</em>, você deve ser capaz de rastrear como ele melhora o <em>Nível de Processo</em> (ex: reduz erros) e como isso atinge a meta no <em>Nível Organizacional</em> (ex: reduz custo operacional ou aumenta satisfação).
      </div>
    `
  },
"cap_9_5_papeis_responsa": {
    "titulo": "Cap. 9.5.9 - Funções e o Papel do Dono de Processos",
    "html": `
      <p>As organizações orientadas a processos exigem novas funções para garantir o desempenho interfuncional. Além de analistas e arquitetos, a figura central desta estrutura é o <strong>Dono de Processos</strong>.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. O Ecossistema de Funções BPM</h3>
      <p>O sucesso do BPM depende de uma colaboração entre diversos perfis:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Estratégico:</strong> Promotores executivos e Donos de processos.</li>
        <li><strong>Tático/Técnico:</strong> Arquitetos, Analistas de negócio, Profissionais de TI e Especialistas (SMEs).</li>
        <li><strong>Execução:</strong> Criadores e Gestores de processos, além de profissionais de Gestão da Mudança.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. O Dono de Processos (Process Owner)</h3>
      <p>É o indivíduo responsável pela <strong>integridade de ponta a ponta</strong> de um processo corporativo. Ele não foca apenas em um departamento, mas em como o valor flui até o cliente final.</p>
      
      <p><strong>Principais Responsabilidades:</strong></p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 8px;">📐 <strong>Desenho do Processo:</strong> Garante a integração e a melhoria contínua do fluxo.</li>
        <li style="margin-bottom: 8px;">📊 <strong>Desempenho:</strong> Define metas, comunica resultados e assegura que os recursos e aptidões estejam disponíveis.</li>
        <li style="margin-bottom: 8px;">📣 <strong>Defesa e Apoio:</strong> Atua como um "advogado" do processo perante a diretoria, garantindo orçamentos e removendo barreiras políticas.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Autoridade vs. Influência</h3>
      <p>Muitas vezes, o Dono de Processo opera por <strong>influência</strong> e não por autoridade direta sobre as pessoas (que podem responder a gerentes funcionais diferentes). Ele gere <em>como</em> o trabalho é feito, enquanto os gerentes funcionais gerem <em>quem</em> faz o trabalho.</p>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Nota sobre Papéis e Responsabilidades:</strong> A implementação de soluções de inteligência artificial em ambientes corporativos exige uma colaboração estreita entre especialistas técnicos e o <strong>Dono de Processo</strong>. Enquanto a equipe técnica provê a arquitetura e os modelos, o Dono de Processo é responsável por validar a lógica de negócio e garantir a adoção interfuncional. Sem essa governança, a automação corre o risco de se tornar uma solução isolada e sem sustentabilidade organizacional.
      </div>
    `
  },
"cap_9_5_coe_bpm": {
    "titulo": "Cap. 9.5.12 - Centro de Excelência (CoE) BPM",
    "html": `
      <p>O <strong>BPM CoE</strong> é uma equipe multifuncional formalizada para promover a adoção metódica, o uso efetivo e a melhoria contínua do BPM em toda a organização. Ele atua como o repositório central de padrões e governança de processos.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Missão e Atividades do CoE</h3>
      <p>A função primordial é minimizar o esforço e maximizar o sucesso dos projetos de processos através de:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Padronização:</strong> Manutenção da biblioteca de métodos, modelos (BPMN) e ferramentas reutilizáveis.</li>
        <li><strong>Alinhamento:</strong> Garantia de que os processos operacionais suportem a estratégia de negócio.</li>
        <li><strong>Governança:</strong> Gestão do repositório corporativo e das mudanças nas regras de negócio.</li>
        <li><strong>Capacitação:</strong> Estabelecimento de um conjunto central de competências e treinamento em BPM.</li>
      </ul>

      

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Modelos de Governança: Centralizado vs. Descentralizado</h3>
      <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background-color: #f1f5f9;">
          <th style="border: 1px solid #cbd5e1; padding: 8px;">Modelo</th>
          <th style="border: 1px solid #cbd5e1; padding: 8px;">Características</th>
          <th style="border: 1px solid #cbd5e1; padding: 8px;">Principais Benefícios</th>
        </tr>
        <tr>
          <td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>Centralizado</strong></td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Equipe atua como consultoria interna para todas as áreas.</td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Consistência de padrões, lições aprendidas compartilhadas e ponto único de contato para TI.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>Descentralizado</strong></td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Expertise distribuída dentro de cada unidade de negócio.</td>
          <td style="border: 1px solid #cbd5e1; padding: 8px;">Maior flexibilidade e foco nas prioridades específicas de cada departamento.</td>
        </tr>
      </table>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Etapas de Implantação e Funções Críticas</h3>
      <p>O roteiro de criação de um CoE envolve nove etapas fundamentais, com destaque para:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 8px;">🛡️ <strong>Patrocínio Executivo:</strong> Obtenção de suporte da alta gestão para garantir recursos.</li>
        <li style="margin-bottom: 8px;">🏗️ <strong>Arquitetura BPM:</strong> Definição das normas de processos e alinhamento com a arquitetura de TI.</li>
        <li style="margin-bottom: 8px;">📂 <strong>Biblioteca/Repositório:</strong> Implementação de software para armazenar modelos e regras técnicas.</li>
        <li style="margin-bottom: 8px;">👥 <strong>Equipe de Governança:</strong> Inclusão de papéis como Arquiteto Corporativo, Bibliotecário de Processos e Especialistas em Ferramentas.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Nota Técnica:</strong> O CoE atua como a interface primária com o departamento de TI. A tendência atual mostra que, com o surgimento de plataformas Low-Code, há uma redução da dependência direta de TI para operações diárias, embora a integração de dados continue sendo um ponto crítico de colaboração.
      </div>
    `
  },

  // --- GESTÃO CORPORATIVA - EPM (CAP. 10) ---
"cap_10_1_epm_def": {
    "titulo": "Cap. 10.1 - Enterprise Process Management (EPM)",
    "html": `
      <p>O <strong>Enterprise Process Management (EPM)</strong>, ou Gestão por Processos Corporativos, é uma avaliação estratégica de alto nível da visão dos processos organizacionais. Diferente do BPM tradicional, que foca no nível detalhado de unidades de negócio, o EPM foca na arquitetura corporativa e no alinhamento estratégico.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Definição e Propósito</h3>
      <p>O EPM assegura o alinhamento do portfólio de processos e da arquitetura com a estratégia de negócio e a alocação de recursos. Seus pilares são:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Governança:</strong> Fornece o modelo para gestão e avaliação de iniciativas.</li>
        <li><strong>Visão End-to-End:</strong> Foco em processos que cruzam silos funcionais para entregar valor ao cliente.</li>
        <li><strong>Agilidade:</strong> Promoção da inovação e gestão deliberada apoiada por tecnologia (BPMS, iBPMS).</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Colaboração como Ecossistema</h3>
      <p>A transformação de negócio depende da colaboração (trabalho cooperativo e interativo). O CBOK destaca:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 8px;">🤝 <strong>Interação Humana:</strong> Essencial para processos ad-hoc e resolução de problemas complexos (ex: previsão de demanda, SCM).</li>
        <li style="margin-bottom: 8px;">🛠️ <strong>Ferramentas de Suporte:</strong> Uso de plataformas sociais, ferramentas de conferência e softwares de gestão (Slack, Teams, Zapier) para construir consenso antes da implementação.</li>
        <li style="margin-bottom: 8px;">🌐 <strong>Integração Intercorporativa:</strong> Colaboração que se estende a fornecedores e clientes através de ERP, CRM e SCM.</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Fatores Críticos para a Transformação</h3>
      <p>O sucesso do EPM requer uma mudança de mentalidade, focando em:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Definições Compartilhadas:</strong> Acordo sobre onde cada processo começa e termina.</li>
        <li><strong>Métricas Críticas:</strong> Clareza sobre as poucas medidas de desempenho que realmente importam.</li>
        <li><strong>Accountability:</strong> Entendimento comum das tarefas na prestação de contas, dado que raramente uma única pessoa controla um processo ponta a ponta.</li>
        <li><strong>Plano de Comunicação:</strong> Transmitir a visão corporativa para envolver todos os níveis da organização.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Conclusão Técnica:</strong> O EPM não substitui a gestão funcional, mas adiciona uma camada de valor que enfatiza como a organização cria riqueza através de atividades interfuncionais observáveis.
      </div>
    `
  },
"cap_10_1_portfolio": {
    "titulo": "Cap. 10.1.5 - Gestão do Portfólio de Processos",
    "html": `
      <p>A gestão do portfólio de processos é um componente vital da governança corporativa, oferecendo uma visão consolidada de todo o panorama de processos de uma organização.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Visão Consolidada e Integrada</h3>
      <p>O objetivo principal é tratar o conjunto de processos de forma coerente, evitando a <strong>subotimização</strong>. Isso ocorre quando um processo é racionalizado isoladamente, prejudicando involuntariamente o desempenho de outros processos interconectados.</p>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. Priorização e Financiamento</h3>
      <p>A gestão por portfólio permite que a organização tome decisões baseadas em dados sobre:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Investimentos:</strong> Vincula o financiamento às iniciativas de melhoria que trazem maior impacto estratégico.</li>
        <li><strong>Integração:</strong> Avalia como as mudanças em um processo afetam a arquitetura corporativa global.</li>
        <li><strong>Avaliação de Iniciativas:</strong> Fornece um método para medir o desempenho e governar as prioridades de transformação.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Conceito Chave:</strong> O portfólio de processos funciona como um quadro de governança. Ele transforma a "lista de desejos" de automação e melhoria em um plano estratégico de execução, garantindo que o esforço seja aplicado onde o retorno sobre o investimento (ROI) é comprovado pela Medição do Desempenho.
      </div>
    `
  },
"cap_10_1_maturidade": {
    "titulo": "Cap. 10.1.8 - Maturidade de Processos BPM",
    "html": `
      <p>A maturidade de processos reflete o estágio de evolução de uma organização em direção à excelência operacional. Avaliar a maturidade permite identificar gargalos culturais e estruturais que impedem o avanço para níveis mais complexos de gestão.</p>
      
      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">1. Fatores Críticos de Avaliação</h3>
      <p>O CBOK sugere um questionário diagnóstico dividido em dimensões fundamentais para medir o nível global de maturidade:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li><strong>Cultura e Organização:</strong> A empresa é centrada no cliente? Qual o nível de sensibilização dos gestores e colaboradores sobre processos?</li>
        <li><strong>Definição e Padronização:</strong> Os processos estão documentados? O sucesso depende de indivíduos específicos ou de métodos padronizados?</li>
        <li><strong>Responsabilidade (Accountability):</strong> Existem donos de processos definidos? Onde reside o patrocínio (Alta gestão, TI ou Departamental)?</li>
        <li><strong>Alinhamento Estratégico:</strong> Os objetivos dos processos estão ligados à estratégia corporativa? As avaliações de desempenho dos colaboradores refletem as metas dos processos?</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">2. O Papel da Tecnologia e Metodologia</h3>
      <p>A maturidade também é medida pela integração tecnológica e metodológica:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 8px;">💻 <strong>TI e BPM:</strong> A TI utiliza BPM para seus próprios processos? Existem aplicações de monitoramento de desempenho em processos-chave?</li>
        <li>🛠️ <strong>Ferramental:</strong> O uso de ferramentas e frameworks de processos é disseminado e considerado bem-sucedido pela organização?</li>
      </ul>

      <h3 style="font-size:1.1rem; color:var(--primary); margin-top:1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 5px;">3. Benefícios da Avaliação</h3>
      <p>Realizar este diagnóstico regularmente permite à organização:</p>
      <ul style="list-style: square; padding-left: 20px;">
        <li>Revelar quais fatores necessitam de melhoria imediata.</li>
        <li>Identificar pontos fortes que podem ser alavancados para subir de nível no modelo de maturidade.</li>
        <li>Garantir que a formação contínua esteja alinhada com as reais necessidades operacionais.</li>
      </ul>

      <div class="example-block" style="border-left-color: #475569; background-color: #f1f5f9; padding: 1rem; margin-top: 1.5rem;">
        <strong>Resumo Técnico:</strong> A maturidade não é um fim, mas um indicador de prontidão. Organizações com baixa maturidade tendem a ter processos que dependem de "heroísmo individual", enquanto organizações maduras possuem processos resilientes, medidos e alinhados à estratégia de longo prazo.
      </div>
    `
  }
};
