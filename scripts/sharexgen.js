(function() {
    var b = document.querySelector(".generate-button");
    if (!b) throw new Error("The script was used but generate button not found");
    var a = document.querySelector("#token");
    if (!a) throw new Error("The script was used but no field for token found");
    var d = document.querySelector("#file-length")
    var k = "{{KEY}}";
    var f = "{{FILE_LENGTH}}";
    var t = "{\
      \"Name\": \"NC Network ShareX uploader\",\
      \"DestinationType\": \"ImageUploader, TextUploader, FileUploader\",\
      \"RequestType\": \"POST\",\
      \"RequestURL\": \"https://upload.ncnetwork.me\",\
      \"FileFormName\": \"fileform\",\
      \"Arguments\": {\
        \"key\": \"{{KEY}}\",\
        \"file_length\": \"{{FILE_LENGTH}}\"\
      },\
      \"ResponseType\": \"Text\",\
      \"URL\": \"$json:url$\"\
    }";
    b.onclick = function(e) {
        e.preventDefault();
        if (a.value.trim() === "") return alert("No token was specified.");
        var a = document.createElement(a);
        document.body.appendChild(a);
        a.style = "display:none";
        var z;
        if (!d) z = 5;
        else if (d && d.value.trim() === "") z =5;
        else if (isNaN(parseInt(d.value))) z = 5;
        else z = d.value
        var s = t.replace(k, a.value).replace(f, z);
        var b = new Blob([s], {type: "application/octet-stream"});
        var u = window.URL.createObjectURL(b);
        a.href = u;
        a.download = "sharex.sxcu";
        a.click();
        window.URL.revokeObjectURL(u);
        a.delete();
    };
})();