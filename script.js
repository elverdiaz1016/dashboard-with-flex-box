const listCard = [
    {
        id: 1,
        imgHtml: "images/html.svg",
        imgAlt: "Icon Html",
        tittleCourse: "Hmtl",
        nameAutor: "Elver Riaño Diaz",
        analogTime: "6h 30min",
        qualification: "4,9"
    },
    {
        id: 2,
        imgHtml: "images/css3.svg",
        imgAlt: "Icon Css",
        tittleCourse: "Css",
        nameAutor: "Elver Riaño Diaz",
        analogTime: "10h 15min",
        qualification: "4,9"
    },
    {
        id: 3,
        imgHtml: "images/javascript.svg",
        imgAlt: "Icon Js",
        tittleCourse: "JS",
        nameAutor: "Elver Riaño Diaz",
        analogTime: "10h 15min",
        qualification: "4,9"
    },
    {
        id: 4,
        imgHtml: "images/csharp.svg",
        imgAlt: "Icon c#",
        tittleCourse: "C#",
        nameAutor: "Elver Riaño Diaz",
        analogTime: "10h 15min",
        qualification: "4,9"
    },
    {
        id: 5,
        imgHtml: "images/flutter.svg",
        imgAlt: "Icon Flutter",
        tittleCourse: "Flutter",
        nameAutor: "Elver Riaño Diaz",
        analogTime: "10h 15min",
        qualification: "4,9"
    },
]


if ("content" in document.createElement("template")) {

    const cardContainer = document.querySelector("#cardContainer");
    const template = document.querySelector("#cardTechnology");

    listCard.forEach(card => {
        const clone = template.content.cloneNode(true);

        let img = clone.querySelector("img");
        img.src = card.imgHtml;
        img.alt = card.imgAlt;

        let tittleCourse = clone.querySelector(".text-info__tittle");
        tittleCourse.textContent = card.tittleCourse;

        let nameAutor = clone.querySelector(".text-info__name");
        nameAutor.textContent = card.nameAutor;

        let analogTime = clone.querySelector(".time__analog-time span");
        analogTime.textContent = card.analogTime;

        let qualification = clone.querySelector(".qualification__text-qualification span");
        qualification.textContent = card.qualification;

        cardContainer.appendChild(clone);
    });
};

