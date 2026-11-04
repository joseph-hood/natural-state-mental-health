/** Selected primary studies and trial records, reviewed 2026-11-03.
 * Each summary describes that study, not a treatment recommendation or a bill provision.
 */
export interface ResearchStudy {
  title: string;
  citation: string;
  substance: string;
  design: string;
  summary: string;
  limitation: string;
  href: string;
}

export interface ResearchTopic {
  id: string;
  name: string;
  evidence: string;
  introduction: string;
  studies: ResearchStudy[];
}

export const researchTopics: ResearchTopic[] = [
  {
    id: 'depression', name: 'Depression', evidence: 'Randomized trials',
    introduction: 'Psilocybin with psychological support has been studied in depression. Results are promising, but trial participants, follow-up periods, and comparison treatments differ.',
    studies: [
      {
        title: 'Psilocybin-assisted therapy for major depression',
        citation: 'Davis et al. · JAMA Psychiatry · published online 2020',
        substance: 'Psilocybin', design: 'Randomized trial · 24 participants completed treatment',
        summary: 'The Johns Hopkins trial found greater short-term improvement in depression after immediate treatment than during a waiting period before treatment.',
        limitation: 'Small study with a delayed-treatment comparison rather than an active placebo; it cannot establish long-term effectiveness for everyone with depression.',
        href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7643046/',
      },
      {
        title: 'Single-dose psilocybin with psychological support',
        citation: 'Raison et al. · JAMA · 2023',
        substance: 'Psilocybin', design: 'Randomized phase 2 trial · 104 adults',
        summary: 'Depression scores improved more with psilocybin than with niacin placebo over six weeks in this multisite study.',
        limitation: 'Six-week follow-up and the difficulty of masking psychedelic effects limit what this trial can establish about durability and expectancy.',
        href: 'https://jamanetwork.com/journals/jama/fullarticle/2808950',
      },
    ],
  },
  {
    id: 'anxiety', name: 'Anxiety', evidence: 'Evidence depends on the population',
    introduction: 'Cancer-related anxiety and generalized anxiety disorder are different research questions. Findings in people with cancer should not be assumed to apply to all anxiety disorders.',
    studies: [
      {
        title: 'Psilocybin for anxiety and depression associated with cancer',
        citation: 'Ross et al. · Journal of Psychopharmacology · 2016',
        substance: 'Psilocybin', design: 'Randomized crossover trial · 29 patients',
        summary: 'Psilocybin paired with psychotherapy was associated with reduced anxiety and depression in patients experiencing cancer-related distress.',
        limitation: 'A small, specific patient population and crossover design limit generalization to other anxiety disorders.',
        href: 'https://pubmed.ncbi.nlm.nih.gov/27909164/',
      },
      {
        title: 'Generalized anxiety disorder: registered psilocybin trial',
        citation: 'ISRCTN14487299 · registered 2024',
        substance: 'Psilocybin', design: 'Trial registry · research underway',
        summary: 'The registered study compares two psilocybin dose levels with psychological support in adults with generalized anxiety disorder.',
        limitation: 'A trial registration describes planned research, not a positive treatment result. The cited record did not provide results at review.',
        href: 'https://www.isrctn.com/pdf/ISRCTN14487299',
      },
    ],
  },
  {
    id: 'ptsd', name: 'PTSD', evidence: 'Different substances, different evidence',
    introduction: 'The published phase 3 study below concerns MDMA, not psilocybin. Psilocybin-containing treatments are also being investigated, but those trial records are not proof of effectiveness.',
    studies: [
      {
        title: 'MDMA-assisted therapy for moderate to severe PTSD',
        citation: 'Mitchell et al. · Nature Medicine · 2023',
        substance: 'MDMA', design: 'Randomized phase 3 trial · 104 participants',
        summary: 'MDMA with therapy reduced PTSD symptom severity more than placebo with the same therapy in this trial.',
        limitation: 'This is evidence about MDMA-assisted therapy. It cannot establish that psilocybin has the same effects; masking and expectancy remain challenges.',
        href: 'https://www.nature.com/articles/s41591-023-02565-4',
      },
      {
        title: 'Psilocybin and MDMA for PTSD in veterans (PAM-VET)',
        citation: 'Johns Hopkins University · ClinicalTrials.gov NCT06989957',
        substance: 'Psilocybin + MDMA', design: 'Registered phase 1 trial · no results posted at review',
        summary: 'The study is investigating the safety and effectiveness of co-administered psilocybin and MDMA in veterans with PTSD.',
        limitation: 'An investigational combination is not evidence for psilocybin alone, and a registered trial is not a published finding.',
        href: 'https://clinicaltrials.gov/study/NCT06989957',
      },
    ],
  },
  {
    id: 'addiction', name: 'Addiction', evidence: 'Randomized trial in alcohol use disorder',
    introduction: 'Substance use disorders are not interchangeable. The trial below addresses alcohol use disorder specifically.',
    studies: [
      {
        title: 'Psilocybin-assisted psychotherapy for alcohol use disorder',
        citation: 'Bogenschutz et al. · JAMA Psychiatry · 2022',
        substance: 'Psilocybin', design: 'Randomized trial · 93 participants',
        summary: 'Participants receiving psilocybin and psychotherapy had fewer heavy-drinking days during follow-up than participants receiving diphenhydramine and psychotherapy.',
        limitation: 'The study combined medication with substantial psychotherapy and does not establish effectiveness for every substance use disorder.',
        href: 'https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2795625',
      },
    ],
  },
  {
    id: 'treatment-resistant-pain', name: 'Treatment-Resistant Pain', evidence: 'Early pilot evidence',
    introduction: 'Chronic pain research is at an early stage. Findings in fibromyalgia do not establish psilocybin as a treatment for all persistent or treatment-resistant pain.',
    studies: [
      {
        title: 'Psilocybin-assisted therapy in adults with fibromyalgia',
        citation: 'Aday et al. · Frontiers in Pain Research · 2025',
        substance: 'Psilocybin', design: 'Open-label pilot · 5 participants',
        summary: 'Participants reported improvements in pain and sleep after treatment. The primary purpose was to examine preliminary safety and feasibility.',
        limitation: 'Only five participants and no control group: this cannot establish efficacy. Transient headaches and increases in blood pressure or heart rate were reported.',
        href: 'https://pubmed.ncbi.nlm.nih.gov/40171515/',
      },
    ],
  },
  {
    id: 'multiple-sclerosis', name: 'Multiple Sclerosis', evidence: 'Research underway · psychological distress',
    introduction: 'Research involving people with MS is examining psychological symptoms associated with serious illness. It is not evidence that psilocybin treats the underlying neurological disease.',
    studies: [
      {
        title: 'PsyPal: psilocybin therapy in palliative care',
        citation: 'European Psychiatric Association · PsyPal project partner · 2026 update',
        substance: 'Psilocybin', design: 'Multisite randomized trial · participant recruitment update',
        summary: 'The EU-funded PsyPal study includes people with multiple sclerosis among the populations being studied for relief of depressive symptoms in palliative care.',
        limitation: 'This source describes research underway, not published efficacy results. It does not show that psilocybin slows or reverses MS.',
        href: 'https://www.europsy.net/psypal-patient-recruitment-2026/',
      },
    ],
  },
  {
    id: 'end-of-life-anxiety', name: 'End-of-Life Anxiety', evidence: 'Randomized trial in life-threatening cancer',
    introduction: 'Studies have explored psychological and existential distress in people facing a life-threatening diagnosis. The aim is relief of distress, not treatment of the cancer itself.',
    studies: [
      {
        title: 'Psilocybin and distress in life-threatening cancer',
        citation: 'Griffiths et al. · Journal of Psychopharmacology · 2016',
        substance: 'Psilocybin', design: 'Randomized crossover trial · 51 patients',
        summary: 'The Johns Hopkins study reported reductions in depression, anxiety, and death anxiety, with improvements still observed at six months.',
        limitation: 'The selected cancer population and crossover design limit conclusions for other diagnoses and care settings.',
        href: 'https://pubmed.ncbi.nlm.nih.gov/27909165/',
      },
    ],
  },
  {
    id: 'traumatic-brain-injury', name: 'Traumatic Brain Injury', evidence: 'Observational research · ibogaine',
    introduction: 'The veteran study below used ibogaine with magnesium and complementary care, not psilocybin. Its findings require controlled follow-up studies.',
    studies: [
      {
        title: 'Magnesium–ibogaine therapy in veterans with TBI',
        citation: 'Cherian et al. · Nature Medicine · 2024',
        substance: 'Ibogaine + magnesium', design: 'Prospective observational study · 30 male veterans',
        summary: 'Researchers observed improvements in functioning and psychiatric symptoms after treatment in veterans with predominantly mild traumatic brain injuries.',
        limitation: 'No randomized control group; other care was also provided. This does not establish causation or prove repair of brain injury. Ibogaine has known cardiac risks.',
        href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10878970/',
      },
    ],
  },
];
