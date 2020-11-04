$(document).ready(function() {






$("#searchbutton").on("click",function(){ 

    var searchTerm = $("#searchterm").val().trim()
    var startYear = $("#start").val().trim()
    var endYear = $("#end").val().trim()


    var realbeginDate = parseInt(startYear) + "0101"
    var realendDate = parseInt(endYear) + "0101"

    console.log(realbeginDate)

    
    
    $.ajax({

    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d6GlH3yGaOrJZkR4WX7Q16hzuAwltRQa&q=" + searchTerm + "&begin_date=" + realbeginDate + "&end_date=" + realendDate,
    method: "GET"
    
    })
    
    .then(function(data){

        console.log(searchTerm)

        var recNumber = $("#numberofrec").val()

        console.log($("#numberofrec").val())
        console.log(recNumber)


    console.log($("#searchterm").val().trim())
    
    var results = data
    
    

    results.response.docs.length = recNumber

    console.log(results.response.docs.length)





    console.log(results.response.docs)


    var divArray = []


    
     for(i=0; i<results.response.docs.length;i++){


       var resultsDiv = $(`<div class="mb-3">`)

        console.log(results.response.docs[i].web_url)
        
        
         var linkelement= $(`<a href="${results.response.docs[i].web_url}">${results.response.docs[i].headline.main}>`)

            resultsDiv.html(linkelement)
       
            divArray[i] = resultsDiv


        }

        console.log(divArray)

        divArray.join("")

        $(".resultsdiv").empty().append(divArray)


    
    })


})



$("#clearbtn").on("click",function(){


$(".resultsdiv").empty()



console.log("clear")

})

   
        
        
    

    })


    