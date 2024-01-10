//Traduction toggle //
$(document).ready(function() {
    $("#color_mode").on("change", function () {
        changeText(this, "textFr");
        changeText(this, "noTache");
        changeText(this, "champ");
        changeText(this, "android");
        changeText(this, "ios");
        changeText(this, "contact")
    });
});

function changeText(ele, elementId) {
    var isChecked = $(ele).prop("checked");
    var textElement = $("#" + elementId);

    if (isChecked) {
        if (elementId === "textFr") {
           textElement.text("The page is in English");
        } else if (elementId === "noTache") {
           textElement.text("No tasks in progress...")  
        } else if (elementId === "champ") {
            textElement.attr("placeholder", "Add a task...")
        } else if (elementId === "android") {
            textElement.text("Download on Android")
        } else if (elementId === "ios") {
            textElement.text("Download on Ios")
        } else if (elementId === "contact") {
            textElement.text("Contact  me")  
        }
    } else {
        if (elementId === "textFr") {
            textElement.text("La page est  en français")
        } else if (elementId === "noTache") {
            textElement.text("Aucune tâche en cours...")
        } else if (elementId === "champ") {
            textElement.attr("placeholder", "Ajouter une tâche...")
        } else if (elementId === "android") {
            textElement.text("Télécharger sur Android")
        } else if (elementId === "ios") {
            textElement.text("Télécharger sur Ios")
        } else if (elementId === "contact") {
            textElement.text("Me contacter")
        }
    }
}