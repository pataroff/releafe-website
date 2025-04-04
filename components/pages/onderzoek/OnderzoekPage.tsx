import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

import HomePageHead from '../home/HomePageHead'

const researchData = [
  {
    title: 'Dagboek',
    description:
      'Dagboekschrijven, ook wel journaling genoemd, is een praktijk waarbij individuen hun gedachten en gevoelens op papier zetten. Deze activiteit wordt steeds vaker erkend om zijn positieve effecten op mentaal welzijn. Recente wetenschappelijke studies hebben de effectiviteit ervan bevestigd.​',
    findings: [
      {
        findingTitle: 'Verwerking van emoties en stressreductie',
        findingDescription:
          'Onderzoek heeft aangetoond dat schrijven over traumatische, stressvolle of emotionele gebeurtenissen kan leiden tot verbeteringen in zowel fysieke als psychologische gezondheid. Deze techniek helpt bij het verwerken van negatieve emoties en vermindert psychologische stress. ',
        findingLinkCitation: 'cambridge.org',
        findingLinkHref:
          'https://www.cambridge.org/core/journals/advances-in-psychiatric-treatment/article/emotional-and-physical-health-benefits-of-expressive-writing/ED2976A61F5DE56B46F07A1CE9EA9F9F',
      },
      {
        findingTitle: 'Verbetering van mentale gezondheid',
        findingDescription:
          'Regelmatig schrijven over positieve ervaringen kan de stemming verbeteren en symptomen van depressie verminderen. Dit komt doordat het proces van schrijven helpt om positieve gebeurtenissen te versterken en negatieve gedachten te herstructureren.​',
        findingLinkCitation: 'pmc.ncbi.nlm.nih.gov',
        findingLinkHref: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6305886/',
      },
      {
        findingTitle: 'Verbetering van fysieke gezondheid',
        findingDescription:
          'Onderzoek heeft aangetoond dat expressief schrijven kan leiden tot verbeteringen in fysieke gezondheid, zoals een betere immuun functie en lagere bloeddruk. Deze fysieke voordelen dragen bij aan een algehele verbetering van het welzijn.',
        findingLinkCitation: 'tijdschriftpositievepsychologie.nl',
        findingLinkHref:
          'https://www.tijdschriftpositievepsychologie.nl/blogs/schrijven-heelt-en-maakt-gezond',
      },
    ],
  },
  {
    title: 'Welzijnsoverzicht',
    description:
      'Het welzijnsoverzicht binnen Releafe biedt gebruikers de mogelijkheid om hun mentale en emotionele status te monitoren via grafieken die onderwerpen uit hun dagboek visualiseren. Deze functie valt onder zelfmonitoring, een proces waarbij individuen hun eigen gedragingen, gedachten en emoties bijhouden om inzicht te krijgen in hun gezondheidstoestand. Wetenschappelijke studies tonen aan dat zelfmonitoring aanzienlijke voordelen heeft voor het mentale welzijn.​',
    findings: [
      {
        findingTitle: 'Inzicht en bewustwording',
        findingDescription:
          'Zelfmonitoring, zoals het bijhouden van emoties en activiteiten, helpt individuen om patronen in hun gedrag en gemoedstoestand te herkennen. Dit verhoogde inzicht verbetert zelfregulatie, wat kan leiden tot minder stress en een beter mentaal evenwicht.',
        findingLinkCitation: 'pubmed.ncbi.nlm.nih.gov',
        findingLinkHref: 'https://pubmed.ncbi.nlm.nih.gov/28375728/',
      },
      {
        findingTitle: 'Verbetering van mentale gezondheid',
        findingDescription:
          'Regelmatig bijhouden en visualiseren van gezondheidsgegevens via apps en wearables helpt gebruikers beter grip te krijgen op hun mentale toestand en ondersteunt hen bij het maken van gezondere keuzes. Dit draagt bij aan een afname van depressieve symptomen, minder stress en een verbeterd welzijn.​',
        findingLinkCitation: 'RIVM, 2021',
        findingLinkHref:
          'https://www.rivm.nl/sites/default/files/2022-11/E-healthmonitor-2021-Stand-van-zaken-digitale-zorg.pdf',
      },
    ],
  },
  {
    title: 'Persoonlijke Doelen',
    description:
      'Het actief stellen en monitoren van persoonlijke doelen is een essentieel aspect van zelfhulp en zelfregie. Deze praktijk stelt individuen in staat om richting te geven aan hun leven, motivatie te versterken en een gevoel van controle te ervaren. Wetenschappelijke studies hebben de effectiviteit van het stellen en monitoren van persoonlijke doelen in verschillende contexten onderzocht, met name gericht op zelfhulp en zelfregie.​',
    findings: [
      {
        findingTitle: 'Verbetering van mentaal welzijn',
        findingDescription:
          'Het stellen van specifieke en uitdagende doelen is gekoppeld aan verhoogde taakprestaties, doorzettingsvermogen en motivatie. Deze praktijk helpt individuen zich te concentreren op hun persoonlijke groei en welzijn, wat leidt tot een verbeterd mentaal welzijn.',
        findingLinkCitation: 'libstore.ugent.be',
        findingLinkHref:
          'https://libstore.ugent.be/fulltxt/RUG01/002/063/053/RUG01-002063053_2013_0001_AC.pdf',
      },
      {
        findingTitle: 'Versterking van zelfregie',
        findingDescription:
          "​Zelfmanagementprogramma's die gericht zijn op het stellen en bereiken van persoonlijke doelen helpen individuen om de regie over hun eigen leven te voeren. Deze programma's benadrukken het benutten van eigen krachten en mogelijkheden, wat bijdraagt aan een gevoel van autonomie en zelfredzaamheid.",
        findingLinkCitation: 'trimbos.nl',
        findingLinkHref:
          'https://www.trimbos.nl/docs/af1499-ondersteuning-van-zelfmanagement-van-patienten-met-chronische-psychiatrische-aandoeningen.pdf',
      },
      {
        findingTitle: 'Positieve emotionele effecten',
        findingDescription:
          '​Jongeren die persoonlijke doelen stellen en bereiken, ervaren positieve emoties zoals een verhoogd gevoel van hoop en een positieve kijk op de toekomst. Dit suggereert dat doelstelling een krachtig instrument is voor het verbeteren van het emotionele welzijn.',
        findingLinkCitation: 'researchgate.net',
        findingLinkHref:
          'https://www.researchgate.net/publication/362287382_Goals_Give_You_Hope_An_Exploration_of_Goal_Setting_in_Young_People_Experiencing_Mental_Health_Challenges',
      },
    ],
  },
  {
    // @TODO Fix the inline citations!
    title: 'Zorgenbakje',
    description:
      'Het Zorgenbakje is een functionaliteit binnen de Releafe app waarmee gebruikers hun zorgen kunnen noteren en loslaten. Deze praktijk, vergelijkbaar met expressief schrijven, stelt individuen in staat om hun gedachten en emoties te externaliseren. Dit proces kan leiden tot een vermindering van stress en angstgevoelens. Wetenschappelijke studies hebben aangetoond dat dergelijke technieken positieve effecten hebben op het mentale welzijn.',
    findings: [
      {
        findingTitle: 'Vermindering van depressieve symptomen en angst',
        findingDescription:
          'Expressief schrijven, zoals het noteren van zorgen, is in verband gebracht met verbeteringen in de mentale gezondheid. Het helpt individuen om hun emoties te ordenen en te begrijpen, wat kan leiden tot een vermindering van depressieve symptomen en angst. Een meta-analyse van Pennebaker en Chung (2011) bevestigt dat dergelijke schrijfinterventies effectief zijn in het verbeteren van zowel fysieke als mentale gezondheid.​',
        findingLinkCitation: 'Pennebaker en Chung (2011)',
        findingLinkHref:
          'https://c3po.media.mit.edu/wp-content/uploads/sites/45/2016/01/PennebakerChung_FriedmanChapter.pdf#:~:text=Expressive%20writing%20and%20its%20links%20to%20mental%20and,Health%20James%20W.%20Pennebaker%20and%20Cindy%20K.%20Chung',
      },
      {
        findingTitle:
          'Bevorderen zelfreflectie en probleemoplossende vaardigheden',
        findingDescription:
          'Door regelmatig gebruik te maken van het Zorgenbakje kunnen gebruikers hun emotionele veerkracht vergroten. Het proces van het identificeren en opschrijven van zorgen bevordert zelfreflectie en probleemoplossende vaardigheden, wat bijdraagt aan een betere mentale fitheid. Onderzoek door Smyth (1998) toont aan dat deelnemers die hun emoties en zorgen opschrijven, verbeteringen vertonen in hun algehele welzijn en functioneren.',
        findingLinkCitation: 'Smyth (1998)',
        findingLinkHref:
          'https://sparq.stanford.edu/sites/g/files/sbiybj19021/files/media/file/smyth_1998_-_written_emotional_expression.pdf',
      },
    ],
  },
  {
    title: 'Reframen',
    description:
      'Reframen, ook wel cognitieve herstructurering genoemd, is een techniek binnen de cognitieve gedragstherapie (CGT) die gericht is op het identificeren en aanpassen van niet-helpende gedachten. Deze methode helpt individuen om gebeurtenissen en situaties vanuit een ander perspectief te bekijken, wat kan bijdragen aan een verbeterd mentaal welzijn.',
    findings: [
      {
        findingTitle: 'Effectiviteit bij depressieve symptomen',
        findingDescription:
          'Onderzoek heeft aangetoond dat cognitieve herstructurering effectief is in het verminderen van depressieve symptomen. Een scoping review concludeerde dat deze techniek een belangrijk therapeutisch hulpmiddel is voor mensen met depressie.​',
        findingLinkCitation: 'pmc.ncbi.nlm.nih.gov',
        findingLinkHref: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11241739/',
      },
      {
        findingTitle: 'Verbetering van mentale gezondheid',
        findingDescription:
          'Cognitieve herstructurering helpt bij het vervangen van disfunctionele cognities door meer adaptieve gedachten, wat leidt tot verbeteringen in de mentale gezondheid. Deze interventie bevordert een evenwichtiger denkpatroon en verbetert het vermogen om met stress om te gaan.',
        findingLinkCitation: 'pmc.ncbi.nlm.nih.gov',
        findingLinkHref: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8249924/',
      },
    ],
  },
  {
    title: 'Berichten aan jezelf',
    description:
      'De “Berichten aan jezelf” functionaliteit binnen de Releafe app stelt gebruikers in staat persoonlijke notities te maken die positieve gedachten, doelen en affirmaties benadrukken. Deze praktijk is geworteld in de principes van positieve psychologie en heeft tot doel het mentaal welzijn, de mentale gezondheid en de mentale fitheid van individuen te versterken.',
    findings: [
      {
        findingTitle:
          'Effect van positieve psychologie interventies op mentaal welzijn ',
        findingDescription:
          'Onderzoek heeft aangetoond dat positieve psychologie-interventies, zoals het benadrukken van positieve gedachten effectief zijn in het verbeteren van het mentaal welzijn. Een meta-analyse uitgevoerd door Bolier et al. (2013) toonde aan dat dergelijke interventies leiden tot significante verbeteringen in welbevinden en een vermindering van depressieve symptomen.​',
        findingLinkCitation: 'ris.utwente.nl',
        findingLinkHref:
          'https://ris.utwente.nl/ws/portalfiles/portal/6053568/thesis_J_Bolier.pdf',
      },
      {
        findingTitle: 'Positieve psychologie in een multi-etnische context',
        findingDescription:
          'Hendriks (2018) onderzocht de effectiviteit van positieve psychologie-interventies in een multi-etnische en cross-culturele context. Zijn proefschrift toont aan dat dergelijke interventies, waaronder het gebruik van affirmaties en positieve notities, effectief zijn in het verbeteren van mentale gezondheid en veerkracht bij diverse populaties.',
        findingLinkCitation: 'pure.uva.nl',
        findingLinkHref: 'https://pure.uva.nl/ws/files/29358986/thesis.pdf',
      },
    ],
  },
  {
    title: 'Ontspanningsoefeningen (mindfulness en meditatie)',
    description:
      'Het integreren van ontspanningsoefeningen in de Releafe app kan significant bijdragen aan het verbeteren van mentaal welzijn. Onderstaande wetenschappelijke bevindingen ondersteunen de effectiviteit van dergelijke interventies.',
    findings: [
      {
        findingTitle:
          'Mindfulness-based interventies en psychologische gezondheid',
        findingDescription:
          '​Een uitgebreide review door Keng, Smoski en Robins (2011) concludeerde dat mindfulness diverse positieve psychologische effecten heeft, waaronder verhoogd subjectief welzijn, vermindering van psychologische symptomen en emotionele reactiviteit, en verbeterde gedragsregulatie.',
        findingLinkCitation: 'pmc.ncbi.nlm.nih.gov',
        findingLinkHref: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3679190/',
      },
      {
        findingTitle: 'Effectiviteit van mindfulness bij diverse aandoeningen',
        findingDescription:
          'Onderzoek samengevat door het Radboudumc toont aan dat mindfulness-gebaseerde interventies veelbelovend zijn bij verschillende aandoeningen, met name bij depressie, pijn en verslavingen.',
        findingLinkCitation: 'radboudumc.nl',
        findingLinkHref:
          'https://www.radboudumc.nl/expertisecentra/mindfulness/wat-we-doen/onderzoek/onderzoek/wetenschappelijk-bewijs',
      },
      {
        findingTitle: 'Mindfulness, ontspanning en yoga op de werkvloer',
        findingDescription:
          'Het Trimbos-instituut rapporteert dat mindfulness, ontspanning en yoga een positieve invloed kunnen hebben op zowel het bevorderen van het welbevinden van werknemers als het verminderen van bestaande mentale gezondheidsklachten.',
        findingLinkCitation: 'trimbos.nl',
        findingLinkHref:
          'https://www.trimbos.nl/kennis/mentale-gezondheid-preventie/expertisecentrum-mentale-gezondheid/arbeid-en-mentale-gezondheid/effectieve-interventies/',
      },
      {
        findingTitle: 'Stressreductie door ontspanningstechnieken',
        findingDescription:
          'De Hersenstichting benadrukt dat technieken zoals meditatie en mindfulness effectieve manieren zijn om te ontspannen, wat kan helpen bij het verminderen van stress en het bevorderen van een gezonde hersenfunctie.',
        findingLinkCitation: 'hersenstichting.nl',
        findingLinkHref:
          'https://www.hersenstichting.nl/de-hersenen/gezonde-hersenen/ontspanning/',
      },
    ],
  },
]

const OnderzoekPage = ({ settings, page }) => {
  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'Onderzoek'}>
        {/* Features Section */}
        <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] xl:flex xl:pt-0 ">
          {/* Features Box */}
          <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[4rem] mx-4 xl:mx-32 2xl:mx-64 pt-14 py-8">
            <div className="px-8 xl:px-32">
              <h1 className="text-2xl font-sofia font-bold xl:text-5xl text-center">
                Wetenschappelijk onderzoek functionaliteiten Releafe app
              </h1>
              <p className="mt-4 font-sofia font-light text-center text-md xl:text-lg 2xl:text-xl">
                Hieronder wordt per functionaliteit van de Releafe-app, op basis
                van wetenschappelijke onderzoeken, toegelicht hoe deze bijdraagt
                aan het versterken van mentaal welzijn, mentale gezondheid en/of
                mentale fitheid van de gebruiker.
              </p>
            </div>

            {/* Research Data Container */}
            <div className="my-[2rem] 2xl:my-[4rem] flex flex-col gap-y-12 xl:gap-y-12 2xl:gap-y-14 px-8 xl:px-16">
              {researchData.map((item, index) => {
                const { title, description, findings } = item

                return (
                  <div
                    key={index}
                    className={`flex flex-col-reverse lg:flex-row justify-between items-center gap-x-12`}
                  >
                    {/* Feature Text Container */}
                    <div className="flex flex-col gap-y-8 lg:gap-y-12 w-full">
                      <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-sofia font-bold">
                        {title}
                      </h2>
                      <p className="font-sofia font-light text-md xl:text-lg 2xl:text-xl">
                        {description}
                      </p>

                      {/* <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-sofia font-bold">
                        Wetenschappelijke bevindingen:{' '}
                        <span className="text-md xl:text-lg 2xl:text-xl font-sofia font-light"></span>
                      </h3> */}

                      {findings.map((finding, index) => {
                        const {
                          findingTitle,
                          findingDescription,
                          findingLinkCitation,
                          findingLinkHref,
                        } = finding
                        return (
                          <div key={index}>
                            <h3 className="text-md xl:text-lg 2xl:text-xl font-sofia font-bold">
                              • {findingTitle}
                              <span className="text-md xl:text-lg 2xl:text-xl font-sofia font-light"></span>
                            </h3>

                            <p className="font-sofia font-light text-md xl:text-lg 2xl:text-xl">
                              {findingDescription}
                              <span>
                                {' '}
                                (
                                <Link
                                  href={findingLinkHref}
                                  className="underline"
                                >
                                  {findingLinkCitation}
                                </Link>
                                )
                              </span>
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default OnderzoekPage
