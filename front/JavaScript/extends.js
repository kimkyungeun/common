(function(window, undefined) {

	/**
	 * 화면에서 공통적으로 사용하는 파일은 importFiles 안에 배열 요소값으로 경로를 넣어준다.
	 */
	var thisFileName = "extends.js",
	
	importFiles = [
		"common/@_app.js",
		"common/@_ds.js",
		"common/@_frm.js",
		"common/@_grd.js",
		"common/@_inf.js",
		"common/@_main.js",
		"common/@_msg.js",
		"common/@_rpt.js",
		"common/@_sys.js",
		"common/@_tran.js",
		"common/@_utl.js"
	];

M.ScriptLoader.writeScript( importFiles, M.ScriptLoader.scriptPath(thisFileName));
})(window);
