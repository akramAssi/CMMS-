var add = document.getElementById('add');
        var remove = document.getElementById('remove');
        var addrect = document.getElementById('addrect');
        var removerect = document.getElementById('removerect');
        
        // "Update details" button opens the <dialog> modally
        add.addEventListener('click', function onOpen() {
          if (typeof addrect.showModal === "function") {
            addrect.showModal();
          } else {
            alert("The <dialog> API is not supported by this browser");
          }
        });
        remove.addEventListener('click', function onOpen() {
          if (typeof removerect.showModal === "function") {
            removerect.showModal();
          } else {
            alert("The <dialog> API is not supported by this browser");
          }
        });
var modal = document.getElementById('id01');
var modal1 = document.getElementById('id02');
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";}
            else if(event.target == modal1){
                modal1.style.display = "none";
            }
            
        };
        