console.log("Waddup")

//Tableau Embed function
function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/shared/R8J4BWX5W?:display_count=y&:origin=viz_share_link",
    options = {
        hideToolbar: true,
        width: "50%",
        height: "200px",
    };
    var viz = new tableau.Viz(containerDiv, url, options);
 }