import React from "react";

function SupportUs() {
  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}
      <button className="btn border-none bg-slate-300" onClick={() => window.SupportUs.showModal()}>
        Support Us
      </button>
      <dialog id="SupportUs" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg">Thank you for using!</h3>
          <p className="py-4">Buy us a Drinks</p>
        </form>
      </dialog>
    </div>
  );
}

export default SupportUs;
