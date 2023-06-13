import { useEffect } from "react";
import BasvuruFormu from "./BasvuruFormu";
import Sidebar from "./Sidebar";
import { useNavigate } from 'react-router-dom';

function BasvuruGoruntule(){
    const navigate = useNavigate();
    var basvuruinfo=sessionStorage.getItem('basvuruinfo');
    if(basvuruinfo==null){
        alert("Başvurunuz bulunmamaktadır.");
        setTimeout(()=>{
            navigate('/portal/BasvuruFormu');

        },1000)
       
        return;
    }
    else {
        
        basvuruinfo=basvuruinfo.split(',');
    }
    


    return (
        <>
        <div className="row">
            <div className="col-3">
            <Sidebar 
                    gor_active="active" 
                    gor_disable="disabled" 
                    form_to="/portal/BasvuruFormu"/>
            
            </div>
            <div className="col-9">
            
            <div className=" text-dark py-5 ">
                <div class="row d-flex justify-content-center">
                    <div class="bg-light col-12 rounded border border-warnin p-5">

                        
                        <h2 class="" style={{ textAlign: "center" }}>Başvuru Formu</h2>
                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-3">
                                            <label for="FirstName" class="form-label text-sm-start">Ad: </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[0]}</label>
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="LastName" class="form-label text-sm-start">Soyad: </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[1]}</label>
                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-3">
                                            <label for="Gender" class="form-label ">Cinsiyet: </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[2]}</label>
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="BirthDate" class="form-label">DoğumTarihi: </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[3]}</label>
                                        </div>
                                    </div>

                                    <div class="row d-flex justify-content-center my-3">

                                        <div class="col-sm-6">
                                            <label for="Email">Email: </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[4]}</label>
                                        </div>
                                    </div>
                                    <div id="panel1">

                                        <div class="row d-flex justify-content-center my-3">
                                            <div class="col-sm-6 my-3">
                                                <hr />
                                                <h5 style={{ textAlign: "center" }}>İletişim</h5>
                                            </div>
                                        </div>
                                        <div class="row d-flex justify-content-center my-3">
                                            <div class="col-sm-3">
                                                <label for="PhoneCode" class="form-label ">Telefon Kodu: </label>
                                                <br/>
                                            <br/>
                                                <label>{basvuruinfo[5]}</label>
                                            </div>
                                            <div class="col-sm-3">
                                                <label for="Phone" class="form-label">Telefon: </label>
                                                <br/>
                                            <br/>
                                                <label>{basvuruinfo[6]}</label>
                                            </div>

                                        </div>
                                        <div class="row d-flex justify-content-center my-3">
                                            <div class="col-sm-6">
                                                <label for="UserAddress" class="form-label">Adres: </label>
                                                <br/>
                                            <br/>
                                                <label>{basvuruinfo[7]}</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-6 my-3">
                                            <hr />
                                            <h5 style={{ textAlign: 'center' }}>Uyruk</h5>
                                        </div>
                                    </div>

                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-3">
                                            <label for="NationalityName" class="form-label">Uyruk: </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[8]}</label>
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="Identification" class="form-label">Kimlik Numarası: </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[9]}</label>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-6 my-3">
                                            <hr />
                                            <h5 style={{ textAlign: "center" }}>Okul</h5>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-6">
                                            <label for="Universty" class="form-label">Üniversite: </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[10]}</label>
                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center my-3">

                                        <div class="col-sm-3">
                                            <label for="Department" class="form-label">Bölüm: </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[11]}</label>
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="GradStatus" class="form-label">Mezuniyet Durumu: </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[12]}</label>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center my-3">

                                        <div class="col-sm-3">
                                            <label for="GradDate" class="form-label">Mezuniyet Tarihi: </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[13]}</label>
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="GPA" class="form-label">Ortalama: </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[14]}</label>
                                        </div>
                                    </div>

                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-6 my-3">
                                            <hr />
                                            <h5 style={{ textAlign: "center" }}>Engellilik Durumu</h5>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center my-3">

                                        <div class="col-sm-3 ">
                                            <label>Engel Durumu: </label>
                                            <br/>
                                            <br/>
                                        <label>{basvuruinfo[15]}</label>



                                        </div>
                                        <div class="col-sm-3 ">
                                        <label>Engel Açıklama: </label>
                                        <br/>
                                            <br/>
                                        <label>{basvuruinfo[16]}</label>


                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-6 my-3">
                                            <hr />
                                            <h5 style={{ textAlign: "center" }}>Belgeler</h5>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center my-4">

                                        <div class="col-sm-3">
                                            <label for="DocumentCV" class="form-label">CV </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[17]}</label>

                                        </div>
                                        <div class="col-sm-3">
                                            <label for="DocumentNiyetMektubu" class="form-label">NiyetMektubu </label>
                                            
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[18]}</label>
                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center my-4">

                                        <div class="col-sm-3">
                                            <label for="DocumentPasaport" class="form-label">Pasaport </label>
                                            <br/>
                                            <br/>

                                            <label>{basvuruinfo[19]}</label>

                                        </div>
                                        <div class="col-sm-3">
                                            <label for="DocumentIkametgah" class="form-label">İkametgah </label>
                                            <br/>
                                            <br/>
                                            <label>{basvuruinfo[20]}</label>

                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center my-4">

                                        <div class="col-sm-3">
                                            <label for="DocumentDiploma" class="form-label">Diploma</label>
                                            <br/>
                                            <br/>


                                            <label>{basvuruinfo[21]}</label>

                                        </div>
                                        <div class="col-sm-3">
                                            <label for="DocumentIngYetBelgesi" class="form-label">İngilizce Yet Belgesi </label>

                                            <label>{basvuruinfo[22]}</label>

                                        </div>

                                    </div>

                    </div>
                    <button className="btn btn-warning" onClick={()=>{navigate('/portal/BasvuruFormu')}}>Başvuru Güncelle</button>
                </div>

            </div>
            </div>

        </div>


        </>
    );
}
export default BasvuruGoruntule;