var SHADOW_ELEMENT_NAME;
(function(elementName) {
    var styleText = [
            'div {',
            '   padding:15px;',
            '   margin:10px;',
            '   font-family:Arial,Helvetica,sans-serif;',
            '   background-color: write;',
            '   box-shadow: 0px 0px 10px green;',
            '   border:dotted 2px green;',
            '   border-radius: 10px;',
            '}',
            'div h1 {',
            '   margin:0px;',
            '   color:green;',
            '   font-size:28pt;',
            '   text-shadow: 0px 0px 50px yellow;',
            '}',
            'div p {',
            '   margin:0px;',
            '   color:darkBlue;',
            '   font-size:10pt;',
            '}'
        ].join('\n'),
        elementTemplate = [
            '<style>#css</style>',
            '<div>',
            '   <h1>#firstName</h1>',
            '   <p>My name is <strong>#name</strong>!</p>',
            '</div>'
        ].join('\n'),
        elementHost = document.querySelectorAll(elementName);

    if (!elementHost) return;

    for (var hIdx = 0; hIdx < elementHost.length; hIdx++) {
        var host = elementHost[hIdx],
            name = host.textContent,
            firstName = name.split(' ')[0],
            elementShadow = host.createShadowRoot();

        elementShadow.innerHTML = elementTemplate
            .replace('#css', styleText)
            .replace('#firstName', firstName)
            .replace('#name', name);
    }
})(SHADOW_ELEMENT_NAME || 'name');