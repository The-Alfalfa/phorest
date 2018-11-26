import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$.ajax({
    type: "GET",
    dataType: "json",
    url: "http://phorest-ob-staging.com/wp-json/wp/v2/posts/?categories=87&per_page=4",
    cache: false,
    success: function(data){
       data.forEach(post => {
           $("#blog").append(`
                <div class="item d-flex flex-column justify-content-end">
                    <div>
                        <h3>${post.title.rendered}</h3>
                        <p>${post.excerpt.rendered}</p>
                        <a href="${post.link}" target="_blank" class="btn btn-secondary">Read Post</a>
                    </div>
                </div>
            `);
       });
    }
});

$("#mobile-menu, .navigation").click(function(){
    $("#mobile-menu, .navigation").toggleClass("open");
});