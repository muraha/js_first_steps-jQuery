let add = $('.add'); //add button
let del = $('.del'); //del button
let chk = 'input[type="checkbox"]'; //checkbox
let txt = 'input[type="text"]'; //text input
let tab = $('table'); //table



add.on('click', function () {
    let count = $('table tr').length;
    tab.append('<tr class="item"><td><i class="fa fa-sort"></i></td><td><input type="checkbox" /></td><td><input type="text" maxlength="27"></td><td><button class="del"><i class="fa fa-times"></i></button></td></tr>');
    //tabL.attr('id', 'listItem')
})

tab.on('click', chk, function () {
    if ($(this).is(':checked')) {
        $(this).closest('tr').find(txt).css('text-decoration-line', 'line-through');
        $(this).closest('tr').find(txt).css('color', '#8d8d8d');
        $(this).closest('tr').find(txt).prop("disabled", true);
    } else {
        $(this).closest('tr').find(txt).css('text-decoration-line', 'none');
        $(this).closest('tr').find(txt).css('color', '#000');
        $(this).closest('tr').find(txt).prop("disabled", false);
    }
})

tab.on('click', '.del', function () {
    $(this).closest('tr').remove();
})

$("#sortable").sortable({
    containerSelector: 'table',
    itemPath: '> tbody',
    itemSelector: 'tr',
    axis: 'y',
    placeholder: '<tr class="placeholder"/>'
});

