import "./update.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Update() {
  let [id] = useParams();
  let [job, setJob] = useState(null);
  let navigate = useNavigate();

  return <main id="update-job">This is the job update components</main>;
}
