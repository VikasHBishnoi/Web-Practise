// console.log("Ram Ram sa");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Forums</title>
      <script></script>
  </head>
  <body>
    <h3>This is practise form</h3>
    <form action="backend.php">
        <div>
            <label for="name">Name</label>
            <input type="text" name="myName" id="name">
        </div><br>
        <div>
            Roll no.: <input type="number" name="myRollno">
            <br>
            <label for="number">again roll no.</label>
            <input type="number" name="myroll" >
        </div><br>
        <div>
            Email: <input type="email" name="myEmail">
        </div><br>
        <div>
            Mobile no. <input type="number" name="myMobile">
        </div><br>
        <div>
            Dob <input type="date" name="myDate">
        </div><br>
        <div>
            file<input type="file" name="fileupload">
        </div>
        <div>
            <label for="myCar">Which car u want</label>
            <select value="Car" id="myCar">
                <option value ="ind" selected>Indica</option>
                <option value ="sft">swift</option>
                <option value ="fot">fortuner</option>
                <option value ="mer">mercedes</option>
            </select>
        </div><br>
        <div>
            <label for="eligible">Are u eligible for voting?</label> 
            <input type="checkbox" name="myEligibilty" id="eligible">
            <!-- written to test wehter multiple checkbox can be checked or not and we checkbox multiple simantanously -->
            <input type="checkbox" name="myeEligibilty" id="eeligible">
        </div><br>
        <div>
            Gender :Male<input type="radio" name="myGender">Female<input type="radio" name="myGender"> Others<input type="radio"   name="myGender">
        </div>
        <br>
        <div>
            write about yourself<br><textarea name="myText" cols="2" row ="2"></textarea>
        </div><br>
        
        <!-- Try avoid br and use other tags -->
  
        <div>
            <input type="submit" value="Submit now">
            <input type="reset" value="restForum">
        </div>
        
    </form>
    
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});