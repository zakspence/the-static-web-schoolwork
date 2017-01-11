//This function adds listeners to each article button. As it rifles through the DOM, it plucks out the value of the id attribute of each node. That value is made ready as a variable, waiting to be passed as an argument for fillArticle(). fillArticle() will use this string to target the appropriate content in our content storage object, 'article'.
var contentList = document.getElementById("content-list");
	
for(var i = 0; i < contentList.children.length; i++) {
	let targetNode = contentList.children[i];
	let source = targetNode.getAttribute("id");
	targetNode.addEventListener("onclick", article.fillArticle(source));
}

//content data
var article = {
	header: "Get some ipsum",
	//encode the string with the id of the element it belongs to
	"blog1" : "blog1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla ultrices blandit. Quisque quis facilisis dolor. Nulla vel metus sed ipsum imperdiet gravida. Nunc pulvinar quam et tellus ornare lacinia. Nulla vitae metus nunc. Nullam tristique ante ac ultrices pulvinar. Praesent ut dignissim elit, at aliquam enim. Proin viverra neque nec lacus blandit vehicula. Praesent vitae arcu egestas, molestie augue eu, lacinia risus. Nulla magna nisl, convallis non vehicula eu, hendrerit sit amet eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
	"blog2" : "blog2Donec sodales nisi in erat lacinia, et condimentum sapien commodo. Vestibulum faucibus vehicula mauris id cursus. Donec lobortis, quam vitae pulvinar vestibulum, augue mi bibendum ex, eu fermentum urna orci eget leo. Donec aliquam nibh metus, vel porta nisl maximus id. In ornare quis massa in cursus. Praesent mollis feugiat sem id commodo. Aliquam eget massa justo. Fusce malesuada lorem sed nunc volutpat tincidunt. Etiam vehicula velit id congue posuere. Nunc sodales eu erat nec cursus.",
	"blog3" : "blog3Praesent a efficitur leo, nec porttitor ligula. Praesent dapibus, mi at facilisis commodo, leo est condimentum purus, vel sodales sem libero eu enim. Sed sed viverra mi. Proin vel dignissim turpis. Proin vitae odio nunc. Duis lorem ex, accumsan nec neque ac, convallis placerat nisi. Nulla sed elementum massa.",
	"blog4" : "blog4Proin rutrum lobortis nunc ac feugiat. Sed metus odio, efficitur ut dapibus sit amet, tempor ut arcu. Nunc maximus, diam volutpat sagittis ullamcorper, arcu elit varius diam, et elementum orci orci ac nunc. Sed augue tortor, vestibulum quis dui quis, ornare facilisis neque. In hac habitasse platea dictumst. Vestibulum dignissim erat lectus, ut finibus orci congue vitae. Duis fringilla nibh non nulla rutrum posuere. Mauris ante orci, scelerisque sit amet felis vel, fermentum accumsan velit. Proin fermentum velit a nulla accumsan sollicitudin. Quisque at nunc at enim fringilla imperdiet sit amet efficitur tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vel mi sit amet eros pellentesque euismod. Maecenas suscipit augue est, facilisis luctus metus vestibulum ut.",
	"blog5" : "blog5Proin eu risus neque. Fusce at sem in turpis auctor fermentum. Donec neque lorem, semper vel consectetur ac, volutpat eu lectus. Sed pulvinar ante vel rutrum dapibus. Maecenas interdum turpis sem, a venenatis lectus placerat eu. Nulla facilisis tellus sit amet vehicula luctus. Nam lacinia, orci dictum facilisis consequat, magna elit rhoncus elit, sit amet fringilla quam risus sed magna. Phasellus feugiat tempus ante eu condimentum. Quisque leo odio, ultricies et massa eu, interdum bibendum nibh. Phasellus quis consequat ex, eget venenatis nulla. Etiam tincidunt ut nunc at tempor. Sed eget nibh odio. Quisque luctus risus ut porta porta. Mauris erat mauris, aliquam at elit a, vestibulum placerat lacus."
}

	function fillArticle(blogName) {
		var blog = blogName
		var h = document.getElementById("h-box")
		var p = document.getElementById("p-box")
		for (let i in article) {
			if(blog === i) {
				h.innerHTML = this.header
				p.innerHTML = i.slice(5)
				break
			}
		}
		return alert("u s.0.L bud")
	}	