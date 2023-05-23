console.log($("h1").css("color"));
$("h1").css("color", "blue");
$("h1").css("background-color", "yellow");
$("h1").css("padding", "10px");
$("h1").css("text-align", "center");
$("h1").css("border-radius", "10px");

// Web API - > CamelCases
// JQuery  -> Kebab Cases

$("#btn-set-styles").on('click', ()=> {
    // $("h2").addClass("bg")
    //     .addClass("format");

    // $("h2").addClass("bg format");

    $("h2").addClass(['bg', 'format']);
});

$("#btn-check-status").on('click', ()=> {
    if ($("h2").hasClass("bg format")){
        alert("Styles have been applied");
    }else{
        alert("Yet to apply");
    }
});

$("#btn-clear-styles").on('click', ()=> {
    // $("h2").removeClass("bg")
    //     .removeClass("format");

    // $("h2").removeClass("bg format");

    $("h2").removeClass(['bg', 'format']);
});

const btnElm = $("<button>Click Me!</button>");
btnElm.css("font-size", "2rem");
btnElm.css("padding", "10px");
$("h1").after(btnElm);

// Attach
btnElm.on('click', ()=> alert("Okay1"));
btnElm.on('click', handleClick);
btnElm.on('click', ()=> alert("Okay3"));

function handleClick(){alert("OKay2")};

// Detach
btnElm.off('click', handleClick);

$("h2").on("click", 
    ()=> $("#btn-set-styles").trigger('click'));

//========================================

const inputElm = $('div > input[type="text"]');

inputElm.on('keypress', (eventData)=> {
    if (eventData.key === 'Enter'){
        $("#btn-add").trigger('click');
    }
});

$('#btn-add').on('click', ()=> {
    const text = inputElm.val().trim();
    if (!text){
        inputElm.trigger('select');
        return;
    }
    $("ol").append(`<li>${text}<button>Delete</button></li>`);
    inputElm.val('');
    inputElm.trigger('focus');
});

/* Delegated Event Handlers in jQuery */
$("ol").on("click", "li button", (eventData)=> {
    $(eventData.target).parents("li").remove();
});

const thirdElm = $("body > ul > li:nth-child(3)");
thirdElm.css('background-color', 'yellow');

thirdElm.parents("body")
.find("div > ul > li:last-child")
.before("<li>Something</li>");

// const fileChooser = $("#file-chooser");

// $("#btn-load-image").on('click', ()=> {
//     fileChooser.trigger('click');
// });

// fileChooser.on('input', ()=> {
//     console.log(fileChooser[0].files[0]);
//     $("img").attr('src', fileChooser[0].files[0])
// });

$("#btn-load-image").on('click', ()=> {
    $('img').attr('src', "https://images.google.lk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
});

$("#btn-clear-image")
.on('click', ()=> $("img").attr('src', ""));














