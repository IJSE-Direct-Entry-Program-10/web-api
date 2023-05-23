$("table tbody tr:last-child").remove();
$("table tbody tr td:first-child").remove();

$("table tbody td").each((i, elm)=> {
    if ($(elm).text().trim()){
        $(elm).addClass('piece');
        $(elm).find("span").draggable({
            revert: 'invalid'
        });
    }
});