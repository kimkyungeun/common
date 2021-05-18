(function(window, undefined) {

	/**
	 * 화면에서 공통적으로 사용하는 파일은 importFiles 안에 배열 요소값으로 경로를 넣어준다.
	 */
	var thisFileName = "extends.js",
	
	importFiles = [
		"common/comm_frm.js",
		"common/comm_sys.js",
		"common/comm_utl.js"
	];

M.ScriptLoader.writeScript( importFiles, M.ScriptLoader.scriptPath(thisFileName));
})(window);
