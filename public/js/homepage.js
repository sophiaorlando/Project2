// const { response } = require("express");

$(document).ready(() => {
  //   $(".dropdown-toggle").dropdown();

  $(".dropdown-item").on("click", () => {
    console.log("hello, welcome to the console!");
    const selectedCounty = $(this).data("county");
    console.log(selectedCounty);
    const url = "/" + selectedCounty;

    // ajax call to retrieve data and populate the page with information about selected state

    $.ajax({
      url: url,
      success: function(result) {
        document.write(result);
      }
    });
  });
});
