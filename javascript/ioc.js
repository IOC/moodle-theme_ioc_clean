M.theme_ioc_clean = {};

M.theme_ioc_clean.init = function(Y) {
    Y.one(".navbar").delegate('mouseenter', function(e) {
        if (M.core.actionmenu) {
            $menu = Y.one('.moodle-actionmenu[data-enhance=moodle-core-actionmenu]');
            M.core.actionmenu.instance.showMenu(e, $menu);
        }
    }, '.usermenu');
    Y.one(".navbar").delegate('mouseleave', function(e) {
        if (M.core.actionmenu) {
            M.core.actionmenu.instance.hideMenu();
        }
    }, '.usermenu');
};
