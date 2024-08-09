const myHeaders = new Headers();
myHeaders.append("x-api-key", "aMFouLkMjcxGopFBPmzjWGMKQCkVKPDMsghukTvPHaPWzsqALZZFfGRtpBgvEKVVLGDJjDBavveHcoVKhuqjovsRWhkgGEQiyRmX");
myHeaders.append("x-app-version", "1.0.0");
myHeaders.append("x-apihub-key", "ofbel0RCR9Uegh1-HAIw2QnrVPK84F0OHlPK7QxGdyM5C1jmCR");
myHeaders.append("x-apihub-host", "Top-Goodread-Books-collection-1980-to-2023.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "3bbab0ba-235f-4cc4-aeba-217f0b869fa6");

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};

!async function() {
    let books = await fetch("https://Top-Goodread-Books-collection-1980-to-2023.proxy-production.allthingsdev.co/api/v1/bookread/genre?genre=history", requestOptions)
       .then((response) => response.text())
       .then((result) => {
        displayBooks(result);
        return result;
        })
       .catch((error) => console.error(error));  
}();

function displayBooks(data){
    let myBooks = JSON.parse(data);
    console.log(myBooks);

    if (myBooks.success && Array.isArray(myBooks.data) && myBooks.data.length > 0) {
        
        let book1 = {
            title: myBooks.data[3].title,
            author: myBooks.data[3].authors
        };

        let book2 = {
            title: myBooks.data[149].title,
            author: myBooks.data[149].authors
        };

        
        document.getElementById("book1").innerText = `Title: ${book1.title}, Author: ${book1.author}`;
        document.getElementById("book2").innerText = `Title: ${book2.title}, Author: ${book2.author}`;
    }
}
