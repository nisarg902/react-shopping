import React from 'react';

function NetflixHeaderComponents() {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <div>
        <h2 className="text-danger m-0">NETFLIX</h2>
      </div>

      <div className='input-group w-25'>
        <select className=" form-control">
          <option>Language</option>
          <option>English</option>
          <option>Hindi</option>
        </select>
        <button className="btn btn-danger ms-2">Sign In</button>
      </div>
    </div>
  );
}

export default NetflixHeaderComponents;
