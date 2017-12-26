function includeLinkStyle(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}
includeLinkStyle("http://beisu-js.oss-cn-beijing.aliyuncs.com/progress/progress.css");

function progressShow() {
    document.getElementById("progress_bg").style.display = "block";
    document.getElementById("progress_layout").style.display = "block";

    setTimeout(function () {
        progressHide()
    },10000);
}

function progressHide() {
    document.getElementById("progress_bg").style.display = "none";
    document.getElementById("progress_layout").style.display = "none";
}

