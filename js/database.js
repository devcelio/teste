import { PREFIX } from "./utils/page-utils.js";


export const COMPANY = {
    nome: "Produtos Euvira",
    telefone: "(83) 996049709",
    social: {
        instagram: "https://www.instagram.com/produtos_euvira?igsh=bWt1MzF2eGQ1ODlr",
    },
    endereco: "",
    logo: "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png",
}


export const PRODUTOS = [
    {
        slug: "alcool-em-gel-lavanda",
        nome: "Álcool em gel",
        fragrancia: "Lavanda",
        descricao:
            "Álcool em gel perfumado com fragrância suave de lavanda. Proporciona higienização eficaz enquanto deixa as mãos com um aroma agradável.",
        composição: [
            "Ethanol (Álcool 70%), Glycerin (Glicerina)",
            "Prunus Amygdalus Oil (Óleo de Amêndoas)",
            "Tocopheryl Acetate (Vitamina E)",
            "Lavandula Angustifolia Oil (Óleo Essencial de Lavanda)",
            "Water (Água)",
        ],
        indicacoes:
            "Higieniza as mãos de forma eficaz, eliminando impurezas enquanto hidrata e perfuma suavemente.",
        modoUso:
            "Aplique uma pequena quantidade nas mãos e esfregue até a completa absorção. Dispensa o uso de água e toalha.",
        advertencias: [
            "Produto inflamável. Manter longe do fogo e de fontes de calor.",
            "Uso externo. Evitar contato com os olhos.",
            "Em caso de irritação, suspender o uso e procurar orientação médica.",
        ],
        observacoes: "Manter fora do alcance de crianças e animais",
        imagem: PREFIX + "/assets/product-0-main.jfif",
    },
];