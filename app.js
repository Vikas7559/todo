window.onload = () => {
    const form = document.querySelector("#addForm");
    const items = document.getElementById("items");
    const submit = document.getElementById("submit");
    let editItem = null;

    form.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);

    function addItem(e) {
        e.preventDefault();

        if (submit.value !== "Submit") {
            editItem.parentNode.childNodes[0].textContent = document.getElementById("item").value;
            submit.value = "Submit";
            document.getElementById("item").value = "";

            document.getElementById("lblsuccess").innerHTML = "Text edited successfully";
            document.getElementById("lblsuccess").style.display = "block";

            setTimeout(function () {
                document.getElementById("lblsuccess").style.display = "none";
            }, 3000);

            editItem = null;
            return false;
        }

        let newItem = document.getElementById("item").value.trim();
        if (newItem === "") return false;

        let li = document.createElement("li");
        li.className = "list-group-item";

        let deleteButton = document.createElement("button");
        deleteButton.className = "btn-danger btn btn-sm float-right delete";
        deleteButton.appendChild(document.createTextNode("Delete"));

        let editButton = document.createElement("button");
        editButton.className = "btn-success btn btn-sm float-right edit";
        editButton.appendChild(document.createTextNode("Edit"));

        li.appendChild(document.createTextNode(newItem));
        li.appendChild(deleteButton);
        li.appendChild(editButton);

        items.appendChild(li);

        document.getElementById("item").value = "";

        return false;
    }

    function removeItem(e) {
        e.preventDefault();
        if (e.target.classList.contains("delete")) {
            if (confirm("Are you Sure?")) {
                let li = e.target.parentNode;
                items.removeChild(li);

                document.getElementById("lblsuccess").innerHTML = "Text deleted successfully";
                document.getElementById("lblsuccess").style.display = "block";

                setTimeout(function () {
                    document.getElementById("lblsuccess").style.display = "none";
                }, 3000);
            }
        }
        if (e.target.classList.contains("edit")) {
            document.getElementById("item").value = e.target.parentNode.childNodes[0].textContent;
            submit.value = "EDIT";
            editItem = e.target;
        }
    }
}

function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = ref.value.trim() === "";
}
