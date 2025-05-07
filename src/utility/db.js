const getFromDB = () => {
const bookMarked = localStorage.getItem("bookMarked");
if(bookMarked){
const parsedBookMarked = JSON.parse(bookMarked);
return parsedBookMarked;
}
else{
return [];
}
}

const setToDB = (id) => {
const bookMarked = getFromDB();
if(bookMarked.includes(id)){
    alert("Already Bookmarked");
} else{
bookMarked.push(id);
const data = JSON.stringify(bookMarked);
localStorage.setItem("bookMarked", data);

}
}
export {getFromDB, setToDB};