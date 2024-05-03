function indexOnLoad()
{
    //Declarations
    let bannerHeader= document.getElementById("bannerHeader");

    let card01Header= document.getElementById("card01Header"), card01Content= document.getElementById("card01Content");
    let card01Link= document.getElementById("card01Link");

    let card02Header= document.getElementById("card02Header"), card02Content= document.getElementById("card02Content");
    let card02Link= document.getElementById("card02Link");

    let card03Header= document.getElementById("card03Header"), card03Content= document.getElementById("card03Content");

    let card04Header= document.getElementById("card04Header"), card04Content= document.getElementById("card04Content");

    let testimonialHead = document.getElementById("testimonialHead");
      
    //Assignments
    let Testimonials=
    {
        clientName:["Emily R.","Thomas S.","Jennie F."], 
        comment:["We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
                "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
                "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"], 
        designation:["Managing Director","Chief Operating Officer","Business Owner"]
    };
    bannerHeader.innerHTML = "WE ARE CREATIVES";
    testimonialHead.innerHTML = "CLIENT TESTIMONIALS";

    card01Header.innerHTML = "Transform your brand";
    card01Link.href='./Transform.html'; card01Link.innerHTML = "Learn More".toLocaleUpperCase(); 
    card01Content.innerHTML = "We are a full-service creative agency specializing in helping brands grow fast. "
                            + "Engage your clients through compelling visuals that do most of the marketing for you.";

    card02Header.innerHTML = "Stand out to the right audience";
    card02Link.href='./Standout.html'; card02Link.innerHTML = "Learn More".toLocaleUpperCase();
    card02Content.innerHTML = "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, "
                            + "we’ll build and extend your brand in digital places.";
    
    card03Header.innerHTML = "Graphic design";
    card03Content.innerHTML = "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.";

    card04Header.innerHTML = "Photography";
    card04Content.innerHTML = "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.";

    for (let i = 0; i <= 3; i++) {
        document.getElementById("testimonName0" + (i+1).toString()).innerHTML=Testimonials.clientName[i];
        document.getElementById("testimonContent0" + (i+1).toString()).innerHTML=Testimonials.comment[i];
        document.getElementById("testimonDes0" + (i+1).toString()).innerHTML=Testimonials.designation[i];
    }
}