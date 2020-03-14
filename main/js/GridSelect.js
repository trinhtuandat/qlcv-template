$(function () {
    var
        $select = $('#tree-select'),
        options = $select.find('option');

    options.each(function (index, option) {
        var
            $option = $(option),
            level = $option.data('level'),
            content = "";
        for (let i = 1; i < level; i++) {
            content = content + "&emsp;"
        }
        $option.prepend('' + content);
    });

    var
        $select2 = $('#tree-select2'),
        options2 = $select2.find('option');

    options2.each(function (index, option) {
        var
            $option = $(option),
            level = $option.data('level'),
            content = "";
        for (let i = 1; i < level; i++) {
            content = content + "&emsp;"
        }
        $option.prepend('' + content);
    });

})