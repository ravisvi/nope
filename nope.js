var blocked_feeds = [];

function nope(){
    console.log("Entered Nope function");
    //news feeds.
    stories = document.getElementsByClassName("_5uch");
    for(var i=0; i < stories.length; i++){
        console.log("Story #"+i);
        var story = stories[i];
        remove_feeds(story, "feed");
    }

  //walls.
    wall_posts = document.getElementsByClassName("timeline");
    for(var i=0; i < wall_posts.length; i++){
        console.log("Wall post #"+i);
        var post = wall_posts[i];
        remove_feeds(post, "wall");
    }
}

function remove_feeds(item, pageType){
    console.log("Entered remove_feeds");
    var links = item.getElementsByTagName("a");
    for(var k=0; k < links.length; k++){
        var link = links[k];
        var href = link.href.toLowerCase();
        console.log("Processing links");
        // decide which type of link it is
        var linkType = null;
        // if (href.indexOf("facebook.com/the_page_name") !== -1 ){
        //   linkType = "page link";
        // }
        // if (href.indexOf("shrt.lnk") !== -1 ){
        //   linkType = "shortened link";
        // }
        if (href.indexOf("yourstory.com") !== -1 ){
            console.log("regular link found")
            linkType = "regular link";
        }

        // hide it.
        if(linkType !== null){
            hideItem(item, linkType, pageType);
        }
    }
}

function hideItem(item, linkType, pageType){

      // set the story to be invisible
    item.style.opacity = "0.0";
    item.style.display = "None";
    console.log("Hiding item : "+item)
    // add this story to the list of killed stories
    if (blocked_feeds.indexOf(item) == -1){
        console.log("Saide nope to " + item + " on your " + pageType);
        blocked_feeds.push(item);
    }
}

console.log("Entered nope.js");
nope();
document.addEventListener("scroll", nope);