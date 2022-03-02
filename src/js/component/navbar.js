import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
  const {
    store: { favourites, resources },
    actions,
  } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light px-4 mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">STAR WARS</span>
      </Link>
      <div className="ml-auto">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <button type="button" className="btn btn-warning">
                <strong>Favourites</strong>
              </button>
            </a>
            <ul className="dropdown-menu p-1" aria-labelledby="navbarDropdown">
              <li>
                <hr className="dropdown-divider" />
              </li>

              {favourites.map((item, index) => {
                return (
                  <div key={index}>
                    <li>
                      <div className="d-flex">
                        <Link
                          to="/person/1"
                          className="text-black fw-bold"
                          style={{ textDecoration: "none" }}
                        >
                          {item}
                        </Link>
                        <button
                          className="ms-1"
                          onClick={() => actions.removeFavourite(item)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fillRule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </div>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
