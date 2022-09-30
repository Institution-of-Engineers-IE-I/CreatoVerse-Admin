const data = async () => {
    // setInterval(() => {
    //     const res = await axios.get("http://localhost:8000/data");
    // }, 2000);

    
  const response = await axios.get("https://ieiadmin.herokuapp.com/data");

  console.log(response.data);

  document.getElementById("abcdefg").innerHTML = ''

  response.data.map((item, idx) => {
    console.log(item);
    // carousel
    document.getElementById("abcdefg").innerHTML += `
        <div class="carousel-item abcd ${
          idx == 0 ? "active" : ""
        }" style="height:500px">
        <div style="text-align:center;padding:8px;">
        <h2>Congratulations ${item.name}!!<h2> <h4> We have recieved your submission! </h4>     
        <h5>${item.name}'s Experience in CreatoVerse:</h5> <p>${item.abstract}</p>
      
      </div>
        </div>
        `;
      //   document.getElementById("abcdefg").innerHTML += `
      //   <div class="carousel-item abcd ${
      //     idx == 0 ? "active" : ""
      //   }" style="height:500px">
      //   <div style="text-align:center;padding:8px;">
      //   <h4>Congratulations you have submitted</h4>
      //   <h4>Name: ${item.name}</h4>
      //   <h4>Email: ${item.email}</h4>
      //   <h4>Registration Number: ${item.regno}</h4>
      //   <a><h5>Submission Link : ${item.submissionLink}</h5></a>
      //   <h6>Abstract : ${item.abstract}</h6>
        

      // </div>


      //   </div>
      //   `;
  });
};


// while(true){
//     const interval = setInterval(() => {
//         data();
//       }, 5000)
        
// }
window.addEventListener('load', function () {
    // Your document is loaded.
    var fetchInterval = 45000; // 45 seconds.
  
    // Invoke the request every 45 seconds.
    setInterval(data, fetchInterval);
  });

