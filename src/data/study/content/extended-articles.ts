import type { StudyArticleBlock } from "@/types/study";
import { buildRichArticle, DEFAULT_STUDY_QUESTIONS } from "../article-builder";

function studyQuestions(topic: string, primary: string[]): string[] {
  return primary.length >= 4
    ? primary.slice(0, 5)
    : [...primary, ...DEFAULT_STUDY_QUESTIONS(topic)].slice(0, 5);
}

export const EXTENDED_ARTICLES: Record<
  string,
  { blocks: StudyArticleBlock[]; questions: string[] }
> = {
  "qualites-wt-imiter": {
    blocks: buildRichArticle(
      "Nous verrons comment les qualités de Jéhovah — amour, justice, sagesse et puissance — servent de modèle pour transformer notre personnalité au quotidien.",
      [
        {
          title: "Un Dieu dont les qualités nous attirent",
          paragraphs: [
            "La Bible ne présente pas Jéhovah comme un concept abstrait. Il possède une personnalité riche : il aime, il est juste, il est sage et il agit avec puissance bienveillante. Étudier ces qualités nous aide à comprendre pourquoi il agit comme il le fait et comment nous pouvons lui ressembler.",
            "Imiter Jéhovah ne signifie pas prétendre être parfaits. Cela signifie reconnaître nos limites, demander son aide et faire des progrès concrets dans notre façon de parler, de pardonner et de servir les autres.",
          ],
          scriptures: [
            {
              text: "« Soyez donc imitateurs de Dieu, comme des enfants bien-aimés. »",
              ref: "Éphésiens 5:1",
            },
          ],
        },
        {
          title: "L'amour divin — actif et équilibré",
          paragraphs: [
            "L'amour de Jéhovah n'est pas une émotion vague. Il corrige quand c'est nécessaire, pardonne quand il y a un repentir sincère et protège ceux qui lui sont fidèles. Imiter cet amour change notre attitude envers notre conjoint, nos enfants et nos compagnons de service.",
            "Un parent qui discipline avec justice et affection reflète l'amour de Jéhovah. Un époux qui pardonne sans garder rancune imite la miséricorde divine. Chaque acte d'amour désintéressé rapproche notre personnalité de celle de notre Créateur.",
          ],
          scriptures: [
            {
              text: "« L'amour est patient et bienveillant. L'amour n'est jaloux, il ne se vante pas, il ne s'enfle pas d'orgueil. »",
              ref: "1 Corinthiens 13:4",
            },
          ],
          list: {
            title: "Comment manifester l'amour divin",
            items: [
              "Écouter avant de répondre quand quelqu'un est blessé.",
              "Pardonner sans rappeler sans cesse la faute passée.",
              "Aider concrètement, même quand cela demande du temps.",
            ],
          },
        },
        {
          title: "Justice et miséricorde en équilibre",
          paragraphs: [
            "Jéhovah est juste : il ne tolère pas le mal indéfiniment. Mais il est aussi miséricordieux : il accorde des occasions de se repentir. Nous aussi pouvons être justes sans être durs, miséricordieux sans fermer les yeux sur ce qui est mal.",
            "Dans la congrégation comme en famille, cet équilibre évite deux extrêmes : la dureté qui décourage et la complaisance qui affaiblit les normes bibliques. Appliquer les principes avec discernement honore Jéhovah.",
          ],
          scriptures: [
            {
              text: "« Jéhovah est lent à la colère et riche en amour loyal ; il pardonne l'erreur et la transgression. »",
              ref: "Nombres 14:18",
            },
          ],
        },
        {
          title: "La sagesse qui guide nos décisions",
          paragraphs: [
            "La sagesse de Jéhovah se voit dans sa façon de résoudre les problèmes de l'humanité. Il ne réagit pas impulsivement ; il agit au moment opportun, selon un dessein global. Méditer sur sa sagesse nous aide à éviter des décisions prises sous le coup de l'émotion.",
            "Demander la sagesse par la prière, consulter la Parole et écouter les conseils des anciens sont des moyens concrets d'imiter Jéhovah dans nos choix quotidiens — finances, amitiés, emploi du temps.",
          ],
          scriptures: [
            {
              text: "« Si l'un d'entre vous manque de sagesse, qu'il la demande à Dieu, qui donne à tous libéralement. »",
              ref: "Jacques 1:5",
            },
          ],
        },
        {
          title: "Le fruit de l'esprit — un travail de toute une vie",
          paragraphs: [
            "Paul a comparé les qualités chrétiennes à un fruit qui mûrit progressivement. Patience, bonté, maîtrise de soi : ces traits ne apparaissent pas du jour au lendemain. Ils se développent grâce à l'étude, la prière et l'aide de l'Esprit saint.",
            "Plutôt que de se décourager face à nos faiblesses, nous pouvons fixer un objectif modeste : une qualité à renforcer cette semaine. Jéhovah voit nos efforts sincères et nous aide à progresser pas à pas.",
          ],
          scriptures: [
            {
              text: "« Le fruit de l'esprit, c'est l'amour, la joie, la paix, la patience, la bonté, la bonté d'âme, la foi, la douceur, la maîtrise de soi. »",
              ref: "Galates 5:22, 23",
            },
          ],
          question:
            "Quelle qualité de Jéhovah souhaitez-vous imiter en priorité cette semaine, et comment ?",
        },
      ]
    ),
    questions: studyQuestions("Imiter les qualités de Jéhovah", [
      "Quelles qualités de Jéhovah vous touchent le plus personnellement ?",
      "Comment l'amour divin se distingue-t-il d'un amour sentimental ?",
      "Comment maintenir l'équilibre entre justice et miséricorde ?",
      "Quelle qualité du fruit de l'esprit allez-vous cultiver concrètement ?",
    ]),
  },

  "qualites-awake-personne": {
    blocks: buildRichArticle(
      "Changer sa personnalité peut sembler impossible. Voyons comment le fruit de l'esprit se manifeste concrètement : pardonner, contrôler sa langue et rester calme sous pression.",
      [
        {
          title: "Le changement est possible",
          paragraphs: [
            "Beaucoup pensent que leur tempérament est figé pour toujours. Pourtant la Bible montre que des personnes très différentes — un persécuteur acharné comme Saul, un pêcheur impulsif comme Pierre — ont pu changer profondément grâce à l'aide de Jéhovah.",
            "Changer ne signifie pas nier qui nous sommes. Cela signifie laisser l'Esprit saint remodeler nos habitudes. Avec de la persévérance, des réactions autrefois automatiques — colère, sarcasme, impatience — peuvent céder la place à des réponses plus sages.",
          ],
          scriptures: [
            {
              text: "« Nous tous, nous reflétons la gloire de Jéhovah avec des visages non voilés, et nous sommes transformés en la même image, de gloire en gloire. »",
              ref: "2 Corinthiens 3:18",
            },
          ],
        },
        {
          title: "Maîtriser sa langue",
          paragraphs: [
            "Contrôler sa langue est l'un des défis les plus concrets du quotidien. Une parole blessante lancée sous le coup de la colère peut laisser des traces durables. Avant de répondre, une pause de quelques secondes et une prière silencieuse peuvent éviter des regrets.",
            "Jacques compare la langue à une étincelle capable d'enflammer une forêt entière. À l'inverse, une parole encourageante, mesurée et sincère peut apaiser une situation tendue et renforcer les liens.",
          ],
          scriptures: [
            {
              text: "« Que tout homme soit prompt à écouter, lent à parler, lent à se mettre en colère. »",
              ref: "Jacques 1:19",
            },
          ],
          list: {
            title: "Avant de parler, demandez-vous",
            items: [
              "Est-ce vrai et nécessaire ?",
              "Est-ce dit avec bonté ?",
              "Est-ce le bon moment ?",
            ],
          },
        },
        {
          title: "Pardonner pour avancer",
          paragraphs: [
            "Pardonner ne signifie pas approuver le mal commis. Cela signifie lâcher prise sur la rancune qui nous ronge et faire confiance à Jéhovah pour rendre justice au bon moment. Garder une offense en mémoire empoisonne nos relations et notre paix intérieure.",
            "Jéhovah pardonne généreusement quand nous nous repentons sincèrement. Imiter ce pardon envers autrui libère notre cœur et nous permet de servir Jéhovah avec joie plutôt qu'avec amertume.",
          ],
          scriptures: [
            {
              text: "« Continuez à vous pardonner les uns aux autres et à pardonner volontiers, si l'un a un motif de plainte contre un autre. »",
              ref: "Colossiens 3:13",
            },
          ],
        },
        {
          title: "Rester calme sous pression",
          paragraphs: [
            "Au travail, à l'école ou en famille, la pression peut nous pousser à réagir violemment. Rester calme dans ces moments est une preuve visible du fruit de l'esprit. Les autres remarquent cette différence et peuvent être touchés.",
            "Une réponse douce détourne la fureur, dit Proverbes. Cela ne veut pas dire être passif face à l'injustice, mais répondre avec dignité plutôt qu'avec agressivité. Jésus lui-même est resté calme face aux provocations.",
          ],
          scriptures: [
            {
              text: "« Une réponse calme détourne la fureur, mais une parole blessante fait monter la colère. »",
              ref: "Proverbes 15:1",
            },
          ],
          question:
            "Dans quelle situation récente auriez-vous pu répondre avec plus de douceur ?",
        },
      ]
    ),
    questions: studyQuestions("Devenir une meilleure personne", [
      "Quel exemple biblique de changement vous encourage le plus ?",
      "Comment la pause avant de parler peut-elle protéger vos relations ?",
      "Quelle différence y a-t-il entre pardonner et approuver le mal ?",
      "Comment votre calme sous pression peut-il toucher les autres ?",
    ]),
  },

  "resurrection-wt-promesse": {
    blocks: buildRichArticle(
      "La résurrection est au cœur de l'espérance chrétienne. Voyons pourquoi cette promesse de Jéhovah est fiable et ce qu'elle signifie pour ceux qui dorment dans la mort.",
      [
        {
          title: "Une espérance fondée sur des faits",
          paragraphs: [
            "Paul a écrit que si Christ n'est pas ressuscité, notre foi est vaine. Mais Christ est bien ressuscité — des centaines de témoins l'ont vu vivant après sa mort. Cette réalité historique donne un fondement solide à notre espérance en la résurrection.",
            "La résurrection de Jésus n'est pas un symbole poétique. C'est la preuve que Jéhovah a le pouvoir de restaurer la vie. Ce qu'il a accompli pour son Fils, il le fera pour tous ceux qui sont dans la tombe et qui lui sont fidèles.",
          ],
          scriptures: [
            {
              text: "« Christ est ressuscité des morts, les premiers fruits de ceux qui sont endormis. »",
              ref: "1 Corinthiens 15:20",
            },
          ],
        },
        {
          title: "Jéhovah se souvient de chaque personne",
          paragraphs: [
            "Job, au milieu de ses souffrances, a exprimé sa confiance que Jéhovah le garderait en mémoire et le ferait revivre. Cette promesse ne concerne pas seulement Job : elle s'étend à tous ceux qui dorment dans la mort.",
            "Jéhovah se souvient de tout ce qui fait notre personnalité — nos expériences, notre caractère, notre affection pour lui. La résurrection ne consiste pas à créer une copie vague, mais à restaurer la personne que Jéhovah connaît parfaitement.",
          ],
          scriptures: [
            {
              text: "« Si un homme meurt, revivra-t-il ? Tous les jours de ma période de travail forcé, j'attendrai, jusqu'à ce que vienne mon relèvement. »",
              ref: "Job 14:14",
            },
          ],
        },
        {
          title: "Des miracles en avance",
          paragraphs: [
            "Jésus a ressuscité Lazare, la fille de Jaïrus et le fils de la veuve de Naïn. Ces miracles montraient en miniature ce que le Royaume accomplira à grande échelle. Chaque résurrection effectuée par Jésus confirmait qu'il agissait avec l'autorité de son Père.",
            "Ces récits nous réconfortent aussi sur la douleur de la séparation. Marthe et Marie ont pleuré Lazare ; Jésus a compatí à leur peine avant de le rappeler à la vie. Jéhovah comprend notre chagrin et prépare un jour où plus personne ne dira : « Je suis malade. »",
          ],
          scriptures: [
            {
              text: "« Je suis la résurrection et la vie. Celui qui exerce la foi en moi, même s'il meurt, vivra. »",
              ref: "Jean 11:25",
            },
          ],
          list: {
            title: "Ce que la résurrection n'est pas",
            items: [
              "Une réincarnation dans un autre corps ou une autre espèce.",
              "Un état d'esprit vague où nous flotterions sans corps.",
              "Une vie consciente immédiate après la mort pour tous.",
            ],
          },
        },
        {
          title: "Une vie réelle sur la terre",
          paragraphs: [
            "La résurrection promise n'est pas une existence incorporelle dans un lieu lointain. Pour la grande majorité de l'humanité, elle signifie revivre sur une terre paradisiaque, dans un corps sain, sans maladie ni mort.",
            "Cette espérance transforme notre vision de l'avenir. Plutôt que de craindre la mort ou de chercher des réconforts illusoires, nous pouvons méditer sur la promesse fiable de Jéhovah : « Les morts ressusciteront. »",
          ],
          scriptures: [
            {
              text: "« Ne soyez pas surpris de cela, car une heure vient où tous ceux qui sont dans les tombeaux entendront sa voix et en sortiront. »",
              ref: "Jean 5:28, 29",
            },
          ],
          question:
            "Comment la promesse de la résurrection influence-t-elle votre façon de voir la mort ?",
        },
      ]
    ),
    questions: studyQuestions("La résurrection", [
      "Pourquoi la résurrection de Jésus est-elle essentielle à notre foi ?",
      "Comment Jéhovah se souvient-il de ceux qui sont morts ?",
      "Que nous enseignent les résurrections effectuées par Jésus ?",
      "Quelle espérance la résurrection vous apporte-t-elle personnellement ?",
    ]),
  },

  "resurrection-awake-morts": {
    blocks: buildRichArticle(
      "Contrairement à de nombreuses croyances populaires, la Bible enseigne que les morts sont inconscients. Cette vérité apaise, éclaire et oriente notre espérance vers la résurrection.",
      [
        {
          title: "Ce que la Bible dit vraiment",
          paragraphs: [
            "De nombreuses religions enseignent que les morts continuent à vivre ailleurs — au ciel, en enfer ou entre deux mondes. La Bible présente une image différente : les morts sont inconscients, comme endormis profondément, en attente de la résurrection.",
            "Ecclésiaste 9:5 déclare clairement : « Les morts ne savent rien. » Ils ne souffrent pas, ne nous observent pas depuis un autre monde et n'interviennent pas dans nos vies. Cette vérité libère de craintes infondées.",
          ],
          scriptures: [
            {
              text: "« Car les vivants savent qu'ils mourront, mais les morts ne savent rien. »",
              ref: "Ecclésiaste 9:5",
            },
          ],
        },
        {
          title: "Un sommeil réconfortant",
          paragraphs: [
            "Jésus a comparé la mort à un sommeil profond. Quand il s'est approché du tombeau de Lazare, il a dit à ses disciples : « Notre ami Lazare s'est endormi. » Il n'a pas dit que Lazare était au ciel ou dans un lieu de tourment.",
            "Savoir que nos proches décédés ne souffrent pas est un réconfort immense. Ils « dorment » en paix, en attente du jour où Jéhovah les réveillera. Nous n'avons pas à craindre qu'ils soient tourmentés ou qu'ils nous observent avec tristesse.",
          ],
          scriptures: [
            {
              text: "« Lazare, notre ami, s'est endormi, mais je vais là-bas pour le réveiller. »",
              ref: "Jean 11:11",
            },
          ],
        },
        {
          title: "Éviter les pratiques trompeuses",
          paragraphs: [
            "Si les morts sont inconscients, tenter de communiquer avec eux — par des médiums, des rituels ou des « messages de l'au-delà » — est futile et dangereux. La Bible met en garde contre ces pratiques qui imitent les esprits démoniaques.",
            "Canaliser notre espérance vers la résurrection promise, plutôt que vers des tentatives de contact avec les morts, nous protège et nous aligne sur la volonté de Jéhovah. C'est lui seul qui a le pouvoir de rendre la vie.",
          ],
          scriptures: [
            {
              text: "« Il ne faut pas que l'on trouve chez toi quelqu'un qui pratique la divination, un devin, un interprète de présages ou un médium. »",
              ref: "Deutéronome 18:10, 11",
            },
          ],
          list: {
            title: "Une espérance saine face à la mort",
            items: [
              "Méditer sur la promesse de la résurrection.",
              "Se rappeler que Jéhovah se souvient de nos proches.",
              "Éviter les pratiques qui contredisent la Parole de Dieu.",
            ],
          },
        },
        {
          title: "Vivre en attendant la réunion",
          paragraphs: [
            "Comprendre où sont les morts ne diminue pas notre amour pour eux. Au contraire, cela renforce notre désir de les revoir un jour, sur une terre où la mort ne séparera plus les familles. Cette espérance donne un sens à notre endurance actuelle.",
            "En attendant, nous pouvons honorer la mémoire de nos proches en imitant leur foi, en servant Jéhovah fidèlement et en aidant d'autres à connaître la même espérance précieuse.",
          ],
          scriptures: [
            {
              text: "« J'ai l'espérance envers Dieu, espérance qu'ils ont aussi, qu'il y aura une résurrection. »",
              ref: "Actes 24:15",
            },
          ],
          question:
            "Comment la vérité sur l'état des morts modifie-t-elle votre façon de gérer le deuil ?",
        },
      ]
    ),
    questions: studyQuestions("Où sont les morts", [
      "Que signifie Ecclésiaste 9:5 pour notre compréhension de la mort ?",
      "Pourquoi Jésus a-t-il comparé la mort à un sommeil ?",
      "Pourquoi faut-il éviter de tenter de communiquer avec les morts ?",
      "Comment l'espérance de la résurrection console-t-elle ceux qui pleurent ?",
    ]),
  },

  "adoration-wt-coeur": {
    blocks: buildRichArticle(
      "Adorer Jéhovah, ce n'est pas seulement assister à une réunion. Voyons comment l'adoration pure exclut l'idolâtrie et transforme toute notre vie en hommage à notre Créateur.",
      [
        {
          title: "Un mode de vie, pas un rituel",
          paragraphs: [
            "Adorer Jéhovah dépasse la participation à des réunions ou à des cérémonies. C'est un mode de vie : tout ce que nous faisons — travail, loisirs, relations — peut honorer ou déshonorer son nom. Paul invite à présenter notre corps en « sacrifice vivant ».",
            "Cette vision élargie de l'adoration nous rappelle que Jéhovah voit au-delà des apparences. Assister à une réunion sans changer notre conduite entre deux réunions ne lui plaît pas. L'adoration sincère touche le cœur et se traduit par des actions.",
          ],
          scriptures: [
            {
              text: "« Par la compassion de Dieu, je vous exhorte, frères, à offrir vos corps en sacrifice vivant, saint, acceptable à Dieu, un service sacré. »",
              ref: "Romains 12:1",
            },
          ],
        },
        {
          title: "Une adoration exclusive",
          paragraphs: [
            "Le deuxième commandement interdit les images utilisées dans le culte. Jéhovah exige une adoration exclusive, sans mélange avec des idoles, des traditions païennes ou des pratiques qui lui déplaisent. Mélanger vérité et erreur ne lui convient pas.",
            "Dans un monde où les influences sont multiples, rester fidèle à l'adoration pure demande de la vigilance. Vérifier que nos croyances et pratiques s'alignent sur la Bible protège notre relation avec Jéhovah.",
          ],
          scriptures: [
            {
              text: "« Tu ne te feras pas d'image taillée, ni de représentation de quoi que ce soit. Tu ne te prosterneras pas devant elles et tu ne les serviras pas. »",
              ref: "Exode 20:4, 5",
            },
          ],
        },
        {
          title: "Avec esprit et vérité",
          paragraphs: [
            "Jésus a déclaré que les vrais adorateurs adoreraient le Père « avec esprit et vérité ». L'esprit, c'est la sincérité — adorer de tout cœur, sans hypocrisie. La vérité, c'est l'alignement sur ce que la Bible enseigne réellement sur Jéhovah et son dessein.",
            "L'adoration en vérité nous libère des superstitions, des craintes infondées et des pratiques épuisantes qui n'apportent aucun bénéfice spirituel. Elle nous rapproche du Dieu que nous pouvons vraiment connaître et aimer.",
          ],
          scriptures: [
            {
              text: "« Les vrais adorateurs adoreront le Père avec esprit et vérité, car le Père recherche de tels adorateurs. »",
              ref: "Jean 4:23, 24",
            },
          ],
          list: {
            title: "Des actes qui honorent Jéhovah",
            items: [
              "Étudier sa Parole avec régularité et humilité.",
              "Parler de lui avec respect à autrui.",
              "Refuser ce qui contredit ses normes morales.",
            ],
          },
        },
        {
          title: "De tout votre cœur",
          paragraphs: [
            "Jésus a cité le plus grand commandement : aimer Jéhovah de tout son cœur, de toute son âme et de toute sa force. Cet amour englobe nos pensées, nos émotions et nos actions. Il n'est pas réservé au dimanche ou à une heure précise.",
            "Chaque matin, nous pouvons nous demander : « Comment puis-je adorer Jéhovah aujourd'hui ? » Cette question simple oriente nos choix avant les tentations et les distractions de la journée.",
          ],
          scriptures: [
            {
              text: "« Tu aimeras Jéhovah ton Dieu de tout ton cœur, de toute ton âme et de toute ta force. »",
              ref: "Marc 12:30",
            },
          ],
          question:
            "Quelle décision concrète pourriez-vous prendre cette semaine pour adorer Jéhovah de tout votre cœur ?",
        },
      ]
    ),
    questions: studyQuestions("Adorer Jéhovah", [
      "En quoi l'adoration est-elle plus qu'un rituel hebdomadaire ?",
      "Pourquoi Jéhovah exige-t-il une adoration exclusive ?",
      "Que signifie adorer « avec esprit et vérité » ?",
      "Comment honorez-vous Jéhovah dans votre vie quotidienne ?",
    ]),
  },

  "adoration-awake-verite": {
    blocks: buildRichArticle(
      "Beaucoup pensent que la sincérité suffit, quelle que soit la croyance. Voyons pourquoi la vérité compte dans le culte et comment connaître Jéhovah personnellement.",
      [
        {
          title: "La sincérité ne suffit pas",
          paragraphs: [
            "On entend souvent : « Peu importe ce que tu crois, tant que tu es sincère. » Pourtant Jésus a prié : « Sanctifie-les par ta vérité ; ta parole est vérité. » La sincérité sans vérité peut nous conduire loin de Jéhovah.",
            "Les Pharisiens étaient zélés dans leur culte, mais ils avaient ajouté des traditions humaines qui contredisaient la Parole de Dieu. Jésus les a corrigés fermement. Nous devons veiller à ne pas imiter leur exemple.",
          ],
          scriptures: [
            {
              text: "« Sanctifie-les par ta vérité ; ta parole est vérité. »",
              ref: "Jean 17:17",
            },
          ],
        },
        {
          title: "Connaître Jéhovah, pas seulement le croire",
          paragraphs: [
            "Jean 17:3 définit la vie éternelle comme une connaissance personnelle de Jéhovah et de son Fils. Connaître Jéhovah signifie comprendre son nom, ses qualités, son dessein et ses exigences — pas seulement admettre qu'il existe.",
            "Cette connaissance se développe par l'étude, la prière et l'application. Plus nous apprenons sur Jéhovah, plus notre adoration devient profonde et notre confiance solide.",
          ],
          scriptures: [
            {
              text: "« Cela signifie la vie éternelle : qu'ils te connaissent, toi, le seul vrai Dieu, et celui que tu as envoyé, Jésus Christ. »",
              ref: "Jean 17:3",
            },
          ],
        },
        {
          title: "Éviter les traditions humaines",
          paragraphs: [
            "Jésus a reproché aux Pharisiens d'avoir annulé le commandement de Dieu par leurs traditions. Aujourd'hui aussi, des croyances populaires — fêtes païennes, doctrines non bibliques — peuvent mélanger erreur et vérité dans le culte.",
            "Comparer toute enseignance à la Bible, comme les Béréens, nous protège. Si une pratique ou une croyance contredit clairement la Parole, nous la rejetons par amour pour Jéhovah.",
          ],
          scriptures: [
            {
              text: "« Vous annulez la parole de Dieu par votre tradition. »",
              ref: "Marc 7:13",
            },
          ],
          list: {
            title: "Comment vérifier une croyance",
            items: [
              "La comparer directement à la Bible.",
              "Examiner le contexte des versets cités.",
              "Demander : est-ce que cela honore Jéhovah ?",
            ],
          },
        },
        {
          title: "Libérés pour adorer en vérité",
          paragraphs: [
            "L'adoration en vérité nous libère des superstitions qui alimentent la peur — crainte des morts, des mauvais présages, des pratiques occultes. Elle nous donne une base solide pour servir Jéhovah avec joie et confiance.",
            "Quand nous adorons en vérité, notre culte n'est pas un fardeau vide. Il renforce notre amitié avec Jéhovah et nous prépare à la vie éternelle qu'il a promise.",
          ],
          scriptures: [
            {
              text: "« Ils reçurent la parole avec beaucoup d'ardeur, et ils examinaient les Écritures chaque jour pour voir si ces choses étaient vraies. »",
              ref: "Actes 17:11",
            },
          ],
          question:
            "Y a-t-il une croyance ou une pratique que vous devriez examiner à la lumière de la Bible ?",
        },
      ]
    ),
    questions: studyQuestions("La vérité dans le culte", [
      "Pourquoi la sincérité seule ne suffit-elle pas ?",
      "Que signifie connaître Jéhovah personnellement ?",
      "Comment éviter de mélanger traditions humaines et Parole de Dieu ?",
      "Comment la vérité libère-t-elle de la peur et des superstitions ?",
    ]),
  },

  "bible-awake-etudier": {
    blocks: buildRichArticle(
      "Étudier la Bible, ce n'est pas lire passivement des pages. Voyons comment transformer la lecture en dialogue vivant avec Jéhovah : prière, questions et application.",
      [
        {
          title: "Un dialogue, pas une lecture passive",
          paragraphs: [
            "Étudier la Bible, c'est entrer en dialogue avec Jéhovah. Nous lisons, nous posons des questions, nous cherchons des réponses, nous appliquons. Cette démarche active transforme des mots anciens en conseils vivants pour aujourd'hui.",
            "Avant d'ouvrir la Bible, une courte prière aide à demander la sagesse et la concentration. Même quelques minutes sans distraction valent mieux qu'une longue lecture où l'esprit vagabonde.",
          ],
          scriptures: [
            {
              text: "« Si l'un d'entre vous manque de sagesse, qu'il la demande à Dieu, qui donne à tous libéralement. »",
              ref: "Jacques 1:5",
            },
          ],
        },
        {
          title: "Poser les bonnes questions",
          paragraphs: [
            "Qui parle dans ce passage ? À qui s'adresse-t-il ? Quel est le contexte ? Quel principe puis-je en tirer ? Comment cela change-t-il ma conduite ? Ces questions simples transforment la lecture en étude profonde.",
            "Noter les réponses dans un carnet aide à retenir ce que Jéhovah nous enseigne. En quelques semaines, relire ces notes montre combien nous avons déjà progressé.",
          ],
          scriptures: [
            {
              text: "« Ton instruction est une lampe pour mes pieds, et une lumière pour mon sentier. »",
              ref: "Psaume 119:105",
            },
          ],
          list: {
            title: "Questions utiles pour chaque passage",
            items: [
              "Qu'apprends-je sur Jéhovah ou sur Jésus ?",
              "Quel exemple dois-je imiter ou éviter ?",
              "Quelle application concrète pour cette semaine ?",
            ],
          },
        },
        {
          title: "Relier la Parole à la vie",
          paragraphs: [
            "Un verset sur la patience lu le matin peut nous aider concrètement dans une situation tendue l'après-midi. Relier ce qu'on lit à sa vie quotidienne ancre la Parole dans notre mémoire et notre cœur.",
            "Jésus comparait celui qui met en pratique ses paroles à un homme sage qui a bâti sa maison sur le roc. L'étude sans application est comme une maison sur le sable — elle s'effondre face aux épreuves.",
          ],
          scriptures: [
            {
              text: "« Celui qui entend mes paroles et les met en pratique, je le comparerai à un homme sage qui a bâti sa maison sur le roc. »",
              ref: "Matthieu 7:24",
            },
          ],
        },
        {
          title: "La régularité plutôt que la quantité",
          paragraphs: [
            "Mieux vaut quinze minutes d'étude attentive chaque jour qu'une heure occasionnelle sans réflexion. La régularité construit une amitié durable avec Jéhovah et renforce notre discernement spirituel.",
            "Choisir un moment fixe — le matin au réveil, le soir avant de dormir — aide à ancrer l'habitude. Jéhovah bénit ceux qui cherchent à le connaître avec persévérance.",
          ],
          scriptures: [
            {
              text: "« Heureux celui qui lit à haute voix et ceux qui entendent les paroles de la prophétie et gardent les choses qui y sont écrites. »",
              ref: "Apocalypse 1:3",
            },
          ],
          question:
            "Quel passage allez-vous étudier cette semaine, et quelle question allez-vous vous poser ?",
        },
      ]
    ),
    questions: studyQuestions("Étudier la Bible", [
      "Pourquoi l'étude biblique est-elle un dialogue et non une lecture passive ?",
      "Quelles questions transforme-t-on la lecture en étude ?",
      "Comment relier un verset à une situation concrète ?",
      "Quel moment conviendrait pour une étude régulière chez vous ?",
    ]),
  },

  "bible-wt-profit": {
    blocks: buildRichArticle(
      "L'étude personnelle n'est pas une course à la quantité. Voyons comment noter, comprendre le contexte et appliquer personnellement pour tirer le meilleur parti de chaque séance.",
      [
        {
          title: "La compréhension prime sur la quantité",
          paragraphs: [
            "Lire dix chapitres sans retenir ni appliquer est moins utile qu'un seul passage médité en profondeur. Jéhovah valorise la compréhension et l'application, pas la vitesse de lecture.",
            "Fixer un objectif modeste — un chapitre, un paragraphe, un verset — permet de consacrer le temps nécessaire à la réflexion. La qualité de l'étude nourrit notre foi bien mieux que la quantité.",
          ],
          scriptures: [
            {
              text: "« Si l'on fait des recherches pour elle comme pour l'argent, si l'on la recherche comme pour des trésors cachés, on comprendra alors la crainte de Jéhovah. »",
              ref: "Proverbes 2:4, 5",
            },
          ],
        },
        {
          title: "Noter pour retenir",
          paragraphs: [
            "Noter les versets clés, les promesses et les principes aide à les retrouver plus tard. Un carnet simple ou une application sur téléphone suffit. Relire ces notes avant une réunion ou une sortie de service renforce notre préparation.",
            "Écrire ce que nous comprenons fixe aussi les idées dans notre mémoire. C'est un investissement modeste qui produit des fruits durables.",
          ],
          scriptures: [
            {
              text: "« Mon instruction, ne l'oublie pas, et que ton cœur garde mes commandements. »",
              ref: "Proverbes 3:1",
            },
          ],
          list: {
            title: "Que noter lors d'une étude",
            items: [
              "Les versets qui vous touchent particulièrement.",
              "Les principes applicables à votre situation.",
              "Les questions à approfondir plus tard.",
            ],
          },
        },
        {
          title: "Le contexte change tout",
          paragraphs: [
            "Un verset isolé peut sembler dire une chose ; lu dans son chapitre et comparé à d'autres Écritures, il prend sa vraie signification. Examiner qui parle, à qui, quand et pourquoi évite les interprétations erronées.",
            "Utiliser les références croisées, les introductions des livres bibliques et les publications d'aide à l'étude enrichit notre compréhension. Jéhovah veut que nous comprenions sa Parole, pas que nous la déformions.",
          ],
          scriptures: [
            {
              text: "« Comparez les choses spirituelles avec les choses spirituelles. »",
              ref: "1 Corinthiens 2:13",
            },
          ],
        },
        {
          title: "L'objectif : la transformation",
          paragraphs: [
            "L'étude personnelle vise à devenir plus semblable à Jéhovah en personnalité — pas simplement accumuler des connaissances. Chaque séance devrait se terminer par une question : « Qu'est-ce que je vais changer concrètement ? »",
            "Quand nous appliquons ce que nous apprenons, Jéhovah bénit nos efforts et notre foi grandit. L'étude devient alors un plaisir, non une obligation vide.",
          ],
          scriptures: [
            {
              text: "« Mettez en pratique la parole et non pas seulement l'écoutez, vous vous trompant ainsi vous-mêmes. »",
              ref: "Jacques 1:22",
            },
          ],
          question:
            "Quelle note ou quelle application allez-vous retenir de votre prochaine étude ?",
        },
      ]
    ),
    questions: studyQuestions("Étude personnelle", [
      "Pourquoi la compréhension est-elle plus importante que la quantité lue ?",
      "Comment la prise de notes enrichit-elle votre étude ?",
      "Pourquoi le contexte est-il essentiel pour comprendre un verset ?",
      "Quelle transformation concrète visez-vous par votre étude ?",
    ]),
  },

  "bible-livre-enseigner": {
    blocks: buildRichArticle(
      "Enseigner la Bible est un privilège. Que ce soit en prédication, en réunion ou en culte familial, quelques principes améliorent grandement la clarté et l'efficacité du message.",
      [
        {
          title: "Un privilège et une responsabilité",
          paragraphs: [
            "Enseigner la Bible, c'est transmettre la plus précieuse des espérances. Que ce soit à un voisin, à un enfant ou à un auditoire en réunion, nous représentons Jéhovah. Cette responsabilité appelle à la préparation et à l'humilité.",
            "Nous n'enseignons pas pour impressionner, mais pour aider autrui à connaître Jéhovah. Un message simple, clair et fondé sur la Parole touche le cœur mieux qu'un discours savant mais confus.",
          ],
          scriptures: [
            {
              text: "« Faites des disciples de gens de toutes les nations, en les baptisant et en leur enseignant à observer toutes les choses que je vous ai commandées. »",
              ref: "Matthieu 28:19, 20",
            },
          ],
        },
        {
          title: "Préparer une leçon claire",
          paragraphs: [
            "Une leçon efficace a un objectif clair : qu'apprendra la personne ? Par quoi commencer ? Quelle Écriture sera lue ? Quelle question stimulera la réflexion ? Répondre à ces questions avant d'enseigner structure le message.",
            "Commencer par une introduction qui capte l'attention, développer le point principal avec des Écritures, puis conclure par une application pratique : voilà une structure simple qui fonctionne en prédication comme en réunion.",
          ],
          scriptures: [
            {
              text: "« Que mes paroles soient toujours pleines de grâce, assaisonnées de sel, pour que vous sachiez comment répondre à chacun. »",
              ref: "Colossiens 4:6",
            },
          ],
          list: {
            title: "Éléments d'une leçon efficace",
            items: [
              "Un objectif clair et une Écriture principale.",
              "Des questions ouvertes qui engagent la réflexion.",
              "Une application concrète pour la vie quotidienne.",
            ],
          },
        },
        {
          title: "Poser de bonnes questions",
          paragraphs: [
            "Les questions ouvertes — « Qu'en pensez-vous ? », « Comment cela s'applique-t-il ? » — engagent mieux que des questions fermées qui ne demandent qu'un oui ou un non. Elles invitent la personne à réfléchir et à s'exprimer.",
            "Jésus posait des questions avant d'enseigner, pour toucher le cœur de ses interlocuteurs. Imiter son approche rend l'enseignement plus vivant et mémorable.",
          ],
          scriptures: [
            {
              text: "« Qui dites-vous que je suis ? »",
              ref: "Matthieu 16:15",
            },
          ],
        },
        {
          title: "Encourager la lecture personnelle",
          paragraphs: [
            "Aider l'étudiant à lire lui-même la Bible, et non seulement écouter, développe sa propre foi et sa confiance en Jéhovah. Montrer comment trouver un verset, expliquer le contexte, puis laisser la personne lire : voilà une méthode durable.",
            "Quand quelqu'un découvre par lui-même une vérité biblique, elle lui appartient. Notre rôle est de guider, pas de substituer notre réflexion à la sienne.",
          ],
          scriptures: [
            {
              text: "« Examinez les Écritures chaque jour pour voir si ces choses étaient vraies. »",
              ref: "Actes 17:11",
            },
          ],
          question:
            "Quelle question ouverte pourriez-vous préparer pour votre prochaine leçon ou conversation ?",
        },
      ]
    ),
    questions: studyQuestions("Enseigner la Bible", [
      "Pourquoi enseigner la Bible est-il un privilège et une responsabilité ?",
      "Quels éléments rendent une leçon claire et efficace ?",
      "Pourquoi les questions ouvertes sont-elles plus utiles que les questions fermées ?",
      "Comment encouragez-vous les autres à lire la Bible eux-mêmes ?",
    ]),
  },

  "sagesse-wt-acquerir": {
    blocks: buildRichArticle(
      "Le livre des Proverbes est un trésor de sagesse pratique. Voyons comment acquérir la sagesse qui vient de Jéhovah et éviter les pièges du quotidien.",
      [
        {
          title: "La sagesse commence par la crainte de Jéhovah",
          paragraphs: [
            "Salomon a écrit que « la crainte de Jéhovah est le commencement de la sagesse ». Il ne s'agit pas d'une peur paralysante, mais d'un profond respect qui nous pousse à éviter ce qui déplaît à notre Créateur.",
            "Cette crainte saine oriente nos choix : amitiés, emploi du temps, parole, finances. Sans elle, nous risquons de nous fier uniquement à notre propre jugement, souvent limité et influencé par les modes du moment.",
          ],
          scriptures: [
            {
              text: "« La crainte de Jéhovah est le commencement de la connaissance, mais les stupides méprisent la sagesse et la discipline. »",
              ref: "Proverbes 1:7",
            },
          ],
        },
        {
          title: "Choisir ses compagnies",
          paragraphs: [
            "Les Proverbes mettent en garde : « Celui qui fréquente des hommes stupides finira mal ». Choisir ses amis avec soin est l'une des décisions les plus importantes, surtout pour les jeunes.",
            "De bonnes compagnies nous encouragent à servir Jéhovah ; de mauvaises nous entraînent vers des habitudes nuisibles. Observer comment nos amis parlent, agissent et traitent autrui révèle leur influence sur nous.",
          ],
          scriptures: [
            {
              text: "« Celui qui fréquente des hommes stupides finira mal, mais la connaissance de celui qui a des compagnons sensés sera prospère. »",
              ref: "Proverbes 13:20",
            },
          ],
          list: {
            title: "Signes d'une bonne compagnie",
            items: [
              "Respecte vos valeurs et vos limites.",
              "Vous encourage dans le service de Jéhovah.",
              "Parle avec respect de Jéhovah et de la Bible.",
            ],
          },
        },
        {
          title: "La parole — force de vie ou de mort",
          paragraphs: [
            "Proverbes 18:21 compare la langue à une force de vie ou de mort. Une parole blessante peut laisser des traces durables ; une parole encourageante peut restaurer le moral de quelqu'un.",
            "Réfléchir avant de parler est un signe de maturité spirituelle. Demander : « Est-ce vrai, nécessaire et dit avec bonté ? » protège nos relations et honore Jéhovah.",
          ],
          scriptures: [
            {
              text: "« La langue a le pouvoir de la vie et de la mort ; ceux qui aiment l'utiliser mangeront de son fruit. »",
              ref: "Proverbes 18:21",
            },
          ],
        },
        {
          title: "Éviter l'orgueil et la paresse",
          paragraphs: [
            "L'orgueil précède la chute, avertit Proverbes. Croire que nous n'avons besoin de personne pour nous conseiller nous expose à des erreurs graves. L'humilité ouvre la porte à la sagesse.",
            "La paresse, elle, mène à la pauvreté spirituelle et matérielle. Travailler honnêtement, gérer nos ressources avec discernement et éviter la procrastination sont des marques de sagesse pratique.",
          ],
          scriptures: [
            {
              text: "« L'orgueil précède le désastre, et l'esprit hautain, la chute. »",
              ref: "Proverbes 16:18",
            },
          ],
          question:
            "Quel conseil des Proverbes allez-vous appliquer cette semaine dans vos relations ou votre travail ?",
        },
      ]
    ),
    questions: studyQuestions("Acquérir la sagesse", [
      "Que signifie « craindre Jéhovah » dans la vie quotidienne ?",
      "Pourquoi le choix des compagnies est-il si important ?",
      "Comment votre parole peut-elle être une force de vie ?",
      "Comment l'humilité vous aide-t-elle à acquérir la sagesse ?",
    ]),
  },

  "sagesse-awake-numerique": {
    blocks: buildRichArticle(
      "Internet et les réseaux sociaux offrent des opportunités et des risques. Voyons comment les principes bibliques guident nos choix à l'ère numérique.",
      [
        {
          title: "Des opportunités et des pièges",
          paragraphs: [
            "Le numérique permet d'étudier la Bible, de rester en contact avec la famille et de recevoir de l'encouragement spirituel. Mais il expose aussi à du contenu immoral, au cyberharcèlement, à la perte de temps et à une comparaison malsaine avec la vie des autres.",
            "Les Proverbes mettent en garde contre la paresse et la distraction ; ces principes s'appliquent parfaitement à notre usage des écrans. La sagesse consiste à tirer profit du bon tout en évitant le nuisible.",
          ],
          scriptures: [
            {
              text: "« Le paresseux désire beaucoup, mais ses mains ne produisent rien. »",
              ref: "Proverbes 13:4",
            },
          ],
        },
        {
          title: "Fixer des limites protectrices",
          paragraphs: [
            "Fixer des limites de temps d'écran n'est pas restrictif : c'est protecteur. Sans cadre, des heures peuvent s'écouler sans que nous ayons accompli quoi que ce soit d'utile — ni pour Jéhovah, ni pour notre famille, ni pour nous-mêmes.",
            "Des règles simples — pas de téléphone pendant les repas, une heure sans écran avant le coucher, un moment réservé à l'étude — créent de l'espace pour ce qui compte vraiment.",
          ],
          scriptures: [
            {
              text: "« Veillez donc sur votre conduite, en agissant avec sagesse et en rachetant le temps. »",
              ref: "Éphésiens 5:15, 16",
            },
          ],
          list: {
            title: "Limites utiles pour la famille",
            items: [
              "Définir des plages horaires sans écran.",
              "Garder les appareils hors de la chambre la nuit.",
              "Vérifier ensemble ce qui est consulté et partagé.",
            ],
          },
        },
        {
          title: "L'intégrité en ligne",
          paragraphs: [
            "Ce qu'on publie ou partage en ligne laisse une trace durable. L'intégrité chrétienne s'applique autant sur un écran que dans la vie réelle. Avant de publier, demandons : est-ce vrai, respectueux et digne d'un serviteur de Jéhovah ?",
            "Critiquer avec méchanceté, partager du contenu douteux ou passer des heures sur des sujets vains contredit les principes bibliques. Notre conduite en ligne peut toucher notre réputation et celle de la congrégation.",
          ],
          scriptures: [
            {
              text: "« Que votre parole soit toujours pleine de grâce, assaisonnée de sel. »",
              ref: "Colossiens 4:6",
            },
          ],
        },
        {
          title: "Prudence avec les amitiés en ligne",
          paragraphs: [
            "Les amitiés en ligne peuvent être positives si elles restent honnêtes et encadrées. Mais la prudence s'impose avec les inconnus : ne jamais rencontrer quelqu'un seul sans en parler à un parent ou un responsable.",
            "Jéhovah voit tout, y compris nos conversations privées. Agir en ligne comme si Jéhovah nous observait — car c'est le cas — nous protège de choix regrettables.",
          ],
          scriptures: [
            {
              text: "« Celui qui marche avec les sages deviendra sage, mais celui qui fréquente les stupides finira mal. »",
              ref: "Proverbes 13:20",
            },
          ],
          question:
            "Quelle limite numérique pourriez-vous mettre en place cette semaine pour protéger votre temps spirituel ?",
        },
      ]
    ),
    questions: studyQuestions("Sagesse numérique", [
      "Quels avantages et risques présente l'usage du numérique ?",
      "Pourquoi fixer des limites d'écran est-il une forme de sagesse ?",
      "Comment l'intégrité s'applique-t-elle en ligne ?",
      "Quelles précautions prendre avec les amitiés sur internet ?",
    ]),
  },

  "endurance-wt-garder": {
    blocks: buildRichArticle(
      "L'endurance est comparée à une course de fond. Voyons comment fixer les yeux sur l'espérance, prier sans cesse et chercher le soutien de la congrégation.",
      [
        {
          title: "Une course, pas un sprint",
          paragraphs: [
            "Paul a comparé la vie chrétienne à une course : « J'ai combattu le bon combat, j'ai achevé la course, j'ai gardé la foi. » L'endurance demande de la constance sur des années, pas seulement un élan passager.",
            "Des serviteurs fidèles traversent parfois des périodes où la motivation faiblit. C'est normal. L'important est de ne pas abandonner, mais de chercher ce qui nous aidera à tenir bon.",
          ],
          scriptures: [
            {
              text: "« J'ai combattu le bon combat, j'ai achevé la course, j'ai gardé la foi. »",
              ref: "2 Timothée 4:7",
            },
          ],
        },
        {
          title: "Fixer les yeux sur l'espérance",
          paragraphs: [
            "Fixer les yeux sur l'espérance — la résurrection, le Royaume, la vie éternelle — nous aide à ne pas abandonner quand l'épreuve dure. Hébreux 12:2 nous invite à regarder Jésus, qui a enduré la torture pour la joie qui lui était réservée.",
            "Méditer régulièrement sur les promesses de Jéhovah recharge notre motivation. Un verset lu le matin peut nous soutenir toute la journée face aux difficultés.",
          ],
          scriptures: [
            {
              text: "« Fixons les yeux sur Jésus, le chef et le consommateur de notre foi. »",
              ref: "Hébreux 12:2",
            },
          ],
        },
        {
          title: "La prière — source de force",
          paragraphs: [
            "La prière régulière recharge nos forces spirituelles. Dans l'épreuve, prier même brièvement et souvent maintient le lien avec Jéhovah. Il n'attend pas de longues formules : il écoute le cœur sincère.",
            "Paul a exhorté à « prier sans cesse ». Cela signifie cultiver une attitude de dépendance envers Jéhovah tout au long de la journée, pas seulement à heure fixe.",
          ],
          scriptures: [
            {
              text: "« Priez sans cesse. »",
              ref: "1 Thessaloniciens 5:17",
            },
          ],
          list: {
            title: "Quand l'épreuve dure",
            items: [
              "Lire un passage encourageant chaque jour.",
              "Parler à un ami spirituel de confiance.",
              "Noter les fois où Jéhovah vous a aidé par le passé.",
            ],
          },
        },
        {
          title: "Le soutien de la congrégation",
          paragraphs: [
            "La congrégation est un filet de sécurité. Parler à un ancien, demander des visites, accepter l'aide : ce n'est pas une faiblesse, c'est de la sagesse. Jéhovah a organisé sa congrégation pour que nous nous soutenions mutuellement.",
            "Isoler nos difficultés aggrave souvent la situation. Partager avec quelqu'un de confiance allège le fardeau et ouvre la porte à des conseils bibliques précieux.",
          ],
          scriptures: [
            {
              text: "« Portez les fardeaux les uns des autres, et ainsi vous remplirez la loi du Christ. »",
              ref: "Galates 6:2",
            },
          ],
          question:
            "Quelle promesse de Jéhovah pouvez-vous méditer cette semaine pour renforcer votre endurance ?",
        },
      ]
    ),
    questions: studyQuestions("Garder l'endurance", [
      "Pourquoi la vie chrétienne est-elle comparée à une course de fond ?",
      "Comment fixer les yeux sur Jésus renforce-t-il l'endurance ?",
      "En quoi la prière régulière recharge-t-elle nos forces ?",
      "Pourquoi chercher le soutien de la congrégation est-il une sagesse ?",
    ]),
  },

  "endurance-awake-vie": {
    blocks: buildRichArticle(
      "Maladie, deuil, persécution : certaines épreuves frappent sans prévenir. Voyons comment tenir bon quand tout semble s'effondrer, à la lumière de la Parole.",
      [
        {
          title: "Quand l'épreuve nous submerge",
          paragraphs: [
            "Un diagnostic grave, la mort d'un proche, la perte du travail, l'opposition à cause de sa foi : dans ces moments, tenir bon semble impossible. La Bible ne minimise pas cette douleur — elle reconnaît que la vie peut nous dépasser.",
            "Pourtant elle promet que Jéhovah ne nous abandonnera pas et qu'il donnera la force de tenir. Cette promesse n'efface pas l'épreuve, mais elle nous soutient au milieu d'elle.",
          ],
          scriptures: [
            {
              text: "« Dieu est fidèle, et il ne vous laissera pas être tentés au-delà de ce que vous pouvez supporter. »",
              ref: "1 Corinthiens 10:13",
            },
          ],
        },
        {
          title: "Des exemples qui inspirent",
          paragraphs: [
            "Des serviteurs modernes ont traversé des camps de concentration, des interdictions de culte, des persécutions familiales — et ont gardé leur intégrité. Leur exemple prouve que l'endurance est possible même dans les circonstances les plus extrêmes.",
            "Job a tout perdu mais n'a pas maudit Jéhovah. Paul a enduré des coups, des naufrages et l'emprisonnement. Leur fidélité nous rappelle que Jéhovah voit nos efforts et les récompensera.",
          ],
          scriptures: [
            {
              text: "« Jéhovah a donné, et Jéhovah a repris. Que le nom de Jéhovah soit béni. »",
              ref: "Job 1:21",
            },
          ],
        },
        {
          title: "L'épreuve qui affine la foi",
          paragraphs: [
            "Pierre a comparé l'épreuve de la foi à l'or affiné par le feu. Jéhovah utilise parfois les difficultés pour renforcer notre caractère et purifier nos motivations. Après l'épreuve, beaucoup témoignent avoir été plus forts spirituellement.",
            "Cela ne justifie pas la souffrance, mais elle donne un sens à notre endurance. Nous ne souffrons pas en vain quand nous restons fidèles à Jéhovah.",
          ],
          scriptures: [
            {
              text: "« Vous vous réjouissez grandement, bien que maintenant, si cela est nécessaire, vous soyez attristés pour un peu de temps par diverses épreuves. »",
              ref: "1 Pierre 1:6",
            },
          ],
          list: {
            title: "Tenir bon au jour le jour",
            items: [
              "Exprimer honnêtement sa détresse à Jéhovah en prière.",
              "Accepter l'aide pratique et spirituelle de la congrégation.",
              "Se rappeler une épreuve passée où Jéhovah vous a soutenu.",
            ],
          },
        },
        {
          title: "Un avenir qui justifie l'endurance",
          paragraphs: [
            "Paul a écrit que les souffrances du moment présent ne sont « pas dignes d'être comparées » à la gloire qui sera révélée. Méditer sur l'avenir que Jéhovah a promis — paix, santé, réunions sans séparation — nous aide à tenir.",
            "Chaque jour de fidélité est un investissement pour l'éternité. Jéhovah n'oublie aucun effort sincère fait pour lui.",
          ],
          scriptures: [
            {
              text: "« Car je suis convaincu que ni la mort ni la vie ne pourront nous séparer de l'amour de Dieu. »",
              ref: "Romains 8:38, 39",
            },
          ],
          question:
            "Quel exemple biblique ou moderne vous aide à tenir bon dans votre épreuve actuelle ?",
        },
      ]
    ),
    questions: studyQuestions("Tenir bon", [
      "Comment la Bible reconnaît-elle la douleur sans minimiser l'épreuve ?",
      "Quels exemples bibliques d'endurance vous inspirent ?",
      "Comment l'épreuve peut-elle affiner la foi ?",
      "Quelle promesse future vous aide à tenir aujourd'hui ?",
    ]),
  },

  "amour-wt-imiter": {
    blocks: buildRichArticle(
      "1 Corinthiens 13 décrit l'amour divin dans tous les domaines de la vie. Voyons comment imiter l'amour de Jéhovah : patience, pardon et sacrifice pour les autres.",
      [
        {
          title: "L'amour qui ne cherche pas son intérêt",
          paragraphs: [
            "L'amour décrit en 1 Corinthiens 13 est patient, ne garde pas rancune, ne cherche pas son intérêt. Cet amour dépasse le sentiment romantique ou familial : il caractérise toute notre conduite envers autrui.",
            "Imiter l'amour de Jéhovah, c'est parfois sacrifier notre temps, notre confort ou notre orgueil pour aider quelqu'un. C'est choisir de pardonner quand nous préférerions nous venger.",
          ],
          scriptures: [
            {
              text: "« L'amour est patient et bienveillant. L'amour n'est jaloux, il ne se vante pas, il ne s'enfle pas d'orgueil. »",
              ref: "1 Corinthiens 13:4",
            },
          ],
        },
        {
          title: "Le plus grand des sacrifices",
          paragraphs: [
            "L'amour de Jéhovah s'est manifesté de manière suprême en envoyant son Fils pour nous sauver. Jean 3:16 résume cette démarche : Dieu a tant aimé le monde qu'il a donné son Fils unique.",
            "Nous ne pourrons jamais égaler cet amour, mais nous pouvons le refléter dans nos relations. Aider un malade, écouter quelqu'un en détresse, pardonner une offense : voilà des actes qui imitent l'amour divin.",
          ],
          scriptures: [
            {
              text: "« Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque exerce la foi en lui ne soit pas détruit mais ait la vie éternelle. »",
              ref: "Jean 3:16",
            },
          ],
        },
        {
          title: "Pardonner comme Jéhovah pardonne",
          paragraphs: [
            "Jéhovah pardonne généreusement quand nous nous repentons sincèrement. Jésus a enseigné de pardonner « soixante-dix fois sept fois » si nécessaire. Garder rancune empoisonne notre cœur et notre relation avec Jéhovah.",
            "Pardonner ne signifie pas approuver le mal. Cela signifie lâcher prise sur le désir de vengeance et faire confiance à Jéhovah pour la justice. C'est un acte d'amour — envers autrui et envers nous-mêmes.",
          ],
          scriptures: [
            {
              text: "« Si vous ne pardonnez pas aux hommes leurs fautes, votre Père céleste ne vous pardonnera pas non plus. »",
              ref: "Matthieu 6:14",
            },
          ],
          list: {
            title: "Manifester l'amour divin",
            items: [
              "Patience avec les faiblesses des autres.",
              "Pardon sans rappeler sans cesse la faute.",
              "Aide concrète sans attendre de retour.",
            ],
          },
        },
        {
          title: "L'amour — la qualité essentielle",
          paragraphs: [
            "Paul conclut que l'amour est la qualité qui donne de la valeur à tout le reste. Sans amour, même les dons spirituels impressionnants ne servent à rien. Cultiver l'amour doit être notre priorité.",
            "Chaque jour offre des occasions de montrer de l'amour : un mot encourageant, un service rendu, une prière pour quelqu'un en difficulté. Jéhovah voit ces actes et les valorise.",
          ],
          scriptures: [
            {
              text: "« Maintenant, cependant, demeurent la foi, l'espérance, l'amour, ces trois choses ; mais l'amour est la plus grande d'entre elles. »",
              ref: "1 Corinthiens 13:13",
            },
          ],
          question:
            "À qui pourriez-vous montrer l'amour de Jéhovah de manière concrète cette semaine ?",
        },
      ]
    ),
    questions: studyQuestions("Imiter l'amour de Jéhovah", [
      "Comment l'amour de 1 Corinthiens 13 se distingue-t-il d'un simple sentiment ?",
      "Comment l'exemple de Jéhovah nous inspire-t-il à aimer les autres ?",
      "Quelle différence y a-t-il entre pardonner et approuver le mal ?",
      "Pourquoi l'amour est-il la qualité la plus importante ?",
    ]),
  },

  "amour-awake-quotidien": {
    blocks: buildRichArticle(
      "L'amour chrétien ne se résume pas à des sentiments. Voyons comment l'écoute, l'aide, l'encouragement et le pardon se manifestent concrètement au quotidien.",
      [
        {
          title: "En action et en vérité",
          paragraphs: [
            "Jean écrit : « N'aimons pas d'une manière verbale ni avec la langue, mais en action et en vérité. » Dire « je t'aime » sans agir en conséquence est une contradiction. L'amour chrétien se voit dans nos gestes.",
            "Un acte d'amour peut être modeste — porter des courses, envoyer un message encourageant, écouter quelqu'un qui souffre — mais Jéhovah le voit et le valorise.",
          ],
          scriptures: [
            {
              text: "« Petits enfants, n'aimons pas d'une manière verbale ni avec la langue, mais en action et en vérité. »",
              ref: "1 Jean 3:18",
            },
          ],
        },
        {
          title: "Écouter — un acte d'amour puissant",
          paragraphs: [
            "Écouter quelqu'un qui traverse une épreuve, sans interrompre ni minimiser sa douleur, est un acte d'amour puissant. Souvent, la personne a surtout besoin d'être entendue, pas de conseils immédiats.",
            "Jésus écoutait avant d'enseigner. Imiter son exemple dans nos relations renforce les liens et ouvre des portes pour partager des principes bibliques au bon moment.",
          ],
          scriptures: [
            {
              text: "« Soyez prompt à écouter, lent à parler. »",
              ref: "Jacques 1:19",
            },
          ],
        },
        {
          title: "Les petits services qui comptent",
          paragraphs: [
            "Porter des courses pour une personne âgée, garder des enfants pour des parents épuisés, aider à déménager : ces services renforcent les liens dans la congrégation et reflètent l'amour de Jéhovah.",
            "Galates 6:10 nous invite à faire le bien « surtout envers ceux qui appartiennent à la famille de la foi ». Commencer par notre congrégation, puis élargir notre aide quand c'est possible.",
          ],
          scriptures: [
            {
              text: "« Faisons le bien à tous, surtout à ceux qui appartiennent à la famille de la foi. »",
              ref: "Galates 6:10",
            },
          ],
          list: {
            title: "Idées d'amour pratique",
            items: [
              "Envoyer une carte ou un message encourageant.",
              "Proposer concrètement son aide, pas seulement « appeler si besoin ».",
              "Féliciter sincèrement les efforts d'autrui.",
            ],
          },
        },
        {
          title: "Encourager celui qui est découragé",
          paragraphs: [
            "Une parole sincère, une carte, un message peuvent changer la journée de quelqu'un qui se sent découragé. Paul a exhorté à « réconforter ceux qui sont abattus ». Nous ne savons pas toujours l'impact qu'un geste simple peut avoir.",
            "Observer autour de nous qui semble fatigué, isolé ou triste, puis agir avec discrétion et affection, c'est imiter l'amour de Jéhovah au quotidien.",
          ],
          scriptures: [
            {
              text: "« Réconfortez ceux qui sont abattus, soutenez les faibles, soyez longanimes envers tous. »",
              ref: "1 Thessaloniciens 5:14",
            },
          ],
          question:
            "Quel acte concret d'amour allez-vous poser cette semaine pour quelqu'un de votre entourage ?",
        },
      ]
    ),
    questions: studyQuestions("Amour au quotidien", [
      "Que signifie aimer « en action et en vérité » ?",
      "Pourquoi écouter est-il un acte d'amour puissant ?",
      "Quels petits services renforcent les liens dans la congrégation ?",
      "Comment encourager concrètement quelqu'un de découragé ?",
    ]),
  },

  "creation-awake-miracle": {
    blocks: buildRichArticle(
      "La complexité de la vie dépasse ce que le hasard pourrait produire. Voyons comment l'ADN, les cellules et l'univers finement réglé pointent vers un Concepteur intelligent.",
      [
        {
          title: "Une complexité qui défie le hasard",
          paragraphs: [
            "L'ADN contient des instructions précises, comparables à une bibliothèque de plusieurs volumes, dans chaque cellule de notre corps. Cette information codée ne peut pas s'expliquer par le seul hasard — elle suppose une source intelligente.",
            "Les biologistes observent des systèmes incroyablement complexes : la photosynthèse, le système immunitaire, la reproduction cellulaire. Chacun fonctionne avec une précision qui évoque un concepteur, non une accumulation d'accidents.",
          ],
          scriptures: [
            {
              text: "« Car ses productions visibles, depuis la création du monde, nous permettent de percevoir clairement son pouvoir éternel et sa divinité. »",
              ref: "Romains 1:20",
            },
          ],
        },
        {
          title: "Un univers finement réglé",
          paragraphs: [
            "Les constantes physiques de l'univers — gravité, forces atomiques — sont réglées avec une précision qui permet la vie. Un léger changement rendrait l'existence impossible. Cette « réglage fin » intrigue les scientifiques honnêtes.",
            "La science observe et décrit ; elle ne peut pas expliquer l'origine de la vie sans postuler un commencement. La Bible répond simplement et profondément : « Au commencement, Dieu créa les cieux et la terre. »",
          ],
          scriptures: [
            {
              text: "« Au commencement, Dieu créa les cieux et la terre. »",
              ref: "Genèse 1:1",
            },
          ],
        },
        {
          title: "La conscience et la moralité",
          paragraphs: [
            "L'évolution sans concepteur ne peut pas expliquer la conscience, le sens moral ni l'apparition soudaine de formes de vie complexes dans le registre fossile. Ces réalités suggèrent un Créateur qui a doté l'humanité de qualités uniques.",
            "Reconnaître un Créateur n'empêche pas d'apprécier la science. Au contraire, étudier la création nous rapproche de celui qui l'a conçue avec sagesse et amour.",
          ],
          scriptures: [
            {
              text: "« Élevons les yeux et voyons qui a créé ces choses. »",
              ref: "Ésaïe 40:26",
            },
          ],
          list: {
            title: "Ce que la création nous révèle",
            items: [
              "La puissance et la sagesse de Jéhovah.",
              "Son amour pour la beauté et l'ordre.",
              "Sa volonté de voir l'humanité prospérer sur la terre.",
            ],
          },
        },
        {
          title: "Honorer le Concepteur",
          paragraphs: [
            "Reconnaître Jéhovah comme Créateur implique de respecter sa création et de vivre selon ses normes morales. Il a un dessein pour l'humanité et la terre — un dessein que nous découvrons en étudiant sa Parole.",
            "Observer la beauté de la nature — un coucher de soleil, une fleur, un enfant qui naît — peut devenir une occasion de remercier Jéhovah et de méditer sur sa grandeur.",
          ],
          scriptures: [
            {
              text: "« Les cieux racontent la gloire de Dieu ; la grande étendue proclame l'œuvre de ses mains. »",
              ref: "Psaume 19:1",
            },
          ],
          question:
            "Quel aspect de la création vous rappelle le plus la sagesse et l'amour de Jéhovah ?",
        },
      ]
    ),
    questions: studyQuestions("La vie, un miracle", [
      "Pourquoi la complexité de l'ADN suggère-t-elle un Concepteur ?",
      "Que nous enseigne le « réglage fin » de l'univers ?",
      "Comment la science et la foi en un Créateur peuvent-elles coexister ?",
      "Comment honorer Jéhovah en observant sa création ?",
    ]),
  },

  "creation-wt-createur": {
    blocks: buildRichArticle(
      "Jéhovah est le Grand Créateur. Voyons comment croire en la création nous aide à reconnaître les limites des théories qui excluent un Créateur.",
      [
        {
          title: "Le Créateur des extrémités de la terre",
          paragraphs: [
            "Jéhovah est appelé le « Créateur des extrémités de la terre ». Sa puissance créative est sans limite, mais il utilise aussi la sagesse et l'amour dans tout ce qu'il fait. Chaque créature reflète une parcelle de sa grandeur.",
            "Reconnaître Jéhovah comme Créateur n'est pas un acte de foi aveugle. Les productions visibles de sa création nous permettent de percevoir son pouvoir éternel et sa divinité.",
          ],
          scriptures: [
            {
              text: "« Ne le sais-tu pas ? Ne l'as-tu pas entendu ? Jéhovah, le Créateur des extrémités de la terre, ne se fatigue pas et ne se lasse pas. »",
              ref: "Ésaïe 40:28",
            },
          ],
        },
        {
          title: "La leçon de Job",
          paragraphs: [
            "Job 38 à 41 présente Jéhovah rappelant à Job la grandeur de la création : constellations, animaux, cycles de la nature. Face à cette immensité, Job a reconnu sa petitesse et sa confiance a grandi.",
            "Quand nous méditons sur la création, nous aussi pouvons ressentir la même humilité et la même confiance. Jéhovah qui a créé l'univers peut certainement nous aider dans nos difficultés quotidiennes.",
          ],
          scriptures: [
            {
              text: "« Où étais-tu quand je posais les fondations de la terre ? Dis-le, si tu as de l'intelligence. »",
              ref: "Job 38:4",
            },
          ],
        },
        {
          title: "Les limites de l'évolution sans concepteur",
          paragraphs: [
            "L'évolution sans concepteur ne peut pas expliquer l'origine de la vie, la conscience, la moralité ni l'apparition soudaine de formes complexes dans le registre fossile. Ces questions restent ouvertes pour les scientifiques les plus honnêtes.",
            "La Bible offre une réponse cohérente : un Dieu puissant et sage a créé toutes choses selon leurs sortes. Cette vision donne un sens à la vie et à l'avenir promis par Jéhovah.",
          ],
          scriptures: [
            {
              text: "« Dieu créa les grands animaux marins et toute créature vivante qui se meut, que les eaux foisonnent selon leurs sortes. »",
              ref: "Genèse 1:21",
            },
          ],
          list: {
            title: "Honorer le Créateur",
            items: [
              "Respecter la vie et la création de Jéhovah.",
              "Vivre selon ses normes morales.",
              "Remercier Jéhovah pour ce qu'il a fait et promis.",
            ],
          },
        },
        {
          title: "Un dessein pour l'humanité",
          paragraphs: [
            "Honorer le Créateur, c'est reconnaître qu'il a un dessein pour l'humanité et la terre. Il n'a pas créé la terre « simplement pour rien » — il veut qu'elle soit habitée par des humains heureux sous son Royaume.",
            "Comprendre cela renforce notre espérance et notre motivation à servir Jéhovah. Nous ne sommes pas le produit du hasard, mais des créatures aimées d'un Père céleste.",
          ],
          scriptures: [
            {
              text: "« Car voici ce que Jéhovah a dit, celui qui a créé les cieux, le Dieu qui a formé la terre et l'a faite, celui qui l'a solidement établie : “Je ne l'ai pas créée simplement pour rien, je l'ai faite pour qu'elle soit habitée.” »",
              ref: "Ésaïe 45:18",
            },
          ],
          question:
            "Comment méditer sur la création renforce-t-elle votre confiance en Jéhovah ?",
        },
      ]
    ),
    questions: studyQuestions("Jéhovah, le Grand Créateur", [
      "Que nous apprend le titre « Créateur des extrémités de la terre » ?",
      "Comment le discours de Jéhovah à Job nous affecte-t-il ?",
      "Pourquoi croire en la création donne-t-il un sens à la vie ?",
      "Quel dessein Jéhovah a-t-il pour la terre et l'humanité ?",
    ]),
  },

  "paix-wt-interieure": {
    blocks: buildRichArticle(
      "La paix du monde dépend des circonstances. Voyons comment la paix de Jéhovah peut exister même quand tout va mal autour de nous.",
      [
        {
          title: "Une paix qui ne dépend pas des circonstances",
          paragraphs: [
            "La paix du monde dépend de facteurs extérieurs : guerre, économie, santé. La paix de Jéhovah peut exister même quand tout va mal autour de nous. Jésus l'a promise à ses disciples : « Je vous laisse la paix. »",
            "Cette paix ne signifie pas l'absence de problèmes. Elle signifie une confiance profonde que Jéhovah contrôle la situation et agira au bon moment selon sa sagesse.",
          ],
          scriptures: [
            {
              text: "« Je vous laisse la paix, je vous donne ma paix. Je ne vous la donne pas comme le monde la donne. »",
              ref: "Jean 14:27",
            },
          ],
        },
        {
          title: "La prière qui apaise",
          paragraphs: [
            "Philippiens 4:6, 7 lie la paix à la prière : ne pas s'inquiéter de tout, mais présenter nos demandes à Dieu avec actions de grâces. Ensuite, « la paix de Dieu surpasse toute pensée » et garde nos cœurs.",
            "Cette paix ne vient pas de la résolution immédiate de nos problèmes, mais de la confiance que Jéhovah entend, comprend et agit. Prier sincèrement transforme notre état d'esprit.",
          ],
          scriptures: [
            {
              text: "« Ne vous inquiétez de rien, mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, accompagnées de actions de grâces. »",
              ref: "Philippiens 4:6, 7",
            },
          ],
        },
        {
          title: "Accepter la volonté de Jéhovah",
          paragraphs: [
            "Accepter la volonté de Jéhovah ne signifie pas renoncer à agir. Cela signifie reconnaître qu'il voit plus loin que nous et que sa sagesse est supérieure à la nôtre. Jésus a prié : « Que ta volonté se fasse, non la mienne. »",
            "Cette soumission libère de l'anxiété liée au contrôle. Nous faisons notre part, puis nous confions l'issue à Jéhovah. C'est un chemin vers la paix intérieure.",
          ],
          scriptures: [
            {
              text: "« Que ta volonté se fasse, non la mienne. »",
              ref: "Luc 22:42",
            },
          ],
          list: {
            title: "Cultiver la paix intérieure",
            items: [
              "Méditer sur des versets encourageants chaque jour.",
              "Remplacer les pensées négatives par des promesses bibliques.",
              "Remercier Jéhovah avant de présenter ses demandes.",
            ],
          },
        },
        {
          title: "Aimer la loi de Jéhovah",
          paragraphs: [
            "Psaume 119:165 dit que ceux qui aiment la loi de Jéhovah ont une grande paix. Méditer sur sa Parole, appliquer ses principes et chercher à lui plaire apaisent le cœur et orientent la vie.",
            "La paix intérieure se cultive. C'est une discipline qui demande de la persévérance, mais Jéhovah bénit ceux qui cherchent sa paix avec sincérité.",
          ],
          scriptures: [
            {
              text: "« Grande paix ont ceux qui aiment ta loi ; pour eux, il n'y a pas de pierre d'achoppement. »",
              ref: "Psaume 119:165",
            },
          ],
          question:
            "Quel verset ou quelle promesse pouvez-vous méditer pour apaiser votre cœur cette semaine ?",
        },
      ]
    ),
    questions: studyQuestions("Paix intérieure", [
      "En quoi la paix de Jéhovah diffère-t-elle de la paix du monde ?",
      "Comment la prière apporte-t-elle la paix selon Philippiens 4:6, 7 ?",
      "Que signifie accepter la volonté de Jéhovah ?",
      "Comment aimer la loi de Jéhovah favorise-t-il la paix ?",
    ]),
  },

  "paix-awake-anxiete": {
    blocks: buildRichArticle(
      "L'anxiété touche de plus en plus de personnes. Voyons des solutions bibliques qui fonctionnent : limiter les inquiétudes, demander de l'aide et structurer sa journée.",
      [
        {
          title: "Comprendre l'anxiété",
          paragraphs: [
            "L'anxiété touche jeunes et adultes. Ce n'est pas un signe de faiblesse spirituelle, mais un défi à gérer avec sagesse. Jéhovah comprend nos limites et ne nous rejette pas quand nous sommes inquiets.",
            "L'anxiété excessive nous pousse à imaginer le pire sans agir avec sagesse. La Bible propose une autre voie : confier nos soucis à Jéhovah et vivre un jour à la fois.",
          ],
          scriptures: [
            {
              text: "« Lance-toi sur lui le fardeau qui te pèse, et il te soutiendra. »",
              ref: "Psaume 55:22",
            },
          ],
        },
        {
          title: "Ne pas s'inquiéter du lendemain",
          paragraphs: [
            "Jésus a dit de ne pas nous inquiéter du lendemain. Cela ne veut pas dire ne pas planifier, mais éviter de tourner en boucle sur des scénarios catastrophes improbables. Chaque jour a assez de sa propre difficulté.",
            "Fixer des priorités claires — étude, prière, service, repos — donne un cadre qui réduit le sentiment de chaos. Des objectifs modestes et réalisables apaisent l'esprit.",
          ],
          scriptures: [
            {
              text: "« Ne vous inquiétez pas pour le lendemain ; le lendemain s'inquiétera de lui-même. »",
              ref: "Matthieu 6:34",
            },
          ],
        },
        {
          title: "Demander de l'aide",
          paragraphs: [
            "Demander de l'aide professionnelle en complément du soutien spirituel est une décision responsable quand l'anxiété devient envahissante. Jéhovah utilise parfois des moyens pratiques pour nous aider.",
            "Parler à un parent, un ancien ou un ami spirituel de confiance allège aussi le fardeau. Isoler nos inquiétudes aggrave souvent la situation. Partager ouvre la porte à un soutien concret.",
          ],
          scriptures: [
            {
              text: "« Portez les fardeaux les uns des autres, et ainsi vous remplirez la loi du Christ. »",
              ref: "Galates 6:2",
            },
          ],
          list: {
            title: "Réduire l'anxiété au quotidien",
            items: [
              "Limiter l'exposition aux nouvelles anxiogènes.",
              "Structurer la journée autour de priorités spirituelles.",
              "Pratiquer la gratitude en notant trois choses positives.",
            ],
          },
        },
        {
          title: "Remplacer l'inquiétude par la confiance",
          paragraphs: [
            "Remplacer les pensées négatives par la méditation sur des versets encourageants est une discipline qui se cultive. Philippiens 4:8 invite à penser à ce qui est vrai, honorable, juste et aimable.",
            "Jéhovah promet sa paix à ceux qui lui font confiance. Cette paix ne supprime pas toujours les problèmes, mais elle nous garde au milieu d'eux.",
          ],
          scriptures: [
            {
              text: "« Tout ce qui est vrai, tout ce qui est honorable, tout ce qui est juste, tout ce qui est chaste, tout ce qui est aimable, tout ce qui mérite de bonnes paroles, toute vertu et toute chose digne de louange, continuez à penser à ces choses. »",
              ref: "Philippiens 4:8",
            },
          ],
          question:
            "Quelle habitude pourriez-vous adopter cette semaine pour réduire votre anxiété ?",
        },
      ]
    ),
    questions: studyQuestions("Anxiété", [
      "Pourquoi l'anxiété n'est-elle pas un signe de faiblesse spirituelle ?",
      "Que signifie ne pas s'inquiéter du lendemain selon Jésus ?",
      "Quand et comment demander de l'aide pour l'anxiété ?",
      "Comment Philippiens 4:8 aide-t-il à remplacer les pensées négatives ?",
    ]),
  },

  "propheties-wt-fil": {
    blocks: buildRichArticle(
      "Les prophéties bibliques forment un fil conducteur dans l'histoire. Voyons comment Daniel, Ésaïe et l'Apocalypse s'harmonisent pour révéler le dessein de Jéhovah.",
      [
        {
          title: "Un fil conducteur, pas des énigmes",
          paragraphs: [
            "Les prophéties bibliques ne sont pas des énigmes sans sens. Elles forment un fil conducteur qui relie la Genèse à l'Apocalypse et éclaire notre époque. Comprendre ce fil renforce notre confiance en Jéhovah.",
            "Jéhovah a voulu que nous comprenions son dessein. Il n'a pas caché son plan dans un langage obscur, mais a utilisé des symboles cohérents que nous pouvons comparer aux Écritures.",
          ],
          scriptures: [
            {
              text: "« Car la prophétie n'est jamais venue par la volonté de l'homme, mais des hommes ont parlé de la part de Dieu, poussés par l'esprit saint. »",
              ref: "2 Pierre 1:21",
            },
          ],
        },
        {
          title: "Daniel — empires et Royaume",
          paragraphs: [
            "Daniel 2 et 7 décrivent une succession d'empires et l'établissement du Royaume de Dieu. Ces prophéties se sont accomplies avec une précision remarquable, confirmant que Jéhovah connaît l'avenir.",
            "La statue de Daniel 2 et les bêtes de Daniel 7 s'harmonisent avec d'autres prophéties bibliques. Cette cohérence n'est pas le fruit du hasard — elle révèle un auteur unique derrière toute la Bible.",
          ],
          scriptures: [
            {
              text: "« Le Dieu des cieux fera surgir un royaume qui ne sera jamais détruit. »",
              ref: "Daniel 2:44",
            },
          ],
        },
        {
          title: "Les prophéties messianiques",
          paragraphs: [
            "Les prophéties messianiques — naissance à Bethléem, mort sur le bois, résurrection — se sont accomplies en Jésus, confirmant qu'il est le Christ promis. Plus de 300 détails ont été annoncés des siècles à l'avance.",
            "Cette précision nous aide à faire confiance aux prophéties encore en cours d'accomplissement, notamment celles concernant les derniers jours et le Royaume de Dieu.",
          ],
          scriptures: [
            {
              text: "« Toi, Bethléem Éphrata, tu es trop petit pour figurer parmi les milliers de Juda. De toi sortira celui qui dominera en Israël. »",
              ref: "Michée 5:2",
            },
          ],
          list: {
            title: "Étudier les prophéties avec sagesse",
            items: [
              "Comparer les Écritures avec les Écritures.",
              "Identifier les thèmes principaux plutôt que chaque détail.",
              "Rester humbles face à ce qui n'est pas encore clair.",
            ],
          },
        },
        {
          title: "Confiance et vigilance",
          paragraphs: [
            "Étudier les prophéties avec humilité nous protège des interprétations fantaisistes et renforce notre confiance en Jéhovah. Il contrôle l'histoire et mène son dessein à son accomplissement.",
            "Connaître les prophéties nous rend aussi vigilants : nous reconnaissons les signes des derniers jours et ajustons nos priorités en conséquence.",
          ],
          scriptures: [
            {
              text: "« Heureux celui qui lit à haute voix et ceux qui entendent les paroles de la prophétie et gardent les choses qui y sont écrites. »",
              ref: "Apocalypse 1:3",
            },
          ],
          question:
            "Quelle prophétie biblique renforce le plus votre confiance en l'avenir promis par Jéhovah ?",
        },
      ]
    ),
    questions: studyQuestions("Les prophéties", [
      "Comment les prophéties forment-elles un fil conducteur dans la Bible ?",
      "Que nous enseignent Daniel 2 et 7 sur le Royaume de Dieu ?",
      "Comment les prophéties messianiques confirment-elles que Jésus est le Christ ?",
      "Pourquoi étudier les prophéties avec humilité est-il important ?",
    ]),
  },

  "propheties-livre-apocalypse": {
    blocks: buildRichArticle(
      "Le livre de l'Apocalypse utilise des symboles puissants. Voyons comment les comprendre à la lumière d'autres prophéties et ce qu'ils révèlent pour notre époque.",
      [
        {
          title: "Des symboles qui s'harmonisent",
          paragraphs: [
            "L'Apocalypse utilise des symboles — bêtes, montagnes, fleuves — qui s'alignent sur d'autres livres prophétiques, notamment Daniel et Ésaïe. Comparer ces livres nous aide à comprendre le message global.",
            "Plutôt que de chercher un sens caché dans chaque détail, l'approche biblique consiste à identifier les thèmes principaux : le conflit entre le Royaume et les puissances corrompues, le sort des fidèles, la victoire finale de Jéhovah.",
          ],
          scriptures: [
            {
              text: "« Il m'envoya un ange pour me montrer les choses qui doivent arriver bientôt. »",
              ref: "Apocalypse 1:1",
            },
          ],
        },
        {
          title: "Le conflit entre deux royaumes",
          paragraphs: [
            "L'Apocalypse décrit un conflit entre le Royaume de Dieu et les puissances corrompues de ce monde. Ce conflit n'est pas nouveau — il a commencé dans le jardin d'Éden — mais il atteint son paroxysme dans les derniers jours.",
            "Comprendre ce conflit nous aide à situer les événements actuels dans le cadre du dessein de Jéhovah. Rien n'échappe à son contrôle.",
          ],
          scriptures: [
            {
              text: "« Le royaume du monde est devenu le royaume de notre Seigneur et de son Christ, et il régnera pour toujours et toujours. »",
              ref: "Apocalypse 11:15",
            },
          ],
        },
        {
          title: "Réconfort pour les fidèles",
          paragraphs: [
            "L'Apocalypse réconforte : malgré les événements troublants des derniers jours, le dessein de Dieu avance et aboutira à la paix éternelle. Les fidèles seront protégés et récompensés.",
            "Les images de la nouvelle Jérusalem, de la terre paradisiaque et de l'absence de mort nourrissent notre espérance. L'Apocalypse ne doit pas être lue avec crainte, mais avec confiance en la victoire de Jéhovah.",
          ],
          scriptures: [
            {
              text: "« Il essuiera toute larme de leurs yeux, et la mort ne sera plus. »",
              ref: "Apocalypse 21:4",
            },
          ],
          list: {
            title: "Thèmes principaux de l'Apocalypse",
            items: [
              "La victoire finale du Royaume de Dieu.",
              "La protection des fidèles pendant la grande tribulation.",
              "La promesse d'une terre paradisiaque sans mort ni douleur.",
            ],
          },
        },
        {
          title: "Lire avec confiance",
          paragraphs: [
            "Cette étude complète une compréhension globale des prophéties et aide à lire l'Apocalypse avec confiance plutôt qu'avec crainte. Jéhovah a voulu que ce livre soit compris par ses serviteurs.",
            "Méditer sur les promesses de l'Apocalypse renforce notre motivation à rester fidèles jusqu'à la fin. La victoire appartient à Jéhovah — et à tous ceux qui lui restent loyaux.",
          ],
          scriptures: [
            {
              text: "« Voici, je viens bientôt, et ma rémunération est avec moi, pour rendre à chacun selon ce qu'il a fait. »",
              ref: "Apocalypse 22:12",
            },
          ],
          question:
            "Quelle promesse de l'Apocalypse vous encourage le plus à rester fidèle ?",
        },
      ]
    ),
    questions: studyQuestions("L'Apocalypse", [
      "Comment les symboles de l'Apocalypse s'harmonisent-ils avec Daniel ?",
      "Quel conflit principal l'Apocalypse décrit-elle ?",
      "Pourquoi l'Apocalypse est-elle un livre de réconfort ?",
      "Comment lire l'Apocalypse avec confiance plutôt qu'avec crainte ?",
    ]),
  },

  "decouverte-wt-premiers-pas": {
    blocks: buildRichArticle(
      "Beaucoup possèdent une Bible sans savoir par où commencer. Voyons comment faire ses premiers pas : choisir un livre, prier et noter une idée par lecture.",
      [
        {
          title: "Commencer simplement",
          paragraphs: [
            "La clé pour débuter est la simplicité : de courts passages, lus avec attention, valent mieux que des pages parcourues sans réflexion. Jéhovah valorise l'humilité et la sincérité, pas la connaissance encyclopédique immédiate.",
            "Ne pas se décourager si tout n'est pas clair dès le départ. Comprendre la Bible est un voyage. Chaque séance apporte quelque chose de nouveau, même modeste.",
          ],
          scriptures: [
            {
              text: "« Comme un nouveau-né, désirez ardemment le lait non adultéré de la parole, afin de grandir grâce à lui. »",
              ref: "1 Pierre 2:2",
            },
          ],
        },
        {
          title: "Par où commencer ?",
          paragraphs: [
            "Les récits de la Genèse — création, Noé, Abraham — posent les bases de toute la Bible. L'évangile de Marc offre une introduction rapide et vivante à la vie de Jésus. Les Psaumes réconfortent et enseignent la prière.",
            "Choisir un livre qui correspond à nos questions actuelles aide à maintenir l'intérêt. Quelqu'un qui cherche du réconfort peut commencer par les Psaumes ; quelqu'un qui veut connaître Jésus peut lire Marc ou Jean.",
          ],
          scriptures: [
            {
              text: "« Ton instruction est une lampe pour mes pieds, et une lumière pour mon sentier. »",
              ref: "Psaume 119:105",
            },
          ],
          list: {
            title: "Livres recommandés pour débuter",
            items: [
              "Genèse — les fondements du dessein de Jéhovah.",
              "Marc — la vie de Jésus, concis et dynamique.",
              "Psaumes — prière, réconfort et méditation.",
            ],
          },
        },
        {
          title: "Prier avant et après",
          paragraphs: [
            "Avant d'ouvrir la Bible, une prière brève demandant à Jéhovah de nous aider à comprendre prépare le cœur. Après la lecture, se demander « Qu'ai-je appris sur Jéhovah ? » ancre le sens.",
            "Jéhovah promet de donner la sagesse à ceux qui la demandent libéralement. Cette promesse s'applique particulièrement aux débutants sincères.",
          ],
          scriptures: [
            {
              text: "« Si l'un d'entre vous manque de sagesse, qu'il la demande à Dieu, qui donne à tous libéralement. »",
              ref: "Jacques 1:5",
            },
          ],
        },
        {
          title: "Noter une idée par séance",
          paragraphs: [
            "Tenir un carnet avec une idée par séance crée une trace de progrès encourageante. En quelques semaines, relire ces notes montre combien on a déjà appris — et motive à continuer.",
            "Cette habitude transforme la lecture passive en étude active. Même une phrase retenue peut changer notre journée ou notre attitude face à une épreuve.",
          ],
          scriptures: [
            {
              text: "« Toutes les choses qui ont été écrites d'avance ont été écrites pour notre instruction. »",
              ref: "Romains 15:4",
            },
          ],
          question:
            "Quel livre biblique allez-vous lire en premier, et quelle question allez-vous vous poser ?",
        },
      ]
    ),
    questions: studyQuestions("Premiers pas dans la Bible", [
      "Pourquoi vaut-il mieux lire peu mais avec attention ?",
      "Quels livres bibliques recommanderiez-vous à un débutant ?",
      "Comment la prière enrichit-elle la lecture biblique ?",
      "Pourquoi noter une idée par séance est-il utile ?",
    ]),
  },

  "decouverte-brochure-bible": {
    blocks: buildRichArticle(
      "La Bible a changé des millions de vies. Voyons pourquoi elle est fiable, comment elle a été transmise et ce qu'elle promet pour l'avenir.",
      [
        {
          title: "Un livre unique",
          paragraphs: [
            "La Bible a été écrite sur plus de 1 600 ans par une quarantaine d'hommes de cultures différentes. Pourtant un seul auteur en inspire le contenu : Jéhovah. Cette harmonie à travers les siècles est remarquable.",
            "Aucun autre livre ancien ne présente une cohérence comparable sur un dessein aussi vaste : de la création à la promesse d'un Royaume éternel de paix.",
          ],
          scriptures: [
            {
              text: "« Car la prophétie n'est jamais venue par la volonté de l'homme, mais des hommes ont parlé de la part de Dieu, poussés par l'esprit saint. »",
              ref: "2 Pierre 1:21",
            },
          ],
        },
        {
          title: "Une transmission fiable",
          paragraphs: [
            "Les manuscrits anciens confirment que le texte biblique a été transmis avec soin. Les découvertes archéologiques corroborent souvent les récits bibliques — villes, coutumes, événements historiques.",
            "La Bible n'est pas un livre de contes. Ses récits historiques ont été vérifiés par des découvertes qui confirment l'existence de personnages, de lieux et d'événements qu'elle mentionne.",
          ],
          scriptures: [
            {
              text: "« La parole de notre Dieu durera éternellement. »",
              ref: "Ésaïe 40:8",
            },
          ],
        },
        {
          title: "Un message pour l'avenir",
          paragraphs: [
            "La Bible ne se contente pas de raconter le passé : elle annonce un avenir radieux — un Royaume qui apportera la paix, la justice et la vie éternelle sur la terre. Cette espérance a transformé des vies dans toutes les époques.",
            "Des millions de personnes ont trouvé dans la Bible des réponses à leurs questions les plus profondes : Pourquoi souffrons-nous ? Que devient-on après la mort ? Y a-t-il un espoir pour l'humanité ?",
          ],
          scriptures: [
            {
              text: "« Heureux les humains qui ont un esprit de pauvreté, car le royaume des cieux leur appartient. »",
              ref: "Matthieu 5:3",
            },
          ],
          list: {
            title: "Ce que la Bible promet",
            items: [
              "La fin de la souffrance et de la mort.",
              "La résurrection de nos proches aimés.",
              "Une terre paradisiaque sous le Royaume de Dieu.",
            ],
          },
        },
        {
          title: "Commencer à l'étudier",
          paragraphs: [
            "Lire la Bible avec un guide ou un cours biblique accélère la compréhension, mais chacun peut commencer seul avec prière et humilité. Jéhovah bénit ceux qui cherchent sincèrement à le connaître.",
            "Chaque page lue avec un cœur ouvert peut changer une vie. La Bible n'est pas réservée aux savants — elle est pour tous ceux qui désirent la vérité.",
          ],
          scriptures: [
            {
              text: "« Cela signifie la vie éternelle : qu'ils te connaissent, toi, le seul vrai Dieu, et celui que tu as envoyé, Jésus Christ. »",
              ref: "Jean 17:3",
            },
          ],
          question:
            "Quelle promesse biblique vous incite le plus à approfondir votre étude ?",
        },
      ]
    ),
    questions: studyQuestions("La Bible, un livre qui change des vies", [
      "Pourquoi la Bible est-elle unique malgré ses nombreux rédacteurs ?",
      "Comment la transmission et l'archéologie confirment-elles sa fiabilité ?",
      "Quelles promesses bibliques touchent le plus les gens aujourd'hui ?",
      "Comment pourriez-vous commencer ou approfondir votre étude de la Bible ?",
    ]),
  },

  "predication-wt-courage": {
    blocks: buildRichArticle(
      "La timidité est fréquente, même chez des serviteurs expérimentés. Voyons comment surmonter la peur, préparer une introduction simple et se rappeler que Jéhovah soutient ceux qui le servent.",
      [
        {
          title: "La timidité — un défi courant",
          paragraphs: [
            "Moïse doutait de sa capacité à parler ; Jéhovah lui a donné de l'aide et un collaborateur. Nous ne sommes pas seuls non plus quand nous ressentons de la peur en prédication. Jéhovah voit nos efforts sincères.",
            "La timidité n'est pas un défaut moral. C'est un défi à surmonter avec préparation, prière et pratique. Chaque serviteur fidèle a connu un premier pas difficile.",
          ],
          scriptures: [
            {
              text: "« Jéhovah te dit : “Qui a fait la bouche de l'homme ?” N'est-ce pas moi, Jéhovah ? Maintenant va, et moi, je serai avec ta bouche. »",
              ref: "Exode 4:11, 12",
            },
          ],
        },
        {
          title: "Se préparer réduit l'anxiété",
          paragraphs: [
            "Préparer à l'avance une phrase d'introduction et une question réduit l'anxiété. On peut la répéter calmement avant de sonner à une porte ou d'aborder quelqu'un en public.",
            "Une préparation modeste — une Écriture, une question ouverte, une publication — suffit. L'objectif n'est pas un discours parfait, mais une conversation sincère.",
          ],
          scriptures: [
            {
              text: "« Que mes paroles soient toujours pleines de grâce, assaisonnées de sel, pour que vous sachiez comment répondre à chacun. »",
              ref: "Colossiens 4:6",
            },
          ],
          list: {
            title: "Avant une sortie de service",
            items: [
              "Prier pour le courage et la sagesse.",
              "Préparer une introduction et une question.",
              "Se rappeler que nous offrons une bonne nouvelle.",
            ],
          },
        },
        {
          title: "Se concentrer sur le message",
          paragraphs: [
            "Se concentrer sur le message plutôt que sur soi-même change la perspective : nous offrons une espérance précieuse, pas un jugement. La personne a besoin d'entendre la bonne nouvelle du Royaume.",
            "Quand nous pensons à ce que la personne peut gagner — une espérance, une amitié avec Jéhovah — notre propre peur diminue. L'amour pour autrui motive le courage.",
          ],
          scriptures: [
            {
              text: "« Car je n'ai pas honte de la bonne nouvelle. »",
              ref: "Romains 1:16",
            },
          ],
        },
        {
          title: "Célébrer les petites victoires",
          paragraphs: [
            "Après chaque sortie, noter une conversation encourageante — même brève — renforce la confiance pour la prochaine fois. Jéhovah bénit les efforts honnêtes, même modestes.",
            "Le courage se construit pas à pas. Un « bonjour » sincère, une brochure laissée avec gentillesse, une question posée avec respect : tout compte aux yeux de Jéhovah.",
          ],
          scriptures: [
            {
              text: "« Soyez courageux, et que votre cœur soit fort, vous tous qui espérez en Jéhovah. »",
              ref: "Psaume 31:24",
            },
          ],
          question:
            "Quelle introduction simple allez-vous préparer pour votre prochaine sortie de service ?",
        },
      ]
    ),
    questions: studyQuestions("Trouver le courage de parler", [
      "Comment l'exemple de Moïse encourage-t-il les timides ?",
      "Pourquoi la préparation réduit-elle l'anxiété en prédication ?",
      "Comment se concentrer sur le message change-t-il la perspective ?",
      "Quelle « petite victoire » récente pouvez-vous célébrer ?",
    ]),
  },

  "predication-awake-conversations": {
    blocks: buildRichArticle(
      "Les meilleures conversations en prédication ressemblent à un échange, pas à un monologue. Voyons comment écouter, poser des questions ouvertes et relier la Parole aux préoccupations des gens.",
      [
        {
          title: "Une conversation, pas un monologue",
          paragraphs: [
            "Les meilleures conversations en prédication ressemblent à un échange sincère. Poser « Qu'est-ce qui vous préoccupe en ce moment ? » ou « Qu'en pensez-vous ? » ouvre des portes que un discours préparé ne peut pas ouvrir.",
            "Jésus posait des questions avant d'enseigner. Imiter son approche rend la prédication plus naturelle et plus efficace.",
          ],
          scriptures: [
            {
              text: "« Donnez-leur toujours une raison de ce que vous espérez, mais faites-le avec douceur et profond respect. »",
              ref: "1 Pierre 3:15",
            },
          ],
        },
        {
          title: "Écouter avec respect",
          paragraphs: [
            "Écouter sans interrompre montre du respect. Souvent les gens veulent d'abord être compris avant d'entendre une réponse biblique. Une écoute attentive prépare le cœur à recevoir un message.",
            "Reformuler ce que la personne a dit — « Si je comprends bien, vous ressentez... » — lui montre qu'on l'a vraiment entendue. Cette technique simple renforce la confiance.",
          ],
          scriptures: [
            {
              text: "« Soyez prompt à écouter, lent à parler. »",
              ref: "Jacques 1:19",
            },
          ],
        },
        {
          title: "Relier la Parole aux préoccupations",
          paragraphs: [
            "Relier un verset ou une publication à ce que la personne vient de partager rend le message vivant. Jésus faisait ainsi avec la Samaritaine — il a parlé d'eau vive parce qu'elle venait chercher de l'eau.",
            "Observer ce qui touche la personne — famille, souffrance, incertitude sur l'avenir — nous aide à choisir l'Écriture ou le thème le plus pertinent pour elle.",
          ],
          scriptures: [
            {
              text: "« Celui qui boira de l'eau que je lui donnerai n'aura jamais soif. »",
              ref: "Jean 4:14",
            },
          ],
          list: {
            title: "Questions ouvertes utiles",
            items: [
              "« Qu'est-ce qui vous préoccupe en ce moment ? »",
              "« Selon vous, pourquoi y a-t-il tant de souffrance ? »",
              "« Qu'espérez-vous pour l'avenir ? »",
            ],
          },
        },
        {
          title: "Partir avec dignité",
          paragraphs: [
            "Si la personne n'est pas intéressée, partir avec dignité laisse une impression positive pour une prochaine visite. Insister ou argumenter agressivement n'honore pas Jéhovah ni la personne.",
            "Une attitude calme et respectueuse, même face à un refus, peut semer une graine qui germera plus tard. Jéhovah voit nos efforts et bénit notre conduite.",
          ],
          scriptures: [
            {
              text: "« Que vos paroles soient toujours pleines de grâce, assaisonnées de sel. »",
              ref: "Colossiens 4:6",
            },
          ],
          question:
            "Quelle question ouverte pourriez-vous utiliser lors de votre prochaine conversation ?",
        },
      ]
    ),
    questions: studyQuestions("Conversations en prédication", [
      "Pourquoi une conversation vaut-elle mieux qu'un monologue ?",
      "Comment l'écoute prépare-t-elle le cœur à recevoir un message ?",
      "Comment relier la Parole aux préoccupations de la personne ?",
      "Pourquoi partir avec dignité est-il important ?",
    ]),
  },

  "pionnier-wt-joie": {
    blocks: buildRichArticle(
      "Le service de pionnier demande de l'énergie. Voyons comment garder la joie : éviter l'épuisement, célébrer les victoires et rester concentré sur pourquoi on sert.",
      [
        {
          title: "La joie — un choix à cultiver",
          paragraphs: [
            "Le service de pionnier demande de l'énergie physique et spirituelle. Sans équilibre, la joie peut faiblir. Jéhovah ne demande pas l'impossible — il voit nos efforts sincères et nous aide à tenir.",
            "La joie dans le service ne dépend pas seulement des résultats visibles. Elle vient aussi de savoir qu'on fait la volonté de Jéhovah et qu'on coopère avec son dessein.",
          ],
          scriptures: [
            {
              text: "« Heureux celui qui persévère sous épreuve, car une fois qu'il a été approuvé, il recevra la couronne de la vie. »",
              ref: "Jacques 1:12",
            },
          ],
        },
        {
          title: "Célébrer les petites victoires",
          paragraphs: [
            "Célébrer une bonne conversation, une étude biblique ou une personne retrouvée au service nourrit la motivation mieux que de ne voir que ce qui manque. Jéhovah bénit chaque effort honnête.",
            "Tenir un journal des moments encourageants — une prière exaucée, une personne touchée, un progrès personnel — aide à relire ces victoires dans les périodes difficiles.",
          ],
          scriptures: [
            {
              text: "« Celui qui récolte des dons bénis, récolte aussi pour se bénir lui-même. »",
              ref: "Proverbes 11:25",
            },
          ],
          list: {
            title: "Victoires à célébrer",
            items: [
              "Une conversation sincère, même brève.",
              "Un retour au service après une absence.",
              "Un progrès dans une étude biblique.",
            ],
          },
        },
        {
          title: "L'étude — carburant du service",
          paragraphs: [
            "L'étude personnelle régulière est le carburant du pionnier : sans elle, le service devient mécanique. Même quinze minutes par jour font une différence dans notre motivation et notre capacité à enseigner.",
            "Relier ce qu'on étudie à ce qu'on enseigne rend le service plus vivant. Un verset médité le matin peut enrichir une conversation l'après-midi.",
          ],
          scriptures: [
            {
              text: "« Que la parole du Christ habite en vous abondamment avec toute sagesse. »",
              ref: "Colossiens 3:16",
            },
          ],
        },
        {
          title: "Demander de l'aide",
          paragraphs: [
            "Demander de l'aide à un ancien ou un compagnon de service quand on traverse une période difficile est un signe de sagesse, pas de faiblesse. Jéhovah a organisé sa congrégation pour que nous nous soutenions.",
            "Partager nos difficultés — fatigue, découragement, manque de résultats — ouvre la porte à des conseils précieux et à un soutien fraternel qui restaure la joie.",
          ],
          scriptures: [
            {
              text: "« Portez les fardeaux les uns des autres, et ainsi vous remplirez la loi du Christ. »",
              ref: "Galates 6:2",
            },
          ],
          question:
            "Quelle victoire récente en service pouvez-vous remercier Jéhovah d'avoir permise ?",
        },
      ]
    ),
    questions: studyQuestions("Joie du pionnier", [
      "Pourquoi la joie en service ne dépend-elle pas que des résultats ?",
      "Comment célébrer les petites victoires nourrit-il la motivation ?",
      "Pourquoi l'étude personnelle est-elle essentielle pour le pionnier ?",
      "Quand et comment demander de l'aide en période difficile ?",
    ]),
  },

  "pionnier-brochure-organisation": {
    blocks: buildRichArticle(
      "Un pionnier efficace planifie sa semaine. Voyons comment organiser son temps, fixer des objectifs réalistes et protéger le temps pour la famille et le repos.",
      [
        {
          title: "Planifier pour durer",
          paragraphs: [
            "Un pionnier efficace planifie : quels jours pour le service matinal, quelles après-midis pour les visites, quand étudier et quand se reposer. Sans plan, les heures s'écoulent sans structure.",
            "Planifier n'est pas rigide : c'est prévoir pour que le service, la famille et le repos coexistent harmonieusement sur la durée.",
          ],
          scriptures: [
            {
              text: "« Veillez donc sur votre conduite, en agissant avec sagesse et en rachetant le temps. »",
              ref: "Éphésiens 5:15, 16",
            },
          ],
        },
        {
          title: "Des objectifs réalistes",
          paragraphs: [
            "Des objectifs quotidiens modestes mais constants — par exemple deux heures le matin, une heure l'après-midi — sont plus durables que des journées marathon suivies d'épuisement.",
            "Jéhovah voit nos efforts sincères, pas seulement les chiffres. Mieux vaut un service régulier et joyeux qu'un service intense suivi de découragement.",
          ],
          scriptures: [
            {
              text: "« Que tout se fasse décemment et avec ordre. »",
              ref: "1 Corinthiens 14:40",
            },
          ],
          list: {
            title: "Éléments d'une semaine équilibrée",
            items: [
              "Des plages de service planifiées à l'avance.",
              "Du temps réservé à l'étude personnelle.",
              "Des moments protégés pour la famille et le repos.",
            ],
          },
        },
        {
          title: "Protéger famille et santé",
          paragraphs: [
            "La famille et la santé ne sont pas des obstacles au service : Jéhovah veut que nous prenions soin de notre corps et de nos proches. Un pionnier épuisé ou négligent envers sa famille ne sert pas efficacement.",
            "Inclure la famille dans la planification — quand les enfants dorment, quand le conjoint est disponible — évite les conflits et renforce l'harmonie du foyer.",
          ],
          scriptures: [
            {
              text: "« Celui qui ne prend pas soin des siens, et surtout des membres de sa famille, a renié la foi. »",
              ref: "1 Timothée 5:8",
            },
          ],
        },
        {
          title: "Réévaluer chaque mois",
          paragraphs: [
            "Réévaluer chaque mois ce qui fonctionne permet d'ajuster sans culpabilité. Le but est une vie équilibrée qui honore Jéhovah sur la durée, pas un sprint épuisant.",
            "Parler à un compagnon de service ou un ancien de son organisation peut apporter des idées précieuses. Chaque pionnier a des circonstances différentes — l'important est de trouver ce qui fonctionne pour soi.",
          ],
          scriptures: [
            {
              text: "« Mieux vaut peu accompagné de justice que beaucoup de produits accompagnés d'injustice. »",
              ref: "Proverbes 16:8",
            },
          ],
          question:
            "Comment pourriez-vous ajuster votre planning cette semaine pour plus d'équilibre ?",
        },
      ]
    ),
    questions: studyQuestions("Organiser son temps de pionnier", [
      "Pourquoi planifier est-il essentiel pour un pionnier ?",
      "Comment des objectifs modestes sont-ils plus durables ?",
      "Pourquoi protéger famille et santé honore-t-il Jéhovah ?",
      "Quelle ajustement pourriez-vous faire à votre organisation actuelle ?",
    ]),
  },

  "ecole-wt-enfants": {
    blocks: buildRichArticle(
      "Les enfants de 7 à 12 ans apprennent par l'histoire et l'émotion. Voyons comment les aider à aimer la Bible avec des récits visuels, des questions simples et une participation active.",
      [
        {
          title: "Apprendre par l'histoire",
          paragraphs: [
            "Les enfants retiennent mieux une histoire qu'une leçon abstraite. Lire un récit biblique avec expression — Noé, David, Jésus et les enfants — capte leur attention et ancre le message dans leur mémoire.",
            "Après le récit, demander « Qu'as-tu aimé ? » ou « Que ferait Jéhovah à notre place ? » les implique et développe leur réflexion spirituelle.",
          ],
          scriptures: [
            {
              text: "« Instruis l'enfant selon la voie qu'il doit suivre ; même quand il sera vieux, il ne s'en détournera pas. »",
              ref: "Proverbes 22:6",
            },
          ],
        },
        {
          title: "Rendre l'étude vivante",
          paragraphs: [
            "Des dessins, des chansons ou des jeux simples renforcent la mémoire. Demander à l'enfant de dessiner ce qu'il a entendu ou de jouer un personnage du récit rend l'étude amusante et mémorable.",
            "L'application pratique — partager, obéir aux parents, dire la vérité — donne sens au récit et montre que la Bible concerne la vie quotidienne.",
          ],
          scriptures: [
            {
              text: "« Tu les inculqueras à tes fils, et tu en parleras quand tu seras assis dans ta maison. »",
              ref: "Deutéronome 6:6, 7",
            },
          ],
          list: {
            title: "Activités pour les 7-12 ans",
            items: [
              "Dessiner un personnage ou une scène du récit.",
              "Poser une question simple : « Qu'as-tu appris sur Jéhovah ? »",
              "Relier le récit à une situation de la semaine.",
            ],
          },
        },
        {
          title: "Des sessions courtes et régulières",
          paragraphs: [
            "Des sessions courtes — dix à quinze minutes — régulières valent mieux qu'une longue leçon rare. La constance construit l'habitude et montre à l'enfant que la Bible compte dans la vie de la famille.",
            "Choisir un moment fixe — après le dîner, le samedi matin — aide l'enfant à anticiper et à s'engager volontairement.",
          ],
          scriptures: [
            {
              text: "« Que le petit enfant vienne à moi ; ne l'en empêchez pas, car le royaume de Dieu appartient à de tels. »",
              ref: "Marc 10:14",
            },
          ],
        },
        {
          title: "Montrer l'exemple",
          paragraphs: [
            "Montrer que nous aimons aussi la Bible — en l'étudiant nous-mêmes, en parler avec enthousiasme — est le meilleur exemple pour un enfant. Nos actions parlent plus fort que nos paroles.",
            "Quand un enfant voit ses parents méditer sur la Parole et en appliquer les principes, il comprend que la Bible n'est pas réservée aux adultes en réunion, mais pour toute la vie.",
          ],
          scriptures: [
            {
              text: "« Soyez imitateurs de moi, tout comme je le suis du Christ. »",
              ref: "1 Corinthiens 11:1",
            },
          ],
          question:
            "Quel récit biblique pourriez-vous partager avec un enfant cette semaine ?",
        },
      ]
    ),
    questions: studyQuestions("Aider les enfants à aimer la Bible", [
      "Pourquoi les récits sont-ils efficaces pour enseigner aux enfants ?",
      "Quelles activités rendent l'étude biblique vivante pour les 7-12 ans ?",
      "Pourquoi des sessions courtes et régulières sont-elles préférables ?",
      "Comment votre exemple influence-t-il l'amour de l'enfant pour la Bible ?",
    ]),
  },

  "ecole-awake-famille": {
    blocks: buildRichArticle(
      "Le culte familial n'a pas besoin d'être parfait. Voyons des idées concrètes pour des moments spirituels en famille sans pression ni culpabilité.",
      [
        {
          title: "Simple et sincère",
          paragraphs: [
            "Le culte familial n'a pas besoin d'être long ni parfait. Une lecture, une prière commune et un compliment sincère peuvent suffire. Jéhovah valorise l'effort des parents qui veulent lui ressembler.",
            "Si une séance est ratée — enfants agités, manque de temps — recommencer le lendemain sans culpabilité. La constance compte plus que la perfection.",
          ],
          scriptures: [
            {
              text: "« Moi et ma maison, nous servirons Jéhovah. »",
              ref: "Josué 24:15",
            },
          ],
        },
        {
          title: "Des enfants acteurs",
          paragraphs: [
            "Laisser les enfants lire un verset ou poser une question les rend acteurs du culte familial. Même une réponse maladroite mérite d'être encouragée — l'important est la participation.",
            "Adapter le contenu à l'âge : un récit pour les plus jeunes, une question de réflexion pour les adolescents. Chaque membre peut contribuer à sa manière.",
          ],
          scriptures: [
            {
              text: "« Tu les inculqueras à tes fils, et tu en parleras quand tu seras assis dans ta maison. »",
              ref: "Deutéronome 6:6, 7",
            },
          ],
          list: {
            title: "Idées sans pression",
            items: [
              "Lire un passage court à tour de rôle.",
              "Demander « Qu'as-tu retenu ? » à chacun.",
              "Terminer par une prière où chacun peut participer.",
            ],
          },
        },
        {
          title: "Ancrer l'habitude",
          paragraphs: [
            "Choisir un moment fixe — après le dîner, le samedi matin — aide à ancrer l'habitude dans le rythme familial. Quand le culte familial devient une routine attendue, la résistance diminue.",
            "Protéger ce moment des distractions — téléphones éteints, télévision coupée — montre aux enfants que parler de Jéhovah est une priorité.",
          ],
          scriptures: [
            {
              text: "« Nous ne cesserons pas d'instruire et d'écouter les paroles de Jéhovah. »",
              ref: "Néhémie 8:13",
            },
          ],
        },
        {
          title: "Créer des souvenirs positifs",
          paragraphs: [
            "Associer le culte familial à des moments agréables — un goûter après, une promenade en parlant de Jéhovah — crée des souvenirs positifs. Les enfants retiendront l'atmosphère autant que le contenu.",
            "Jéhovah voit le cœur des parents qui essaient. Même un culte familial imparfait mais sincère honore Celui qui aime les familles.",
          ],
          scriptures: [
            {
              text: "« Pères, ne provoquez pas vos enfants au courroux, mais élevez-les dans la discipline et les remontrances de Jéhovah. »",
              ref: "Éphésiens 6:4",
            },
          ],
          question:
            "Quel moment fixe pourriez-vous choisir pour un culte familial régulier ?",
        },
      ]
    ),
    questions: studyQuestions("Culte familial", [
      "Pourquoi le culte familial n'a-t-il pas besoin d'être parfait ?",
      "Comment impliquer activement les enfants ?",
      "Quel moment conviendrait pour ancrer l'habitude chez vous ?",
      "Comment créer des souvenirs positifs autour du culte familial ?",
    ]),
  },

  "vie-wt-quotidien": {
    blocks: buildRichArticle(
      "La vraie foi se voit dans les détails du quotidien. Voyons comment aligner nos choix — école, travail, loisirs — sur les normes bibliques quand personne ne regarde.",
      [
        {
          title: "La foi visible dans les détails",
          paragraphs: [
            "La vraie foi se voit dans les détails : rendre la monnaie, respecter les règles, parler avec respect même sous pression. Ce n'est pas ce qu'on affiche en public qui compte le plus, mais ce qu'on fait quand personne ne regarde.",
            "Jéhovah voit tout. Vivre avec intégrité en privé renforce notre confiance en lui et prépare nos compagnons de service à nous faire confiance aussi.",
          ],
          scriptures: [
            {
              text: "« Que votre manière de vivre soit exempte d'amour de l'argent, et soyez content de ce que vous avez. »",
              ref: "Hébreux 13:5",
            },
          ],
        },
        {
          title: "Une conduite qui parle",
          paragraphs: [
            "Les collègues et camarades de classe observent notre conduite. Une attitude calme, honnête et respectueuse peut ouvrir des conversations sur la foi sans que nous ayons à forcer le sujet.",
            "Refuser de tricher à un examen, de mentir pour éviter des ennuis ou de parler mal de quelqu'un en son absence : ces choix silencieux témoignent de notre amour pour Jéhovah.",
          ],
          scriptures: [
            {
              text: "« Que votre lumière brille ainsi devant les hommes, pour qu'ils voient vos bonnes œuvres et glorifient votre Père qui est aux cieux. »",
              ref: "Matthieu 5:16",
            },
          ],
          list: {
            title: "Choix quotidiens qui honorent Jéhovah",
            items: [
              "Honnêteté au travail et à l'école.",
              "Respect envers tous, même sous pression.",
              "Modération dans les loisirs et les écrans.",
            ],
          },
        },
        {
          title: "L'intégrité en ligne",
          paragraphs: [
            "Les réseaux sociaux testent notre intégrité : ce qu'on partage, comment on répond aux critiques, le temps qu'on y consacre. Notre conduite en ligne doit refléter nos valeurs autant que notre vie réelle.",
            "Avant de publier ou de répondre, demandons : est-ce vrai, respectueux et digne d'un serviteur de Jéhovah ? Cette pause simple évite bien des regrets.",
          ],
          scriptures: [
            {
              text: "« Que votre parole soit toujours pleine de grâce, assaisonnée de sel. »",
              ref: "Colossiens 4:6",
            },
          ],
        },
        {
          title: "Commencer la journée avec Jéhovah",
          paragraphs: [
            "Demander chaque matin « Comment puis-je honorer Jéhovah aujourd'hui ? » oriente les petites décisions avant les grandes tentations. Cette prière simple donne une direction à toute la journée.",
            "Méditer brièvement sur un verset le matin peut nous aider concrètement dans une situation tendue l'après-midi. La Parole de Jéhovah éclaire le chemin pas à pas.",
          ],
          scriptures: [
            {
              text: "« Confie-toi en Jéhovah de tout ton cœur, et ne t'appuie pas sur ta propre intelligence. »",
              ref: "Proverbes 3:5",
            },
          ],
          question:
            "Quelle décision quotidienne allez-vous aligner sur les normes bibliques cette semaine ?",
        },
      ]
    ),
    questions: studyQuestions("Vivre sa foi au quotidien", [
      "Pourquoi la foi se voit-elle surtout dans les détails ?",
      "Comment une conduite intègre peut-elle ouvrir des conversations sur la foi ?",
      "Comment l'intégrité s'applique-t-elle en ligne ?",
      "Comment une prière matinale oriente-t-elle la journée ?",
    ]),
  },

  "vie-awake-adolescents": {
    blocks: buildRichArticle(
      "L'adolescence combine changements physiques, pression des pairs et quête d'identité. Voyons comment tenir bon et garder ses priorités spirituelles.",
      [
        {
          title: "Une étape normale, des défis réels",
          paragraphs: [
            "L'adolescence combine changements physiques, pression des pairs et quête d'identité. C'est normal de se poser des questions — la Bible offre des réponses solides sur qui nous sommes et où nous allons.",
            "Jéhovah comprend les défis des jeunes. Il ne demande pas la perfection, mais la sincérité et l'effort pour rester fidèle malgré la pression.",
          ],
          scriptures: [
            {
              text: "« Souviens-toi de ton Grand Créateur dans les jours de ta jeunesse. »",
              ref: "Ecclésiaste 12:1",
            },
          ],
        },
        {
          title: "Choisir ses amis",
          paragraphs: [
            "Choisir des amis qui respectent nos valeurs protège mieux que tenter de plaire à tout le monde. 1 Corinthiens 15:33 avertit : les mauvaises fréquentations corrompent les bonnes habitudes.",
            "Un vrai ami nous encourage à servir Jéhovah, pas à abandonner nos principes pour être accepté. Mieux vaut peu d'amis fidèles que beaucoup de compagnies qui nous entraînent vers le mal.",
          ],
          scriptures: [
            {
              text: "« Ne vous y trompez pas : les mauvaises compagnies corrompent les bonnes habitudes. »",
              ref: "1 Corinthiens 15:33",
            },
          ],
          list: {
            title: "Signes d'une bonne amitié",
            items: [
              "Respecte vos limites et vos valeurs.",
              "Vous encourage dans le service de Jéhovah.",
              "Vous écoute sans vous juger durement.",
            ],
          },
        },
        {
          title: "Études et service — pas l'un contre l'autre",
          paragraphs: [
            "Les études et le service peuvent coexister : organiser son temps évite de sacrifier l'un pour l'autre. Jéhovah bénit ceux qui le mettent en premier tout en remplissant leurs responsabilités.",
            "Fixer des priorités claires — étude biblique, devoirs scolaires, service — réduit le sentiment de chaos et aide à tenir bon sous pression.",
          ],
          scriptures: [
            {
              text: "« Recherchez d'abord le royaume et sa justice, et toutes ces autres choses vous seront ajoutées. »",
              ref: "Matthieu 6:33",
            },
          ],
        },
        {
          title: "Demander de l'aide — signe de maturité",
          paragraphs: [
            "Parler à un parent ou un ancien de confiance quand on traverse une période difficile n'est pas une faiblesse — c'est une preuve de maturité. Isoler ses problèmes aggrave souvent la situation.",
            "Jéhovah a placé des personnes expérimentées dans la congrégation pour nous guider. Accepter leur aide honore Celui qui les a désignées.",
          ],
          scriptures: [
            {
              text: "« Celui qui écoute la discipline manifeste de l'intelligence, et celui qui trouve de la sagesse est heureux. »",
              ref: "Proverbes 16:20",
            },
          ],
          question:
            "À qui pourriez-vous parler si la pression des pairs devient difficile à gérer ?",
        },
      ]
    ),
    questions: studyQuestions("Adolescents sous pression", [
      "Pourquoi l'adolescence est-elle une période de défis particuliers ?",
      "Comment le choix des amis protège-t-il vos priorités spirituelles ?",
      "Comment concilier études, service et vie sociale ?",
      "Pourquoi demander de l'aide est-il un signe de maturité ?",
    ]),
  },
};
