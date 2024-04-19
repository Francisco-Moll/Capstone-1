This an e-commerce page template designed to show off some of the things that I've learned.
I based it around Minecraft skin sharing sites like Minecraftskins.net and PlanetMinecraft.com.
Typically Minecraft skins are free to share, however I used them because th file format is a simple .png file of a strict size.
I used that to my advantage so I didn't have to pre-scale my images or crop them.

The bit of code I'm most proud of is my JavaScript:

  function updateVisibility() {
        products.forEach((product, index) => {
            if (index === currentIndex) {
                product.classList.add('active');
                product.style.opacity = '1';
                product.style.visibility = 'visible';
            } else {
                product.classList.remove('active');
                product.style.opacity = '0';
                product.style.visibility = 'hidden';
            }
        });
    }

Specifically, what this does is that it dynamically hides and displays product 'panes' on a carousel.
These arent just images, they have clickable buttons so you can add them to the cart.

This is just a small part of the JavaScript, but this is the crux of the the script.
