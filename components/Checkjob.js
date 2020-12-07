import React from 'react'

export default function Typejob() {
    return (
      <div>
        <form>
          <div>
            <input type="checkbox" />
            <label>Full time</label>
          </div>
          <div>
            <input placeholder="City, State, zip code or country" />
            <label>Location</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>London</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Amsterdam</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>New york</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Berlin</label>
          </div>
        </form>
      </div>
    );
}
