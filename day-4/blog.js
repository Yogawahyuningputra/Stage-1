let dataBlog    = []

function addBlog(event) {
    event.preventdefault()

    let title = document.getElementById("input-title").value
    let content = document.getElementById("input-content").value
    let image = document.getElementById("input-blog-image").files[0]

    // buat url gambar

   image = URL.createObjectURL(image[0])

    console.log(image)

    let blog = {

        title,
        content,
        image,
        postAt:"13 oktober 2022",
        author: "yoga"
        
    }
    dataBlog.push(blog)
    console.log(dataBlog)
}

function renderBlog() {

    document.getElementById("content").innerHtml = ''

    for (let index = 0; index < dataBlog.length; index++ ) {
        console.log(dataBlog[index])

        document.getElementById("content").innerHtml += '
        
        '
    }
}
renderBlog()