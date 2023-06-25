import Router from './route/Router'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <Router />
      <ToastContainer position="bottom-center" theme="dark" autoClose={4000} />
    </div>
  )
}

export default App

// function App() {
//   const { user, glogin } = useGoogle();

//   const handleCallbackResponse = (response) => {
//     console.log(response.credential);
//     glogin(response.credential);
//   };

//   useEffect(() => {
//     // global google
//     window.google?.accounts.id.initialize({
//       client_id:
//         "177252823585-l9q3h51ok9bashd10qnhp03dd83e76ff.apps.googleusercontent.com",
//       callback: handleCallbackResponse,
//     });

//     window.google?.accounts.id.renderButton(document.getElementById("signin"), {
//       theme: "outline",
//       size: "large",
//     });
//   }, []);
//   return (
//     <>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content text-center">
//           <div className="max-w-md">
//             <h1 className="text-5xl font-bold">Hello there</h1>
//             <p className="py-6">This is google login</p>
//             {user ? (
//               <>
//                 <img className="mx-auto" src={user.picture} />
//                 <div>{user.name}</div>
//                 <button onClick={handleLogout}>logout</button>
//               </>
//             ) : (
//               <button id="signin" className="btn btn-primary"></button>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
