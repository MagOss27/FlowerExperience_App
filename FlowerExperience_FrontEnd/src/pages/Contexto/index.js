// ./src/contexts/MeuContexto.jsMagnus
import React, { createContext, useContext, useState } from 'react';

const MeuContexto = createContext();

export function MeuContextoProvider({ children }) {

    const [plantFavoritos, setPlantFavoritos] = useState([])


    let plantInfo = [

        {
            titulo: "Zamioculca",
            sobre: "A Zamioculca é uma planta originária da Tanzânia, na África. Ela pertence à família das Araceae e seu nome científico é Zamioculcas Zamiifolia.",
            luz: "O recomendado é não deixar a planta em sol direto, para evitar que as folhas fiquem amareladas. As zamioculcas preferem a luz difusa ou o sol da manhã, e sobrevivem muito bem em ambientes internos.",
            agua: "Recomenda-se regá-la de duas a três vezes na semana, no máximo. No inverno, apenas uma rega por semana já é suficiente. Isso acontece porque a zamioculca tem rizoma.",
            fertilizante: "Para oferecer minerais adequados para a planta, utilize fertilizante NPK, que fornece os principais nutrientes para a saúde da planta. A sigla do fertilizante NPK é uma relação dos três nutrientes: Nitrogênio, Fósforo e Potássio.",
            origem: "A Zamioculca é uma planta originária da Tanzânia, na África.",
            imagensUm: require('./../../../src/plantas/ZAMIOCULCA1.png'),
            imagensDois: require('./../../../src/plantas/ZAMIOCULCA2.png'),
            id: 0
        },
        {
            titulo: "Dipladenia",
            sobre: "A dipladênia, também conhecida como mandevilla, é uma flor exuberante e encantadora que atrai a atenção com sua beleza e versatilidade.",
            luz: "A flor dipladênia precisa receber bastante luz indireta, pois os raios diretos podem queimar na superfície.",
            agua: "No verão, quando a terra seca mais rápido, é importante regar a planta dipladênia pelo menos 3 vezes por semana. Nas outras estações você pode intercalar a rega de 7 a 10 dias.",
            fertilizante: "O melhor substrato para usar na dipladênia em vaso é a combinação de turfa preta, que é um material fóssil originado da decomposição de restos vegetais com fibra de coco ou areia de rio, divididos em partes iguais.",
            origem: "Originária das regiões tropicais e subtropicais da América do Sul.",
            imagensUm: require('./../../../src/plantas/DIPLADENIA1.png'),
            imagensDois: require('./../../../src/plantas/DIPLADENIA2.png'),
            id: 1
        },
        {
            titulo: "Peperômia",
            sobre: "As peperômias são plantas famosas por serem extremamente fortes e não exigirem muita manutenção.",
            luz: "A peperômia é considerada uma planta de meia-luz, ou seja, um pouco de luz é sempre bem-vindo, mas exagerar não. Evite colocá-las em um lugar na casa em que o sol bate a maior parte do dia.",
            agua: "Por ser uma planta facilmente adaptável ao ambiente, os cuidados não são os mais difíceis: regá-las três vezes por semana já é o bastante.",
            fertilizante: "Quanto à manutenção, faça adubações a cada três meses. Recomendamos fertilizantes orgânicos, que é granulado, de liberação lenta, nutre a planta, age por mais tempo e facilita o enraizamento.",
            origem: "Originária das regiões sul americanos, especificamente no Brasil.",
            imagensUm: require('./../../../src/plantas/PEPEROMIA1.png'),
            imagensDois: require('./../../../src/plantas/PEPEROMIA2.png'),
            id: 2
        },
        {
            titulo: "Espada de São Jorge",
            sobre: "Originária da África, a espada de São Jorge, cujo nome científico é Sansevieria trifasciata, é considerada uma planta protetora, como a arruda e a aroeira, por exemplo.",
            luz: "A espada de São Jorge é uma planta bastante resistente e que sobrevive em áreas externas com sol e também em áreas internas com menos incidência de luz e vento.",
            agua: "Basicamente, para saber como cuidar de uma espada de São Jorge, basta regar de uma a duas vezes por semana.",
            fertilizante: "A adubação deve ser feita uma vez ao ano para a reposição dos nutrientes.",
            origem: "As espadas de São Jorge são originárias da África.",
            imagensUm: require('./../../../src/plantas/ESPADA1.png'),
            imagensDois: require('./../../../src/plantas/ESPADA2.png'),
            id: 3
        },
        {
            titulo: "Samambaia",
            sobre: "As Samambaias são vegetais vasculares membros do táxon das Pteridófitas, possuem folhas verdadeiras, se reproduzem através de esporos e não produzem sementes ou flores.",
            luz: "Uma boa iluminação é essencial para que a samambaia cresça saudável. O recomendado é cultivá-la em locais à meia sombra. Assim ela poderá receber a energia dos raios do sol sem correr o risco de queimar suas folhas.",
            agua: "A samambaia é uma espécie que precisa do solo sempre úmido para absorver os nutrientes. Por isso, o recomendado é fazer a rega da planta diariamente, a menos que o amante de jardinagem perceba que a terra está próxima de ficar encharcada.",
            fertilizante: "Além de um solo úmido, as samambaias precisam que o substrato seja rico em material orgânico e nutrientes. A melhor opção é adquirir produtos que contenham fibra de coco na fórmula, pois ajuda a deixar o terreno mais drenável.",
            origem: "Tem sua origem na Oceania, com ocorrência na Ásia, Austrália e Madagascar.",
            imagensUm: require('./../../../src/plantas/SAMAMBAIA1.png'),
            imagensDois: require('./../../../src/plantas/SAMAMBAIA2.png'),
            id: 4
        },
        {
            titulo: "Costela-de-Adão",
            sobre: "A Costela-de-Adão é uma planta inconfundível, charmosa e encantadora para se ter no jardim, quintal, dentro de casa ou em qualquer outro ambiente.",
            luz: "A espécie, por ser adaptável, pode ser cultivada em diferentes espaços. Porém, como gosta de luz, o local escolhido precisa ter claridade. Espaços com meia sombra e iluminação indireta são uma boa opção.",
            agua: "Regue a sua muda duas vezes na semana por conta das folhas mais largas, ela tem mais espaço para a evaporação da água.",
            fertilizante: "A Costela-de-Adão precisa de um substrato fresco e com boa drenagem para se desenvolver. A troca de vaso todo ano é recomendada, uma vez que ajuda a prolongar a vida da muda. Já o tamanho do recipiente deve ser levemente maior que a planta.",
            origem: "É originária do México e também de outras regiões tropicais do continente americano.",
            imagensUm: require('./../../../src/plantas/COSTELA1.png'),
            imagensDois: require('./../../../src/plantas/COSTELA2.png'),
            id: 5
        },

        {
            titulo: "Orquídea",
            sobre: "Orquídeas são todas as plantas que compõem a família Orchidaceae, pertencente à ordem Asparagales, uma das maiores famílias de plantas existentes.",
            luz: "É importante que ela receba sua dose diária. No entanto, não se deve colocar os vasos em lugares onde o sol é direto. Será melhor optar por cômodos bem iluminados, mas em que o sol não entre de forma muito agressiva. Isso pode matar sua orquídea em pouco tempo.",
            agua: "O excesso de água pode ser mortal. Tente regar as orquídeas apenas uma vez por semana. O ideal é refrescar suas raízes colocando-as em um prato com água e, depois de um tempo, removê-las. Isso será mais do que suficiente para que sua flor cresça saudável.",
            fertilizante: "A melhor forma de aplicar o adubo líquido é juntando-o à água de rega. Podemos fertilizar, nas doses indicadas na embalagem, duas vezes por mês, ou colocar sempre fertilizante em todas as regas, mas usando metade da dose indicada na embalagem do produto.",
            origem: "A orquídea é originária do continente americano, no entanto, foi levada para a Europa no século XVIII por barcos da Marinha britânica.",
            imagensUm: require('./../../../src/plantas/ORQUIDEA1.png'),
            imagensDois: require('./../../../src/plantas/ORQUIDEA2.png'),
            id: 6
        },

        {
            titulo: "Antúrio",
            sobre: "Anthurium é um género botânico pertencente à família Araceae. O antúrio é uma planta tradicional no paisagismo. Fez parte de uma moda antiga e teve seu brilho renovado recentemente.",
            luz: "Esta é uma planta de meia-sombra. Ou seja, sol em excesso pode prejudicá-la, já que prefere áreas com luz indireta.",
            agua: "Por ser uma planta tropical, o antúrio gosta de muita umidade! Por isso, a rega deve ocorrer com frequência: três vezes por semana durante as estações mais quentes e duas em períodos mais frios.",
            fertilizante: "Geralmente, a planta já é comercializada com o substrato ideal. Mantenha a nutrição da terra utilizando fertilizantes a cada três meses e sua planta ficará bela e saudável!",
            origem: "A origem dos Antúrios é a América Central e do Sul.",
            imagensUm: require('./../../../src/plantas/ANTURIO1.png'),
            imagensDois: require('./../../../src/plantas/ANTURIO2.png'),
            id: 7
        },
        {
            titulo: "Bouganville",
            sobre: "No Brasil, diversas espécies desse grupo de plantas ainda recebem o nome de bouganville, três-marias, sempre-lustrosa, santa-rita, ceboleiro, roseiro, roseta, riso, pataguinha, pau-de-roseira e flor-de-papel.",
            luz: "Essa planta precisa de lugares com bastante sol. Ou seja, independentemente do local que você escolher, é importante que a espécie receba bastante iluminação.",
            agua: "A bougainville não gosta de água em excesso, especialmente na raiz. Por isso, o ideal é usar um regador para ter um controle maior da quantidade colocada no vaso ou no solo.",
            fertilizante: "Essa é uma planta que deve ser adubada utilizando fertilizantes NPK 4-14-8. Aplicar o adubo de 6 em 6 meses é o bastante para estimular a floração da bougainville.",
            origem: "Nativo do sudeste e nordeste brasileiro, além da Bolívia, Peru e Argentina.",
            imagensUm: require('./../../../src/plantas/BOUGANVILLE1.png'),
            imagensDois: require('./../../../src/plantas/BOUGANVILLE2.png'),
            id: 8
        },
        {
            titulo: "Begônia",
            sobre: "A begônia vermelha é uma das plantas ornamentais mais comercializadas no mercado pelo seu significado e cor intensa. Essa variedade de begônia",
            luz: "A temperatura ideal para uma begônia é de 20° a 28 graus, por isso evite colocar a planta em locais com vento e frio.",
            agua: "Entre uma rega e outra espere o solo secar. Nunca encharque a planta ou molhe as folhas e flores e o solo precisa ter uma boa drenagem para não reter água.",
            fertilizante: "Durante a estação de crescimento (na Primavera e Verão), fertiliza a planta 1 vez por mês com adubo líquido 20-20-20. Não coloque a begônia num vaso demasiado grande pois a floração é mais intensa quando a planta sente as raízes um pouco apertadas no vaso.",
            origem: "As begónias provêm principalmente da América tropical, de florestas úmidas ou nichos de umidade das savanas.",
            imagensUm: require('./../../../src/plantas/BEGONIA1.png'),
            imagensDois: require('./../../../src/plantas/BEGONIA2.png'),
            id: 9
        },

    ]

    const removeObjectById = (objectId) => {
        // Encontrar o índice do objeto com o id correspondente no array plantInfo
        const index = plantFavoritos.findIndex(obj => obj.id === objectId);
        // Verificar se o objeto com o id foi encontrado
        if (index !== -1) {
            // Criar uma cópia do array plantFavoritos para evitar a modificação direta
            const updatedObjects = [...plantFavoritos];
            // Remover o objeto com o id correspondente do array atualizado
            updatedObjects.splice(index, 1);
            // Atualizar o estado de plantFavoritos com o novo array sem o objeto removido
            setPlantFavoritos([...updatedObjects]);
        }

    };


    ////Adicionar Uma nova Planta dentro do Feed\\\\
    let lastId = 9

    const createObject = ({ obj }) => {

        const id = lastId + 1

        const {
            titulo,
            sobre,
            luz,
            agua,
            fertilizante,
            origem,
            imagensUm,
            imagensDois
        } = obj

        plantInfo.push({
            id: id,
            titulo,
            sobre,
            agua,
            luz,
            fertilizante,
            origem,
            imagensDois,
            imagensUm
        })

        lastId++
    }


    ////Comando para Pesquisar Planta na Tela de Feed\\\\
    const [plantPesquisa, setPlantPesquisa] = useState()

    return (
        <MeuContexto.Provider value={{ plantInfo, plantPesquisa, setPlantPesquisa, plantFavoritos, removeObjectById, createObject }}>
            {children}
        </MeuContexto.Provider>
    );

}

export function useMeuContexto() {
    return useContext(MeuContexto);
}