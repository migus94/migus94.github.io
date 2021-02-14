// fichero js/controlador.js
/**
 * Biblioteca "casera" para hacer el "binding" del
 * os menús con las diferentes vistas de la APP.
 * Para usarla, basta con poner el mismo id a la entrada 
 * del menú que a su vista asociada, pero cambiando el prefijo, 
 * el el menú debe ser menu_AAA y en la vista panel_AAA.
 */
// las llaves significan que se crea un objeto
$.controller = {};
//propiedades del objeto
//este atributo contiene el panel activo en cada moneto
$.controller.active_panel = "";
// este panel tiene contiene el panel inicial y por defecto
$.controller.panel_inicial = "";

/**
 * Esta función gestiona qué panel está activo en cada momento (sólo puede
 * haber uno)
 * @param {type} panel_name el panel a mostrar al arancar la APP
 */
$.controller.activate = function (panel_name) {
    // console.log("cambio old::"+$.controller.active_panel+" new::"+panel_name);
    $($.controller.active_panel).fadeOut();
    $(panel_name).fadeIn();
    $.controller.active_panel = panel_name;
};


/**
 * Función para crear todos los "onClick" de los menús y
 * asociarlos con cada panel correspondiente.
 */
$.controller.init = function (panel_inicial) {
    console.log("Panel inicial=" + panel_inicial);
    $('[id^="menu_"]').each(function () {
        var $this = $(this);
        var menu_id = $this.attr('id');
        var panel_id = menu_id.replace('menu_', 'panel_');

        $("#" + menu_id).click(function () {
            $.controller.activate("#" + panel_id);
        });
        // console.log("id_menu::" + menu_id + "  id_panel" + panel_id);
    });
    $(".panel").hide();
    $(panel_inicial).show();
    $.controller.active_panel = panel_inicial;
    $.controller.panel_inicial = panel_inicial;
}

/**
 * Esta funcion nos lleva al panel inical. oculta el panel activo en 
 * ese momento y muestra solo el panel inicial que se indico en 
 * $.controller.index()
 */
$.controller.index = function() {
    $.controller.activate($.controller.panel_inicial) 
}