
window.addEventListener("load", function() {
    
    var UIItemProperties = {
            title: "Reserve URL",
            icon: "icon_18.png",
            popup: {href: "popup.html", width: "320px", height: "50px"}
    };
    var RevButton = opera.contexts.toolbar.createItem(UIItemProperties);
    opera.contexts.toolbar.addItem(RevButton);
    }, false);

