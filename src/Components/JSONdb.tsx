import React from "react"
import db from "../data/db.json"

const JSONdb = () => {
  return (
    <div className="mx-3">
      <pre>
        {JSON.stringify(db, undefined, 2)}
      </pre>
    </div>
  )
};

export default JSONdb;
