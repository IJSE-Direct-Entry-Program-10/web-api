$("h2").remove();

// const newElm = $("<li>Sixth</li>");
// $("ul").append(newElm);

$("ul").append($("<li>Sixth</li>"));
$("ul").append("<li>Sixth</li>");
$("ul").prepend($("<li>Zero</li>"));
$("ul").prepend("<li>Zero</li>");

$("body").append($("<p>I am a paragraph</p>"));
$("body").append("<p>I am a paragraph</p>");

$("h1").after($("<div><button>Okay</button></div>"));
$("h1").after("<div><button>Okay</button></div>");
$("ul").before($("<div><button>Okay</button></div>"));
$("ul").before("<div><button>Okay</button></div>");

$("h3").replaceWith(`<h1>${$("h3").text()}</h1>`);
$(`<input type="text"> <button>Click</button>`)
    .replaceAll("button");

$("table tbody").empty();
$("table tbody").append(`
    <tr>
        <td>S001</td>
        <td>Kasun</td>
    </tr>`);

// $($("p")[0]).remove();
$("p").each((index, p) => {
        $(p).append("<button>OK</button>")
    }
);