(function (j) {
    j.fn.table = function (arrTitle, arrBody) {
        let list = [];
        list.push('<table>');
        list.push('<thead>');
        list.push('<tr>');
        for (let i = 0; i < arrTitle.length; i++) {
            list.push('<th>');
            list.push(arrTitle[i]);
            list.push('</th>');
        }
        list.push('</tr>');
        list.push('</head>');

        list.push('<tbody>');
        for (let j = 0; j < arrBody.length; j++) {
            list.push('<tr>');
            for (let key in arrBody[j]) {
                list.push('<td>');
                list.push(arrBody[j][key]);
                list.push('</td>');
            }
            list.push('</tr>');
        }

        list.push('</tbody>');

        list.push('</table>');

        this.html(list.join(""));
    };
}(window.jQuery));