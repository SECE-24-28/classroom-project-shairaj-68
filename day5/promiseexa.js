console.log("process 1 is running")
setTimeout(() => {
    console.log("process2 is running")
    setTimeout(() => {
        console.log("process3 is running")
    }, 2000);
}
,2000);

console.log("process4 is running")
