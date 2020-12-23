import React from "react";

export default function Card({ title, image, content }) {
  return (
    <div className="card m-2" style={{ width: 300 }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn btn-primary">
          Read more..
        </a>
      </div>
    </div>
  );
}
