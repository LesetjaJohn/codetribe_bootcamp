function LoadJS()
{
let fullName="", DOB="", bio="", addBio="";
let education="", projects="", codingEnviron="";
let cellNo = "", email="", address="";
let codingLangs=[];
let contactHead="", aboutHead="", homeHead="";

//values
fullName="Lesetja John Mogashoa"; DOB = "16-April-1999";
bio='Analytical, Research-savvy, Creative .Net Software Developer, adept in Mobile, Web, and Desktop application development, specializing on both Front and Back-end, Following Agile development methodology'
+ '<br>Employs excellent Team skills and Multi-tasking strengths.<br>Very Open to new Experiences and can cope well with pressure.<br>';
education='A Tshwane University of Technology Graduate:<br>National Diploma in Information Technology [Software Development]';
projects="Full history of my Projects is on GitHub";
cellNo = "27607346043"; email="ljmogashoa04@gmail.com"; address="No 780 Thakgalang, Polokwane, Limpopo";
codingEnviron = "I use Visual Studio and VS Code for most of my Projects and utelize Google Cloud Platform APIs for databases.";
addBio='I am a Very Skilled .Net Developer, currently seeking workplace experience!<br>I also have joined several NPF Hackathons and won some, with a role as a Developer!';
contactHead = "Connecting with Me"; aboutHead="Know Me More"; homeHead="Welcome To My Profile";

codingLangs = ['<br>C#', ',&nbsp;PHP', ',&nbsp;Javascript',',&nbsp;Node.js',',&nbsp;HTML', ',&nbsp;Bootstrap',',&nbsp;CSS',',&nbsp;SQL',',&nbsp;Document Database'];
//Index Page
if(document.title.includes("Welcome"))
{
    document.getElementById("cellLink").href += cellNo;
    document.getElementById("whatsapp").href += cellNo;
    document.getElementById("address").innerHTML = address;
}
//Home Page
if(document.title.includes("Home"))
{
    document.getElementById("fullName").innerHTML = fullName;
    document.getElementById("bio").innerHTML = bio;
    document.getElementById("homeHead").innerHTML = homeHead;
}
//About
if(document.title.includes("About"))
{
    document.getElementById("aboutHead").innerHTML = aboutHead;
    document.getElementById("fullName").innerHTML = fullName;
    document.getElementById("Dob").innerHTML = DOB;
    document.getElementById("education").innerHTML = education;
    document.getElementById("projects").innerHTML = projects;
    document.getElementById("whatsapp").href += cellNo;
    document.getElementById("environment").innerHTML = codingEnviron;
    //Array
    document.getElementById("languages").innerHTML = "";
    codingLangs.forEach(languages);
    function languages(item)
    {
        document.getElementById("languages").innerHTML += item;
    }

    document.getElementById("addBio").innerHTML = addBio;
    document.getElementById("addBio").innerHTML = addBio;
}
//Contact
if(document.title.includes("Contact"))
{
    document.getElementById("contactHead").innerHTML = contactHead;
    document.getElementById("cellLink").href += cellNo;
    document.getElementById("cell").innerHTML = " | +" + cellNo + " | ";
    document.getElementById("whatsapp").href += cellNo;

    //Target OnChange any element(Form Inputs)
    let EmailFlag = 0, NameFlag = 0, MessageFlag = 0; //Global
    document.addEventListener('change',(e) =>
    {
        let elementId = e.target.id;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        let FullnameInfo = document.getElementById("frmFullnameInfo");
        let frmEmailInfo = document.getElementById("frmEmailInfo");
        try 
        {
            if(elementId.includes("frmFullname"))
            {
                //validations for full name
                if(e.target.value.length < 5)
                { throw new Error("FullNameExc");}
                else
                {
                    FullnameInfo.innerHTML = ""; NameFlag = 1;
                    FullnameInfo.classList.add("visually-hidden");
                }
            }
            if(elementId.includes("frmEmail"))
            {
                //validations for Email
                let inputVal = e.target.value.toLowerCase().match(emailRegex);
                if(inputVal != null)
                {
                    frmEmailInfo.innerHTML = ""; EmailFlag = 1;
                    frmEmailInfo.classList.add("visually-hidden");
                }
                else
                {throw new Error("EmailExc");}
            }
            if(elementId.includes("frmMessage"))
            {
                //validations for Message
                let MessageInfo = document.getElementById("frmMessageInfo");
                if(e.target.value.length < 10 || e.target.value.length > 1000)
                {
                    throw new Error("MessageExc");
                }
                else
                {
                    MessageInfo.innerHTML = ""; MessageFlag = 1;
                    MessageInfo.classList.add("visually-hidden");
                }
            }    
        } 
        catch (e) 
        {
            console.log(e);
            if(e == "Error: FullNameExc")
            {
                FullnameInfo.innerHTML = "Your Full Name is Short!";
                FullnameInfo.classList.remove("visually-hidden"); NameFlag = 0;
            }
            else if(e == "Error: EmailExc")
            {
                frmEmailInfo.innerHTML = "Wrong Email Address Format! Correct Format e.g. johndoe@domain.com";
                frmEmailInfo.classList.remove("visually-hidden"); EmailFlag = 0;
            }
            else{
                MessageInfo.innerHTML = "Please Note: Accepted message length is 5 to 1000 characters!";
                MessageInfo.classList.remove("visually-hidden"); MessageFlag = 0;
            }
        }
    });
    //Submit Button
    document.getElementById("contactForm").addEventListener("submit",(e)=>
    {
        //Dealing with Submit button
        if(NameFlag && EmailFlag && MessageFlag)
        {
            alert("Good");
            document.getElementById("btnSubmit").disabled='false';
            return true;
        }
        else
        {
            alert("Please Fix errors indicated with 'Red' or Any Blank field(s) on the form to continue!");
            return false;
        }
    });
}
}
