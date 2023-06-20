import React from "react";

function Login() {
  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}
      <button className="btn border-none bg-slate-300" onClick={() => window.Login.showModal()}>
        Log in
      </button>
      <dialog id="Login" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <img src="src/assets/iX.svg" />
          </button>
          <h3 className="font-bold text-lg flex justify-center items-center">ล็อคอินกัน!!</h3>
          <div className="flex">
            <img src="src/assets/iTick.svg" className="w-10" />

            <p className="py-4">ได้เครื่องดื่มฟรี คนละแก้ว</p>
          </div>
          <div className="flex">
            <img src="src/assets/iTick.svg" className="w-10" />
            <p className="py-4">ไม่หลุดออกจากห้องเวลารีเฟรช</p>
          </div>
          <hr />
          <button className="flex flex-col items-center mt-2">
            <img src="src/assets/iGoogle.svg" className="w-20" />
            <p>JOIN WITH GOOGLE</p>
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default Login;
