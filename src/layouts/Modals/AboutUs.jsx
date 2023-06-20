import React from "react";

function AboutUs() {
  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}
      <button className="btn border-none bg-slate-300" onClick={() => window.AboutUs.showModal()}>
        About Us
      </button>
      <dialog id="AboutUs" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <img src="src/assets/iX.svg" />
          </button>
          <h3 className="font-bold text-lg">We are a Newbies</h3>
          <p className="py-4">Tong Tae Nai Louis Mint</p>
        </form>
      </dialog>
    </div>
  );
}

export default AboutUs;
