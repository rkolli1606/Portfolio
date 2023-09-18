// Create the Dog class here
class Dogs{
    constructor(data){
        Object.assign(this,data)
    }
    dogHtml()
    {
        const {name,avatar,age,bio,hasBeenLiked} = this
        return `
            <img src="${avatar}" alt="teddy dog" class="teddy">
            <div class='img-data'>
                <p class="name-age">${name}, ${age}</p>
                <p class="bio">${bio}</p>
            <div>
                `
    }
    badgeHtml(event)
    {
        let html = ''
        if(event==='heart-icon'&&this.hasBeenNoped===false)
        {
            
             
            html =`<img src="images/badge-like.png" alt="badge-like" class="badge-like">`
        
        }
        if(event==='cross-icon'&&this.hasBeenLiked===false)
        {
            html = `<img src="images/badge-nope.png" alt="badge-nope" class="badge-nope">` 
            // this.hasBeenLiked===false
        }
        return html
    }
}


export {Dogs}