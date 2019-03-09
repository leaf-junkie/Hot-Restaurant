
function populateWaiting(){
    const waiting = $("#wait-list");

    waitlist.forEach(i, function(item){
        const tableGroup = $("<li>").addClass("list-group-item mt-4").attr("data-num", i);
        const tableNumber = $("<h2>").text(`Table #${(i+1)}`);
        const hr = $("<hr>");
        waiting.append(tableGroup);
        tableGroup.append(tableNumber,hr);

    
        for each(var x in item){
            

        }

    });


}
