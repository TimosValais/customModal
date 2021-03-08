


//general popup modal creator and helper methods
function ModalCreator(title, content, resultFunction, optionLeft, optionRight, buttonColorLeft, buttonColorRight) {

    let domString = ChooseElementsToAdd(title, content, optionLeft, optionRight, buttonColorLeft, buttonColorRight);

    $('body').append(domString);



    //Trigger the modal
    $("#popUpModal").modal({
        backdrop: 'static',
        keyboard: false
    });

    //Pass true to a callback function
    $(".btn-yes").click(function () {
        resultFunction(true);
        $("#popUpModal").modal("hide");
    });

    //Pass false to callback function
    $(".btn-no").click(function () {
        resultFunction(false);
        $("#popUpModal").modal("hide");
    });

    //Remove the modal once it is closed.
    $("#popUpModal").on('hidden.bs.modal', function () {
        $("#popUpModal").remove();
    });
};

function ChooseElementsToAdd(title, content, optionLeft, optionRight, buttonColorLeft, buttonColorRight) {

    let domString = '<div class="modal fade " id="popUpModal"  role="dialog">' +
       '<div class="modal-dialog " role="document"> ' +
         '<div class="modal-content"> ';



    if (title.trim()) {
        domString += '<div class="modal-header alert-info">' +
         '<h4 class="modal-title ">' + title + '</h4>' +
         '</div> ';
    }

    if (content.trim()) {
        domString += '<div class="modal-body alert-light" > ' +
               '<p class="text-center "><strong>' + content + '</strong> </p> ' +
               '</div> ';
    }

    domString += '<div class="modal-footer">' +
               '<div class="text-center"> ';


    if (optionLeft.trim()) {
        domString += '<button class="btn btn-' + ChooseBootstrapColor(buttonColorLeft) + 'btn-yes" >' + optionLeft + '</button>  &nbsp';

    }


    if (optionRight.trim()) {
        domString += '&nbsp <button class="btn btn-' + ChooseBootstrapColor(buttonColorRight) + 'btn-no" >' + optionRight + '</button>';

    }


    domString += '</div> ' +
             '</div> ' +
         '</div> ' +
      '</div> ' +
    '</div>';

    return (domString);

}

function ChooseBootstrapColor(colorText) {
    let result;
    switch (colorText) {
        case 'red':
            result = 'danger ';
            break;
        case 'blue':
            result = 'primary ';
            break;
        case 'gray':
        case 'grey':
            result = 'secondary ';
            break;
        case 'green':
            result = 'success ';
            break;
        case 'yellow':
        case 'orange':
            result = 'warning ';
            break;
        case 'teal':
        case 'light blue':
            result = 'info ';
            break;
        case 'eggshell':
            result = 'light ';
            break;
        case 'black':
            result = 'dark ';
            break;
        case 'transparent':
            result = 'muted ';
            break;
        default:
            result = 'primary ';
            break;
    }
    return (result);
};

// alert modal

function AlertModal(title, content, resultFunction) {
    if (resultFunction == undefined) {
        resultFunction = (result) => {
            if (result) {
            }
        }
    };
    ModalCreator(title, content, resultFunction, "Κλείσιμο", "", "grey", "");
};

// confirm modal

function ConfirmModal(title, content, resultFunction, optionLeft, optionRight,buttonColorLeft) {
    if (optionLeft == undefined) {
        optionLeft = "Επιβεβαίωση";
    };
    if (optionRight == undefined) {
        optionRight = "Ακύρωση";
    };
    if (buttonColorLeft == undefined) {
        buttonColorLeft = "blue";
    };
    ModalCreator(title, content, resultFunction, optionLeft, optionRight, buttonColorLeft, "grey");
}


