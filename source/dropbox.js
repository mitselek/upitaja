// prevent default behavior from changing page on dropped file
window.ondragover = function(e) { e.preventDefault(); return false }
window.ondrop = function(e) { e.preventDefault(); return false }


document.getElementById("mainTitle").textContent = 'Panusta upitus'

var holder = document.getElementById('holder')
holder.ondragover = function () { this.className = 'hover'; return false; }
holder.ondragleave = function () { this.className = ''; return false; }
holder.ondrop = function (e) {
    e.preventDefault()
    document.getElementById("debug").textContent = e.dataTransfer.files.length + ' faili'
    // document.getElementById("fileList").innerHTML = ''


    for (var i = 0; i < e.dataTransfer.files.length; ++i) {
        var file = e.dataTransfer.files[i]
        var item = e.dataTransfer.items[i]

        if ('name' in file) {
            var fileName = file.name
        }
        else {
            var fileName = file.fileName
        }
        if ('path' in file) {
            var filePath = file.path
        }
        else if ('path' in item) {
            var filePath = item.path
        }
        else {
            var filePath = file.filePath
        }
        if ('size' in file) {
            var fileSize = file.size
        }
        else {
            var fileSize = file.fileSize
        }

        // fs.stat(path, callback)

        var node = document.createElement("div")
        node.textContent = (i+1) + ". file -- name: " + fileName + ", path: " + filePath + ", size: " + fileSize + " bytes\n"
        document.getElementById("fileList").appendChild(node)
    }
    return false
}
