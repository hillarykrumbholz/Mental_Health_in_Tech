console.log("Waddup")

//Tableau Embed function
function initViz() {
    url = "https://public.tableau.com/profile/rudy7195#!/vizhome/FP_COO/Sheet1",
    options = {
        hideToolbar: true,
        width: "100%",
        height: "200px",
    };
    viz = new tableau.Viz(tabMonthlySales, url, options);
  }