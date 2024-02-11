// import React from 'react';

// class Otherss extends React.Component {
//     // ... your existing code
  
//     render() {
//         return(
//             <>
//             <div className="container mx-auto my-4 px-4 md:px-0">
//   <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
//     AI Blog Generator
//   </h1>
//   <textarea
//     className="border my-1 p-2 w-full"
//     placeholder="Enter the title of your blog"
//     defaultValue={""}
//   />
//   <button id="submitBtn" className="bg-black text-white px-4 py-2 my-1 rounded">
//     Submit
//   </button>
//   <div id="content" className="bg-gray-200 p-2 my-4">
//     Your content will show up here
//   </div>
// </div>

//             </>
//         )
//     }

// }

// export default Otherss

// import React, { useState } from 'react';
// import './App.css';

// function Otherss() {
//   const [prompt, setPrompt] = useState('');
//   const [output, setOutput] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:9005/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ prompt })
//     });
//     const data = await response.json();
//     setOutput(data.output);
//   };

//   return (
//     <div className="App">
//       <h1>Generate a Blog</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Prompt:
//           <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
//         </label>
//         <button type="submit">Generate</button>
//       </form>
//       {output && <div>{output}</div>}
//     </div>
//   );
// }

// export default Otherss;


import React, { useState } from 'react';
import './App.css';
import './otherss.css';

function Otherss() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9005/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });
      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='containerr'>
    <div className="otherss">
        <center>
      <h1>Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        </label>
        <button type="submit">Generate</button>
      </form>
      <center>
      <div className="response-box">

        {output && <div className="response">
        {output}
        
        </div>}
      </div></center>
      </center>
    </div>
    </div>
  );
}

export default Otherss;
