let exportBtn = document.getElementById("my-export");
var doc = new jsPDF({
    unit: 'px',
    format: 'a4'
});
let pageNumber = 2;
function generatePDF() {

    html2canvas(document.getElementById("resume")).then(canvas => {
        var img = canvas.toDataURL("image/png", 0.2);
        doc.addPage('a4', 'p');
        doc.addImage(img, 'PNG', 10, 10);
        doc.addPage();
        pageNumber--;
        
    });

    html2canvas(document.getElementById("skills")).then(canvas => {
        var img = canvas.toDataURL("image/png");
        doc.addPage('a4', 'p');
        doc.addImage(img, 'PNG', 10, 10);
        pageNumber--;
    });
    while(pageNumber == 0) {
        doc.save('thanhnguyenchisong.pdf');
        break;
    }

    // html2canvas(document.getElementById("framework")).then(canvas => {
    //     var img = canvas.toDataURL("image/png");
    //     doc.addPage('a4', 'p');
    //     doc.addImage(img, 'PNG', 10, 10);
    // });

    // html2canvas(document.getElementById("resume")).then(canvas => {
    //     var img = canvas.toDataURL("image/png");
    //     doc.addPage('a4', 'p');
    //     doc.addImage(img, 'PNG', 10, 10);
    // });

    // html2canvas(document.getElementById("contact")).then(canvas => {
    //     var img = canvas.toDataURL("image/png");
    //     doc.addPage('a4', 'p');
    //     doc.addImage(img, 'PNG', 10, 10);
    // });


   
}

exportBtn.addEventListener('click', function() {
    let dataCool = document.getElementsByClassName("data-cool");
    for( let i = 0; i< dataCool.length; i++) {
        dataCool[i].removeAttribute("data-aos");
    }
    generatePDF();
    for( let i = 0; i< dataCool.length; i++) {
        dataCool[i].setAttribute("data-aos", "fade-up");
    }
});