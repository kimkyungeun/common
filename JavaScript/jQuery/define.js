var isDev = true; // 개발 모드 여부

var Definition = {
	SERVER_NAME : "LOCAL" // 바라볼 서버 이름
};

// 운영 & 개발에 따른 서버 정보 세팅
if (isDev == true) {
	console.log("-------------------------DEV-------------------------");
	Definition.SERVER_NAME = "TECH_DEV";
}

// 서버 전문 요청 목록
var ServerPath = {
		LOGIN           : "api/ets/login",
		ETS_NOTICE      : "api/ets/notice",
		ETS_NOTICE_INFO : "api/ets/noticeinfo",
		ACT_GET_ACTLIST : "api/act/getActList",
		ACT_GET_ACTINFO : "api/act/getActInfo",
		ACT_ADD         : "api/act/add",
		ACT_UPDATE      : "api/act/update",
		ACT_DELETE      : "api/act/delete"
};

function forAjax(url, callback) {
	$.ajax({
		// Local
		url : "http://localhost:8080/" + url + "&flag=dev",

		dataType : "jsonp",
		jsonp : callback,
		success : function(data) {
		}
	});
}

function forAjax(url, data, _successCallback, _errorCallback) {
  $.ajax({
    type : "POST",
    enctype : 'multipart/form-data',
    processData : false,
    contentType : false,
    cache : false,
    timeout : 600000,
    url : url,
    data : data,

    success : function(receivedData) {
      console.log(receivedData);
      console.log("============" + url + " : Ajax SUCCESS============");
      console.log("receivedData : " + JSON.stringify(receivedData));
      console.log("============" + url + " : Ajax SUCCESS============");
      // userToken이 갱신 되는 경우
      if (receivedData.response) {
        if (receivedData.response.replace == true) {
          // receivedData.response.userToken를 갱신하는 로직
        }
      }

      if (_successCallback) {
        _successCallback(receivedData);
      }
    },

    error : function(xhr, status, error) {
      console.log(error);
      console.log("============" + url + " : Ajax ERROR============");
      console.log("error : " + error);
      console.log("============" + url + " : Ajax ERROR============");

      if (_errorCallback) {
        _errorCallback(status, error);
      } else {
        alert("네트워크 통신 중 오류가 발생했습니다.");
      }
    }
  });
}
