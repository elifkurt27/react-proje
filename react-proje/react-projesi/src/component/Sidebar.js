import {Router, Route, Routes, Link, useNavigate} from 'react-router-dom';
import SignOut from '../functions/SignOut.js';


function Sidebar(props){

    const navigate = useNavigate();

    return(
        <>
        {/*SIDEBAR*/}
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px", height: "2150px"}}>
                    <a href="/portal" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                    <span className="fs-4">KHAS PORTAL</span>
                    </a>
                    <hr/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${props.form_active} ${props.form_disable}`} 
                                    aria-current="page" 
                                    to={`${props.form_to}`}
                                    >
                                        Başvuru Formu</Link>
                        </li>
                        <li>
                            <Link className={`nav-link ${props.gor_active} ${props.gor_disable}`} 
                                    aria-current="page" 
                                    to={`${props.gor_to}`}
                                    >
                                        Başvuru Görüntüle</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                        <strong>Seçenekler</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="/SifreDegistir">Şifre Değiştir</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#" onClick={() => SignOut(navigate)}>Çıkış Yap</a></li>
                    </ul>
                    </div>
                </div>
              
        </>
    );


}

export default Sidebar;



