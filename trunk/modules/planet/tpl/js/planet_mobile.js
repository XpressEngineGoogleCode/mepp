function doPlanetMobile(module_srl, type) {
	var params = new Array();
	params['module_srl'] = module_srl;
	params['type'] = type;
	exec_xml('planet','procPlanetAdminMobileActivate',params,function() { window.location.reload(); } );
}