let items = document.getElementById("nav-item");
var item = items.getElementsByClassName("item");
for (var i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

