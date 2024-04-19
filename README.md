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

The following images are demos of what the site should look like.

Home
![home](https://github.com/Francisco-Moll/Capstone-1/assets/77122579/f69cb60b-438c-4f05-a294-eb5674b0d91e)

Products
![products](https://github.com/Francisco-Moll/Capstone-1/assets/77122579/40f0ce9c-160f-4a34-a479-fbc947bfdcea)

Contact
![contactus](https://github.com/Francisco-Moll/Capstone-1/assets/77122579/d011436f-36b4-420d-a1a4-8c91dccdc18b)

Sign Up
![signup](https://github.com/Francisco-Moll/Capstone-1/assets/77122579/5f55d782-b7cc-45c7-bd6d-d259f553056c)

Login
![login](https://github.com/Francisco-Moll/Capstone-1/assets/77122579/0f26948f-8638-4a43-be70-c83e8a7a5311)

Cart
![cart](https://github.com/Francisco-Moll/Capstone-1/assets/77122579/ec455eec-f9ea-487c-b594-205f16b63423)
