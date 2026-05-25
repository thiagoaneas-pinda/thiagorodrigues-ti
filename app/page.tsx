import React from "react";

// ============================================================================
// DADOS DO CURRÍCULO E MEDIA KIT (Thiago de Assis Anéas Rodrigues)
// ============================================================================

const Certificados = [
  "MD-100: Microsoft Windows 10", 
  "MS-100: Microsoft Identity and Access Administrator Associate",
  "MS-900: Microsoft Security, Compliance, and Identity Fundamentals",
  "MS-700: Microsoft Teams Administrator Associate",
];

const ArsenalSkills = [
  "Ambientes Corporativos Complexos", "Virtualização (Proxmox/VMWare/Hyper-V)",
  "Cloud Híbrida (Azure/AWS/GCP)", "Governança de TI",
  "ITIL", "COBIT", "ISO27001", "Linux & Windows Server",
  "Observabilidade (Zabbix)", "Gestão de Backups & BCP/DR", "IAM", "PAM", "CyberArk", "MFA",
  "Auditoria & Conformidade", "Kanban", "ServiceNow", "BMCRemedy", "Veeam", "Commvault", "Avamar", "Migração para Azure",
  "Microsoft 365", "Active Directory", "Azure AD", "PowerShell"
];

const LearningSkills = [
  "Python", "ShellScript", "Oracle RAC", 
  "React", "Node.js", "Next.js", "Terraform"
];

const experiences = [
  {
    role: "Suporte Onsite & Infraestrutura",
    company: "Gerdau",
    period: "2008 - 2010",
    description: "Suporte e Infraestrutura. Troubleshooting avançado e interface usuários locais."
  },
  {
    role: "Suporte Onsite & Infraestrutura",
    company: "Sidenor Villares",
    period: "2004",
    description: "Suporte e Infraestrutura. Troubleshooting avançado e interface usuários locais."
  },
  {
    role: "Suporte Onsite & Infraestrutura",
    company: "Alstom",
    period: "2002",
    description: "Suporte e Infraestrutura. Troubleshooting avançado e interface usuários locais."
  },
  {
    role: "Suporte Onsite & Infraestrutura",
    company: "EMBRAER",
    period: "2000",
    description: "Suporte e Infraestrutura. Troubleshooting avançado e interface usuários locais."
  },
  {
    role: "Suporte Onsite & Infraestrutura",
    company: "Alcan - Aluminios do Brasil",
    period: "1999",
    description: "Suporte e Infraestrutura. Troubleshooting avançado e interface usuários locais."
  },
  {
        role: "Suporte Onsite & Infraestrutura",
    company: "Confab Tubos",
    period: "1998",
    description: "Suporte e Infraestrutura. Troubleshooting avançado e interface usuários locais."
  }
];

const mediaTopics = [
  {
    title: "A realidade do Uptime",
    desc: "O que realmente acontece nos bastidores para garantir 99.9% de disponibilidade em ambientes industriais de missão crítica."
  },
  {
    title: "Transição On-Premise x Cloud",
    desc: "Cicatrizes, lições aprendidas e verdades não contadas nas migrações de infraestruturas complexas para o Azure."
  },
  {
    title: "Evolução da TI (1997-2026)",
    desc: "Uma retrospectiva de 28 anos de carreira: do suporte físico aos clusters de virtualização modernos."
  }
];



// ============================================================================
// LAYOUT PRINCIPAL
// ============================================================================

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-[#0076CE] selection:text-white font-sans">
      
      {/* HEADER CORPORATIVO */}
      <header className="border-b border-gray-800 bg-black/90 sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-start gap-12 px-6 py-6">
    
        {/* NOME MAIOR */}
        <div className="text-3xl md:text-4xl font-medium tracking-tight text-white whitespace-nowrap">
          Thiago<span className="font-bold text-[#D4AF37] ml-2">Rodrigues</span>
        </div>

        {/* CONTÊINER DOS ÍCONES */}
    <div className="flex items-center gap-15 ml-30">
      
      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/thiagorodrigues-ti"
        target="_blank"
        rel="noreferrer"
        className="transition-all hover:scale-110 drop-shadow-[0_0_15px_rgba(10,102,194,0.8)]"
        title="LinkedIn"
      >
        <img 
          src="/linkedin-logo.png" 
          alt="LinkedIn" 
          className="w-40 h-auto object-contain" 
        />
      </a>

      {/* CYBERR */}
      <a
        href="https://cyberr.ai/u/thiagoaneas"
        target="_blank"
        rel="noreferrer"
        className="transition-all hover:scale-110 drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"
        title="Perfil Cyberr"
      >
        <img 
          src="/cyberr-logo.png" 
          alt="Cyberr" 
          className="w-35 h-auto object-contain" 
        />
      </a>

      {/* WHATSAPP */}
      <a
        href="https://api.whatsapp.com/send?phone=5512991928266"
        target="_blank"
        rel="noreferrer"
        className="transition-all hover:scale-110 drop-shadow-[0_0_12px_rgba(37,211,102,0.5)]"
        title="WhatsApp"
      >
        <img 
          src="/whatsapp-logo.png" 
          alt="WhatsApp" 
          className="w-54 h-auto object-contain" 
        />
      </a>

      {/* IDIOMAS */}
      <a 
        href="https://thiagorodrigues-ti-en.vercel.app" 
        target="_self"
        className="ml-8 transition-all hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
        title="Switch to English"
      >
        <img 
          src="/usa-flag.png" 
          alt="English Version" 
          className="w-10 h-auto object-contain rounded-sm"
        />
      </a>

    </div>
    </div>
  </header>

      {/* SEÇÃO EXPERIÊNCIA PROFISSIONAL - FUNDO PRETO E DUAS COLUNAS */}
<section className="py-20 bg-black text-white border-t border-gray-800">
  <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 md:flex-row md:items-start md:justify-between">
    
    {/* COLUNA DA ESQUERDA: TEXTOS E EXPERIÊNCIAS */}
    <div className="flex-1 w-full md:max-w-xl">
      {/* Título com Destaque Dourado */}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
        Minha <span className="text-[#D4AF37]">Jornada</span>
      </h2>
      <p className="text-xl text-gray-400 mb-12 text-center md:text-left">
        Especialista N3 com 28 anos de carreira em tecnologia, garantindo a resiliência de operações globais e ambientes industriais de missão crítica. Expert em arquiteturas híbridas e virtualização de alta performance (Proxmox/VMWare), atuo na intersecção entre a continuidade operacional e a segurança cibernética (ISO 27001), transformando infraestruturas complexas em ecossistemas estáveis, escaláveis e imunes a paradas não planejadas.
      </p>

      {/* TIMELINE DE EXPERIÊNCIAS */}
      <div className="space-y-10">

        {/* CARGO 0 */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-gray-800">
          {/* Ponto Dourado na Timeline */}
          <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]"></div>
          
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-2xl font-semibold text-white">Próxima Temporada</h3>
          </div>
          <p className="text-lg font-medium text-gray-300 mb-2">COMING SOON</p>
          </div>
        
        {/* CARGO 1 */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-gray-800">
          {/* Ponto Dourado na Timeline */}
          <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]"></div>
          
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-2xl font-semibold text-white">Supervisor de TI</h3>
            <span className="text-sm font-medium text-gray-400 bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">Set/2025 - Maio/2026</span>
          </div>
          <p className="text-lg font-medium text-gray-300 mb-2">GV do Brasil - Grupo SIMEC</p>
          <ul className="list-disc list-outside space-y-2 pl-5 text-gray-400 text-base">
            <li>Liderança técnica em infraestrutura, redes e segurança da informação em ambiente industrial.</li>
            <li>Coordenação de governança de TI e padronização de processos operacionais.</li>
            <li>Supervisão e configuração de rotinas de backup utilizando Veeam, com retenção em NAS e replicação para cloud.</li>
            <li>Mitigação de riscos operacionais, monitoramento avançado e aumento da previsibilidade da operação.</li>
            <li>Atuação em testes formais de BCP/DR e continuidade operacional.</li>
            <li>Zabbix End-to-End. Dashboards estratégicos, tuning de performance e monitoramento proativo para suporte à alta disponibilidade de infraestruturas globais. </li>
          </ul>
        </div>

        {/* CARGO 2 */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-gray-800">
          <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-gray-600"></div>
          
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-2xl font-semibold text-white">Especialista em TI Nível 3</h3>
            <span className="text-sm font-medium text-gray-400 bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">Fev/2010 - Ago/2025</span>
          </div>
          <p className="text-lg font-medium text-gray-300 mb-2">SLB Onesubsea</p>
          <ul className="list-disc list-outside space-y-2 pl-5 text-gray-400 text-base">
            <li>Gestão de infraestrutura híbrida em 7 unidades operacionais, garantindo disponibilidade acima de 99,9%.</li>
            <li>Administração e gestão de servidores Windows, criação de VMs (Hyper-V), suporte avançado e troubleshooting crítico.</li>
            <li>Monitoramento e administração de rotinas de backup em Commvault (cloud) e Avamar (storage 512 TB), garantindo integridade e disponibilidade dos dados altamente regulamentados.</li>
            <li>Migração de servidor on-premise para ambiente Azure, com apoio ao time global.</li>
            <li>Atuação em testes formais de BCP/DR e continuidade operacional.</li>
            <li>Vivência com acessos privilegiados via CyberArk integrado a MFA.</li>
            <li>Atendimento de auditorias internas/externas, construção de evidências e execução de planos de ação.</li>
            <li>Atuação alinhada às práticas ITIL, e governança de mudanças, incidentes e problemas, garantindo rastreabilidade e conformidade.</li>
            <li>Vivencia com framework Agile Kanban.</li>
          </ul>
        </div>

      </div>
    </div>

    {/* COLUNA DA DIREITA: SUA FOTO COM DESTAQUE */}
    <div className="flex-none w-full md:w-[600px]">
      <div className="relative group mx-auto md:mx-0 max-w-sm md:max-w-none">
        
        {/* Fundo Dourado de Glow no Hover */}
        <div className="absolute -inset-1 rounded-3xl bg-[#D4AF37] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Moldura Dourada Suave */}
        <div className="relative border-4 border-[#D4AF37]/50 rounded-3xl overflow-hidden bg-gray-900 shadow-2xl shadow-[#D4AF37]/10">
          <img 
            src="/sua-foto.png" // Certifique-se de salvar sua foto como 'sua-foto.png' na pasta /public
            alt="Thiago Rodrigues"
            className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
        
        {/* Overlay Dourado Sutil */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        {/* Texto Foto  */}
        <div className="absolute bottom-6 left-6">
          <p className="text-sm md:text-base font-medium text-[#D4AF37] leading-relaxed drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
            Ambientes Corporativos Complexos <br />
            Especialista em TI (N3) <br />
            Governança de TI <br />
            Cibersegurança <br />
            Virtualização <br />
            Cloud
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* DADOS E METRICS - ESTILO DASHBOARD */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200 -mx-6 px-6">
            <div className="pl-0 md:pl-6">
              <p className="text-sm text-gray-500 mb-1 font-medium">Bagagem</p>
              <p className="text-4xl font-light text-gray-900">28 <span className="text-xl">Anos</span></p>
            </div>
            <div className="pl-4 md:pl-6">
              <p className="text-sm text-gray-500 mb-1 font-medium">Disponibilidade</p>
              <p className="text-4xl font-light text-[#0076CE]">99.9%<span className="text-xl">+</span></p>
            </div>
            <div className="pl-4 md:pl-6">
              <p className="text-sm text-gray-500 mb-1 font-medium">Foco</p>
              <p className="text-4xl font-light text-gray-900">Evolução</p>
                    
            </div>
          </div>
        </div>
      </section>

      {/* MÍDIA, PALESTRAS E PODCASTS */}
      <section id="podcasts" className="bg-black text-white border-b border-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                Vamos falar sobre o mundo real da Tecnologia.
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Disponível para palestras em eventos tech, podcasts, aulas magnas e painéis de discussão. Trago histórias de campo, resolução de crises e a evolução da infraestrutura nas últimas três décadas.
              </p>
            </div>
            <a href="mailto:thiagoaneas@gmail.com" className="shrink-0 bg-white text-[#0a1f35] px-8 py-3.5 rounded text-sm font-medium hover:bg-gray-100 transition shadow-sm">
              Agendar Participação
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaTopics.map((topic, index) => (
              <article 
                key={index} 
                  className="bg-[#111] p-8 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] group"
                >
                <p className="text-sm text-[#D4AF37] font-bold uppercase tracking-widest mb-3 opacity-80">
                    Tópico {index + 1}
                </p>
              
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {topic.title}
                </h3>
  
                <p className="text-gray-400 leading-relaxed text-sm">
                    {topic.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* SEÇÃO INTEGRADA: ORDEM - 1) CERTIFICAÇÕES, 2) ARSENAL, 3) DESAFIOS */}
<section className="bg-white border-b border-gray-200 py-24">
  <div className="mx-auto max-w-6xl px-6">
    
    {/* 1) BLOCO: CERTIFICAÇÕES */}
    <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start mb-20">
      <div>
        <h2 className="text-3xl font-light text-gray-900 tracking-tight">
          Certificações
        </h2>
        <p className="text-gray-500 mt-3 text-lg leading-relaxed">
          Validação oficial de competências e especialidades técnicas.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {Certificados.map((cert) => (
          <span 
            key={cert} 
            className="bg-[#f5f6f7] border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm"
          >
            {cert}
          </span>
        ))}
      </div>
    </div>

    {/* 2) BLOCO: ARSENAL TÉCNICO */}
    <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start mb-20">
      <div>
        <h2 className="text-3xl font-light text-gray-900 tracking-tight">
          Arsenal Técnico
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Soluções e tecnologias dominadas ao longo da carreira.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {ArsenalSkills.map((skill) => (
          <span 
            key={skill} 
            className="bg-[#f5f6f7] border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* 3) BLOCO: NOVOS DESAFIOS */}
    <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
      <div>
        <h2 className="text-3xl font-light text-gray-900 tracking-tight">
          Novos Desafios
        </h2>
        <p className="text-gray-500 mt-3 text-lg leading-relaxed">
          Foco na contínua maestria técnica para antecipar tendências e garantir estabilidade operacional.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {LearningSkills.map((skill) => (
          <span 
            key={skill} 
            className="bg-[#f5f6f7] border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* HISTÓRICO / LOG DE EXPERIÊNCIA */}
      <section id="experiencia" className="bg-[#f5f6f7] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 tracking-tight">Histórico Operacional</h2>
            <p className="text-gray-500 mt-2 text-lg">Trajetória e impacto em ambientes corporativos.</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 md:gap-12 hover:shadow-md transition">
                <div className="md:w-1/3 shrink-0">
                  <h3 className="text-xl font-medium text-gray-900">{exp.company}</h3>
                  <p className="text-[#0076CE] font-medium mt-1">{exp.role}</p>
                  <p className="text-gray-500 text-sm mt-3">{exp.period}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 leading-relaxed text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CORPORATIVO */}
      <footer className="bg-[#1c1d1f] text-gray-300 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 border-b border-gray-700 pb-12 mb-8">
            <div>
              <h2 className="text-2xl font-light text-white mb-4">
                Pronto para o próximo desafio.
              </h2>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Seja para integrar um time estratégico ou para um papo técnico sobre o mercado de infraestrutura, entre em contato.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end items-start md:items-center">
               <a href="mailto:thiagoaneas@gmail.com" className="bg-[#0076CE] text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-[#005a9e] transition shadow-sm w-full sm:w-auto text-center">
                thiagoaneas@gmail.com
               </a>
              </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Thiago Rodrigues. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/thiagorodrigues-ti" className="hover:text-white transition">LinkedIn</a>
              <a href="#podcasts" className="hover:text-white transition">Media Kit</a>
            </div>
          </div>
        </div>
      </footer>
      
    </main>
  );
}
