const listCard = [
    {
        id: 1,
        imgHtml: "/images/html.svg",
        imgAlt: "Icon Html",
        tittleCourse: "hmtl",
        nameAutor: "Elver Riaño Diaz",
        analogTime: "6h 30min",
        qualification: "4,9"
    },
    {
        id: 2,
        imgHtml: "/images/css3.svg",
        imgAlt: "Icon Css",
        tittleCourse: "Css",
        nameAutor: "Elver Riaño Diaz",
        analogTime: "10h 15min",
        qualification: "4,9"
    },
    {
        id: 3,
        imgHtml: "/images/javascript.svg",
        imgAlt: "Icon Js",
        tittleCourse: "JS",
        nameAutor: "Elver Riaño Diaz",
        analogTime: "10h 15min",
        qualification: "4,9"
    },
    {
        id: 4,
        imgHtml: "/images/csharp.svg",
        imgAlt: "Icon c#",
        tittleCourse: "C#",
        nameAutor: "Elver Riaño Diaz",
        analogTime: "10h 15min",
        qualification: "4,9"
    },
    {
        id: 5,
        imgHtml: "/images/flutter.svg",
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




















    // const clone2 = template.content.cloneNode(true);
    // const clone3 = template.content.cloneNode(true);
    // const clone4 = template.content.cloneNode(true);

    // let img2 = clone2.querySelectorAll("img");
    // img2[0].src = "/images/html.svg";
    // img2[0].alt = "Logo html";

    // img2[1].src = "/images/watch.svg";
    // img2[1].alt = "icon watch";

    // img2[2].src = "/images/fire.svg";
    // img2[2].alt = "icon fire";

    // let tittleCourse2 = clone2.querySelector(".text-info__tittle");
    // tittleCourse2.textContent = "Html";

    // let nameAutor2 = clone2.querySelector(".text-info__name");
    // nameAutor2.textContent = "Elver Riaño Diaz";

    // let analogTime2 = clone2.querySelector(".time__analog-time span");
    // analogTime2.textContent = "6h 30min";

    // let qualification2 = clone2.querySelector(".qualification__text-qualification span");
    // qualification2.textContent = "4,9";

    // cardContainer.append(clone2);
    // cardContainer.append(clone3);
    // cardContainer.append(clone4);


};